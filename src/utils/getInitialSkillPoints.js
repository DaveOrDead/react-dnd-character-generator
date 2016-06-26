import {getAbilityModifier} from './getAbilityModifier';

export const getInitialSkillPoints = (classSkillMod, intelligenceMod) => (classSkillMod * 4) + getAbilityModifier(intelligenceMod);
