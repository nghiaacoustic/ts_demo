import { Action } from "../action"
import { ActionTypes } from "../action/ActionTypes"

interface RepositoriesState {
    loading: boolean,
    error: string | null,
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.LOADING:
            return { loading: true, error: null, data: [] }
        case ActionTypes.SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionTypes.FAIL:
            return { loading: true, error: action.payload, data: [] }
        default:
            return state
    }
}