import React from 'react';
import { Link } from 'react-router';
import {existingCharacters} from '../../data/existingCharacters';
import Card from '../card';
import Button from '../button';

const DashboardPage = () => {
  return (
    <div>
        <div className="h-spacing-large">
            <Link to="/create">
                <Button text="Create New" element="span" />
            </Link>
        </div>

        <h3 className="heading-sub-title h-spacing-small">Existing</h3>
        <ul className="l-grid l-grid--gutter-vertical-large">
        {existingCharacters.map((item, i) =>
            <li key={i} className="l-grid__item">

                    <Link to={`/character/${item.id}`}>
                        <Card>
                            <div className="c-card__image">
                                <img src={`/images/${item.avatar}`} alt={`Avatar of ${item.name}`}
                                />
                            </div>
                            <div className="c-card__content">
                                <h4 className="heading-sub-title">{item.name}</h4>
                                <ul>
                                    <li>Level 1</li>
                                    <li>Barbarian</li>
                                </ul>
                            </div>

                        </Card>
                    </Link>
            </li>
        )}
        </ul>
    </div>
  );
};

export default DashboardPage;
