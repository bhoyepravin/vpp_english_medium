import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import AdmissionForm from "./Pages/Admission/AdmissionForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index="/" element={<Home />} />
        <Route path="/admission" element={<AdmissionForm />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
