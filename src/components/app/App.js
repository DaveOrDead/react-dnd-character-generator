import React from 'react';
import Header from '../header';

const App = (props) => {
  return (
    <div>

        <Header text="Character Generator" />

        <main>
            {props.children}
        </main>

    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element
};

export default App;
