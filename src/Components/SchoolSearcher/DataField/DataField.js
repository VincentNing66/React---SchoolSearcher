import React from 'react'
import classes from './DataField.module.css'
import Data from './Data/Data'

const DataField = (props) => {
    let schools = <h2>No Schools Found...</h2>
    if (props.content.status !== "ZERO_RESULTS")
        schools = props.content.results.map((i, index) => <Data school={i} key={index} />)

    return (
        <div className={classes.dataField}>
            {schools}
        </div>
    );
}

export default DataField;