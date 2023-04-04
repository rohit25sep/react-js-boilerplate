import { all, fork } from 'redux-saga/effects'

import { postsWatcherSaga } from 'store/slices/posts/posts.sagas'

export function* rootSaga() {
  yield all([fork(postsWatcherSaga)])
}

export default rootSaga
