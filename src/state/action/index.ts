import { ActionTypes } from './ActionTypes';

interface Loading {
    type: ActionTypes.LOADING
}
interface Success {
    type: ActionTypes.SUCCESS,
    payload: string[]
}
interface Error {
    type: ActionTypes.FAIL,
    payload: string
}

export type Action = Loading | Success | Error
