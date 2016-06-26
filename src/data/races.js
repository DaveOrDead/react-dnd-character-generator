export const races = [
    {
        name: 'Human',
        value: 'human',
        size: 'medium',
        modifiers: {}
    }, {
        name: 'Dwarf',
        value: 'dwarf',
        modifiers: {
            ability3: 2,
            ability6: -2
        },
        size: 'medium'
    }, {
        name: 'Elf',
        value: 'elf',
        modifiers: {
            ability2: 2,
            ability3: -2
        },
        size: 'medium'
    }, {
        name: 'Gnome',
        value: 'gnome',
        modifiers: {
            ability1: -2,
            ability3: 2
        },
        size: 'small'
    }, {
        name: 'Half-Elf',
        value: 'half-elf',
        modifiers: {},
        size: 'medium'
    }, {
        name: 'Half-Orc',
        modifiers: {
            ability1: 2,
            ability4: -2,
            ability6: -2
        },
        value: 'half-orc',
        size: 'medium'
    }, {
        name: 'Halfling',
        modifiers: {
            ability1: -2,
            ability2: 2
        },
        value: 'halfling',
        size: 'small'
    }
];
