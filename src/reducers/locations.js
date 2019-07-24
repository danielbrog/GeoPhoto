const locationDefaultState = [{
    _id: '34',
    tags: ['cliff'],
    title: 'cool cliff',
    description: 'cliffface',
    visited: true,
    imageName: '3434'
},{
    _id: '45',
    tags: ['ocean'],
    title: 'cool waves',
    description: 'wavey',
    visited: false,
    imageName: '4545'
}
]

export default (state = locationDefaultState, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return [...state, action.location]
        case 'ADD_MANY_LOCATIONS':
            return [...state, ...action.locations]
        default:
            return state
    }
}