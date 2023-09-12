import PageLayout from "./pages/pageLayout/PageLayout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import BookPage from "./pages/bookPage/BookPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import NotFound from "./pages/notFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/book/:id" element={<BookPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
