import React from 'react' 
import VideoContainer from './VideoContainer'
import {connect} from 'react-redux';

class Search extends React.Component{

    render(){
        return <VideoContainer query={this.props.searchData} />
    }
} 

const mapStateToProps = state => {
    return {
        searchData : state.searchData
    }
}

export default connect(mapStateToProps)(Search)