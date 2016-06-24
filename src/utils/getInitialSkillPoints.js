import {getStatModifier} from './getStatModifier';

export const getInitialSkillPoints = (classSkillMod, intelligenceMod) => (classSkillMod * 4) + getStatModifier(intelligenceMod);
