import React, {lazy, Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './main';
import Edit from './edit';
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
          <Route path={'form/edit'} element={<Edit />} />
      </Routes>
    )
}
export default React.memo(App);