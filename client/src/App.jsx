// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import HomePage from './routes/homePage/homePage';
// import ListPage from './routes/listPage/listPage';
// import SinglePage from './routes/singlePage/singlePage';
// import ProfilePage from './routes/profilePage/profilePage';
// import Login from './routes/login/login';
// import Register from './routes/register/register';
// import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
// import NewPostPage from './routes/newPostPage/newPostPage';
// import About from './routes/about/About';
// import Contact from './routes/contact/Contact';
// import Agents from './routes/agents/Agents';
// import ForgotPassword from "./routes/forgotPassword/ForgotPassword";
// import ResetPassword from "./routes/resetPaasword/ResetPassword";
// import { Layout, RequireAuth } from './routes/layout/layout';
// import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: '/',
//           element: <HomePage />,
//         },
//         {
//           path: '/list',
//           element: <ListPage />,
//           loader: listPageLoader,
//         },
//         {
//           path: '/:id',
//           element: <SinglePage />,
//           loader: singlePageLoader,
//         },
//         {
//           path: '/login',
//           element: <Login />,
//         },
//         {
//           path: '/register',
//           element: <Register />,
//         },
//         {
//           path: '/about',
//           element: <About />,
//         },
//         {
//           path: '/contact',
//           element: <Contact />,
//         },
//         {
//           path: '/agents',
//           element: <Agents />,
//         },
//         {
//           path: '/forgot-password',
//           element: <ForgotPassword />,
//         },
//         {
//           path: '/reset-password',
//           element: <ResetPassword />,
//         },
//       ],
//     },
//     {
//       path: '/',
//       element: <RequireAuth />,
//       children: [
//         {
//           path: '/profile',
//           element: <ProfilePage />,
//           loader: profilePageLoader,
//         },
//         {
//           path: '/profile/update',
//           element: <ProfileUpdatePage />,
//         },
//         {
//           path: '/add',
//           element: <NewPostPage />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
// client/src/App.jsx








// import React from "react";
// import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
// import HomePage from "./routes/homePage/homePage";
// import ListPage from "./routes/listPage/listPage";
// import SinglePage from "./routes/singlePage/singlePage";
// import ProfilePage from "./routes/profilePage/profilePage";
// import Login from "./routes/login/login";
// import Register from "./routes/register/register";
// import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
// import NewPostPage from "./routes/newPostPage/newPostPage";
// import About from "./routes/about/About";
// import Contact from "./routes/contact/Contact";
// import Agents from "./routes/agents/Agents";
// import ForgotPassword from "./routes/forgotPassword/ForgotPassword";
// import ResetPassword from "./routes/resetPaasword/ResetPassword";
// import { Layout, RequireAuth } from "./routes/layout/layout";
// import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

// const NotFound = () => <h1>404 - Page Not Found</h1>;

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "/", element: <HomePage /> },
//         { path: "/list", element: <ListPage />, loader: listPageLoader },
//         { path: "/:id", element: <SinglePage />, loader: singlePageLoader },
//         { path: "/login", element: <Login /> },
//         { path: "/register", element: <Register /> },
//         { path: "/about", element: <About /> },
//         { path: "/contact", element: <Contact /> },
//         { path: "/agents", element: <Agents /> },
//         { path: "/forgot-password", element: <ForgotPassword /> },
//         { path: "/reset-password", element: <ResetPassword /> },
//         { path: "*", element: <NotFound /> },
//       ],
//     },
//     {
//       path: "/",
//       element: <RequireAuth />,
//       children: [
//         { path: "/profile", element: <ProfilePage />, loader: profilePageLoader },
//         { path: "/profile/update", element: <ProfileUpdatePage /> },
//         { path: "/add", element: <NewPostPage /> },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Agents from "./routes/agents/Agents";
import ForgotPassword from "./routes/forgotPassword/ForgotPassword";
import ResetPassword from "./routes/resetPaasword/ResetPassword";
import { Layout, RequireAuth } from "./routes/layout/layout";
import NotFound from "./routes/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/:id" element={<SinglePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
          <Route path="/profile/update" element={<RequireAuth><ProfileUpdatePage /></RequireAuth>} />
          <Route path="/add" element={<RequireAuth><NewPostPage /></RequireAuth>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
