import React from 'react';
import TextInput from '../../components/textInput';
import Button from '../../components/button';
import StatBox from '../../components/statBox';
import {rollStat} from '../../utils/rollStat';
import {getStatModifier} from '../../utils/getStatModifier';

class Stat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 10
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.generateStat = this.generateStat.bind(this);
    }

    handleTextChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    generateStat() {
        this.setState({
            value: rollStat()
        });
    }

    render() {

        const {text, id, statId, race} = this.props;

        const getRacialModifier = (racialMod = 0) => {
            if (race.modifiers !== undefined &&
                race.modifiers[statId]) {
                racialMod = race.modifiers[statId];
            }
            return racialMod;
        };

        const value = parseInt(this.state.value);
        const racialModifier = getRacialModifier();
        const total = value + racialModifier;
        const modifier = getStatModifier(total);

        return (
            <div className="h-spacing">
                <div className="c-stat">
                    <TextInput
                        id={id}
                        labelText={`${text}:`}
                        value={this.state.value}
                        onChange={this.handleTextChange}
                        type="number"
                    />
                    <Button text="Roll" onClick={this.generateStat}/>

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
    }
}

Stat.propTypes = {
    id: React.PropTypes.string,
    text: React.PropTypes.string,
    statId: React.PropTypes.string,
    race: React.PropTypes.object
};

export default Stat;
