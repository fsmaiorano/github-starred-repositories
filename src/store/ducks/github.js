export const Types = {
    GET_STARRED_REPOSITORIES: 'github/GET_STARRED_REPOSITORIES',
    GET_STARRED_REPOSITORIES_SUCCESS: 'github/GET_STARRED_REPOSITORIES_SUCCESS',
    GET_STARRED_REPOSITORIES_ERROR: 'github/GET_STARRED_REPOSITORIES_ERROR',
};

const initialState = {
    repositories: [],
    isLoading: false,
};

//Reducers
export default function github(state = initialState, action) {
    switch (action.type) {
        case Types.GET_STARRED_REPOSITORIES:
            return {
                ...state,
                isLoading: true,
            };
        case Types.GET_STARRED_REPOSITORIES_SUCCESS:
        return {
            ...state,
            isLoading: false,
            repositories:  action.payload.repositories 
        }
        default: return state;
    }
}

//Actions
export const Creators = {
    getStarredRepositoriesRequest: username => ({
        type: Types.GET_STARRED_REPOSITORIES,
        payload: {
            username,
        },
    }),

    getStarredRepositoriesSuccess: repositories => ({
        type: Types.GET_STARRED_REPOSITORIES_SUCCESS,
        payload: {
            repositories,
        },
    }),

    getStarredRepositoriesError: message => ({
        type: Types.GET_STARRED_REPOSITORIES_ERROR,
        payload: {
            message,
        },
    }),
};