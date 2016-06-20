export const classes = [
    {
        name: 'Barbarian',
        value: 'barbarian',
        classSkills: ['Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Jump (Str)', 'Listen', 'Ride', 'Survival', 'Swim'],
        initSkillModifier: 4,
        levelSkillModifier: 4,
        level: {
            1: {
                baseAttackBonus: [2],
                baseSavingThrows: {
                    fort: 2,
                    ref: 0,
                    will: 0
                },
                special: ['Fast Movement', 'Illiteracy', 'Rage 1/day']
            },
            2: {
                baseAttackBonus: [3],
                baseSavingThrows: {
                    fort: 3,
                    ref: 0,
                    will: 0
                },
                special: ['Uncanny Dodge']
            }
        }
    },
    {
        name: 'Bard',
        value: 'bard'
    },
    {
        name: 'Cleric',
        value: 'cleric'
    },
    {
        name: 'Druid',
        value: 'druid'
    },
    {
        name: 'Fighter',
        value: 'fighter'
    },
    {
        name: 'Monk',
        value: 'monk'
    },
    {
        name: 'Paladin',
        value: 'paladin'
    },
    {
        name: 'Ranger',
        value: 'ranger'
    },
    {
        name: 'Rogue',
        value: 'rogue'
    },
    {
        name: 'Sorceror',
        value: 'sorceror'
    },
    {
        name: 'Wizard',
        value: 'wizard'
    }
];
