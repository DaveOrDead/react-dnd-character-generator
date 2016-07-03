import {rollAbility} from './rollAbility';


export const rollAllAbilities = (abilitiesList, i = abilitiesList.length, abilityObject = {}) => {

    if (i > 0) {
        abilityObject[abilitiesList[i - 1].id] = rollAbility();
        return rollAllAbilities(abilitiesList, i - 1, abilityObject);
    } else {
        return abilityObject;
    }
};
