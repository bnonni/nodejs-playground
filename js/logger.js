var Logger = function () {
    this.timeTracker = {};
    this.delay = 10;
    this.responses = [];
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    let messageHasBeenLogged = this.timeTracker[message] !== undefined; // message has been seen yet, log it
    console.log(`Message: ${message}, Timestamp: ${timestamp}, Logged: ${messageHasBeenLogged}`)
    let loggedTimestamp = this.timeTracker[message];

    if (
        messageHasBeenLogged &&
        loggedTimestamp < loggedTimestamp + this.delay
    ) {
        this.responses.push(false);
        return false;
    }

    if (!messageHasBeenLogged) {
        this.responses.push(true);
        this.timeTracker[message] = timestamp;
        return true;
    }

    if (
        messageHasBeenLogged &&
        loggedTimestamp >= loggedTimestamp + this.delay
    ) {
        this.responses.push(true);
        this.timeTracker[message] = timestamp;
        return true;
    }
};

/**
 * Your Logger object will be instantiated and called as such:
 */
const logger = new Logger();
logger.shouldPrintMessage(1, 'foo'); // return true, next allowed timestamp for "foo" is 1 + 10 = 11
logger.shouldPrintMessage(2, 'bar'); // return true, next allowed timestamp for "bar" is 2 + 10 = 12
logger.shouldPrintMessage(3, 'foo'); // 3 < 11, return false
logger.shouldPrintMessage(8, 'bar'); // 8 < 12, return false
logger.shouldPrintMessage(10, 'foo'); // 10 < 11, return false
logger.shouldPrintMessage(11, 'foo'); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21
console.log(logger.timeTracker)
console.log(logger.responses)