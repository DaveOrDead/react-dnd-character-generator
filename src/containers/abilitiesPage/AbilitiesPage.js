import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {abilities} from '../../data/abilities';
import Button from '../../components/button';
import Stat from '../stat';

const AbilitiesPage = ({actions, character}) => {

        return (
            <div>
                <Button
                    text="Roll all"
                    onClick={() => actions.updateAllAbilities()}
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
    };

AbilitiesPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired
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
)(AbilitiesPage);
