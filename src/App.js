import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Posts";
import LogIn from "./pages/login/LogIn";
import CreateAccount from "./pages/registration/CreateAccount";
import MyProfile from "./pages/myprofile/MyProfile";
import Layout from "./components/Layout";
import RequireAuth from "./hoc/RequireAuth";
import {AuthProvider} from './hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<RequireAuth><About /></RequireAuth>} />
          <Route path="users" element={ <RequireAuth><Users /></RequireAuth> } />
          <Route path="posts" element={ <RequireAuth><Posts /></RequireAuth> } />
          <Route path="myprofile" element={ <RequireAuth><MyProfile /></RequireAuth> } />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<LogIn />} />
          <Route path="registor" element={<CreateAccount />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App;
