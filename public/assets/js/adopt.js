// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  const changeAdoptedBtns = document.querySelectorAll('.change-adopted');

  // Set up the event listener for the create button
  if (changeAdoptedBtns) {
    changeAdoptedBtns.forEach((button) => {
      button.addEventListener('click', (e) => {

        // Grabs the id of the element that goes by the name, "id"
        const id = e.target.getAttribute('data-id');
        const newAdopt = e.target.getAttribute('data-newAdoptionStatus');

        const newAdoptionStatus = {
          adopted: newAdopt,
        };

        console.log(newAdoptionStatus)

        fetch(`/api/dogs/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          // make sure to serialize the JSON body
          body: JSON.stringify(newAdoptionStatus),
        }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
          if (response.ok) {
            console.log(`changed status to: ${newAdopt}`);
            location.reload('/');
          } else {
            alert('something went wrong!');
          }
        });
      });
    });
  }
})