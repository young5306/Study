import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../../src/pages/home";
import PostPage from "../../src/pages/post";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
      <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>} />
      <Route path="/profile" element={<h1>Profile Page</h1>} />
      <Route path="/profile/edit" element={<h1>Profile Edit Page</h1>} />
      <Route path="/notifications" element={<h1>Notifications Page</h1>} />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/users/login" element={<h1>Login Page</h1>} />
      <Route path="/users/signup" element={<h1>Signup Page</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
