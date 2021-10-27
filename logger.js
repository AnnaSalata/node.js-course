const config = require('./config');

const createMessage = () => {
    console.log(`Server is listening on port ${ config.APP_PORT }. Env is ${ config.ENV }`);
}

module.exports = {
    loggerMessage: createMessage,
}
