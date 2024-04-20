import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/map";
import User from "../components/User";
import ProtectedRoute from "./ProtectedRoute";
function AppLayout() {
  return (
    <ProtectedRoute>
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    </ProtectedRoute>
  );
}

export default AppLayout;
