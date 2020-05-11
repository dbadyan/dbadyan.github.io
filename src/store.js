let prevState = null;
let state = {};

export function getPrevState() {
    return prevState;
}

export function getState() {
    return state;
}

export function setState(newState) {
    prevState = state;
    state = newState;
}

window.getState = () => state;