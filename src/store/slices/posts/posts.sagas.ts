import { SagaIterator } from '@redux-saga/core'
import { call, put, takeEvery } from 'redux-saga/effects'

import { Post } from 'models/postsModel'
import { getData } from 'service/api'
import { postsActions } from 'store/slices/posts/posts.slice'



// Worker Sagas
export function* onGetPosts(): SagaIterator {
  const posts: Post[] = yield call(getData)
  yield put(postsActions.fetchAllSucceeded(posts))
}

// Watcher Saga
export function* postsWatcherSaga(): SagaIterator {
  yield takeEvery(postsActions.fetchAll.type, onGetPosts)
}

export default postsWatcherSaga
