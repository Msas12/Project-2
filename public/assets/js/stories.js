

// When user clicks add-btn
const submitStoriesBtn = document.getElementById('stories-submit');
submitStoriesBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Make the new stories object
  const newStories = {
    dog: document.getElementById('dog').value.trim(),
    body: document.getElementById('stories-box').value.trim(),
    created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
  };

  fetch('/api/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newStories),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in posting stories!', data);
      const row = document.createElement('div');
      const storiesArea = document.getElementById('stories-area');
      row.classList.add('stories');

      const dogsName = document.createElement('p');
      const storiesBody = document.createElement('p');
      const storiesDate = document.createElement('p');

      dogsName.textContent = `Dog's Name: ${data.dogName}`;
      storiesBody.textContent = `Success Story: ${data.body}`;
      storiesDate.textContent = `Created on: ${new Date(data.createdAt).toLocaleDateString()}`;

      row.appendChild(dogsName);
      row.appendChild(storiesBody);
      row.appendChild(storiesDate);

      storiesArea.prepend(row);
    });
  // .catch((error) => console.error('Error:', error));

  // Empty the input box
  document.getElementById('dog').value = '';
  document.getElementById('stories-box').value = '';
});

// When the page loads, grab and display all "stories"
// Send the GET request with the fetch API

fetch('/api/all', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Successful GET all stories:', data);
    data.map(({ dogName, body, createdAt }) => {
      const row = document.createElement('div');
      const storiesArea = document.getElementById('stories-area');
      row.classList.add('stories');

      const dogsName = document.createElement('p');
      const storiesBody = document.createElement('p');
      const storiesDate = document.createElement('p');
      dogsName.textContent = `Dog's Name: ${dogName}`;
      storiesBody.textContent = `Sucess Story: ${body}`;
      storiesDate.textContent = `Created on: ${new Date(createdAt).toLocaleDateString()}`;

      row.appendChild(dogsName);
      row.appendChild(storiesBody);
      row.appendChild(storiesDate);

      storiesArea.prepend(row);
    });
  })
  .catch((err) => console.error(err));