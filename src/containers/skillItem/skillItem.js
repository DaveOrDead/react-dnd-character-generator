import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {getAbilityModifier} from '../../utils/getAbilityModifier';
import Button from '../../components/button';

const SkillItem = ({item, actions, character, remainingSkillPoints}) => {

    const isClassSkill = character.class.classSkills[item.id];
    const abilityMod = getAbilityModifier(character.abilities[item.ability_id]) || 0;
    const racialMod = character.race.raceSkillBonus[item.id] || 0;
    const skillPoints = character.skills[item.id] || 0;
    const ranks = isClassSkill ? skillPoints : skillPoints / 2;
    const total = ranks + abilityMod + racialMod;

    return (
        <tr>
            <td>{item.name}<br />
            <small className="h-small-text">{isClassSkill ? 'Class, ' : 'Cross-class, '}
            {item.untrained ? 'Untrained' : 'Trained'}</small>
            </td>
            <td className="h-center-text"><strong>{total}</strong></td>
            <td className="h-center-text">{abilityMod}</td>
            <td className="h-center-text">{racialMod}</td>
            <td className="h-center-text">{ranks}</td>
            <td>
                <Button
                    disabled={skillPoints === 4 || remainingSkillPoints === 0}
                    text="+"
                    onClick={() => actions.updateSkill(item.id, skillPoints + 1)}
                />
                <Button
                    disabled={!skillPoints}
                    text="-"
                    onClick={() => actions.updateSkill(item.id, skillPoints - 1)}
                />
            </td>
        </tr>
    );
};


/**
 * propTypes
 * @property {node} children - array of nodes
 * @property {boolean} isLabelHidden - Hides the `<label>` element in an accessible way.
 */
SkillItem.propTypes = {
  actions: React.PropTypes.object.isRequired,
  character: React.PropTypes.object.isRequired,
  item: React.PropTypes.object,
  remainingSkillPoints: React.PropTypes.integer
};

function mapStateToProps(state) {
  return {
    character: state.character
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillItem);
