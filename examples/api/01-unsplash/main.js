fetch('https://api.unsplash.com/photos/random', {
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Process the fetched data here
    console.log(data);

    // display photo to the screen
    const img = document.createElement('img');
    img.src = data.urls.regular;
    img.alt = data.slug;
    const photoDiv = document.querySelector('[data-js="photo"]');
    photoDiv.appendChild(img);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.error('Error:', error);
  });