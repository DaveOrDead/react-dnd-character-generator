import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as apiActions from '../../actions/apiActions';

import SkillItem from '../skillItem';
import {getInitialSkillPoints} from '../../utils/getInitialSkillPoints';
import {getRemainingSkillPoints} from '../../utils/getRemainingSkillPoints';

class SkillsPage extends React.Component {

    componentDidMount(){
        const {actions} = this.props;
        actions.fetchDataIfNeeded('skills');
    }

    render() {

        const {character, skills = [], isFetching = true} = this.props;

        const maxSkillPoints = getInitialSkillPoints(character.class.initial_skill_modifier, character.abilities.ability4);

        const remainingSkillPoints = getRemainingSkillPoints(character.skills, maxSkillPoints);

        return (
            <div>
            {isFetching && skills.length === 0 &&
                <h2>Loading...</h2>
            }
            {!isFetching && skills.length === 0 &&
              <h2>Empty.</h2>
            }
            {skills.length > 0 &&
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <div className="">
                    Available skill points: {remainingSkillPoints} / <strong>{maxSkillPoints}</strong>
                </div>
                <table className="c-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="h-center-text">Total</th>
                            <th className="h-center-text">Ability Mod</th>
                            <th className="h-center-text">Ranks</th>
                            <th><span className="h-hide-visually">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>

                   {skills.map((item, i) =>

                        <SkillItem
                            key={i}
                            item={item}
                            remainingSkillPoints={remainingSkillPoints}
                        />

                    )}
                   </tbody>
                   </table>


            </div>
            }
            </div>
            );
        }
    }

SkillsPage.propTypes = {
    actions: React.PropTypes.object,
    character: React.PropTypes.object,
    skills: React.PropTypes.array,
    isFetching: React.PropTypes.bool
};


function mapStateToProps(state) {
  return {
    skills: state.api.skills,
    character: state.character,
    isFetching: state.api.isFetching
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
)(SkillsPage);
