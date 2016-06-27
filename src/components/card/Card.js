import React, {PropTypes} from 'react';
import getClassNameString from '../../utils/getClassNameString';


const Card = ({
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
            'c-card': true,
            'is-active': isActive,
            'h-hide': isHidden,
            'c-card--hollow': isHollow,
            'c-card--dark': isDark
        });

        return (
            <Tag {...props} className={classList}>
                {children}
            </Tag>
        );
    };


Card.propTypes = {
    children: PropTypes.node,
    element: PropTypes.string,
    isActive: PropTypes.bool,
    isHidden: PropTypes.bool,
    isHollow: PropTypes.bool,
    isDark: PropTypes.bool
};


export default Card;
