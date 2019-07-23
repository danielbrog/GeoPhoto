import uuid from 'uuid';

export default addLocation = (
    {
        tags = [{}],
        description = '',
        visited = '',
        imageName = ''
    }={}
    ) => ({
        type: 'ADD_LOCATION',
        location: {
            id: uuid(),
            tags,
            description,
            visited,
            imageName
        }
    })