const SPOTIFY_CLIENT_ID = "67b411e20d594f30bf7a8d3bbde54285";
const SPOTIFY_CLIENT_SECRET = "161fc5e3df004b95af3ba8c62f3eaf54";
const PLAYLIST_ID = "7fXKDSXrj7RljWC4QTixrd";
const container = document.querySelector('div[data-js="tracks"]');

let tracks = [];

function fetchPlaylist(token, playlistId) {
  console.log("token: ", token);

  fetch(`https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.tracks && data.tracks.items) {
        tracks = data.tracks.items;
        addTracksToPage(data.tracks.items);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function addTracksToPage(tracks) {
  const ul = document.createElement("ul");

  tracks.forEach((track) => {
    const li = document.createElement("li");
    li.classList.add("list-item");

    // Create a span that holds the album name
    li.innerHTML = `<span class="album">Album: ${track.track.album.name}</span>`;
    const idSpan = document.createElement("span");
    idSpan.innerHTML = track.track.id;
    idSpan.dataset.id = track.track.id;
    li.appendChild(idSpan);

    if (track.track.album.name === "Ouest Side") {
      li.classList.add("highlighted");
    }

    // Create another span that holds the track name
    const trackSpan = document.createElement("span");
    trackSpan.textContent = `Track: ${track.track.name}`;
    trackSpan.classList.add("song");
    li.appendChild(trackSpan);

    ul.appendChild(li);
  });
  container.appendChild(ul);

  listenForClicks();
}

function listenForClicks() {
  const items = document.querySelectorAll("li");

  console.log("items: ", items);

  items.forEach((item) => {
    item.addEventListener("click", listen);
  });
}

function listen(event) {
  console.log("e.target: ", event.target);
  const clickedListItem = event.target.closest("li");

  const idSpan = clickedListItem.querySelector("[data-id]");
  console.log("idSpan: ", idSpan);

  // all three options will get the id in this case
  const id = idSpan.innerHTML;
  // const id = idSpan.innerText;
  // const id = idSpan.textContent;

  console.log("id: ", id);

  showSong(id);
}

function showSong(id) {
  // find song in our array
  const foundSong = tracks.find((track) => {
    return track.track.id === id;
  });

  console.log("foundSong: ", foundSong);

  const mainImage = document.createElement("img");
  const imageSrc = foundSong.track.album.images[0].url;
  const trackName = foundSong.track.name;
  console.log("trackName: ", trackName);

  console.log("imageSrc: ", imageSrc);
  mainImage.alt = "cover";
  mainImage.src = imageSrc;

  const currentSongContainer = document.querySelector('[data-js="current"]');
  currentSongContainer.innerHTML = "";
  currentSongContainer.appendChild(mainImage);
}

function fetchAccessToken() {
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${SPOTIFY_CLIENT_ID}&client_secret=${SPOTIFY_CLIENT_SECRET}`,
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.access_token) {
        fetchPlaylist(data.access_token, PLAYLIST_ID);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchAccessToken();
