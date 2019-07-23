const locationDefaultState = []

export default (state = locationDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return [...state, action.location]
        default:
            return state
    }
}