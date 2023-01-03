import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <Link className="logo-container">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Navigation;
