import React, {lazy, Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './main';
const Edit = lazy(() => import('./edit'));
const Form = lazy(() => import('./form'));

function App() {
  return (
      <Routes>
      <Route path={'/'} element={<Main />} />
      <Route path={'form'} element={
        <Suspense fallback={<h2>Loading...</h2>}>
          <Form />
        </Suspense>
        } />
      <Route path={'/edit'} element={
        <Suspense fallback={<h2>Loading...</h2>}>
          <Edit />
      </Suspense>} />
    </Routes>
    )
}
export default React.memo(App);