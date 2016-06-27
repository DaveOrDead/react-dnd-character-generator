import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import Button from '../../components/button';
import StatBox from '../../components/statBox';
import {rollAbility} from '../../utils/rollAbility';

const Stat = ({actions, character, text, abilityId}) => {

        const value = parseInt(character.abilities[abilityId]);
        const racialModifier = character.race.modifiers[abilityId] || 0;
        const total = value + racialModifier;

        return (
                <tr>
                    <td>
                        {text}
                    </td>
                    <td className="h-center-text">
                        <strong>{total}</strong>
                    </td>
                    <td className="h-center-text">
                        {racialModifier}
                    </td>
                    <td className="h-center-text">
                        {'0'}
                    </td>
                    <td className="h-center-text">
                        {character.abilities[abilityId]}
                    </td>
                    <td>
                        <Button text="+" onClick={() => actions.updateAbility(abilityId, character.abilities[abilityId] + 1)} />

                        <Button text="-" disabled={character.abilities[abilityId] === 0} onClick={() => actions.updateAbility(abilityId, character.abilities[abilityId] - 1)} />
                        &nbsp;
                        <Button text="Roll" onClick={() => actions.updateAbility(abilityId, rollAbility())} />
                    </td>
                </tr>
        );
    };


Stat.propTypes = {
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired,
    id: React.PropTypes.string,
    text: React.PropTypes.string,
    abilityId: React.PropTypes.string
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
)(Stat);
