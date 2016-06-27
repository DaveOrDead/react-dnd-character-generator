import React from 'react';

const Footer = ({children}) => {

    return (
        <footer className="c-footer">
            <ul className="l-grid l-grid--space-around">
                {children.map((child, i) => {
                    return (
                        <li key={i} className="l-grid__item">
                            {child}
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};


Footer.propTypes = {
    children: React.PropTypes.node
};


export default Footer;
