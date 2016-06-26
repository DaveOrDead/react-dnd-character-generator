import React from 'react';

const Header = ({text}) => {

    return (
        <header className="c-header h-spacing-x-large">
            <div className="c-header__title l-container">
                <h1 className="heading-headline c-header__title">{text}</h1>
            </div>
        </header>
    );
};


Header.propTypes = {
    text: React.PropTypes.string
};


export default Header;
