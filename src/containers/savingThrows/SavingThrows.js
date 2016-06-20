import React from 'react';
import StatBox from '../../components/statBox';

const SavingThrows = ({selectedClass = {}, level}) => {

    const getModifer = (save = 0, name) => {

        if (selectedClass.level !== undefined
            && selectedClass.level[level].baseSavingThrows[name]) {
            save = selectedClass.level[level].baseSavingThrows[name];
        }
        return save;
    };

    const reflex = getModifer(0, 'ref'); // total Dex mod + class base
    const will = getModifer(0, 'will'); // total widom mod + class base
    const fortitude = getModifer(0, 'fort'); // total const mod + class base

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
    selectedClass: React.PropTypes.object,
    level: React.PropTypes.string
};

export default SavingThrows;
