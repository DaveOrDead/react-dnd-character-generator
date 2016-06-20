import React from 'react';
import FormItem from '../formItem';
import InputLabel from '../inputLabel';
import generateSvgLink from '../../utils/generateSvgLink';


/**
 * SelectList component. Is used when you need to insert 1 `<select>` element and an
 * accompanying label—the label is always required, there is an option to hide the label in an
 * accessible way. The label will always sit above its `<select>` element.
 */
const SelectList = ({
    id,
    isLabelHidden,
    labelText,
    options,
    ...props
}) => {

    return (

            <FormItem isLabelHidden={isLabelHidden}>
                <InputLabel isHidden={isLabelHidden} labelText={labelText} inputId={id}/>
                <span className="c-select-list">

                    <select
                        {...props}
                        id={id}
                        className="c-select-list__select"
                        >
                        {options.map((item, i) =>
                            <option
                                key={i}
                                disabled={item.disabled}
                                value={item.value}>
                                {item.name}
                            </option>
                        )}
                    </select>

                    {generateSvgLink('caret-icon', 'c-select-list__icon')}

                </span>

            </FormItem>
    );
};

/**
 * propTypes
 * @property {string} error - Error message.
 * @property {string} id - unique identifier for component.
 * @property {boolean} isLabelHidden - Hides the `<label>` element in an accessible way.
 * @property {string} [labelText] - Define the text for the `<label> element.
 * @property {Array.<Object>} [options] - All the props available for each `<option>`
 * element.
 */
SelectList.propTypes = {
    error: React.PropTypes.string,
    isLabelHidden: React.PropTypes.bool,
    id: React.PropTypes.string.isRequired,
    labelText: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired
};


export default SelectList;
