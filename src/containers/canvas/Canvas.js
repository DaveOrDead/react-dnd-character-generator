import React from 'react';
import TextInput from '../../components/textInput';
import RadioInput from '../../components/radioInput';
import SelectList from '../../components/selectList';
import StatList from '../../components/statList';
import BaseAttackBox from '../../components/baseAttackBox';
import SavingThrows from '../savingThrows';
import {classes} from '../../data/classes';
import {races} from '../../data/races';
import {alignments} from '../../data/alignments';
import {stats} from '../../data/stats';

class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRace: {value: 'human'},
            selectedClass: {value: 'bard'},
            gender: 'male',
            level: '1'
        };
        this.passClass = this.passClass.bind(this);
        this.passRace = this.passRace.bind(this);
        this.toggleGender = this.toggleGender.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    toggleGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    passClass(e) {
        this.setState({
            selectedClass: classes.filter(el => el.value === e.target.value)[0]
        });
    }

    passRace(e) {
        this.setState({
            selectedRace: races.filter(el => el.value === e.target.value)[0]
        });
    }

    render() {
        return (
            <div className="l-container">
                <TextInput
                    labelText="Name: "
                    value={this.state.name}
                    id="name"
                    name="name"
                    onChange={this.changeValue}
                    />

                <TextInput
                    labelText="Age: "
                    value={this.state.age}
                    id="age"
                    name="age"
                    onChange={this.changeValue}
                    />

                <div className="h-spacing">
                    <fieldset>
                        <legend className="heading-sub-title">Gender:</legend>

                        <RadioInput
                            id="male"
                            labelText="Male"
                            value="male"
                            name="gender"
                            checked={this.state.gender === 'male'}
                            onClick={this.toggleGender}
                        />
                        <RadioInput
                            id="female"
                            labelText="Female"
                            value="female"
                            name="gender"
                            checked={this.state.gender === 'female'}
                            onClick={this.toggleGender}
                            />
                    </fieldset>
                </div>

                <TextInput
                    labelText="Level: "
                    value={this.state.level}
                    id="level"
                    name="level"
                    onChange={this.changeValue}
                />

                <SelectList
                    labelText="Race: "
                    id="race"
                    name="selectedRace"
                    options={races}
                    onChange={this.passRace}
                />

                <SelectList
                    labelText="Class: "
                    id="class"
                    options={classes}
                    name="selectedClass"
                    onChange={this.passClass}
                />

                <SelectList
                    labelText="Alignment: "
                    id="alignment"
                    options={alignments}
                />

                <StatList
                    race={this.state.selectedRace}
                    data={stats}
                />

                <div className="h-spacing">

                     <h3 className="heading-sub-title">Base Attack</h3>

                    <BaseAttackBox
                        selectedClass={this.state.selectedClass}
                        level={this.state.level}
                    />
                </div>

                <div className="h-spacing">

                    <h3 className="heading-sub-title">Saving Throws</h3>
                    <SavingThrows
                        selectedClass={this.state.selectedClass}
                        level={this.state.level}
                    />
                </div>

            </div>
            );
    }
}

export default Canvas;
