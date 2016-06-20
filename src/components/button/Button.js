import React from 'react';
import generateSvgLink from '../../utils/generateSvgLink';
import getClassNameString from '../../utils/getClassNameString';


const Button = ({
    text,
    handleClick,
    iconLeft,
    iconRight,
    isHidden,
    isSecondaryButton,
    qaHook,
    ...props
}) => {

    // Tag needs to be upper-case to work
    const Tag = props.href ? 'a' : 'button';

    const classList = getClassNameString({
        'c-button': true,
        'c-button--secondary': isSecondaryButton,
        'h-hide': isHidden,
        [`qa-button-${qaHook}`]: qaHook
    });

    return (
        <Tag
            className={classList}
            onClick={handleClick}
            {...props}>

            {iconLeft ? generateSvgLink(iconLeft, 'c-button__icon') : null}

            <span className="c-button__text">{text}</span>

            {iconRight ? generateSvgLink(iconRight, 'c-button__icon') : null}

        </Tag>
    );
};

/**
 * propTypes
 * @property {string} [text] - The text for the button.
 * @property {Function} handleClick - A place-holder for appending functions.
 * @property {string} href - a url which if provided makes component a link.
 * @property {string} iconLeft - SVG icon positioned to the left of `text`.
 * @property {string} iconRight - SVG icon positioned to the right of `text`.
 * @property {boolean} isHidden - Hide the button.
 * @property {boolean} isSecondaryButton - For applying the secondary button style.
 */
Button.propTypes = {
    text: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func,
    href: React.PropTypes.string,
    iconLeft: React.PropTypes.string,
    iconRight: React.PropTypes.string,
    isHidden: React.PropTypes.bool,
    isSecondaryButton: React.PropTypes.bool,
    qaHook: React.PropTypes.string
};


export default Button;
