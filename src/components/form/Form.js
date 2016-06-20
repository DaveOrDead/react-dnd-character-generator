import React, {PropTypes} from 'react';

const Form = ({children}) => {

    return (
        <form
            autoComplete="off"
            className="c-form"
            noValidate={true}>
            {children}
        </form>
    );
};


/**
 * propTypes
 * @property {Object} [children] - All child nodes.
*/
Form.propTypes = {
    children: PropTypes.node
};

export default Form;
