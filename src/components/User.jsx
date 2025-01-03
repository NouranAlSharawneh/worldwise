import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/fakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, userLogout } = useAuth();
  const navigate = useNavigate();

  const handleUserLogout = (e) => {
    e.preventDefault();
    userLogout();
    navigate("/");
  };

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleUserLogout}>Logout</button>
    </div>
  );
}

export default User;
