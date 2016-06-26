import React from 'react';

const App = (props) => {
  return (
    <div>
        <header>
            <h1>Character Generator</h1>
        </header>
        {props.children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
