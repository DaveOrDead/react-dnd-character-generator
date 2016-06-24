import React from 'react';
import InputLabel from '../inputLabel';


const CheckboxInput = ({
    id,
    labelText,
    isLabelHidden,
    onChange = () => {},
    ...props
}) => {

    return (
            <div className="c-checkbox-input">

                <input
                    {...props}
                    id={id}
                    className="c-checkbox-input__input"
                    type="checkbox"
                    onChange={onChange}
                     />


                <InputLabel labelText={labelText} inputId={id} isHidden={isLabelHidden} />

            </div>
    );
};

/**
 * propTypes
 * @property {string} id - unique identifier for component.
 * @property {string} [labelText] - Define the text for the `<label> element.
 * @property {boolean} isLabelHidden - Hides the `<label>` element in an accessible way.
 */
CheckboxInput.propTypes = {
    id: React.PropTypes.string.isRequired,
    labelText: React.PropTypes.string.isRequired,
    isLabelHidden: React.PropTypes.bool,
    onChange: React.PropTypes.func
};


export default CheckboxInput;
