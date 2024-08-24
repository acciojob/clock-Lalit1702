//your JS code here. If required.
// Function to update the timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    
    // Formatting options
    const options = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    };
    
    // Format the date and time
    const formattedTime = now.toLocaleString('en-US', options);
    
    // Update the content of the timer element
    timerElement.innerHTML = formattedTime;
}

// Initial call to display the timer immediately
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);
