import { useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router";
import GeneraCategoryItems from "./GeneraCategoryItems";
const BrowseGenres = () => {
  const [release, setNewReleases] = useState({});
  const [active, setActive] = useState(true);
  const apikey = import.meta.env.VITE_API_KEY;
  const clientSecret = import.meta.env.VITE_CLIENT_ID;
  async function getGenerePlayList() {
    await axios("https://accounts.spotify.com/api/token", {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientSecret + ":" + apikey),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      axios(
        "https://api.spotify.com/v1/browse/categories",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        }
      ).then((response) => {
        console.log(response);
        setNewReleases(response);
        setActive(false);
      });
    });
  }

  return (
    <>
      {active ? (
        <div >
          <h4 className="subHeading" onClick={getGenerePlayList}>Show Generes</h4>
        </div>
      ) : (
        <GeneraCategoryItems newRelease={release} />
      )}
    </>
  );
};

export default BrowseGenres
