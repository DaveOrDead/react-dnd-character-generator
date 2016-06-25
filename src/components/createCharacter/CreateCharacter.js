import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CreateCharacter = (props) => {
  return (
    <div>

      {props.children}
      <br/>
      <Link to="/create">Step 1: Basics</Link>
      {' | '}
      <Link to="/create/abilities">Step 2: Abilities</Link>
      {' | '}
      <Link to="/create/skills">Step 3: Skills</Link>
      {' | '}
      <Link to="/create/feats">Step 4: Feats</Link>
    </div>
  );
};

CreateCharacter.propTypes = {
  children: PropTypes.element
};

export default CreateCharacter;
