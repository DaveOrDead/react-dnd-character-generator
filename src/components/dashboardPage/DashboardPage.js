import React from 'react';
import { Link } from 'react-router';
import {existingCharacters} from '../../data/existingCharacters';
import Card from '../card';
import Button from '../button';
import Footer from '../footer';
import SearchInput from '../searchInput';
import SubHeader from '../subHeader';


const DashboardPage = () => {
  return (
    <div>

        <SubHeader>
            <SearchInput
                isLabelHidden={true}
                labelText="Search existing characters"
                placeholder="Search characters"
            />
        </SubHeader>

        <ul>
        {existingCharacters.map((item, i) =>
            <li key={i}>
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

        <Footer>
            <Link to="/create">
                <Button text="Create New" element="span" />
            </Link>
            <span />
        </Footer>
    </div>
  );
};

export default DashboardPage;
