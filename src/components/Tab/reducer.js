import { ADD_COM } from './actionTypes'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_COM: {
            return [
                {
                    id:  action.id,
                    props: action.props
                },
                ...state
            ]
        }
        default: {
            return state
        }
    }
}
