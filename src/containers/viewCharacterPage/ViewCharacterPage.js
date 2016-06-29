import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {existingCharacters} from '../../data/existingCharacters';
import Footer from '../../components/footer';
import StatBox from '../../components/statBox';


const ViewCharacterPage = ({children, character, params}) => {

        if(params.charId) {
             character = existingCharacters.filter(eC => eC.id === params.charId)[0];
        }

        return (
            <div>
                <div className="l-grid">
                    <div className="l-grid__item">
                        <img src={`/images/${character.avatar}`} alt={`Avatar of ${character.name}`} height="125" width="100"
                                        />
                    </div>
                    <div className="l-grid__item">
                        <ul className="h-spacing">
                            <li>Name: {character.name}</li>
                            <li>Level: {character.class.level}</li>
                            <li>Class: {character.class.value}</li>
                            <li>Race: {character.race.name}</li>
                            <li>Alignment: {character.alignment}</li>
                            <li>Deity: {character.deity}</li>
                        </ul>
                    </div>
                </div>

                <StatBox label="XP" value={0} />


                <div>Hit Points Total / current</div>
                <p>Non lethal damage?</p>

                <p>Initiative: Total = dex mod + misc</p>

                <p>Speed: {character.race.speed}</p>

                <p>Skills / Equipment / Feats</p>



                {children}

                <Footer>
                    <Link to={`/character/${params.charId}`}>Abilities</Link>
                    <Link to={`/character/${params.charId}/combat`}>Combat</Link>
                    <Link to={`/character/${params.charId}/appearance`}>Appearance</Link>
                </Footer>

            </div>

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
