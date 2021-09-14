import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";
import { Action } from ".";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.LOADING
        });

        try {
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params: {
                        text: term
                    }
                }
            )
            const names = data.objects.map((result: any) => {
                return result.package.name;
            })

            dispatch({
                type: ActionTypes.SUCCESS,
                payload: names
            })
        } catch (error: any) {
            dispatch({
                type: ActionTypes.FAIL,
                payload: error.message
            })
        }
    }
}

export const Countries = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        let env = 'https://raw.githubusercontent.com/M-Media-Group/country-json/master/src/countries-master.json'
        dispatch({
            type: ActionTypes.LOADING
        });

        try {
            axios.get(env).then((result) => {
                return dispatch({
                    type: ActionTypes.SUCCESS,
                    payload: result.data
                })
            }).catch((error) => { return dispatch({ type: ActionTypes.FAIL, payload: error }) })
        } catch (error: any) {
            dispatch({ type: ActionTypes.FAIL, payload: error.message })
        }
    }
}
