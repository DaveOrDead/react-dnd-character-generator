import {races} from '../data/races';

export const getRace = value => races.filter(race => race.value === value)[0];
