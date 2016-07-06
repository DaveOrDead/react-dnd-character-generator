import React from 'react';
import getClassNameString from '../../utils/getClassNameString';

const GridItem = ({columnCount, children}) => {

    const classList = getClassNameString({
        'l-grid__item': true,
        [`l-grid__item--${columnCount}-col`]: columnCount
    });

    return (
        <div className={classList}>
            {children}
        </div>
    );
};


GridItem.propTypes = {
    columnCount: React.PropTypes.number,
    children: React.PropTypes.node
};


export default GridItem;
