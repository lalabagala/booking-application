import { CommandHandler } from "./controllers/command-handler";
import { CustomError } from "./utils/exceptions";

const readline = require("readline");
 
  // instantiate a readline
  const cli = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "\n> ",
  });
  let i=0
 
  // prompts the user and waits for input
  cli.prompt();

  let commandHandler = new CommandHandler()
 
  // listen to user input
  cli.on("line", (line: string) => {
    try {
        // Code that may throw a custom error
        console.log(line, i);
        console.log(commandHandler.handleCommand(line));
        cli.prompt();
    } catch (error) {
        if (error instanceof CustomError) {
            console.error('Custom error occurred:', error.message);
        } else {
            // Handle other types of errors
            console.error("internal server error ");
            console.log(error);
        }
    }
  });
  
