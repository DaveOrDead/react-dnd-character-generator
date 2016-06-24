export default {
  character: {
    stat1: 10,
    stat2: 10,
    stat3: 10,
    stat4: 10,
    stat5: 10,
    stat6: 10,
    level:'1',
    skills: {},
    race: {
        name: 'human',
        size: 'medium',
        modifiers: {}
    },
    class: {
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
        value: 'barbarian',
        level: 1,
        initSkillModifier: 4,
        levelSkillModifier: 4,
        baseAttackBonus: [2],
        baseSavingThrows: {
                    fort: 2,
                    ref: 0,
                    will: 0
                }
            }
    }
};

