import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout'

const HomePage = React.lazy(() => import('view/HomePage'))

const AppRoutes = () => (
  <>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  </>
)

export default AppRoutes
