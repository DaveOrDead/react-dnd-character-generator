// JSDoc me!! ಠ╭╮ಠ
import React, {Component, PropTypes} from 'react';
import getClassNameString from '../../utils/getClassNameString';

class Popover extends Component {

    render() {
        const {isVisible, heading} = this.props;

        const classList = getClassNameString({
            'c-popover': true,
            'c-popover--top': true,
            'h-hide': !isVisible
        });

        return (
            <div className={classList} ref="popover">

                <div className={'c-popover__header'}>
                    <h3>{heading}</h3>
                </div>

                <div className={'c-popover__content'}>
                    {this.props.children}
                </div>

            </div>
        );
    }
}


Popover.propTypes = {
    children: PropTypes.node,
    isVisible: PropTypes.bool,
    heading: PropTypes.string
};

export default Popover;
