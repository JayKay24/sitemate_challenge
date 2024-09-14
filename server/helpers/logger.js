const logger = (description, payload) => {
    console.log('Date:', (new Date()).toISOString(), 'Description:', description, 'Payload:', JSON.stringify(payload));
};

module.exports = logger;