import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div className="l-container">
      <IndexLink to="/">Home</IndexLink>
      {' | '}
      <Link to="/create-character">Create New +</Link>
      {' | '}
      <Link to="/view-characters">View Existing Characters</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
