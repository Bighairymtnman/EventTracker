// Add a submit event listener to the form
document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get form values
    const title = document.getElementById('eventTitle').value;
    const date = document.getElementById('eventDate').value;
    const description = document.getElementById('eventDescription').value;

    // Select the event list container
    const eventList = document.getElementById('eventList');
    
    // Create a new list item for the event
    const li = document.createElement('li');

    // Populate the list item with event details
    li.innerHTML = `
        <strong>${title}</strong><br>
        <span>${date}</span><br>
        <p>${description}</p>
    `;

    // Create a Remove button for this event
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove"; // Button text
    removeBtn.classList.add('remove-btn'); // Add styling class

    // Add functionality to the Remove button
    removeBtn.addEventListener('click', function() {
        eventList.removeChild(li); // Remove the current list item
    });

    // Attach the button to the list item
    li.appendChild(removeBtn);

    // Add the list item to the event list
    eventList.appendChild(li);

    // Reset the form fields after submission
    document.getElementById('eventForm').reset();
});
