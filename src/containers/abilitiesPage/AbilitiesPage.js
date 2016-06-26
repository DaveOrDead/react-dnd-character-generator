import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StatList from '../../components/statList';
import * as actions from '../../actions/charGenActions';
import {abilities} from '../../data/abilities';
import Button from '../../components/button';

const AbilitiesPage = ({actions, character}) => {

        return (
            <div>

                <StatList
                    race={character.race}
                    data={abilities}
                />
                <Button
                    text="Roll all"
                    onClick={() => actions.rollAllAbilities()}
                />
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
