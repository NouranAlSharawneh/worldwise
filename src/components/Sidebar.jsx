import { Outlet } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNavigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
