import uuid from 'uuid';

export const addLocation = (
    {
        tags = [{}],
        title = '',
        description = '',
        visited = '',
        imageName = ''
    }={}
    ) => ({
        type: 'ADD_LOCATION',
        location: {
            id: uuid(),
            tags,
            title,
            description,
            visited,
            imageName
        }
    })