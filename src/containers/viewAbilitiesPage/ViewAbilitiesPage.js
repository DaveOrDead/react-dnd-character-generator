import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as apiActions from '../../actions/apiActions';
import Ability from '../ability';


class ViewAbilitiesPage extends React.Component {

    componentDidMount(){
        const {actions} = this.props;
        actions.fetchDataIfNeeded('abilities');
        actions.fetchDataIfNeeded('character_abilities');
    }

    render() {

        const {abilities = [], character, characterAbilities, isFetching = true} = this.props;

        return (
                <div>
                    {isFetching && abilities.length === 0 &&
                    <h2>Loading...</h2>
                    }
                    {!isFetching && abilities.length === 0 &&
                    <h2>Empty. {characterAbilities}</h2>
                    }
                    {abilities.length > 0 &&
                    <div className="l-grid l-grid--gutter-vertical-x-large">
                        {abilities.map(ability => {
                            return (<div key={ability.id} className="l-grid__item l-grid__item--4-col"><Ability
                               abilityId={ability.id}
                               text={ability.name}
                               race={character.race}
                           /></div>);
                        })}
                    </div>
                }
            </div>
            );
        }
    }

ViewAbilitiesPage.propTypes = {
    abilities: React.PropTypes.array,
    characterAbilities: React.PropTypes.array,
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired,
    isFetching: React.PropTypes.bool
};


function mapStateToProps(state) {
    return {
        isFetching: state.api.isFetching,
        abilities: state.api.abilities,
        characterAbilities: state.api.character_abilities,
        character: state.character
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(apiActions, dispatch)
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAbilitiesPage);
