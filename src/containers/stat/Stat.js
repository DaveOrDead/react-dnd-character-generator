import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';

import TextInput from '../../components/textInput';
import Button from '../../components/button';
import StatBox from '../../components/statBox';
import {rollStat} from '../../utils/rollStat';
import {getStatModifier} from '../../utils/getStatModifier';

const Stat = ({actions, character, text, id, statId}) => {

        const value = parseInt(character[statId]);

        const racialModifier = character.race.modifiers[statId] || 0;
        const total = value + racialModifier;
        const modifier = getStatModifier(total);

        return (
            <div className="h-spacing">
                <div className="c-stat">
                    <TextInput
                        id={id}
                        labelText={`${text}:`}
                        value={character[statId]}
                        onChange={(e) => actions.updateValue('name', e.target.value)}
                        type="number"
                    />
                    <Button text="Roll" onClick={() => actions.updateValue(statId, rollStat())}/>

                    <svg className="" height="30" width="30">
                        <use xlinkHref="#plus-icon" />
                    </svg>

                    <StatBox label="Racial" value={racialModifier} />

                    <svg className="" height="30" width="30">
                        <use xlinkHref="#equals-icon" />
                    </svg>

                    <StatBox label="Total" value={total} />

                    <StatBox label="Mod" value={modifier} />
                </div>

       </div>

        );
    };


Stat.propTypes = {
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired,
    id: React.PropTypes.string,
    text: React.PropTypes.string,
    statId: React.PropTypes.string
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
)(Stat);
