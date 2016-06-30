import {races} from '../data/races';

export const getRace = id => races.filter(race => race.id === id)[0];
