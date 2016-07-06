import React from 'react';

const SubHeader = ({children}) => {

    return (
        <div className="c-sub-header">
            {children}
        </div>
    );
};


SubHeader.propTypes = {
    children: React.PropTypes.node
};


export default SubHeader;
