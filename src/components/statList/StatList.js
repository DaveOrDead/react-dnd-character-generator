import React, {PropTypes} from 'react';
import Stat from '../../containers/stat';

const StatList = ({data, ...props}) => {
    return (
        <div>
        {data.map(function(result) {
          return (<Stat
                               key={result.id}
                               statId={result.id}
                               text={result.name}
                               {...props}
                           />);
        })}
        </div>
    );
};

StatList.propTypes = {
    data: PropTypes.array
};

export default StatList;
