const initialState = {
    data: [],
    lastRemovedData: null
}
export function dataReducer(state = initialState, action) {
    var newState = state
    var data
    var datat
    switch (action.type) {
        case 'SET_DATA':
            newState = { ...state, data: action.data }
            break
        case 'REMOVE_DATA':
            const lastRemovedData = state.data.find(data => data._id === action.dataId)
            data = state.data.filter(data => data._id !== action.dataId)
            newState = { ...state, data, lastRemovedData}
            break
        case 'ADD_DATA':
            newState = { ...state, data:[...state.data, action.data]}
            break
        case 'UPDATE_DATA':
            data = state.data.map(data => (data._id === action.data._id)? action.data : data)
            newState = { ...state, data}
            break
        case 'UNDO_REMOVE_DATA':
            if (state.lastRemovedData) {
                newState = { ...state, data: [...state.data, state.lastRemovedData], lastRemovedData: null}
            }
            break
        default:
    }
    // For debug:
    window.dataState = newState
    //console.log('Prev State:', state)
    //console.log('Action:', action)
    //console.log('New State:', newState)
    return newState

}
