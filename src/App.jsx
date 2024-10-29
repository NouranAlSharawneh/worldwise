import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import PageNavigation from "./components/PageNavigation";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage>
                <PageNavigation />
              </HomePage>
            }
          />
          <Route
            path="product"
            element={
              <Product>
                <PageNavigation />
              </Product>
            }
          />
          <Route
            path="pricing"
            element={
              <Pricing>
                <PageNavigation />
              </Pricing>
            }
          />
          <Route
            path="login"
            element={
              <Login>
                <PageNavigation />
              </Login>
            }
          />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />}></Route>
            <Route path="cities" element={<CityList />}></Route>
            <Route path="cities/:id" element={<City />}></Route>
            <Route path="countries" element={<CountryList />}></Route>
            <Route path="form" element={<Form />}></Route>
          </Route>

          <Route
            path="*"
            element={
              <>
                <PageNavigation />
                <PageNotFound />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
