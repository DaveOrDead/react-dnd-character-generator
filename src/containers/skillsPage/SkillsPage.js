import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {skills} from '../../data/skills';
import {getInitialSkillPoints} from '../../utils/getInitialSkillPoints';
import {getRemainingSkillPoints} from '../../utils/getRemainingSkillPoints';
import TextInput from '../../components/textInput';

const SkillsPage = ({actions, character}) => {

        const maxSkillPoints = getInitialSkillPoints(character.class.initSkillModifier, character.stat4);

        const remainingSkillPoints = getRemainingSkillPoints(character.skills, maxSkillPoints);


        return (
            <div>
                <h1>Skills Page</h1>
                <div className="">
                    Skill points: {remainingSkillPoints} / {maxSkillPoints}

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ability</th>
                            <th>Ranks</th>
                            <th>Class skill</th>
                        </tr>
                    </thead>
                    <tbody>

                   {skills.map((item, i) =>
                        <tr key={i}>
                        <td>
                            {item.name}
                        </td>
                        <td>{item.keyAbilityId}</td>
                        <td>
                            <TextInput
                                labelText={item.name}
                                isLabelHidden={true}
                                value={character.skills[item.id]}
                                onChange={(e) => actions.updateSkill(item.id, e.target.value, remainingSkillPoints, maxSkillPoints)}
                            />
                        </td>
                        <td>{character.class.classSkills[item.id] ? 'C' : 'CC'}</td>
                        </tr>
                    )}
                   </tbody>
                   </table>


            </div>
            );
    };

SkillsPage.propTypes = {
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
)(SkillsPage);
