const locationDefaultState = [{
    id: '34',
    tags: ['cliff'],
    title: 'cool cliff',
    description: 'cliffface',
    visited: true,
    imageName: '3434'
},{
    id: '45',
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
        default:
            return state
    }
}