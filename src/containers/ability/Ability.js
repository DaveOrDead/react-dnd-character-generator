import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import Popover from '../../components/popover';
import StatBox from '../../components/statBox';
import {getAbilityModifier} from '../../utils/getAbilityModifier';



class Ability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {popoverIsVisible: false}
        // Manually bind this method to the component instance...
        this.togglePopover = this.togglePopover.bind(this);
    }

    togglePopover() {
        // ...to ensure that 'this' refers to the component instance here.
        this.setState({popoverIsVisible: !this.state.popoverIsVisible});
    }
    render() {

        const { actions, character, text, abilityId } = this.props;

        const value = parseInt(character.abilities[abilityId]);
        const racialModifier = character.race.modifiers[abilityId] || 0;
        const total = value + racialModifier;
        const modifier = getAbilityModifier(total);

        return (
            <div className="h-spacing">
                <div className="c-stat">

                    <strong>{text}</strong>
                    <div style={{position: 'relative'}}>
                        <button onClick={this.togglePopover}>
                            <StatBox label="Total" value={total} />
                        </button>
                        <StatBox label="Mod" value={modifier} />
                        <Popover isVisible={this.state.popoverIsVisible}>
                            <h3>{text}</h3>
                            <ul>
                                <li>
                                    <strong>Total: </strong>{total}
                                </li>
                                <li>
                                    <strong>Racial Modifier: </strong>{racialModifier}
                                </li>
                                <li>
                                    <strong>Base: </strong>{value}
                                </li>
                            </ul>
                        </Popover>
                    </div>
                    <p>Temporary score:</p>
                    <p>Temporary mod:</p>
                </div>

            </div>
            );
        }
    }


Ability.propTypes = {
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired,
    id: React.PropTypes.string,
    text: React.PropTypes.string,
    abilityId: React.PropTypes.string
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
)(Ability);
