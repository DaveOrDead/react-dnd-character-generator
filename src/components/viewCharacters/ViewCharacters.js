import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {existingCharacters} from '../../data/existingCharacters';

const ViewCharacters = (props) => {
  return (
    <div>
      <h1>View Characters</h1>

      <ul>
      {existingCharacters.map((item, i) =>
            <li key={i}>
                <Link to={`/view-character/${item.id}`}>{item.name}</Link>
            </li>
        )}
      </ul>
    </div>
  );
};

ViewCharacters.propTypes = {
  children: PropTypes.element
};

export default ViewCharacters;
