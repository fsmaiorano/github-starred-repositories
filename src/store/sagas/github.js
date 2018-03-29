import api from 'shared/api/api';
import { call, put, select } from 'redux-saga/effects';
import { Creators as GithubActions } from 'store/ducks/github';

export function* getStarredRepositoriesRequest(action) {
    try {
        const response = yield call(api.get, `/users/${action.payload.username}/starred`);
        yield put(GithubActions.getStarredRepositoriesSuccess([...response.data]));
    } catch(error) {
        yield put(GithubActions.getStarredRepositoriesError('A error occurred on load the repository.'));
    }
};

export function* setOrderBy(action) {
    try {
      yield put(GithubActions.setOrderBySuccess(action.payload.orderBy));
    } catch (err) {
        yield put(GithubActions.setOrderByError('A error occurred on set order by.'));
    }
}

export function* setFilter(action) {
    try {
      yield put(GithubActions.setFilterSuccess(action.payload.filter));
    } catch (err) {
        yield put(GithubActions.setFilterError('A error occurred on set filter.'));
    }
}