
// sign out 
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

const profileBadge = document.querySelector('.profile-badge');
const loginContainer = document.querySelector('.login-container');

profileBadge.addEventListener('click', (event) => {
    // Check if the click is on the profile badge itself
    if (event.target === profileBadge || event.target.matches('.profile-pic')) {
        if (window.innerWidth > 1290) {
            if (loginContainer.style.display === 'block') {
                loginContainer.style.display = 'initial';
                loginContainer.style.top = '130px';
            } else {
                loginContainer.style.display = 'block';
                loginContainer.style.top = '180px';
            }
        }
    }
});

function toggleDropdown(event) {
    const dropdown = event.currentTarget.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (window.innerWidth > 1290 && !event.target.matches('.profile-badge') && !event.target.matches('.profile-pic')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");

        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
        // Reset the login container position when dropdown is closed
        loginContainer.style.display = 'initial';
        loginContainer.style.top = '130px'; // Reset to initial position
    }
} 