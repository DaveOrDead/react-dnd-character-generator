import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as apiActions from '../../actions/apiActions';


class FeatsPage extends React.Component {

    componentDidMount(){
        const {actions} = this.props;
        actions.fetchDataIfNeeded('feats');
    }
    render() {

        const {feats = [], isFetching = true} = this.props;


        return (
            <div>
            {isFetching && feats.length === 0 &&
                <h2>Loading...</h2>
            }
            {!isFetching && feats.length === 0 &&
              <h2>Empty.</h2>
            }
            {feats.length > 0 &&
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <table className="c-table">
                    <thead>
                        <tr>
                            <th>Id</th><th>Name</th>
                        </tr>
                    </thead>
                    <tbody>

                   {feats.map((item, i) =>

                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>

                    )}
                   </tbody>
                   </table>


            </div>
            }
            </div>
            );
        }
    }

FeatsPage.propTypes = {
    actions: React.PropTypes.object,
    character: React.PropTypes.object,
    feats: React.PropTypes.array,
    isFetching: React.PropTypes.bool
};


function mapStateToProps(state) {
  return {
    feats: state.api.feats,
    character: state.character,
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
)(FeatsPage);

