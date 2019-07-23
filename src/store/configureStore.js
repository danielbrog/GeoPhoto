import { createStore, combineReducers} from 'redux'
import locationReducer from '../reducers/locations'

export default () => {

    const store = createStore(
        combineReducers({
            locations: locationReducer
        })
    )

    return store
}