const locationDefaultState = [{
    _id: '34',
    tags: ['cliff'],
    title: 'cool cliff',
    description: 'cliffface',
    visited: true,
    image: '3434'
},{
    _id: '45',
    tags: ['ocean'],
    title: 'cool waves',
    description: 'wavey',
    visited: false,
    image: '4545'
}
]

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