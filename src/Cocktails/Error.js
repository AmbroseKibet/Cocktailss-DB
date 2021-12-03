import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
      <h1 className="text-center">Ooops! Dead End</h1>
      <div className="error-container">
        <Link className="btn-primary btn text-center error-link" to="/">
          Back_Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
