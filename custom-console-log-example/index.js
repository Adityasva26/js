// index.js
const customLog = (...args) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}]`, ...args);
};

module.exports = customLog;
