import React from "react";
// import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // const error = useRouteError();
    return (
        <div>
            <h1>OOps </h1>
            <p>An error occured </p>

            {/* <i> {error.statusText || error.message}</i> */}
        </div>
    );
};

export default ErrorPage;
