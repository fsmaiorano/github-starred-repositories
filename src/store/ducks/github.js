export const Types = {
    GET_STARRED_REPOSITORIES: 'github/GET_STARRED_REPOSITORIES',
    GET_STARRED_REPOSITORIES_SUCCESS: 'github/GET_STARRED_REPOSITORIES_SUCCESS',
    GET_STARRED_REPOSITORIES_ERROR: 'github/GET_STARRED_REPOSITORIES_ERROR',

    SET_ORDERBY: 'github/SET_ORDERBY',
    SET_ORDERBY_SUCCESS: 'github/SET_ORDERBY_SUCCESS',
    SET_ORDERBY_ERROR: 'github/SET_ORDERBY_ERROR',

    SET_FILTER: 'github/SET_FILTER',
    SET_FILTER_SUCCESS: 'github/SET_FILTER_SUCCESS',
    SET_FILTER_ERROR: 'github/SET_FILTER_ERROR',
};

const initialState = {
    repositories: [],
    isLoading: false,
    filter: '',
    orderBy: ''
};

//Reducers
export default function github(state = initialState, action) {
    switch (action.type) {


        //OrderBy
        case Types.SET_ORDERBY:
            return {
                ...state,
                isLoading: true,
            }

        case Types.SET_ORDERBY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orderBy: action.payload.orderBy,
            }

        case Types.SET_ORDERBY_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message,
            }

        //Filter
        case Types.SET_FILTER:
            return {
                ...state,
                isLoading: true,
            }

        case Types.SET_FILTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                filter: action.payload.filter,
            }

        case Types.SET_FILTER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message,
            }

        //Repositories
        case Types.GET_STARRED_REPOSITORIES:
            return {
                ...state,
                isLoading: true,
            };

        case Types.GET_STARRED_REPOSITORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                repositories: action.payload.github.repositories,
                languages: action.payload.github.languages,
            }

        case Types.GET_STARRED_REPOSITORIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.message,
            }

        default: return state;
    }
}

//Actions
export const Creators = {
    //OrderBy
    setOrderBy: orderBy => ({
        type: Types.SET_ORDERBY,
        payload: {
            orderBy,
        }
    }),

    setOrderBySuccess: orderBy => ({
        type: Types.SET_ORDERBY_SUCCESS,
        payload: {
            orderBy,
        }
    }),

    setOrderByError: message => ({
        type: Types.SET_ORDERBY_ERROR,
        payload: {
            message,
        }
    }),

    //Filter
    setFilter: filter => ({
        type: Types.SET_FILTER,
        payload: {
            filter,
        }
    }),


    setFilterSuccess: filter => ({
        type: Types.SET_FILTER_SUCCESS,
        payload: {
            filter,
        }
    }),

    setFilterError: message => ({
        type: Types.SET_FILTER_ERROR,
        payload: {
            message,
        }
    }),

    //Repositories
    getStarredRepositoriesRequest: username => ({
        type: Types.GET_STARRED_REPOSITORIES,
        payload: {
            username,
        },
    }),

    getStarredRepositoriesSuccess: github => ({
        type: Types.GET_STARRED_REPOSITORIES_SUCCESS,
        payload: {
            github,
        },
    }),

    getStarredRepositoriesError: message => ({
        type: Types.GET_STARRED_REPOSITORIES_ERROR,
        payload: {
            message,
        },
    }),
};