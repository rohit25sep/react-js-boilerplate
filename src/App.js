import React from 'react'
import { Provider } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import AppRoutes from 'routes'
import { history, store } from 'store/store'

const persistor = persistStore(store)

const App = () => (
  <>
    <Provider store={store}>
      <Router history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Router>
    </Provider>
  </>
)

export default App
