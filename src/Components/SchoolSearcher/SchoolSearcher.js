import React, { Fragment, Component } from 'react'
import axios from 'axios'

import classes from './SchoolSearcher.module.css'
import DataField from './DataField/DataField'
import Spinner from '../Spinner/Spinner'

class Search extends Component {
    state = {
        text: ``,
        openSearch: `${classes.search}`,
        data: null,
        isLoading: false,
        isShowing: false

    }
    searchChangeHandler = (event) => {
        this.setState({ text: event.target.value })
    }
    openSearchHandler = () => {
        this.state.openSearch === `${classes.search}` ?
            this.setState({ openSearch: `${classes.search} ${classes.open}`, text: ``, data: null, isLoading: false, isShowing: false })
            : this.setState({ openSearch: `${classes.search}`, isLoading: true, isShowing: true }, this.submitHandler)
    }

    submitHandler = () => {
        if (this.state.text.length > 2 && this.state.text.match(/^[A-Za-z]+$/)) {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.get(proxyurl + `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.text}+School+Australia&key=AIzaSyC6Z--GSBCRtZV_cKK2P3Lh9_nRntCF3rM`)
                .then(response => this.setState({ data: response.data }))
        }

    }

    render() {

        const show = this.state.isShowing ? { display: 'block', width: '100%' } : { display: 'none', width: '100%' }

        let dataField = <h2>Input Too Short Or Invalid Input ...</h2>
        if (this.state.text.length > 2 && this.state.text.match(/^[A-Za-z]+$/)) {
            if (this.state.isLoading)
                dataField = <Spinner />
            if (this.state.data)
                dataField = <DataField text={this.state.text} content={this.state.data} />
        }

        return (
            <Fragment>
                <h1 className={classes}>Australian School Searcher</h1>
                <h4>Please enter the keywork(Art, Law, etc.)</h4>
                <div className={this.state.openSearch}>
                    <input type="text" value={this.state.text} onChange={this.searchChangeHandler} className={classes.searchBox} />
                    <span className={classes.searchButton} onClick={this.openSearchHandler}>
                        <span className={classes.searchIcon}></span>
                    </span>
                </div>
                <div style={show}>
                    {dataField}
                </div>

            </Fragment>


        );
    }

}

export default Search;