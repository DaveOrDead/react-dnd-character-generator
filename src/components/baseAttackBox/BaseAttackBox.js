import React, {PropTypes} from 'react';
import StatBox from '../statBox';

const BaseAttackBox = ({selectedClass = {}, level}) => {

    const getModifer = (bab = 0) => {

        if (selectedClass.level !== undefined
            && selectedClass.level[level].baseAttackBonus) {
            bab = selectedClass.level[level].baseAttackBonus;
        }
        return bab;
    };

    const value = getModifer();

    return (
        <StatBox label="BAB" value={value} />
    );
};


BaseAttackBox.propTypes = {
    selectedClass: PropTypes.object,
    level: PropTypes.string
};

export default BaseAttackBox;
