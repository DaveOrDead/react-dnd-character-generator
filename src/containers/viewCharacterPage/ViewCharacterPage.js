import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {existingCharacters} from '../../data/existingCharacters';
import Container from '../../components/container';
import Grid from '../../components/grid';
import GridItem from '../../components/gridItem';
import Footer from '../../components/footer';
import StatBox from '../../components/statBox';
import Meter from '../../components/meter';
import {getAbilityModifier} from '../../utils/getAbilityModifier';

const ViewCharacterPage = ({children, character, params}) => {

        if(params.charId) {
             character = existingCharacters.filter(eC => eC.id === params.charId)[0];
        }

        const dexMod = getAbilityModifier(character.abilities.ability2);

        const initiativeMod = dexMod;

        return (
            <Container gutter="small">
                <Grid>
                    <GridItem>
                        <img src={`/images/${character.avatar}`} alt={`Avatar of ${character.name}`} height="125" width="100"
                                        />
                        Level: {character.class.level}
                    </GridItem>
                    <GridItem>
                        <h3 className="heading-sub-title">{character.name}</h3>

                        HP: <Meter max={150} value={45} />

                        XP: <Meter max={150} value={45} />

                        <ul>
                            <li>{character.race.name}, {character.class.value}</li>
                            <li>Alignment: {character.alignment}</li>
                            <li>Deity: {character.deity}</li>
                        </ul>
                    </GridItem>
                </Grid>

                <p>Non lethal damage?</p>

                <StatBox label="Initiative" value={initiativeMod} />

                <p>Speed: {character.race.speed || '30ft'}</p>

                 {children}

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
    };

ViewCharacterPage.propTypes = {
    character: React.PropTypes.object.isRequired,
    children: React.PropTypes.node,
    params: React.PropTypes.object
};

function mapStateToProps(state) {
    return {
        character: state.character
    };
}

export default connect(
    mapStateToProps
)(ViewCharacterPage);
