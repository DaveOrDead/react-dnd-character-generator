import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as charActions from '../../actions/charGenActions';
import * as apiActions from '../../actions/apiActions';

import TextInput from '../../components/textInput';
import SelectList from '../../components/selectList';


class BasicsPage extends React.Component {

    componentDidMount(){
        const {actions} = this.props;
        actions.apiActions.fetchDataIfNeeded('alignments');
        actions.apiActions.fetchDataIfNeeded('classes');
        actions.apiActions.fetchDataIfNeeded('races');
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
                    options={races || [{id: '123', name: 'Loading'}]}
                    value={character.race.id}
                    onChange={(e) => actions.charActions.fetchCharData('race', `races/${e.target.value}`)}
                />

                <SelectList
                    labelText="Class: "
                    id="class"
                    options={classes || [{id: '123', name: 'Loading'}]}
                    name="selectedClass"
                    onChange={(e) => actions.charActions.fetchCharData('class', `classes/${e.target.value}`,character.level)}
                    value={character.class.id}
                />

                <SelectList
                    labelText="Alignment: "
                    id="alignment"
                    options={alignments || [{id: '123', name: 'Loading'}]}
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
