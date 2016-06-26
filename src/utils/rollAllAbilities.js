import {rollAbility} from './rollAbility';
import {abilities} from '../data/abilities';

export const rollAllAbilities = (i = abilities.length, abilityObject = {}) => {
    if (i > 0) {
        abilityObject[abilities[i - 1].id] = rollAbility();
        return rollAllAbilities(i - 1, abilityObject);
    } else {
        return abilityObject;
    }
};
