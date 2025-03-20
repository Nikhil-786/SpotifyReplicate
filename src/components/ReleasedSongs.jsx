import ItemsCards from "./ItemsCards";
import { useState } from "react";

import axios from "axios";
const ReleasedSongs = () => {
  const [release, setNewReleases] = useState({});
  const [active, setActive] = useState(true);
  const apikey = import.meta.env.VITE_API_KEY;
  const clientSecret = import.meta.env.VITE_CLIENT_ID;
  async function getPlayListDetails() {
    await axios("https://accounts.spotify.com/api/token", {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientSecret + ":" + apikey),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      axios("https://api.spotify.com/v1/browse/new-releases", {
        method: "GET",
        headers: { Authorization: `Bearer ${tokenResponse.data.access_token}` },
      }).then((response) => {
        setNewReleases(response);
        setActive(false);
      });
    });
  }

  return (
    <>
      {active ? (
        <div>
        <h4  className="subHeading" onClick={getPlayListDetails}>Show ReleasedSongs</h4>
        </div>
      ) : (
        <ItemsCards itemsCards={release} />
      )}
    </>
  );
};

export default ReleasedSongs;
