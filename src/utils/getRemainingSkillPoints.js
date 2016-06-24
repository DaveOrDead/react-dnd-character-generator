import {sumObject} from './sumObject';

export const getRemainingSkillPoints = (characterSkills, maxSkillPoints) => maxSkillPoints - (sumObject(characterSkills));
