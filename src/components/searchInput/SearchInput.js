import React from 'react';
import FormItem from '../formItem';
import InputLabel from '../inputLabel';
import generateSvgLink from '../../utils/generateSvgLink';


const SearchInput = ({
    id,
    isLabelHidden,
    labelText,
    maxLength = '250',
    value = '',
    ...props
}) => {

    return (
            <FormItem isLabelHidden={isLabelHidden}>
                <InputLabel isHidden={isLabelHidden} labelText={labelText} inputId={id}/>
                <div className="c-search-input">

                    {generateSvgLink('search-icon', 'c-search-input__icon')}

                    <input
                        {...props}
                        id={id}
                        className="c-search-input__input"
                        maxLength={maxLength}
                        type="search"
                        value={value} />
                    </div>

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
SearchInput.propTypes = {
    error: React.PropTypes.string,
    id: React.PropTypes.string,
    isLabelHidden: React.PropTypes.bool,
    labelText: React.PropTypes.string.isRequired,
    labelDescriptionText: React.PropTypes.string,
    maxLength: React.PropTypes.string,
    value: React.PropTypes.string
};


export default SearchInput;
