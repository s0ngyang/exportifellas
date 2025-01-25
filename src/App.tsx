import "./App.scss";
import "./icons";

import React, { useState } from "react";
import { useTranslation, Translation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "url-search-params-polyfill";

import Login from "components/Login";
import PlaylistTable from "components/PlaylistTable";
import { getQueryParam } from "helpers";
import TopMenu from "components/TopMenu";

function App() {
  useTranslation();
  const [subtitle, setSubtitle] = useState(
    <Translation>{(t) => t("tagline")}</Translation>
  );

  let view;
  let key = new URLSearchParams(window.location.hash.substring(1));

  const onSetSubtitle = (subtitle: any) => {
    setSubtitle(subtitle);
  };

  if (getQueryParam("spotify_error") !== "") {
    view = (
      <div id="spotifyErrorMessage" className="lead">
        <p>
          <FontAwesomeIcon
            icon={["fas", "bolt"]}
            style={{ fontSize: "50px", marginBottom: "20px" }}
          />
        </p>
        <p>
          Oops, Exportify has encountered an unexpected error (5XX) while using
          the Spotify API. This kind of error is due to a problem on Spotify's
          side, and although it's rare, unfortunately all we can do is retry
          later.
        </p>
        <p style={{ marginTop: "50px" }}>
          Keep an eye on the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://status.spotify.dev/"
          >
            Spotify Web API Status page
          </a>{" "}
          to see if there are any known problems right now, and then{" "}
          <a rel="noreferrer" href="?">
            retry
          </a>
          .
        </p>
      </div>
    );
  } else if (key.has("access_token")) {
    view = (
      <PlaylistTable
        accessToken={key.get("access_token")!}
        onSetSubtitle={onSetSubtitle}
      />
    );
  } else {
    view = <Login />;
  }

  return (
    <div className="App container">
      <header className="App-header">
        <div className="d-sm-none d-block mb-5" />
        <TopMenu loggedIn={key.has("access_token")} />
        <h1>
          <FontAwesomeIcon
            icon={["fab", "spotify"]}
            color="#84BD00"
            size="sm"
          />{" "}
          <a href={process.env.PUBLIC_URL}>Exportifellas</a>
        </h1>

        <p id="subtitle" className="lead text-secondary">
          {subtitle}
        </p>
      </header>

      {view}
    </div>
  );
}

export default App;
