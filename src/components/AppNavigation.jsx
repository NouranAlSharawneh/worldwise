import { NavLink } from "react-router-dom";
import { nav } from "./AppNavigation.module.css";
function AppNavigation() {
  return (
    <div className={nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNavigation;
