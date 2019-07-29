const locationDefaultState = []

export default (state = locationDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return [...state, action.location]
        case 'ADD_MANY_LOCATIONS':
            return [...state, ...action.locations]
        case 'SET_LOCATIONS':
            return [...action.locations]
        default:
            return state
    }
}