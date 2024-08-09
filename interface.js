// Define a Logger interface
class Logger {
    log(message) {
        throw new Error("Method 'log()' must be implemented.");
    }
}

// Concrete implementations
class ConsoleLogger extends Logger {
    log(message) {
        console.log(`[Console]: ${message}`);
    }
}

class FileLogger extends Logger {
    log(message) {
        // Simulating file write
        console.log(`[File]: ${message} (written to log file)`);
    }
}

class DatabaseLogger extends Logger {
    log(message) {
        // Simulating database insert
        console.log(`[Database]: ${message} (inserted into DB)`);
    }
}

// A service that uses a logger
class UserService {
    constructor(logger) {
        if (!(logger instanceof Logger)) {
            throw new Error("Invalid logger provided");
        }
        this.logger = logger;
    }

    createUser(username) {
        // Some user creation logic...
        this.logger.log(`User created: ${username}`);
    }
}

// Usage
const consoleLogger = new ConsoleLogger();
const fileLogger = new FileLogger();
const dbLogger = new DatabaseLogger();

const userService1 = new UserService(consoleLogger);
const userService2 = new UserService(fileLogger);
const userService3 = new UserService(dbLogger);

userService1.createUser("Alice");
userService2.createUser("Bob");
userService3.createUser("Charlie");
