var users = {
  user1: {
    userName: "@elonmusk",
    displayName: "Elon Musk",
    joinedDate: "June 2009",
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: "assets/elonmusk.jpg",
    coverPhotoURL: "assets/elonmusk-cover.jpeg",
    tweets: [
      {
        text: "I admit to judging books by their cover",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Starship to the moon",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "Out on launch pad, engine swap underway",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
  user2: {
    userName: "@BillGates",
    displayName: "Bill Gates",
    joinedDate: "June 2009",
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: "assets/billgates.jpg",
    coverPhotoURL: "assets/billgates-cover.jpeg",
    tweets: [
      {
        text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
        timestamp: "2/10/2021 00:01:20",
      },
      {
        text: "Should I start tweeting memes? Let me know in a comment.",
        timestamp: "2/09/2021 18:37:12",
      },
      {
        text: "In 2020, I read a book every hour.",
        timestamp: "2/09/2021 12:11:51",
      },
    ],
  },
};


// Get the current URL
const currentUrl = new URL(window.location.href);

// Check if the 'user' parameter is present
if (currentUrl.searchParams.has('user')) {
  // Get the value of the 'user' parameter
  const selectedUser = currentUrl.searchParams.get('user');

  // Check if the selected user exists in the 'users' object
  if (users[selectedUser]) {
    const selectedUserData = users[selectedUser];



    const header = document.querySelector(".header");
const headerName = document.createElement("h2");
headerName.classList.add("header-name");

headerName.textContent = `${selectedUserData.displayName} `;
header.appendChild(headerName);

const iconPath = "verified-icon.png";
const icon = document.createElement("img");
icon.classList.add("icon");
icon.src = iconPath;
headerName.appendChild(icon);

const tweetCount = document.createElement("p");
tweetCount.textContent = `${selectedUserData.tweets.length} Tweets`;
header.appendChild(tweetCount);

const coverPhoto = document.createElement("img");
coverPhoto.classList.add("cover-photo");
coverPhoto.src = selectedUserData.coverPhotoURL;

const coverPhotoContainer = document.querySelector(".cover-photo-container");
coverPhotoContainer.appendChild(coverPhoto);

const profileContainer = document.querySelector(".profile-details");
const avatarContainer = document.createElement("div");
avatarContainer.classList.add("avatar-container");
profileContainer.appendChild(avatarContainer);

const avatar = document.createElement("img");
avatar.classList.add("avatar-photo");
avatar.src = selectedUserData.avatarURL;
avatarContainer.appendChild(avatar);

const leftSection = document.createElement("div");
leftSection.classList.add("left-section");
profileContainer.appendChild(leftSection);

const leftSectionDisplayName = document.createElement("h2");
leftSectionDisplayName.textContent = `${selectedUserData.displayName}`;
leftSectionDisplayName.classList.add("left-header-name");
leftSection.appendChild(leftSectionDisplayName);

const iconPath2 = "verified-icon.png";
const icon2 = document.createElement("img");
icon2.classList.add("icon-2");
icon2.src = iconPath2;
leftSectionDisplayName.appendChild(icon2);

const leftSectionUserName = document.createElement("p");
leftSectionUserName.classList.add("left-section-username");
leftSectionUserName.textContent = selectedUserData.userName;
leftSection.appendChild(leftSectionUserName);

const joinDateContainer = document.createElement("div");
joinDateContainer.classList.add("join-date-container");
leftSection.appendChild(joinDateContainer);

const calendarPath = "/assets/calendar-month.png";
const joinDateCalendar = document.createElement("img");
joinDateCalendar.classList.add("join-date-calendar");
joinDateCalendar.src = calendarPath;
joinDateContainer.appendChild(joinDateCalendar);

const joinDate = document.createElement("p");
joinDate.classList.add("join-date");
joinDate.textContent = `Joined ${selectedUserData.joinedDate}`;
joinDateContainer.appendChild(joinDate);

const followersContainer = document.createElement("div");
followersContainer.classList.add("followersContainer");
leftSection.appendChild(followersContainer);

const formatNumbers = function (number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else {
    return number.toString();
  }
};

const pair1 = `<span class="followersPair1"><span class="boldNumber">${formatNumbers(
  selectedUserData.followingCount
)}</span> <span class="followersText">Following</span></span>`;
const pair2 = `<span class="followersPair2"><span class="boldNumber">${formatNumbers(
  selectedUserData.followerCount
)}</span><span class="followersText">Followers</span></span>`;

followersContainer.innerHTML = `${pair1} ${pair2}`;

const followingBTN = document.createElement("button");
followingBTN.classList.add("following-btn");
followingBTN.textContent = "Following";
profileContainer.appendChild(followingBTN);

const linksContainer = document.createElement("div");
linksContainer.classList.add("links-container");
profileContainer.appendChild(linksContainer);

linksContainer.innerHTML = `
    <ul class="links">
      <a href="#">Tweets</a>
      <a href="#">Tweets & replies</a>
      <a href="#">Media</a>
      <a href="#">Likes</a>
    </ul>
  `;

const tweetsContainer = document.querySelector(".tweets-container");

const selectedUserTweets = selectedUserData.tweets;

selectedUserTweets.forEach(function (tweet, i) {
  console.log(tweet, i);
  const tweetDiv = document.createElement("div");
  tweetDiv.classList.add("tweet-div");
  tweetDiv.innerHTML = `
    <div class="tweet-profile-info">
      <img src="${selectedUserData.avatarURL}" class="tweet-avatar">
      <h3 class="tweet-display-name">${selectedUserData.displayName}</h3>
      <p class="tweet-username">${selectedUserData.userName} · ${selectedUserData.tweets[i].timestamp}</p>
    </div>
    <div class="tweet-text">${selectedUserData.tweets[i].text}</div>
  `;

  tweetsContainer.appendChild(tweetDiv);
});

  }
}



