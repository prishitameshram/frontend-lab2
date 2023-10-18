document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const aboutButton = document.getElementById('aboutButton');

    aboutButton.addEventListener('click', function() {
        const aboutSection = document.getElementById('about');
        aboutSection.style.display = 'block';
    });

    // Function to display the contact alert
    function showAlert() {
        alert('Please mail me at pmeshram@hawk.iit.edu');
    }

    const screenWidthElement = document.getElementById("screen-width-value");
    if (screenWidthElement) {
        screenWidthElement.textContent = "Screen width is " + screen.width;
    }

    // Get the user's location and display it in the "Contact" section.
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLocation = document.getElementById("userLocation");
                if (userLocation) {
                    userLocation.textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
                }
            }, function(error) {
                const userLocation = document.getElementById("userLocation");
                if (userLocation) {
                    userLocation.textContent = "Location information unavailable.";
                }
            });
        } else {
            const userLocation = document.getElementById("userLocation");
            if (userLocation) {
                userLocation.textContent = "Geolocation is not supported by your browser.";
            }
        }
    }

    getLocation();
});
