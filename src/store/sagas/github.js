import api from 'shared/api/api';
import { mapKeys } from 'lodash/mapKeys';
import { DateFormat } from 'shared/helpers';
import { call, put, select } from 'redux-saga/effects';
import { Creators as GithubActions } from 'store/ducks/github';

export function* getStarredRepositoriesRequest(action) {
    try {
        const response = yield call(api.get, `/users/${action.payload.username}/starred`);

        if (response.data.length === 0) {
            yield put(GithubActions.getStarredRepositoriesError('User not found!'));
        }
        else {

            const repositories = response.data.map((repo) => {
                return Object.assign({}, repo, {
                    name: repo.name.toLowerCase(),
                    description: !repo.description ? "[No description]" : repo.description,
                    language: !repo.language ? "[No language]" : repo.language,
                    pushed_at: DateFormat(repo.pushed_at),
                    created_at: DateFormat(repo.created_at),
                });
            });

            let languages = response.data.map((repo) => {
                if (!repo.language)
                    repo.language = "[No language]";

                return repo.language;
            });

            languages = [...new Set(languages)];

            yield put(GithubActions.getStarredRepositoriesSuccess({ repositories: [...repositories], languages: languages }));
        }
    } catch (error) {
        yield put(GithubActions.getStarredRepositoriesError('A error occurred on load the repository. Please, try again!'));
    }
};

export function* setOrderBy(action) {
    try {
        yield put(GithubActions.setOrderBySuccess(action.payload.orderBy));
    } catch (err) {
        yield put(GithubActions.setOrderByError('A error occurred on set order by. Please, try again!'));
    }
}

export function* setFilter(action) {
    try {
        yield put(GithubActions.setFilterSuccess(action.payload.filter));
    } catch (err) {
        yield put(GithubActions.setFilterError('A error occurred on set filter. Please, try again!'));
    }
}

