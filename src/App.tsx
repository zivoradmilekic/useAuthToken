import React, { useState } from "react";

import Log from "./Log";

import useAuthToken from "./useAuthToken";

export default function App() {
  const [authToken, setAuthToken] = useState("");
  const { token, userData, addToken, removeToken } = useAuthToken("authToken");

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">useAuthToken</span>

        <form className="form-inline ml-auto">
          <a
            href="https://www.jsonwebtoken.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light my-2 my-sm-0"
          >
            Get your JWT
          </a>
        </form>
      </nav>
      <div className="wrap my-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="jumbotron">
                <h1 className="display-4">
                  Hello, {userData?.name || "world"}!
                </h1>
                <p className="lead">
                  This is a simple react hook for storing JWT token into local storage and decoding data from it.
                </p>
                <hr className="my-4" />

                <p className="lead">
                  Token string:
                </p>
                <Log token={token} />

                <p className="lead">
                  User data from token:
                </p>
                <Log userData={userData} />
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Token control</h5>
                  <p className="card-text">
                    Inset your token, add or remove from local storage.
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control mr-sm-2"
                      value={authToken}
                      onChange={e => setAuthToken(e.target.value)}
                    />
                  </div>
                  <div
                    className="btn-group" 
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        addToken(authToken);
                        setAuthToken("");
                      }}
                    >
                      Add token
                    </button>
                    <button className="btn btn-danger" onClick={removeToken}>
                      Remove token
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
