import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import SharedLayout from "./SharedLayout/SharedLayout";
import { Loader } from "./Loader/Loader";
import { HomePage } from "pages/Home/HomePage";

const CatalogPage = lazy(() => import("pages/Catalog/CatalogPage"));
const FavoritesPage = lazy(() => import("pages/Favorites/FavoritesPage"));


export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='*' element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
};

