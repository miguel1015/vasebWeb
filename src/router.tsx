import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/Home/HomePage";
import CatalogPage from "@/pages/Catalog/CatalogPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "catalogo", element: <CatalogPage /> },
    ],
  },
]);
