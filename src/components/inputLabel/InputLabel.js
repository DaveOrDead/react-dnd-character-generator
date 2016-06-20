import React from 'react';
import getClassNameString from '../../utils/getClassNameString';


/**
 * InputLabel component.  Accompanies a form input to describe it.
 */
const InputLabel = ({labelText, inputId, isHidden}) => {

    const classList = getClassNameString({
        'c-input-label': true,
        'h-hide-visually': isHidden
    });

    return (
            <label
                className={classList}
                htmlFor={inputId}>

                {labelText}

            </label>
    );
};


/**
 * propTypes
 * @property {boolean} isHidden - Hide the label.
 * @property {boolean} inputId - Id attribute for the accompanying input.
 * @property {string} [labelText] - The text for the label.
 */
InputLabel.propTypes = {
    inputId: React.PropTypes.string,
    isHidden: React.PropTypes.bool,
    labelText: React.PropTypes.string.isRequired
};


export default InputLabel;
