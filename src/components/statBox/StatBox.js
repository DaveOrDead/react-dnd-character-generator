import React, {PropTypes} from 'react';

const StatBox = ({
    value,
    label
}) => {

    return (
        <div className="c-stat-box">
            <p>
                <strong className="c-stat-box__value">
                    {value}
                </strong>
                <span className="c-stat-box__label">{label}</span>
            </p>
        </div>
    );
};

StatBox.propTypes = {
    value: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    label: PropTypes.string
};

export default StatBox;
