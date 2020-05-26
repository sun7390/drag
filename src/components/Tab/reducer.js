import { ADD_COM } from './actionTypes'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_COM: {
            return [
                ...state,
                {
                    id:  action.id,
                    props: action.props
                }
            ]
        }
        default: {
            return state
        }
    }
}
