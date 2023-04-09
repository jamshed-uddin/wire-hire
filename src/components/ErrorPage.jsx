import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { data, status, statusText } = useRouteError();

  const err = useRouteError();

  return (
    <div className="h-screen flex items-center justify-center bg-white-smoke">
      <div className="text-center">
        <p>
          <FontAwesomeIcon className="text-7xl " icon={faFaceDizzy} />
        </p>
        <h1 className="text-7xl font-extrabold">{status}</h1>
        <p className="text-2xl font-semibold">{statusText}</p>
        <p className="text-2xl font-semibold text-dark-grey">{data}</p>

        <Link to="/">
          <button className="my-btn">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
