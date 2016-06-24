import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import TextInput from '../../components/textInput';
import SelectList from '../../components/selectList';

import {classes} from '../../data/classes';
import {races} from '../../data/races';
// import {alignments} from '../../data/alignments';


class BasicsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alignments: []
        };
    }

    componentDidMount(props) {
        const { dispatch, actions } = props;
        const face = dispatch(actions.fetchData());
        console.log('face', face);
        this.setState({
            alignments: face
        });
    }

    render() {
        const {character} = this.props;
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
                    options={this.state.alignments}
                    onChange={(e) => actions.updateValue('alignment', e.target.value)}
                />

            </div>
            );
    }
}

BasicsPage.propTypes = {
  actions: React.PropTypes.object.isRequired,
  character: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    character: state.character,
    alignments: state.data
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default connect(
  mapStateToProps
)(BasicsPage);

