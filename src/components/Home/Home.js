import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="mb-3 mt-3">
        <p class="description">Go to [create] screen 💯</p>
        <button class="btn-home">
          <Link to="/create" style={{color: 'white', textDecoration: 'none'}}><span>create</span></Link>
        </button>
      </div>

      <div className="mb-3 mt-3">
        <p class="description">Go to [obtain all] screen 📌</p>
        <button class="btn-home">
        <Link to="/obtain-all" style={{color: 'white', textDecoration: 'none'}}><span>obtain all</span></Link>
        </button>
      </div>

      <div className="mb-3 mt-3">
        <p class="description">Go to [filter] screen 🔍</p>
        <button class="btn-home">
        <Link to="/filter" style={{color: 'white', textDecoration: 'none'}}><span>filter</span></Link>
        </button>
      </div>

      
    </Fragment>
  );
};

export default Home;
