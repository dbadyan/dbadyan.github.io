export const initialState = {
    party: {
        adventurers: [
            {
                currentQuest: null,
                name: "player1",
                maxHP: 100,
                hp: 100,
                gold: 100,
                exp: 0,
                expToNextLevel: 100,
                level: 1,
                hpRegain: 0.5,
                equipment: {
                    "left-hand": {
                        name: "shield +10",
                        id: "shield_10",
                        modifiers: {
                            defense: 10
                        },
                        slots: ["left-hand"]
                    },
                    "right-hand": {
                        name: "sword +5",
                        id: "sword_5",
                        modifiers: {
                            strength: 5
                        },
                        slots: ["left-hand", "right-hand"]
                    }
                },
                stats: {
                    strength: 10,
                    agility: 5,
                    defense: 0
                },
            },
            {
                currentQuest: null,
                name: "pooper",
                stats: {
                    strength: 5
                },
                price: 200
            },
            {
                currentQuest: null,
                name: "butthole",
                stats: {
                    strength: 5
                },
                price: 200
            },
        ]
    },
    inventory: [{
            name: "shield +10",
            id: "shield_10",
            modifiers: {
                defense: 10
            },
            slots: ["left-hand"]
        },
        {
            name: "sword +5",
            id: "sword_5",
            modifiers: {
                strength: 5
            },
            slots: ["left-hand", "right-hand"]
        }
    ],
    adventures: [
        {
            name: "the basics",
            description: "fetch",
            collectibles: 3,
            requiredLevel: 1,
            rewards: {
                gold: 5,
                item: "glove",
                exp: 100
            },
            enemy: {
                name: "orc",
                hp: 30,
                damage: 10
            },
            selectedPartyMembers: [],
            isIdling: false
        },
        {
            name: "hardcore orc beatings",
            description: "more fetch",
            collectibles: 3,
            requiredLevel: 2,
            rewards: {
                gold: 5,
                item: "glove",
                exp: 5000
            },
            enemy: {
                name: "orc",
                hp: 50,
                damage: 20
            },
            selectedPartyMembers: [],
            isIdling: false
        }
    ],
    log:[]
};
