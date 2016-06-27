import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Footer from '../footer';

const CreateCharacter = (props) => {
    return (
        <div>

            {props.children}

            <Footer>
                <IndexLink to="/create" activeClassName="is-active">
                    <span className="c-footer__link">Basics</span>
                </IndexLink>
                <Link to="/create/abilities" activeClassName="is-active">
                    <span className="c-footer__link">Abilities</span>
                </Link>
                <Link to="/create/skills" activeClassName="is-active">
                    <span className="c-footer__link">Skills</span>
                </Link>
                <Link to="/create/feats" activeClassName="is-active">
                    <span className="c-footer__link">Feats</span>
                </Link>
            </Footer>
        </div>
  );
};

CreateCharacter.propTypes = {
  children: PropTypes.element
};

export default CreateCharacter;
