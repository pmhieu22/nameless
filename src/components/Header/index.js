import { NavLink } from "react-router-dom";
import { clientRoute } from "../../constants/route.constant";
import styles from "./index.module.css";

const linkPage = [
  {
    link: clientRoute.DEFAULT,
    title: "HOME",
  },
  {
    link: clientRoute.ABOUT,
    title: "ABOUT",
  },
];

const Header = () => {
  const navLinkClass = ({ isActive }) => {
    return isActive
      ? styles["nav-link_header"] + " " + styles["activated"]
      : styles["nav-link_header"];
  };

  const listHeaderItem = linkPage.map((item) => (
    <li key={item.title}>
      <NavLink to={item.link} className={navLinkClass}>
        {item.title}
      </NavLink>
    </li>
  ));

  return (
    <>
      <div className={styles["menu-wrapper_header"]}>
        <ul>{listHeaderItem}</ul>
      </div>
    </>
  );
};

export default Header;
