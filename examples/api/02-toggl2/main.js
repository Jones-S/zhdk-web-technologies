const username = '4863d854fb2b929b59cce596522ad82f';
const password = 'api_token';

fetch('https://cors-proxy.jonasscheiwiller.ch/proxy.php', {
  method: 'POST',
  headers: {
    'X-Proxy-URL': 'https://api.track.toggl.com/reports/api/v3/workspace/8386736/search/time_entries',
    "Referer": "http://localhost",
    'Authorization': 'Basic ' + btoa(`${username}:${password}`)
  },
  body: JSON.stringify({
    "start_date": "2024-01-01",
    "end_date": "2024-06-01",
    "project_ids": [202986601]
  })
})
.then((resp) => resp.json())
.then((json) => {
  console.log(json);

  displayData(json)
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
      <div class="entry-duration">Project ID: ${entry.project_id}</div>
    `;
    ul.appendChild(li);
  });
}