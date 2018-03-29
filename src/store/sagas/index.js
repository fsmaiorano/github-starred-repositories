import { all, takeLatest } from 'redux-saga/effects';

import { Types as GithubTypes } from 'store/ducks/github';
import { getStarredRepositoriesRequest, setActiveFilter } from './github';

export default function* rootSaga() {
  return yield all([
    takeLatest(GithubTypes.GET_STARRED_REPOSITORIES, getStarredRepositoriesRequest),
    takeLatest(GithubTypes.SET_FILTER, setActiveFilter),
  ]);
}
