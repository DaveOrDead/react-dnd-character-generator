import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import Button from '../../components/button';
import StatBox from '../../components/statBox';
import {rollAbility} from '../../utils/rollAbility';

const Stat = ({actions, character, text, id, abilityId}) => {

        const value = parseInt(character.abilities[abilityId]);
        const racialModifier = character.race.modifiers[abilityId] || 0;
        const total = value + racialModifier;

        return (
            <div className="h-spacing">
                <div className="c-stat">

                    <strong>{text}</strong>

                    <StatBox label="Total" value={total} />

                    <StatBox label="Racial" value={racialModifier} />

                    <StatBox label="Misc" value={0} />

                    <StatBox label="Base" value={character.abilities[abilityId]} />

                    <Button text="Roll" onClick={() => actions.updateAbility(abilityId, rollAbility())} />

                    <Button text="+" onClick={() => actions.updateAbility(abilityId, character.abilities[abilityId] + 1)} />

                    <Button text="-" onClick={() => actions.updateAbility(abilityId, character.abilities[abilityId] - 1)} />

                </div>

       </div>

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
