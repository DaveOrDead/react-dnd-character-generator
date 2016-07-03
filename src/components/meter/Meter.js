import React, {PropTypes} from 'react';
import getClassNameString from '../../utils/getClassNameString';


const Meter = ({
    isEmpty,
    isActive,
    max,
    value
}) => {

    const barStyle = {
        transform: max ? `scaleX(${value / max})` : ''
    };

    const classList = getClassNameString({
        'c-meter': true,
        'is-active': isActive,
        'is-empty': isEmpty
    });

    return (
        <div className={classList}>
            <span className="c-meter__fill" style={barStyle} />
        </div>
    );
};



Meter.propTypes = {
    isActive: PropTypes.bool,
    isEmpty: PropTypes.bool,
    max: PropTypes.integer,
    value: PropTypes.integer
};


export default Meter;
