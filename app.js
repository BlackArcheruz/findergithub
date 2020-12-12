// Init Github
const github = new GitHub;

// Init UI
const ui = new UI;

// Search Input
const searchInput = document.getElementById('searchUser');

// Search Input Event Listener
searchInput.addEventListener('keyup', (e)=>{
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTP call
        github.getUser(userText)
            .then(data=>{
                if(data.profile.message === 'Not Found'){
                    // Show Alert
                    ui.showAlert('This User Not Found','alert alert-danger fadein mt-3');
                } else{
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    }else{
        // Clear Profile
        ui.clearProfile();
    }
});