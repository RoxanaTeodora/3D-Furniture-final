// import { Link } from "react-router-dom";
// import "./style.css";
// export const Navbar = () => {
//   return (
//     <div className="navbar" style={{ backgroundColor: "red", padding: "10px" }}>
//       <div>
//         <Link to="/">Home</Link>
//       </div>
//       <div>
//         <Link to="/admin">Admin</Link>
//       </div>
//       <div>
//         <Link to="/cart">Cart</Link>
//       </div>
//     </div>
//   );
// };

import { Link } from "react-router-dom";
import "./style.css";
import PropTypes from "prop-types";

export const Navbar = (props) => {
  return (
    <div
      className="navbar shadow-md max-w-screen-2xl"
      style={{
        backgroundColor: props.color ?? "transparent",
        color: props.textColor ?? "black",
      }}
    >
      <div className="logo">
        <div className="img">
          <img src="./planet-earth.png" alt="logo" />
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="menu">
        <div>
          <Link to="/admin">Admin</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};
