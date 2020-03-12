/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/devjaymoe')
.then(response => {
  daddy.append(cardComponent(response))
})
.catch(error => {
  console.log('The data was not recieved:', error)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardComponent(object){
  const house = document.createElement('div'),
        img = document.createElement('img'),
        infoContainer = document.createElement('div'),
        userName = document.createElement('h3'),
        githubName = document.createElement('p'),
        location = document.createElement('p'),
        url = document.createElement('p'),
        urlLink = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');
  // give elements some stuff
  img.src = object.data.avatar_url;
  userName.textContent = object.data.name;
  githubName.textContent = object.data.login;
  location.textContent = object.data.location;
  url.textContent = 'Profile: ';
  urlLink.textContent = object.data.html_url;
  followers.textContent = object.data.followers;
  following.textContent = object.data.following;
  bio.textContent = object.data.bio;
  // give elements some classes
  house.classList.add('card');
  infoContainer.classList.add('card-info');
  userName.classList.add('name');
  githubName.classList.add('username');
  // put that stuff together
  house.append(img, infoContainer);
  infoContainer.append(userName, githubName, location, url, followers, following, bio);
  url.append(urlLink);
  // return that stuff
  return house      
}

const daddy = document.querySelector('.cards');


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
