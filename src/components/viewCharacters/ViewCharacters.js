import React, { PropTypes } from 'react';

const CreateCharacter = (props) => {
  return (
    <div>
      <h1>View Characters</h1>

      <p>You ain't got none.</p>
      <br/>
      {props.children}
    </div>
  );
};

CreateCharacter.propTypes = {
  children: PropTypes.element
};

export default CreateCharacter;
