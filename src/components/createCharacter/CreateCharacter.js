import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const CreateCharacter = (props) => {
  return (
    <div>

      {props.children}
      <br/>
      <IndexLink to="/">Basics</IndexLink>
      {' | '}
      <Link to="create-character/abilities">Abilities</Link>
      {' | '}
      <Link to="create-character/skills">Skills</Link>
      {' | '}
      <Link to="create-character/feats">Feats</Link>
    </div>
  );
};

CreateCharacter.propTypes = {
  children: PropTypes.element
};

export default CreateCharacter;
