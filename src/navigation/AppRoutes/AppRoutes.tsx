import { Routes, Route, Navigate } from "react-router-dom";
import { postsRoute } from "../routes";
import PageNotFound from "~/pages/PageNotFound";
import PostsPage from "~/pages/PostsPage";
import PostDetailsPage from "~/pages/PostDetailsPage";

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Navigate replace to={postsRoute} />} />
    <Route path={postsRoute} element={<PostsPage />} />
    <Route path={`${postsRoute}/:id`} element={<PostDetailsPage />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
export default AppRoutes;
