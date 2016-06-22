export const skills = [
{
    id: '1',
    name: 'Climb',
    statId: 'stat1'
},
{
    id: '2',
    name: 'Craft',
    statId: 'stat5'
},{
    id: '3',
    name: 'Handle Animal',
    statId: 'stat6'
},{
    id: '4',
    name: 'Intimidate',
    statId: 'stat6'
},{
    id: '5',
    name: 'Jump',
    statId: 'stat1'
},{
    id: '6',
    name: 'Listen',
    statId: 'stat5'
},{
    id: '7',
    name: 'Ride',
    statId: 'stat5'
},{
    id: '8',
    name: 'Survival',
    statId: 'stat5'
},{
    id: '9',
    name: 'Swim',
    statId: 'stat1'
}

];

export const classes = [
    {
        id: 'c1',
        name: 'Barbarian',
        type: 'core',
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
