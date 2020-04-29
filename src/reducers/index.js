import {GET_VIDEOS_ERROR,GET_SEARCH_DATA} from '../actions/actionTypes'
export const initialState = { searchData:localStorage.getItem('searchTerm'), error:{} }

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_DATA:
          return {
              ...state,
              searchData: action.searchData
          }
        case GET_VIDEOS_ERROR:
          return {
              ...state,
              error: action.error
          }
        default:
          return state
      }
}

export default reducer
