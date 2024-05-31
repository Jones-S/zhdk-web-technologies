function fetchAccessToken(id, secret) {
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${id}&client_secret=${secret}&scope=streaming user-read-email user-read-private`,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.access_token) {
        createPlayer(data.access_token);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function createPlayer(token) {
  const player = new window.Spotify.Player({
    name: "Web Playback SDK",
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });

  player.addListener("ready", ({ device_id }) => {
    console.log("The Web Playback SDK is ready to play music!");
    console.log("Device ID", device_id);
  });

  player.connect().then((success) => {
    if (success) {
      console.log("The Web Playback SDK successfully connected to Spotify!");
    }
  });
}

function authorize(id, secret) {
  var state = (Math.random() + 1).toString(36).substring(7);
  var scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: id,
        scope: "streaming user-read-email user-read-private",
        redirect_uri: "http://localhost:3000/api/04-spotify-play/",
        state: state,
      })
  );

  fetchAccessToken(id, secret);
}

window.onSpotifyWebPlaybackSDKReady = () => {
  // Fetch the environment variables from the server
  fetch("/env")
    .then((response) => response.json())
    .then((data) => {
      const id = data.SPOTIFY_CLIENT_ID;
      const secret = data.SPOTIFY_CLIENT_SECRET;
      authorize(id, secret);
    })
    .catch((error) => {
      console.error("Error fetching environment variables", error);
    });
};
