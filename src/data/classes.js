export const classes = [
{
    id: 'c1',
    name: 'Barbarian',
    type: 'core',
    hitDie: 12,
    value: 'barbarian',
    classSkills: {
                sk5: true,
                sk8: true,
                sk16: true,
                sk19: true,
                sk20: true,
                sk22: true,
                sk28: true,
                sk35: true,
                sk36: true
            },
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
    classSkills: {},
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
