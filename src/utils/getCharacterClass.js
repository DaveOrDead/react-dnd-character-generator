import {classes} from '../data/classes';

export const getCharacterClass = (value, level) => {

    const newClass = classes.filter(race => race.value === value)[0];

    return {
        value: newClass.value,
        level,
        baseAttackBonus: newClass.level[level].baseAttackBonus,
        baseSavingThrows: {
                    fort: newClass.level[level].baseSavingThrows.fort,
                    ref: newClass.level[level].baseSavingThrows.ref,
                    will: newClass.level[level].baseSavingThrows.will
                }
            };
};
