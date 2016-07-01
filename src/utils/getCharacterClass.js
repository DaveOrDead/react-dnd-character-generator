import {classes} from '../data/classes';

export const getCharacterClass = (id, level) => {

    const newClass = classes.filter(c => c.id === id)[0];

    return {
        id: newClass.id,
        level,
        classSkills: newClass.classSkills,
        baseAttackBonus: newClass.level[level].baseAttackBonus,
        initSkillModifier: newClass.initSkillModifier,
        levelSkillModifier: newClass.levelSkillModifier,
        baseSavingThrows: {
                    fort: newClass.level[level].baseSavingThrows.fort,
                    ref: newClass.level[level].baseSavingThrows.ref,
                    will: newClass.level[level].baseSavingThrows.will
                }
            };
};
