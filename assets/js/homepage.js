var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl)
      .then(function(response) {
          // request was successful
        if (response.ok) {
          response.json().then(function(data) {
            displayRepos(data, user);
          });
        } else {
          alert("Error: GitHub User Not Found");
        }
    })
    .catch(function(error) {
        // Notice this `.catch()` getting chained onto the end of the `.then()` method
        alert("Unable to connect to GitHub");
    });
};

  var userFormEl = document.querySelector("#user-form");
  var nameInputEl = document.querySelector("#username");

  var formSubmitHandler = function(event) {
      event.preventDefault();
      
      // get value from input element 
      var username = nameInputEl.value.trim();

      if (username) {
          getUserRepos(username);
          nameInputEl.value = "";
      } else {
          alert("Please enter a GitHub username");
      }

      console.log(event);
  };

  var displayRepos = function(repos,searchTerm) {
      if (repos.length === 0) {
          repoContainerEl.textContent = "No repositories found.";
          return;
      }
      console.log(repos);
      console.log(searchTerm);
  };
  
  userFormEl.addEventListener("submit", formSubmitHandler);