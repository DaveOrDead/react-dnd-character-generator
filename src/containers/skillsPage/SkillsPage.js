import React from 'react';

import {connect} from 'react-redux';
import {skills} from '../../data/skills';

import SkillItem from '../skillItem';
import {getInitialSkillPoints} from '../../utils/getInitialSkillPoints';
import {getRemainingSkillPoints} from '../../utils/getRemainingSkillPoints';

const SkillsPage = ({character}) => {

        const maxSkillPoints = getInitialSkillPoints(character.class.initSkillModifier, character.abilities.ability4);

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
                            <th>Total</th>
                            <th>Ability Mod</th>
                            <th>Ranks</th>
                            <th>Actions</th>
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
            );
    };

SkillsPage.propTypes = {
  character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    character: state.character
  };
}

export default connect(
  mapStateToProps
)(SkillsPage);
