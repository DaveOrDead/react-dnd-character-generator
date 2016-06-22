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
    hitDie: 12,
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
    id: 'c2',
    name: 'Bard',
    alignment: 'any non-lawful',
    type: 'core',
    value: 'bard',
    hitDie: 6,
    classSkills: [],
    initSkillModifier: 6,
    levelSkillModifier: 6,
    level: {
        1: {
            baseAttackBonus: [0],
            baseSavingThrows: {
                fort: 0,
                ref: 2,
                will: 2
            },
            special: []
        },
        2: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 0,
                ref: 3,
                will: 3
            },
            special: []
        }
    }
},
{
    id: 'c3',
    name: 'Cleric',
    alignment: '1 step from deity',
    type: 'core',
    value: 'cleric',
    hitDie: 6,
    classSkills: [],
    initSkillModifier: 2,
    levelSkillModifier: 2,
    level: {
        1: {
            baseAttackBonus: [0],
            baseSavingThrows: {
                fort: 2,
                ref: 0,
                will: 2
            },
            special: []
        },
        2: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 3,
                ref: 0,
                will: 3
            },
            special: []
        }
    }
},
{
    id: 'c4',
    name: 'Druid',
    alignment: 'Neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil',
    type: 'core',
    value: 'druid',
    hitDie: 8,
    classSkills: [],
    initSkillModifier: 4,
    levelSkillModifier: 4,
    level: {
        1: {
            baseAttackBonus: [0],
            baseSavingThrows: {
                fort: 2,
                ref: 0,
                will: 2
            },
            special: []
        },
        2: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 3,
                ref: 0,
                will: 3
            },
            special: []
        }
    }
},
{
    id: 'c5',
    name: 'Fighter',
    alignment: 'any',
    type: 'core',
    value: 'fighter',
    hitDie: 10,
    classSkills: [],
    initSkillModifier: 2,
    levelSkillModifier: 2,
    level: {
        1: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 2,
                ref: 0,
                will: 0
            },
            special: []
        },
        2: {
            baseAttackBonus: [2],
            baseSavingThrows: {
                fort: 3,
                ref: 0,
                will: 0
            },
            special: []
        }
    }
},
{
    id: 'c6',
    name: 'Monk',
    alignment: 'any lawful',
    type: 'core',
    value: 'monk',
    hitDie: 8,
    classSkills: [],
    initSkillModifier: 4,
    levelSkillModifier: 4,
    level: {
        1: {
            baseAttackBonus: [0],
            baseSavingThrows: {
                fort: 2,
                ref: 2,
                will: 2
            },
            special: ['Bonus feat', 'Flurry of blows', 'unarmed strike']
        },
        2: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 3,
                ref: 3,
                will: 3
            },
            special: ['Bonus feat', 'evasion']
        }
    }
},
{
    id: 'c7',
    name: 'Paladin',
    alignment: 'lawful good',
    type: 'core',
    value: 'paladin',
    hitDie: 10,
    classSkills: [],
    initSkillModifier: 2,
    levelSkillModifier: 2,
    level: {
        1: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 2,
                ref: 0,
                will: 0
            },
            special: []
        },
        2: {
            baseAttackBonus: [2],
            baseSavingThrows: {
                fort: 3,
                ref: 0,
                will: 0
            },
            special: []
        }
    }
},
{
    id: 'c8',
    name: 'Ranger',
    alignment: 'any',
    type: 'core',
    value: 'ranger',
    hitDie: 8,
    classSkills: [],
    initSkillModifier: 6,
    levelSkillModifier: 6,
    level: {
        1: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 2,
                ref: 2,
                will:0
            },
            special: []
        },
        2: {
            baseAttackBonus: [2],
            baseSavingThrows: {
                fort: 3,
                ref: 3,
                will: 0
            },
            special: []
        }
    }
},
{
    id: 'c9',
    name: 'Rogue',
    alignment: 'any',
    type: 'core',
    value: 'rogue',
    hitDie: 6,
    classSkills: [],
    initSkillModifier: 8,
    levelSkillModifier: 8,
    level: {
        1: {
            baseAttackBonus: [0],
            baseSavingThrows: {
                fort: 0,
                ref: 2,
                will: 0
            },
            special: []
        },
        2: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 0,
                ref: 3,
                will: 0
            },
            special: []
        }
    }
},
{
    id: 'c10',
    name: 'Sorceror',
    alignment: 'any',
    type: 'core',
    value: 'sorceror',
    hitDie: 4,
    classSkills: [],
    initSkillModifier: 2,
    levelSkillModifier: 2,
    level: {
        1: {
            baseAttackBonus: [0],
            baseSavingThrows: {
                fort: 0,
                ref: 0,
                will: 2
            },
            special: []
        },
        2: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 0,
                ref: 0,
                will: 3
            },
            special: []
        }
    }
},
{
    id: 'c11',
    name: 'Wizard',
    alignment: 'any lawful',
    type: 'core',
    value: 'wizard',
    hitDie: 4,
    classSkills: [],
    initSkillModifier: 2,
    levelSkillModifier: 2,
    level: {
        1: {
            baseAttackBonus: [0],
            baseSavingThrows: {
                fort: 0,
                ref: 0,
                will: 2
            },
            special: []
        },
        2: {
            baseAttackBonus: [1],
            baseSavingThrows: {
                fort: 0,
                ref: 0,
                will: 3
            },
            special: []
        }
    }
}
];