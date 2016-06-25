import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {existingCharacters} from '../../data/existingCharacters';
import Panel from '../panel';

const DashboardPage = () => {
  return (
    <div>
        <div className="h-spacing-large">
            <Link to="/create">
                <Panel isHollow={true}>
                    Create New +
                </Panel>
            </Link>
        </div>

        <h3 className="heading-sub-title h-spacing-small">Existing</h3>
        <ul className="l-grid">
        {existingCharacters.map((item, i) =>
            <li key={i} className="l-grid__item">

                    <Link to={`/character/${item.id}`}>
                        <Panel>
                            <img src="http://lorempixel.com/people/125/150/" />
                        </Panel>
                        {item.name}
                    </Link>
            </li>
        )}
        </ul>
    </div>
  );
};

export default DashboardPage;
