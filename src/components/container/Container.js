import React, {PropTypes} from 'react';
import getClassNameString from '../../utils/getClassNameString';

const Container = ({children, gutter, size}) => {

    const classList = getClassNameString({
        'l-container': true,
        [`l-container--${size}`]: size,
        [`l-container--gutter-${gutter}`]: gutter
    });

    return (
        <div className={classList}>
            {children}
        </div>
    );
};


/**
 * propTypes
 * @property {Object} [children] - All child nodes.
*/
Container.propTypes = {
    children: PropTypes.node,
    gutter: PropTypes.string,
    size: PropTypes.string
};

export default Container;
