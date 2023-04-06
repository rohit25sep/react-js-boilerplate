import { call, put, takeEvery } from "redux-saga/effects"

import { axiosGet } from "service/api/configureAxios"
import { postsActions } from "store/slices/posts/posts.slice"

// Worker Sagas
export function* onGetPosts() {
  const posts = yield call(axiosGet,"/comments")
  yield put(postsActions.fetchAllSucceeded(posts.data))
}

// Watcher Saga
export function* postsWatcherSaga() {
  yield takeEvery(postsActions.fetchAll.type, onGetPosts)
}

export default postsWatcherSaga
