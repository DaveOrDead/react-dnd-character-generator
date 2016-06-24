import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {getStatModifier} from '../../utils/getStatModifier';
import Button from '../../components/button';

const SkillItem = ({item, actions, character, remainingSkillPoints}) => {

    const isClassSkill = character.class.classSkills[item.id];
    const statModifier = getStatModifier(character[item.keyAbilityId]);
    const skillPoints = character.skills[item.id] || 0;
    const ranks = isClassSkill ? skillPoints : skillPoints / 2;
    const total = ranks + statModifier;

    return (
        <tr>
            <td>{item.name}<br />
            ({item.keyAbilityId})</td>
            <td>{isClassSkill ? 'C' : 'CC'}</td>
            <td><strong>{total}</strong></td>
            <td>{statModifier}</td>
            <td>{ranks}</td>
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
