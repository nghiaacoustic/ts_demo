interface RepositoriesState {
    loading: boolean,
    error: string,
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: null
}