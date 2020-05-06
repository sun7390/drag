import { ADD_COM } from './actionTypes'

let nextId = 0;

export const addCom = (props) => ({
    type: ADD_COM,
    id: nextId ++,
    props: props,
})