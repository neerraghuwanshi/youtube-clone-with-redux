import {GET_SEARCH_DATA, GET_VIDEOS_ERROR} from './actionTypes'


export const GetSearchData = (searchData) => {
    return {
        type: GET_SEARCH_DATA,
        searchData
    }
}

export const GetVideosError = (error) => {
    return {
        type: GET_VIDEOS_ERROR,
        error
    }
}

