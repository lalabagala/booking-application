import { CustomError } from "../utils/exceptions";
import { CommandFunctionMap } from "./command-function-map";
export class CommandHandler {
    private commandFuctionService: CommandFunctionMap;
    constructor() {
        this.commandFuctionService = new CommandFunctionMap()
    }

    handleCommand(command_text: string) {
        let command_arr = command_text.split(' ');
        let command = command_arr[0];
        let params = command_arr.slice(1)
        if(this.commandFuctionService.commandMap[command]) {
            this.commandFuctionService.commandMap[command](params);
        } else {
            throw new CustomError(`Invalid input command ${command}, handler not exists for this command`);
        }
    }
}