const SPOTIFY_CLIENT_ID = "253834aefe32421fbbe74ee485d008f0";
const SPOTIFY_CLIENT_SECRET = "2b486f6708fe4a2ea8cd8caa5d3e779d";
const PLAYLIST_ID = "2O4cLIfSjnzLKuWQe9eZIR";

const container = document.querySelector('div[data-js="tracks"]');

function fetchPlaylist(token, playlistId) {
  console.log("token: ", token);

  fetch("https://api.spotify.com/v1/playlists/2O4cLIfSjnzLKuWQe9eZIR", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.tracks && data.tracks.items) {
        data.tracks.items.forEach((item) => {
          console.log(item.track.name);
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`,
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.access_token) {
      fetchPlaylist(data.access_token, PLAYLIST_ID);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
