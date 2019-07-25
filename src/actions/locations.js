import uuid from 'uuid';

export const addLocation = (
    {
        tags = [""],
        title = '',
        description = '',
        visited = '',
        imageName = ''
    } = {}
) => ({
    type: 'ADD_LOCATION',
    location: {
        _id: uuid(),
        tags,
        title,
        description,
        visited,
        imageName
    }
})

export const addManyLocations = (
    {
    locations = []
    } = {}
) => ({
    type: 'ADD_MANY_LOCATIONS',
    locations
})

export const setLocations = (
    {
        locations = []
    } = {}
) => ({
    type: 'SET_LOCATIONS',
    locations
})