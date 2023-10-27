import { Link } from "react-router-dom"

const Intro = () => {
 
  return (

    <div className="rowBackground">
      <div id="top"></div>

      <div className="deakin">
          <Link to='/'>
            DEV@Deakin
          </Link>
      </div>

      <div className="searchBox">
        <input type="text" className="searchBar" placeholder="Search" />
      </div>

      <div className="buttons">
        <Link to='post'>
          <button className="postButton" value="Post">
            Post
          </button>
        </Link>

        <Link to='login'>
          <button className="loginButton" value="Login">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;