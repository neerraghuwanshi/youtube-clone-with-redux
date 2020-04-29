import React from 'react'
import VideoList from './VideoList'
import Iframe from './Iframe'
import {connect} from 'react-redux';
import '../css/videoContainer.css'
import {GetVideosError} from '../actions/actions'

import axios from 'axios';

class VideoContainer extends React.Component{
    
    state = {selectedVideo:{}, videos:{}, shouldRender:false}

    
    fetchVideos = async (searchTerm) => {

        const {dispatch} = this.props
        await axios.get('https://www.googleapis.com//youtube/v3/search',{
            params: {
                part:'snippet',
                maxResults:5,
                key:'AIzaSyB5-qFTlsVZBy9d-phTMiCtu2OM-hMSmO4',
                q:searchTerm
            }}).then(
                    response=>
                    this.setState({videos:response.data,
                    selectedVideo:response.data.items[0], shouldRender:true}))
                .catch((error)=>dispatch(GetVideosError(error)))
        }
        
    componentDidMount(){
        this.fetchVideos(this.props.query)
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            this.fetchVideos(this.props.query)
        }
    }

    onClickHandler = (item) => {
        this.setState({selectedVideo:item})
    }

    render(){
        const {videos, selectedVideo, shouldRender} = this.state

        if(shouldRender){
        return(
            <div>
            <div className={'container'}> 
                    <Iframe src={selectedVideo.id.videoId} title={selectedVideo.snippet.title} description={selectedVideo.snippet.description}/>
                    <VideoList onClickHandler={this.onClickHandler} items={videos.items}/>
                </div>
            </div>);
        }
        return null
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        dispatch
    }
}


export default connect(null,mapDispatchToProps)(VideoContainer)
