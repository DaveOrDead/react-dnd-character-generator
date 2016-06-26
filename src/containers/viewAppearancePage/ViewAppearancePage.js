import React from 'react';
import {connect} from 'react-redux';

const ViewCharacterPage = ({character}) => {

        return (
            <div>
                <ul className="h-spacing">
                    <li>Size: {character.race.size}</li>
                    <li>Age: {character.age}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Height: {character.height}</li>
                    <li>Weight: {character.weight}</li>
                    <li>Eyes: {character.eyes}</li>
                    <li>Hair: {character.hair}</li>
                    <li>Skin: {character.skin}</li>
                </ul>
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
