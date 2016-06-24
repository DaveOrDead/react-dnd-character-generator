import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import StatList from '../../components/statList';

import {stats} from '../../data/stats';

const AbilitiesPage = ({actions, character}) => {

        return (
            <div className="l-container">

                <StatList
                    race={character.race}
                    data={stats}
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
