import React from 'react';
import getClassNameString from '../../utils/getClassNameString';


/**
 * Container around related form items e.g a label and input.  Typically used to
 * create vertical space between it and the next set of form controls.
 */
const FormItem = ({children, isLabelHidden}) => {


    const classList = getClassNameString({
        'c-form-item': true,
        'c-form-item--hidden-label': isLabelHidden
    });

    return (
        <div className={classList}>
            {children}
        </div>
    );
};


/**
 * propTypes
 * @property {node} children - array of nodes
 * @property {boolean} isLabelHidden - Hides the `<label>` element in an accessible way.
 */
FormItem.propTypes = {
    children: React.PropTypes.node,
    isLabelHidden: React.PropTypes.bool
};


export default FormItem;
