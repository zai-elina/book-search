import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectedBookSelector } from "../../store/selectors/dataSelector";

const ProtectedRoot = () => {
  const selectedBook = useSelector(selectedBookSelector);
  if (!selectedBook) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoot;
