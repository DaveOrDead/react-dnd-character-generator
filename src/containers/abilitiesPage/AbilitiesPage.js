import React from 'react';

import {connect} from 'react-redux';
import StatList from '../../components/statList';

import {stats} from '../../data/stats';

const AbilitiesPage = ({character}) => {

        return (
            <div>

                <StatList
                    race={character.race}
                    data={stats}
                />

            </div>
            );
    };

AbilitiesPage.propTypes = {
  character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    character: state.character
  };
}

export default connect(
  mapStateToProps
)(AbilitiesPage);
