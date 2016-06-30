export const races = [
    {
        id: 'race1',
        name: 'Human',
        value: 'human',
        size: 'medium',
        modifiers: {}
    }, {
        id: 'race2',
        name: 'Dwarf',
        value: 'dwarf',
        modifiers: {
            ability3: 2,
            ability6: -2
        },
        size: 'medium'
    }, {
        id: 'race3',
        name: 'Elf',
        value: 'elf',
        modifiers: {
            ability2: 2,
            ability3: -2
        },
        size: 'medium'
    }, {
        id: 'race4',
        name: 'Gnome',
        value: 'gnome',
        modifiers: {
            ability1: -2,
            ability3: 2
        },
        size: 'small'
    }, {
        id: 'race5',
        name: 'Half-Elf',
        value: 'half-elf',
        modifiers: {},
        size: 'medium'
    }, {
        id: 'race6',
        name: 'Half-Orc',
        modifiers: {
            ability1: 2,
            ability4: -2,
            ability6: -2
        },
        value: 'half-orc',
        size: 'medium'
    }, {
        id: 'race7',
        name: 'Halfling',
        modifiers: {
            ability1: -2,
            ability2: 2
        },
        value: 'halfling',
        size: 'small'
    }
];
