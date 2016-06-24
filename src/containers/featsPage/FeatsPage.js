import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

const FeatsPage = ({actions, character}) => {

        return (
            <div className="l-container">

               <h1>Feats Page</h1>
               <p onChange={actions.xyz}>{character.name}</p>

            </div>
            );
    };

FeatsPage.propTypes = {
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
)(FeatsPage);
