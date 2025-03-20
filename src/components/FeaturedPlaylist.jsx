import { API_DATA } from "../utils/Constants";
import axios from "axios";
import { useState } from "react";
import FeaturedItemCard from "./FeaturedItemCard";
const FeaturedPlaylist = () => {
  const [release, setNewReleases] = useState({});
  const [active, setActive] = useState(true);
  const apikey = import.meta.env.VITE_API_KEY;
  const clientSecret = import.meta.env.VITE_CLIENT_ID;
  async function getFeaturedPlayList() {
    await axios("https://accounts.spotify.com/api/token", {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientSecret + ":" + apikey),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      axios(
        "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        }
      ).then((response) => {
        setNewReleases(response);
        setActive(false);
      });
    });
  }

  return (
    <>
      {active ? (
        <div >
           <h4 className="subHeading" onClick={getFeaturedPlayList}>Show FeaturedPlaylist</h4>
        </div>
      ) : (
        <FeaturedItemCard newRelease={release} />
      )}
    </>
  );
};

export default FeaturedPlaylist;
