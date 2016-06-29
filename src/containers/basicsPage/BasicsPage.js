import React from 'react';

import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import * as api from '../../actions/apiActions';

import TextInput from '../../components/textInput';
import SelectList from '../../components/selectList';

import {classes} from '../../data/classes';
import {races} from '../../data/races';



class BasicsPage extends React.Component {

    componentWillMount(){
        console.log(this.props);
        this.props.fetchData('alignments');
    }

    render() {

        const {actions, character, alignments} = this.props;

        return (
            <div>
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
                    value={character.race.value}
                    onChange={(e) => actions.updateRace('race', e.target.value)}
                />

                <SelectList
                    labelText="Class: "
                    id="class"
                    options={classes}
                    name="selectedClass"
                    onChange={(e) => actions.updateClass(e.target.value, 1)}
                    value={character.class.value}
                />

                <SelectList
                    labelText="Alignment: "
                    id="alignment"
                    options={alignments}
                    onChange={(e) => actions.updateValue('alignment', e.target.value)}
                    value={character.alignment}
                />

            </div>
            );
        }
    }

// BasicsPage.propTypes = {
//   actions: React.PropTypes.object.isRequired,
//   character: React.PropTypes.object.isRequired
// };


function mapStateToProps(state){
    console.log(state);
    return {
        alignments: state.api,
        character: state.character
    };
}


export default connect(mapStateToProps, api)(BasicsPage);
