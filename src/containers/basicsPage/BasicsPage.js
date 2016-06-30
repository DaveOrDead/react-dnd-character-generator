import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charActions from '../../actions/charGenActions';
import * as apiActions from '../../actions/apiActions';

import TextInput from '../../components/textInput';
import SelectList from '../../components/selectList';


class BasicsPage extends React.Component {

    componentWillMount(){
        const {actions} = this.props;
        actions.apiActions.fetchData('alignments');
        actions.apiActions.fetchData('classes');
        actions.apiActions.fetchData('races');
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
                    onChange={(e) => actions.charActions.updateValue('name', e.target.value)}
                    />

                <SelectList
                    labelText="Race: "
                    id="race"
                    name="selectedRace"
                    options={races || [{id: '123', value: 'Loading'}]}
                    value={character.race.value}
                    onChange={(e) => actions.charActions.updateRace('race', e.target.value)}
                />

                <SelectList
                    labelText="Class: "
                    id="class"
                    options={classes || [{id: '123', value: 'Loading'}]}
                    name="selectedClass"
                    onChange={(e) => actions.charActions.updateClass(e.target.value, 1)}
                    value={character.class.value}
                />

                <SelectList
                    labelText="Alignment: "
                    id="alignment"
                    options={alignments || [{id: '123', value: 'Loading'}]}
                    onChange={(e) => actions.charActions.updateValue('alignment', e.target.value)}
                    value={character.alignment}
                />

            </div>
            );
        }
    }

BasicsPage.propTypes = {
  actions: React.PropTypes.object.isRequired,
  alignments: React.PropTypes.array,
  character: React.PropTypes.object.isRequired,
  classes: React.PropTypes.array,
  races: React.PropTypes.array
};


function mapStateToProps(state){
    return {
        alignments: state.api.alignments,
        character: state.character,
        classes: state.api.classes,
        races: state.api.races
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            apiActions: bindActionCreators(apiActions, dispatch),
            charActions: bindActionCreators(charActions, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicsPage);
