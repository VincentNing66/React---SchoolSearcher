import React from 'react';
import classes from './Data.module.css'

const Data = (props) => {
    const searchingURL = `https://www.google.com/search?q=${props.school.name.replace(/\s+/g, '+')}+Australia`
    return (
        <a href={searchingURL} className={classes.aaa} >
            <div className={classes.card}>
                <h1>{props.school.name}</h1>
            Address:     <h2>{props.school.formatted_address}</h2>
            Rating:     <h2>{props.school.rating}</h2>

            </div>
        </a>

    );
}

export default Data;