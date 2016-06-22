import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import TextInput from '../../components/textInput';
import RadioInput from '../../components/radioInput';
import SelectList from '../../components/selectList';
import StatList from '../../components/statList';
import StatBox from '../../components/statBox';
import {classes} from '../../data/classes';
import {races} from '../../data/races';
import {alignments} from '../../data/alignments';
import {stats} from '../../data/stats';

const Canvas = ({actions, character}) => {

        return (
            <div className="l-container">
                <TextInput
                    labelText="Name: "
                    value={character.name}
                    id="name"
                    name="name"
                    onChange={(e) => actions.updateValue('name', e.target.value)}
                    />

                <TextInput
                    labelText="Age: "
                    value={character.age}
                    id="age"
                    name="age"
                    onChange={(e) => actions.updateValue('age', e.target.value)}
                    />

                <div className="h-spacing">
                    <fieldset>
                        <legend className="heading-sub-title">Gender:</legend>

                        <RadioInput
                            id="male"
                            labelText="Male"
                            value="male"
                            name="gender"
                            checked={character.gender === 'male'}
                            onClick={(e) => actions.updateValue('gender', e.target.value)}
                        />
                        <RadioInput
                            id="female"
                            labelText="Female"
                            value="female"
                            name="gender"
                            checked={character.gender === 'female'}
                            onClick={(e) => actions.updateValue('gender', e.target.value)}
                            />
                    </fieldset>
                </div>

                <SelectList
                    labelText="Race: "
                    id="race"
                    name="selectedRace"
                    options={races}
                    onChange={(e) => actions.updateRace('race', e.target.value)}
                />

                <SelectList
                    labelText="Class: "
                    id="class"
                    options={classes}
                    name="selectedClass"
                    onChange={(e) => actions.updateClass('class', e.target.value)}
                />

                <TextInput
                    labelText="Level: "
                    value={character.level}
                    id="level"
                    name="level"
                    onChange={(e) => actions.updateValue('level', e.target.value)}
                />

                <SelectList
                    labelText="Alignment: "
                    id="alignment"
                    options={alignments}
                    onChange={(e) => actions.updateValue('alignment', e.target.value)}
                />

                <StatList
                    race={character.race}
                    data={stats}
                />

                <div className="h-spacing">

                     <h3 className="heading-sub-title">Base Attack</h3>

                    <StatBox
                        label="BAB"
                        value={character.class.baseAttackBonus[0]}
                    />
                </div>

                <div className="h-spacing">

                    <h3 className="heading-sub-title">Saving Throws</h3>
                    <StatBox
                        label="Fort"
                        value={character.class.baseSavingThrows.fort}
                    />
                    <StatBox
                        label="Ref"
                        value={character.class.baseSavingThrows.ref}
                    />
                    <StatBox
                        label="Will"
                        value={character.class.baseSavingThrows.will}
                    />
                </div>



            </div>
            );
    };

Canvas.propTypes = {
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
)(Canvas);
