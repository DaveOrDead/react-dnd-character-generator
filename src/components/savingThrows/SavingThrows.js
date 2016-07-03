import React from 'react';
import StatBox from '../statBox';
import {getAbilityModifier} from '../../utils/getAbilityModifier';

const SavingThrows = ({reflexSave, willSave, fortitudeSave, abilities}) => {

    const reflex = reflexSave + getAbilityModifier(abilities.ability2);
    const will = willSave + getAbilityModifier(abilities.ability5);
    const fortitude = fortitudeSave + getAbilityModifier(abilities.ability3);

    return (
        <div className="l-grid">
          <div className="l-grid__item">
            <StatBox label="Ref" value={reflex} />
          </div>
          <div className="l-grid__item">
            <StatBox label="Fort" value={fortitude} />
          </div>
          <div className="l-grid__item">
            <StatBox label="Will" value={will} />
          </div>
        </div>

    );
};


SavingThrows.propTypes = {
    abilities: React.PropTypes.object,
    fortitudeSave: React.PropTypes.integer,
    willSave: React.PropTypes.integer,
    reflexSave: React.PropTypes.integer
};

export default SavingThrows;
