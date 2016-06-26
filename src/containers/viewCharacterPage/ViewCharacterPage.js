import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

const ViewCharacterPage = ({children, character}) => {

        return (
            <div>
                <ul className="h-spacing">
                    <li>Name: {character.name}</li>
                    <li>Level: {character.class.level}</li>
                    <li>Class: {character.class.value}</li>
                    <li>Race: {character.race.name}</li>
                    <li>Alignment: {character.alignment}</li>
                    <li>Deity: {character.deity}</li>
                </ul>

                <div>Hit Points Total / current</div>
                <p>Non lethal damage?</p>

                <p>Initiative: Total = dex mod + misc</p>

                <p>Speed: {character.race.speed}</p>

                 <p>Skills</p>

                 <p>Attacks</p>

                 <p>Feats</p>

                 <p>Experience</p>

                  <br/>
                  <Link to="/character/:charId">Abilities</Link>
                  {' | '}
                  <Link to="/character/:charId/combat">Combat</Link>
                  {' | '}
                  <Link to="/character/:charId/appearance">Appearance</Link>
                    {children}
                        </div>

            );
    };

ViewCharacterPage.propTypes = {
    character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        character: state.character
    };
}

export default connect(
    mapStateToProps
)(ViewCharacterPage);
