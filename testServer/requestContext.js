const { AsyncLocalStorage } = require('async_hooks');

const asyncLocalStorage = new AsyncLocalStorage();

function setContext(key, value) {
    const store = asyncLocalStorage.getStore();
    if (store) {
        store[key] = value;
    }
}

function getContext(key) {
    const store = asyncLocalStorage.getStore();
    if (store) {
        return store[key];
    }
    return undefined;
}

function runWithContext(callback) {
    return asyncLocalStorage.run(new Map(), callback);
}

module.exports = { setContext, getContext, runWithContext };