const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const util = require("util");

// Write code to use inquirer to gather information about the development team members,

const employees = [];

const ADD_ENGINEER_OPTION = "Yes: Add New Engineer";
const ADD_INTERN_OPTION = "Yes: Add New Intern";

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
			name: "adding",
			message: `Do you want to add another employee?`,
			choices: [ADD_ENGINEER_OPTION, ADD_INTERN_OPTION, "No"]
		},
	]).then(answer => {
		employees.push(new Manager(answer.id, answer.name, answer.email, answer.officeid))
		switch (answer.adding) {
			case ADD_ENGINEER_OPTION:
				promptEngineer();
				break;
			case ADD_INTERN_OPTION:
				promptIntern();
				break;
			case "No":
				console.log("Thank you! You are done adding employees to the roster.");
				break;
		}

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
			name: "adding",
			message: `Do you want to add another employee?`,
			choices: ["Yes: Add New Engineer", "Yes: Add New Intern", "No"]
		},
	]).then(answer => {
		employees.push(new Engineer(answer.id, answer.name, answer.email, answer.github))
		switch (answer.adding) {
			case "Yes: Add New Engineer":
				promptEngineer();
				break;
			case "Yes: Add New Intern":
				promptIntern();
				break;
			case "No":
				console.log("Thank you! You are done adding employees to the roster.");
				break;
		}
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
			name: "adding",
			message: `Do you want to add another employee?`,
			choices: ["Yes: Add New Engineer", "Yes: Add New Intern", "No"]
		},
	]).then(answer => {
		employees.push(new Intern(answer.id, answer.name, answer.email, answer.school))
		switch (answer.adding) {
			case "Yes: Add New Engineer":
				promptEngineer();
				break;
			case "Yes: Add New Intern":
				promptIntern();
				break;
			case "No":
				console.log("Thank you! You are done adding employees to the roster.");
				break;
		}
	})
}

async function createPage() {
	try {
		await promptManager();
		const createPage = render(employees)
		fs.writeFile(outputPath, createPage)
	} catch (err) {
		console.log(err)
	}
}

createPage();