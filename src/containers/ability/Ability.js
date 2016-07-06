import React from 'react';
import {connect} from 'react-redux';

import Popover from '../../components/popover';
import {getAbilityModifier} from '../../utils/getAbilityModifier';


class Ability extends React.Component {
    constructor(props) {
        super(props);
        this.state = {popoverIsVisible: false};
        this.togglePopover = this.togglePopover.bind(this);
    }

    togglePopover() {
        this.setState({popoverIsVisible: !this.state.popoverIsVisible});
    }
    render() {

        const {abilityId, character, text} = this.props;

        const value = parseInt(character.abilities[abilityId]);
        const racialModifier = character.race.modifiers[abilityId] || 0;
        const total = value + racialModifier;
        const modifier = getAbilityModifier(total);

        return (
            <div style={{position: 'relative'}}>
                <button onClick={this.togglePopover}>
                    <span className="c-stat">
                        <span className="c-stat__number">
                            {modifier >= 0 ? '+' : null}{modifier}
                        </span>
                        <span className="c-stat__description">
                            {text}: {total}
                        </span>
                    </span>
                </button>

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
            );
        }
    }


Ability.propTypes = {
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

export default connect(
  mapStateToProps
  )(Ability);
