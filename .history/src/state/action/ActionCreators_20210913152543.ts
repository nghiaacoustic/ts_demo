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
                payload: error
            })
        }
    }
}
export default searchRepositories
