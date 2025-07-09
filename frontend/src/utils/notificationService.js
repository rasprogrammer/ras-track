
let notifyFunction = null;

export const setNotifyFunction = (fn) => {
    notifyFunction = fn;
}

export const notify = (type, ...args) => {
    if (notifyFunction) {
        notifyFunction(type, ...args);
    } else {
        console.warn("Notify function is not set yet");
    }
}