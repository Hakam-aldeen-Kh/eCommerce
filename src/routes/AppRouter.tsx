import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PageSuspense } from "@components/feedback";
// * layOut
import MainLayout from "@layouts/MainLayout/MainLayout";
import ProfileLayout from "@layouts/ProfileLayout/ProfileLayout";
// * Pages
import Error from "@pages/Error/Error";
const Home = lazy(() => import("@pages/Home"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Profile = lazy(() => import("@pages/Profile"));
const Orders = lazy(() => import("@pages/Orders"));
// * protected
import ProtectedRoute from "@components/Auth/ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route
        path="/"
        element={
          <PageSuspense>
            <MainLayout>
              <Home />
            </MainLayout>
          </PageSuspense>
        }
      />
      <Route
        path="categories"
        element={
          <MainLayout>
            <PageSuspense>
              <Categories />
            </PageSuspense>
          </MainLayout>
        }
      />
      <Route
        path="categories/products/:prefix"
        element={
          <MainLayout>
            <PageSuspense>
              <Products />
            </PageSuspense>
          </MainLayout>
        }
      />
      <Route
        path="about-us"
        element={
          <MainLayout>
            <PageSuspense>
              <AboutUs />
            </PageSuspense>
          </MainLayout>
        }
      />
      <Route
        path="login"
        element={
          <MainLayout>
            <PageSuspense>
              <Login />
            </PageSuspense>
          </MainLayout>
        }
      />
      <Route
        path="register"
        element={
          <MainLayout>
            <PageSuspense>
              <Register />
            </PageSuspense>
          </MainLayout>
        }
      />
      <Route
        path="cart"
        element={
          <MainLayout>
            <PageSuspense>
              <Cart />
            </PageSuspense>
          </MainLayout>
        }
      />
      <Route
        path="wishlist"
        element={
          <MainLayout>
            <ProtectedRoute>
              <PageSuspense>
                <Wishlist />
              </PageSuspense>
            </ProtectedRoute>
          </MainLayout>
        }
      />
      <Route
        path="profile"
        element={
          <MainLayout>
            <ProtectedRoute>
              <PageSuspense>
                <ProfileLayout />
              </PageSuspense>
            </ProtectedRoute>
          </MainLayout>
        }
      >
        <Route
          index
          element={
            <PageSuspense>
              <Profile />
            </PageSuspense>
          }
        />
        <Route
          path="orders"
          element={
            <PageSuspense>
              <Orders />
            </PageSuspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
