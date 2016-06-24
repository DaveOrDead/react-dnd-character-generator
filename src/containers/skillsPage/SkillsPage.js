import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {skills} from '../../data/skills';
import {getInitialSkillPoints} from '../../utils/getInitialSkillPoints';
import {getRemainingSkillPoints} from '../../utils/getRemainingSkillPoints';
import Button from '../../components/button';

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
                            <th>Class skill</th>
                            <th>Total</th>
                            <th>Ability Mod</th>
                            <th>Ranks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                   {skills.map((item, i) =>
                        <tr key={i}>
                        <td>{item.name}<br />
                        ({item.keyAbilityId})</td>
                        <td>{character.class.classSkills[item.id] ? 'C' : 'CC'}</td>
                        <td><strong>{character.skills[item.id] || 0}</strong></td>
                        <td>+X</td>
                        <td>{character.skills[item.id] || 0}</td>
                        <td>
                            <Button
                                disabled={character.skills[item.id] === 4 || remainingSkillPoints === 0}
                                text="+"
                                onClick={() => actions.updateSkill(item.id, character.skills[item.id] + 1 || 1, remainingSkillPoints, character.class.classSkills[item.id])}
                            />
                            <Button
                                disabled={!character.skills[item.id]}
                                text="-"
                                onClick={() => actions.updateSkill(item.id, character.skills[item.id] - 1, remainingSkillPoints, character.class.classSkills[item.id])}
                            />
                        </td>

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
