import { call, put, takeEvery } from "redux-saga/effects"

import { getData } from "service/api"
import { postsActions } from "store/slices/posts/posts.slice"

// Worker Sagas
export function* onGetPosts() {
  const posts = yield call(getData)
  yield put(postsActions.fetchAllSucceeded(posts))
}

// Watcher Saga
export function* postsWatcherSaga() {
  yield takeEvery(postsActions.fetchAll.type, onGetPosts)
}

export default postsWatcherSaga
