import {roll} from './roll';
import {sumArray} from './sumArray';

export const rollAbility = (i = 3, array = []) => {
    if (i > 0) {
        array.push(roll(6));
        return rollAbility(i - 1, array);
    } else {
        return sumArray(array);
    }
};
