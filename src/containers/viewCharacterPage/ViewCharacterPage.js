import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as apiActions from '../../actions/apiActions';
import {Link} from 'react-router';
import Container from '../../components/container';
import Grid from '../../components/grid';
import GridItem from '../../components/gridItem';
import Footer from '../../components/footer';
import StatBox from '../../components/statBox';
import Meter from '../../components/meter';
import {getAbilityModifier} from '../../utils/getAbilityModifier';


class ViewCharacterPage extends React.Component {

    componentDidMount(){
        const {actions, params} = this.props;
        actions.fetchDataIfNeeded('characters', params.charId);
    }

    render () {

        const {basics = {}, children, params, isFetching = true} = this.props;

        // const dexMod = getAbilityModifier(character.ability2);

        const initiativeMod = 2;

        return (
                <Container gutter="small">
                    {isFetching && !basics &&
                    <h2>Loading...</h2>
                    }
                    {!isFetching && !basics &&
                    <h2>Empty.</h2>
                    }
                    {basics &&
                    <Grid>
                        <GridItem>
                            <img src={`/images/${basics.avatar}`} alt={`Avatar of ${basics.name}`} height="125" width="100"
                                            />
                            Level: {basics.level}
                        </GridItem>
                        <GridItem>
                            <h3 className="heading-sub-title">{basics.name}</h3>

                            HP: <Meter max={150} value={45} />

                            XP: <Meter max={150} value={45} />

                            <ul>
                                <li>{basics.race}, {basics.class}</li>
                                <li>Alignment: {basics.alignment}</li>
                                <li>Deity: {basics.deity}</li>
                            </ul>
                        </GridItem>
                    </Grid>
                    }
                    <p>Non lethal damage?</p>

                    <StatBox label="Initiative" value={initiativeMod} />

                    <p>Speed: 10000ft</p>

                    <Footer>
                        <Link to={`/character/${params.charId}`}>Abilities</Link>
                        <Link to={`/character/${params.charId}/combat`}>Combat</Link>
                        <Link to={`/character/${params.charId}/appearance`}>Appearance</Link>
                        <p>Skills</p>
                        <p>Equipment</p>
                        <p>Feats</p>
                    </Footer>

                </Container>
            );
        }
    }

ViewCharacterPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    basics: React.PropTypes.object,
    children: React.PropTypes.node,
    isFetching: React.PropTypes.bool,
    params: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        isFetching: state.api.isFetching,
        abilities: state.api.abilities,
        basics: state.api.characters
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
)(ViewCharacterPage);
