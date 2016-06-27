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
