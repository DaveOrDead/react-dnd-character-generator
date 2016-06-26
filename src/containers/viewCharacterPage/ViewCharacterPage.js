import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/charGenActions';
import {abilities} from '../../data/abilities';

import Ability from '../ability';
import StatBox from '../../components/statBox';

import SavingThrows from '../../components/savingThrows';

const ViewCharacterPage = ({actions, character}) => {

        return (
            <div>
                <ul className="h-spacing">
                    <li>Name: {character.name}</li>
                    <li>Level: {character.class.level}</li>
                    <li>Class: {character.class.value}</li>
                    <li>Race: {character.race.name}</li>
                    <li>Alignment: {character.alignment}</li>
                    <li>Deity: {character.deity}</li>
                    <li>Size: {character.race.size}</li>
                    <li>Age: {character.age}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Height: {character.height}</li>
                    <li>Weight: {character.weight}</li>
                    <li>Eyes: {character.eyes}</li>
                    <li>Hair: {character.hair}</li>
                    <li>Skin: {character.skin}</li>
                </ul>

                <div className="h-spacing">
                    {abilities.map(function(result) {
                        return (<Ability
                           key={result.id}
                           abilityId={result.id}
                           text={result.name}
                           race={character.race}
                           actions={actions}
                       />);
                    })}
                </div>

                <div>Hit Points Total / current</div>
                <p>Non lethal damage?</p>

                <p>Armour Class: Total = 10 + armour + shield + dex + size + natural + deflection mod + misc</p>

                <p>Touch armour class</p>
                <p>Flat footed armour class</p>

                <p>Initiative: Total = dex mod + misc</p>

                <p>Damage Reduction</p>
                <p>Spell resistance</p>

                <p>Speed: {character.race.speed}</p>

                <h3 className="h-spacing-3x-small heading-sub-title">Saving Throws</h3>

                <SavingThrows
                    baseSavingThrows={character.class.baseSavingThrows}
                    abilities={character.abilities}
                />

                <h3 className="h-spacing-3x-small heading-sub-title">Base Attack Bonus:</h3>
                 <StatBox label="BAB" value={character.class.baseAttackBonus[0]} />

                 <div style={{position: 'relative'}}>
                    <p>Grapple: Total = </p>

                      <p>total= 100, base attack + strength + size + misc</p>

                </div>

                 <p>Skills</p>

                 <p>Attacks</p>

                 <p>Feats</p>

                 <p>Experience</p>


            </div>



            );
    };

ViewCharacterPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        character: state.character
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewCharacterPage);
