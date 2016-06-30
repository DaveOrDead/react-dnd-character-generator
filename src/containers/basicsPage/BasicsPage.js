import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import * as apiActions from '../../actions/apiActions';

import TextInput from '../../components/textInput';
import SelectList from '../../components/selectList';


class BasicsPage extends React.Component {

    componentWillMount(){
        this.props.fetchData('alignments');
        this.props.fetchData('classes');
        this.props.fetchData('races');
    }

    render() {

        const {actions, character, alignments, races, classes} = this.props;

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
                    options={races || [{id: '123', value: 'Loading'}]}
                    value={character.race.value}
                    onChange={(e) => actions.updateRace('race', e.target.value)}
                />

                <SelectList
                    labelText="Class: "
                    id="class"
                    options={classes || [{id: '123', value: 'Loading'}]}
                    name="selectedClass"
                    onChange={(e) => actions.updateClass(e.target.value, 1)}
                    value={character.class.value}
                />

                <SelectList
                    labelText="Alignment: "
                    id="alignment"
                    options={alignments || [{id: '123', value: 'Loading'}]}
                    onChange={(e) => actions.updateValue('alignment', e.target.value)}
                    value={character.alignment}
                />

            </div>
            );
        }
    }

BasicsPage.propTypes = {
  actions: React.PropTypes.object.isRequired,
  character: React.PropTypes.object.isRequired,
  alignments: React.PropTypes.array,
  races: React.PropTypes.array,
  classes: React.PropTypes.array
};


function mapStateToProps(state){
    return {
        alignments: state.api.alignments,
        races: state.api.races,
        classes: state.api.classes,
        character: state.character
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch),
//         apiActions: bindActionCreators(apiActions, dispatch)
//     };
// }

export default connect(
    mapStateToProps,
    apiActions)
(BasicsPage);
