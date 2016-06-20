import React from 'react';
import FormItem from '../formItem';
import InputLabel from '../inputLabel';


/**
 * TextInput component. Is used when you need to insert 1 form input and an accompanying
 * label—the label is always required, there is an option to hide the label in an accessible way.
 */
const TextInput = ({
    id,
    isLabelHidden,
    labelText,
    labelDescriptionText,
    maxLength = '250',
    type = 'text',
    value = '',
    ...props
}) => {

    return (
            <FormItem isLabelHidden={isLabelHidden}>
                <InputLabel isHidden={isLabelHidden} labelText={labelText} inputId={id}/>

                <input
                    {...props}
                    id={id}
                    className="c-text-input"
                    maxLength={maxLength}
                    type={type}
                    value={value} />


                {labelDescriptionText ?
                    <p className="c-text-input__description">
                        {labelDescriptionText}
                    </p> : null
                }

            </FormItem>
    );
};

/**
 * propTypes
 * @property {string} error - Error message.
 * @property {string} id - unique identifier for component.
 * @property {boolean} isLabelHidden - Hides the `<label>` element in an accessible way.
 * @property {string} [labelDescriptionText] - Define additional text for the `<label>`
 * element.
 * @property {string} [labelText] - Define the text for the `<label> element.
 * @property {string} maxLength - character length for the input.
 * @property {string} value - Needs to be explicitly set to avoid this issue:
 *  http://facebook.github.io/react/docs/forms.html#controlled-components
 */
TextInput.propTypes = {
    error: React.PropTypes.string,
    id: React.PropTypes.string,
    isLabelHidden: React.PropTypes.bool,
    labelText: React.PropTypes.string.isRequired,
    labelDescriptionText: React.PropTypes.string,
    maxLength: React.PropTypes.string,
    type: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
};


export default TextInput;
