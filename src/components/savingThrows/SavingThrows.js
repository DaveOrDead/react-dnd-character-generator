import React from 'react';
import StatBox from '../statBox';
import {getAbilityModifier} from '../../utils/getAbilityModifier';

const SavingThrows = ({baseSavingThrows, abilities}) => {

    const reflex = baseSavingThrows.ref + getAbilityModifier(abilities.ability2);
    const will = baseSavingThrows.will + getAbilityModifier(abilities.ability5);
    const fortitude = baseSavingThrows.fort + getAbilityModifier(abilities.ability3);

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
    baseSavingThrows: React.PropTypes.object
};

export default SavingThrows;
