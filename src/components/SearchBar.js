import React from 'react';
import { withRouter } from 'react-router-dom';
import {GetSearchData} from '../actions/actions'
import { connect } from "react-redux";

class SearchBar extends React.Component{
    state={searchTerm:''}

    render(){
        const {searchTerm} = this.state
        const {history, dispatch} = this.props;     

        const onSubmitHandler = (event) => {
            event.preventDefault() 
            dispatch(GetSearchData(searchTerm))
            history.push({pathname:'/search'})
            }

        return(
            <form onSubmit={onSubmitHandler}>
                <input onChange={(event)=>this.setState({searchTerm:event.target.value})} value={searchTerm} placeholder="Search"/>
                <div onClick={onSubmitHandler}>
                <i className="fa fa-search" aria-hidden="true" ></i>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}



export default connect(null,mapDispatchToProps)(withRouter(SearchBar))