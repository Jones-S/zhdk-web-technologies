// we need to send the POST queries as FormData
// Otherwise PHP will not be able to parse the data
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
const postData = new FormData();
postData.append('method', 'GET');
postData.append('auth', '4863d854fb2b929b59cce596522ad82f');

// To get entries older than 90 days you need to use reports
// https://support.toggl.com/en/articles/5842701-how-to-view-entries-older-than-90-days
// https://engineering.toggl.com/docs/reports/detailed_reports
postData.append('endpoint', 'https://api.track.toggl.com/api/v9/me/time_entries?start_date=2024-04-01&end_date=2024-06-30');


// No need to change this
fetch("https://cors-proxy.jonasscheiwiller.ch/", {
  method: "POST",
  cache: "no-cache",
  body: postData,
})
.then((resp) => resp.json())
.then((json) => {
  console.log(json.data);

  displayData(json.data)
})
.catch(err => console.error(err));


// Change this function to change what happens with the data
function displayData(data) {
  const container = document.querySelector('[data-js="time-entries"]');
  const ul = document.createElement('ul');
  container.appendChild(ul);
  
  data.forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="entry-description">Description: ${entry.description}</div>
      <div class="entry-duration">Duration: ${entry.duration}s</div>
    `;
    ul.appendChild(li);
  });
}