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
                stats: {
                    strength: 10,
                    agility: 5
                }
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
            selectedPartyMembers: []
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
            selectedPartyMembers: []
        }
    ],
    log:[]
};