import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as apiActions from '../../actions/apiActions';
import { Link } from 'react-router';

import Card from '../card';
import Button from '../button';
import Footer from '../footer';
import SearchInput from '../searchInput';
import SubHeader from '../subHeader';

class DashboardPage extends React.Component {

    componentDidMount(){
        const {actions} = this.props;
        actions.fetchDataIfNeeded('characters');
    }

  render () {

    const {characters, isFetching = true} = this.props;

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
            {characters.map((item, i) =>
                <li key={i}>
                    <Link to={`/character/${item.id}`}>
                        <Card>
                            <div className="c-card__image">
                                <img src={`/images/${item.avatar}`} alt={`Avatar of ${item.name}`}
                                />
                            </div>
                            <div className="c-card__content">
                                <h4 className="heading-sub-title">{item.name}</h4>
                                <ul className="c-card__description">
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
    }
}

DashboardPage.propTypes = {
    actions: React.PropTypes.object,
    characters: React.PropTypes.array,
    isFetching: React.PropTypes.bool
};


function mapStateToProps(state) {
  return {
    actions: React.PropTypes.object,
    characters: state.api.characters,
    isFetching: state.api.isFetching
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(apiActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);
