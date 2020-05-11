function calculateItemStrength(state) {
    return Object.values(getPlayerFromState(state).equipment)
                                        .filter(item => item)
                                        .map(x => x.modifiers.strength || 0)
                                        .reduce((a, b) => a + b, 0)
}

function calculateItemDefense(state) {
    return Object.values(getPlayerFromState(state).equipment)
                                        .filter(item => item)
                                        .map(x => x.modifiers.defense || 0)
                                        .reduce((a, b) => a + b, 0)
}

function getPlayerFromState(state) {
    return state.party.adventurers[0];
}

export {
    calculateItemStrength,
    calculateItemDefense,
    getPlayerFromState,
}