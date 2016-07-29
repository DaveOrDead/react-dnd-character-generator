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

        const {abilities = [], actions, character, isFetching = true} = this.props;

        return (
            <div>
                {isFetching && abilities.length === 0 &&
                    <h2>Loading...</h2>
                }
                {!isFetching && abilities.length === 0 &&
                    <h2>Empty.</h2>
                }
                {abilities.length > 0 &&
                <div>
                    <Button
                        text="Roll all"
                        onClick={() => actions.charActions.updateAllAbilities(abilities)}
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
                                           abilityCode={ability.code.toLowerCase()}
                                           text={ability.name}
                                           race={character.race.id}
                                       />);
                            })}
                        </tbody>
                    </table>
                </div>
                }
            </div>
            );
        }
    }

AbilitiesPage.propTypes = {
    abilities: React.PropTypes.array,
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired,
    isFetching: React.PropTypes.bool
};

function mapStateToProps(state) {
    return {
        isFetching: state.api.isFetching,
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
