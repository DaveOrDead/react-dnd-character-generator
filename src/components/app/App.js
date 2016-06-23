import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Basics</IndexLink>
      {' | '}
      <Link to="/abilities">Abilities</Link>
      {' | '}
      <Link to="/skills">Skills</Link>
      {' | '}
      <Link to="/feats">Feats</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
