const renderersDependencies = {};

function deepProxy(onAccess, target) {
    return new Proxy(target, {
        get(target, property) {
            onAccess(property);
            const item = target[property]
            if (item && typeof item === 'object') {
                return deepProxy(onAccess.bind(null, property), item);
            }
            return item
        }
    });
}

function removeSubstrings(strings) {
    return strings.filter(str => {
        return !strings.some(biggerString => {
            return biggerString.startsWith(str + ".")
        });
    });
}

function getProp(obj, propPath) {
    return propPath.split(".").reduce((o, prop) => o[prop], obj);
}

function isStateChanged(prevState, newState, props) {
    return props.some(prop => {
        return getProp(prevState, prop) !== getProp(newState, prop)
    });
}

export function renderWhenNeeded(name, func, prevState, newState) {
    const fDeps = renderersDependencies[name] || [];

    const proxiedNewState = deepProxy(function() {
        const currentDeps = renderersDependencies[name] || [];
        const path = Array.from(arguments).join(".");
        currentDeps.push(path);
        const newDeps = Array.from(new Set(removeSubstrings(currentDeps)));
        renderersDependencies[name] = newDeps;
    }, newState);

    if(fDeps.length === 0 || isStateChanged(prevState, newState, fDeps)) {
        func(proxiedNewState);
    }
}