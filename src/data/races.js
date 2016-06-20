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
            stat3: 2,
            stat6: -2
        },
        size: 'medium'
    }, {
        name: 'Elf',
        value: 'elf',
        modifiers: {
            stat2: 2,
            stat3: -2
        },
        size: 'medium'
    }, {
        name: 'Gnome',
        value: 'gnome',
        modifiers: {
            stat1: -2,
            stat3: 2
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
            stat1: 2,
            stat4: -2,
            stat6: -2
        },
        value: 'half-orc',
        size: 'medium'
    }, {
        name: 'Halfling',
        modifiers: {
            stat1: -2,
            stat2: 2
        },
        value: 'halfling',
        size: 'small'
    }
];
