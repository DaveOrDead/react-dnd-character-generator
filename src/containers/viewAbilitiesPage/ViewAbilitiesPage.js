import React from 'react';
import {connect} from 'react-redux';
import {abilities} from '../../data/abilities';
import Ability from '../ability';

const ViewAbilityPage = ({character}) => {

        return (
                <div>
                    {abilities.map(function(ability) {
                        return (<Ability
                           key={ability.id}
                           abilityId={ability.id}
                           text={ability.name}
                           race={character.race}
                       />);
                    })}
                </div>
            );
    };

ViewAbilityPage.propTypes = {
    character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        character: state.character
    };
}

export default connect(
    mapStateToProps
)(ViewAbilityPage);
