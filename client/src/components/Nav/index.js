import React from "react";

function Nav(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <a className="navbar-brand" href="/">Google Books</a>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item">
    //         <a className="nav-link" href="/">Search <span className="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/saved">Saved</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Google Book</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">Search <span class="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/saved">Saved</a>
        </div>
      </div>
    </nav>




  );
}

export default Nav;
