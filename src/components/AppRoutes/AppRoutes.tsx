import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Film from '../Film/Film';

import Main from '../Main/Main';

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Main/>}/>
        <Route path="film/:id" element={<Film/>}/>
    </Routes>
  )
}

export default AppRoutes;