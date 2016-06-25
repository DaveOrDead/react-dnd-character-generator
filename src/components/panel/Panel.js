import React, {PropTypes} from 'react';
import getClassNameString from '../../utils/getClassNameString';


const Panel = ({
    children,
    isHollow,
    isHidden,
    isDark,
    isActive,
    element = "span",
    ...props
}) => {

        const Tag = element;

        const classList = getClassNameString({
            'c-panel': true,
            'is-active': isActive,
            'h-hide': isHidden,
            'c-panel--hollow': isHollow,
            'c-panel--dark': isDark
        });

        return (
            <Tag {...props} className={classList}>
                {children}
            </Tag>
        );
    };



Panel.propTypes = {
    children: PropTypes.node,
    element: PropTypes.string,
    isActive: PropTypes.bool,
    isHidden: PropTypes.bool,
    isDark: PropTypes.bool
};


export default Panel;
