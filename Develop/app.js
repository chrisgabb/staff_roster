const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,

const employees = [];

function promptManager() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the email address of the manager",
    },
    {
      type: "input",
      name: "officeid",
      message: `Enter the manager's Office ID`,
    },
    {
      type: "list",
      name: "add",
      message: `Do you want to add another employee?`,
      choices: ["Yes: Add New Engineer", "Yes: Add New Intern", "No"]
    },
  ]).then(a => {
    employees.push(new Manager(a.id, a.role, a.name, a.email, a.officeid))
  })
}


function promptEngineer() {
  return inquirer.prompt([

    {
      type: "input",
      name: "name",
      message: "What is the name of the engineer?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the email address of the engineer",
    },
    {
      type: "input",
      name: "github",
      message: `Enter the engineer's Github URL`,
    },
    {
      type: "list",
      name: "add",
      message: `Do you want to add another employee?`,
      choices: ["Yes: Add New Engineer", "Yes: Add New Intern", "No"]
    },
  ]).then(b => {
    employees.push(new Intern(b.id, b.role, b.name, b.email, b.github))
  })
}

function promptIntern() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the intern?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the email address of the engineer",
    },
    {
      type: "input",
      name: "school",
      message: `Enter the intern's school name`,
    },
    {
      type: "list",
      name: "add",
      message: `Do you want to add another employee?`,
      choices: ["Yes: Add New Engineer", "Yes: Add New Intern", "No"]
    },
  ]).then(c => {
    employees.push(new Intern(c.id, c.role, c.name, c.email, c.school))
  })
}

// Start prompts
async function startPrompts() {
  try {
  await promptManager();
    async function nextPrompt(a) {
      switch (a.add) {
        case "Yes: Add New Engineer":
          const engineerInfo = await promptEngineer();
          await nextPrompt(engineerInfo);
          break;
        case "Yes: Add New Intern":
          const internInfo = await promptIntern();
          await nextPrompt(internInfo);
          break;
        case "No":
          console.log("Thank you! You are done adding employees to the roster.");
          break;
      }
    }
    await nextPrompt(a)
  } catch (err) {
    console.log(err);
  }
}
// After the user has input all employees desired, call the `render` function (required
async function createPage() {
  await startPrompts();
  try {
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.

    const createPage = await render(employees)
    fs.writeFile(outputPath, createPage)
  }
  catch (err) {
    console.log(err)
  }

}
createPage();