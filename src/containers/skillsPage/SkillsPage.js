import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {skills} from '../../data/skills';
import {getInitialSkillPoints} from '../../utils/getInitialSkillPoints';
import TextInput from '../../components/textInput';

const SkillsPage = ({actions, character}) => {

    const maxSkillPoints = getInitialSkillPoints(character.class.initSkillModifier, character.stat4);

        return (
            <div>
                <h1>Skills Page</h1>
                <div className="">
                    Skill points: / {maxSkillPoints}

                </div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Ability</th>
                        <th>Ranks</th>
                        <th>Class skill</th>
                    </thead>
                    <tbody>

                   {skills.map((item, i) =>
                        <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>{item.keyAbilityId}</td>
                        <td>
                            <TextInput
                                labelText={item.name}
                                isLabelHidden={true}
                            />
                        </td>
                        <td>True</td>
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
