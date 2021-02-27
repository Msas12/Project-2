// When user clicks add-btn
const submitStoriesBtn = document.getElementById('stories-submit');
submitStoriesBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Make the new stories object
  const newStories = {
    dog: document.getElementById('dog').value.trim(),
    body: document.getElementById('stories-box').value.trim(),
    created_at: new Date(),
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

      const dogName = document.createElement('p');
      const storiesBody = document.createElement('p');
      const storiesDate = document.createElement('p');

      dogName.textContent = `${data.dog} stories: `;
      storiesBody.textContent = `${data.body}`;
      storiesDate.textContent = `At ${new Date(
        data.created_at
      ).toLocaleDateString()}`;

      row.appendChild(dogName);
      row.appendChild(storiesBody);
      row.appendChild(storiesDate);

      storiesArea.prepend(row);
    });
  // .catch((error) => console.error('Error:', error));

  // Empty the input box
  document.getElementById('dog').value = '';
  document.getElementById('stories-box').value = '';
});

// When the page loads, grab and display all "storiess"
// Send the GET request with the fetch API (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

fetch('/api/all', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Successful GET all stories:', data);
    data.map(({ dog, body, created_at }) => {
      const row = document.createElement('div');
      const storiesArea = document.getElementById('stories-area');
      row.classList.add('stories');

      const dogName = document.createElement('p');
      const storiesBody = document.createElement('p');
      const storiesDate = document.createElement('p');
      dogName.textContent = `${dog} stories: `;
      storiesBody.textContent = `${body}`;
      storiesDate.textContent = `At ${new Date(created_at).toLocaleDateString()}`;

      row.appendChild(dogName);
      row.appendChild(storiesBody);
      row.appendChild(storiesDate);

      storiesArea.prepend(row);
    });
  })
  .catch((err) => console.error(err));
