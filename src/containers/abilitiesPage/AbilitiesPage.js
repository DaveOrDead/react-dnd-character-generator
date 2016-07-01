import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charActions from '../../actions/charGenActions';
import * as apiActions from '../../actions/apiActions';

import Button from '../../components/button';
import Stat from '../stat';

class AbilitiesPage extends React.Component {

    componentDidMount(){
        const {actions} = this.props;
        actions.apiActions.fetchDataIfNeeded('abilities');
    }

    render() {

        const {abilities, actions, character} = this.props;

        return (
            <div>
                <Button
                    text="Roll all"
                    onClick={() => actions.charActions.updateAllAbilities()}
                />
                <br />
                <table className="c-table">
                    <thead>
                        <tr>
                            <th>Ability</th>
                            <th className="h-center-text">Total</th>
                            <th className="h-center-text">Racial modifier</th>
                            <th className="h-center-text">Misc</th>
                            <th className="h-center-text">Base</th>
                            <th><span className="h-hide-visually">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {abilities.map(ability => {
                          return (<Stat
                                       key={ability.id}
                                       abilityId={ability.id}
                                       text={ability.name}
                                       race={character.race}
                                   />);
                        })}
                    </tbody>
                </table>

            </div>
            );
        }
    }

AbilitiesPage.propTypes = {
    abilities: React.PropTypes.array,
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        abilities: state.api.abilities,
        character: state.character
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            apiActions: bindActionCreators(apiActions, dispatch),
            charActions: bindActionCreators(charActions, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbilitiesPage);
