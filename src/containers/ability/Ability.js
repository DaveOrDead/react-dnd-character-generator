import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import StatBox from '../../components/statBox';
import {getAbilityModifier} from '../../utils/getAbilityModifier';

const Ability = ({actions, character, text, abilityId}) => {

        const value = parseInt(character.abilities[abilityId]);
        const racialModifier = character.race.modifiers[abilityId] || 0;
        const total = value + racialModifier;
        const modifier = getAbilityModifier(total);

        return (
            <div className="h-spacing">
                <div className="c-stat">

                    <strong>{text}</strong>

                    <StatBox label="Total" value={total} />

                    <StatBox label="Racial" value={racialModifier} />

                    <StatBox label="Misc" value={0} />

                    <StatBox label="Base" value={character.abilities[abilityId]} />

                    <StatBox label="Mod" value={modifier} />

                </div>

       </div>

        );
    };


Ability.propTypes = {
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
)(Ability);
