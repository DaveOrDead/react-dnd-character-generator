import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import TextInput from '../../components/textInput';
import SelectList from '../../components/selectList';

import {classes} from '../../data/classes';
import {races} from '../../data/races';
import {alignments} from '../../data/alignments';

const BasicsPage = ({actions, character}) => {

        return (
            <div className="l-container">
                <TextInput
                    labelText="Name: "
                    value={character.name}
                    id="name"
                    name="name"
                    onChange={(e) => actions.updateValue('name', e.target.value)}
                    />

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

                <SelectList
                    labelText="Alignment: "
                    id="alignment"
                    options={alignments}
                    onChange={(e) => actions.updateValue('alignment', e.target.value)}
                />

            </div>
            );
    };

BasicsPage.propTypes = {
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
)(BasicsPage);
