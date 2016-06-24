import {classes} from '../data/classes';

export const getCharacterClass = (value, level) => {

    const newClass = classes.filter(c => c.value === value)[0];

    return {
        value: newClass.value,
        level,
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
