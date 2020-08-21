import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="Home">
        <Link to="/album/1">
            View Album
        </Link>
    </div>
  );
}

export default Home;
