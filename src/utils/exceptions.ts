export class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomError'; // Set the name property of the Error object
        // Ensure stack trace is captured
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}
