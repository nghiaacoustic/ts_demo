import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./ActionTypes";
import { Action } from ".";

const searchRepositories = (term: string) => {
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
        } catch (error) {

        }
    }
}