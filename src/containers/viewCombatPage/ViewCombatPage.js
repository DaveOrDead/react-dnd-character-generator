import React from 'react';
import {connect} from 'react-redux';

import StatBox from '../../components/statBox';
import SavingThrows from '../../components/savingThrows';

const ViewCombatPage = ({character}) => {

        return (
            <div>

                <p>Armour Class: Total = 10 + armour + shield + dex + size + natural + deflection mod + misc</p>

                <p>Touch armour class</p>
                <p>Flat footed armour class</p>

                <p>Damage Reduction</p>

                <h3 className="h-spacing-3x-small heading-sub-title">Saving Throws</h3>

                <SavingThrows
                    reflexSave={character.class.reflex_save}
                    fortitudeSave={character.class.fortitude_save}
                    willSave={character.class.will_save}
                    abilities={character.abilities}
                />

                <h3 className="h-spacing-3x-small heading-sub-title">Base Attack Bonus:</h3>
                 <StatBox label="BAB" value={character.class.baseAttackBonus} />

                 <div style={{position: 'relative'}}>
                    <p>Grapple: Total = </p>

                      <p>total= 100, base attack + strength + size + misc</p>
                </div>
            </div>
            );
    };

ViewCombatPage.propTypes = {
    character: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        character: state.character
    };
}

export default connect(
    mapStateToProps
)(ViewCombatPage);
