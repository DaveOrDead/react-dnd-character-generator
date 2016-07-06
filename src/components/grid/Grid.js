import React from 'react';
import getClassNameString from '../../utils/getClassNameString';

const Grid = ({children,
               horizontalGutters,
               isGutterless,
               verticalGutters,
               horizontalAlign,
               verticalAlign}) => {


    const classList = getClassNameString({
        'l-grid': true,
        [`l-grid--gutter-horizontal-${horizontalGutters}`]: horizontalGutters,
        [`l-grid--gutter-vertical-${verticalGutters}`]: verticalGutters,
        [`l-grid--align-verticalAlign-${verticalAlign}`]: verticalAlign,
        [`l-grid--align-horizontalAlign-${horizontalAlign}`]: horizontalAlign,
        'l-grid--gutterless': isGutterless
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
 * @property {string} horizontalAlign - position of cells horizontally
 * @property {string} horizontalGutters - size of horizontal gutters
 * @property {bool} isGutterless - has no vertical or horizontal gutters
 * @property {string} verticalAlign - position of cells vertically
 * @property {string} verticalGutters - size of vertical gutters
 */
Grid.propTypes = {
    children: React.PropTypes.node,
    horizontalAlign: React.PropTypes.string,
    horizontalGutters: React.PropTypes.string,
    isGutterless: React.PropTypes.bool,
    verticalAlign: React.PropTypes.string,
    verticalGutters: React.PropTypes.string
};


export default Grid;
