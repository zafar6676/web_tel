const DATA = [
  {
    id: 1,
    name: "Muhammad",
    phone: "+998 90 1234567",
    photo: "http://picsum.photos/100",
    username: "@muhammadyunus",
    bio: "Ramazon oxirigacha savollarga 01:00dan 03:00gacha javob yoziladi.",
    messages: [
      {
        body: "Salom qalaysan?",
        isMine: true
      },
      {
        body: "Yaxshi rahmat",
        isMine: false
      }
    ]
  },
  {
    id: 2,
    name: "Adham",
    phone: "+998901234567",
    photo: "http://picsum.photos/100",
    username: "@adham",
    bio: "15 y.o web developer",
    messages: [
      {
        body: "Salom",
        isMine: true
      },
      {
        body: "Yaxshi rahmat",
        isMine: false
      }
    ]
  }
];

let usersListElement = document.querySelector('.users-list');
let messagesList = document.querySelector('.messages-list');
let messageTextInput = document.querySelector('.message-text');
let chatList = document.querySelector('.chatButton');
let chatName = document.querySelector('.chatName');
let userName = document.querySelector(".userName");
let userBio = document.querySelector(".info_bio");
let userPhone = document.querySelector(".info_phone");
let userUsername = document.querySelector(".info_username");
let userImage = document.querySelector(".info_image");
let currentChat = 1;

renderUsers(usersListElement, DATA);



function renderUsers(parentElement, data){
  for(let user of data){
    let newLiElement = document.createElement('li');
    let newDateElement = document.getElementsByClassName("date");
    
    newLiElement.textContent = user.name;
    

    newLiElement.addEventListener('click', event =>{
      renderMessages(messagesList, user.messages);
      currentChat = user.id;
      userNameChange(user.name);
      userBioChange(user.bio);
      userPhoneChange(user.phone);
      userUsernameChange(user.username);
      userChangePhoto(user.photo);
      messageTextInput.disabled = false;
    });
    parentElement.appendChild(newLiElement);
    newLiElement.classList.add('chatButton');
    newDateElement.innerHTML = "00:02";
    
  }
}

function userChangePhoto(photo){
  userImage.src = photo;
}

function userUsernameChange(username){
  userUsername.textContent = username;
}

function userBioChange(bio) {
  userBio.textContent = bio;
}

function userNameChange(name) {
  chatName.textContent = name;
  userName.textContent = name;
}

function userPhoneChange(phone){
  userPhone.textContent = phone;
}

function renderMessages(parentElement, data){
  myList.textContent = '';
  for(let message of data){
    let newLiElement = document.createElement('li');
    newLiElement.innerHTML = message.body;
    newLiElement.classList.add("msg");
    newLiElement.classList.add("messageReceived");
    // parentElement.appendChild(newLiElement);
    document.getElementById('myList').appendChild(newLiElement);
  }
}

messageTextInput.addEventListener('keyup', event =>{
  if(event.keyCode == 13){
    if(messageTextInput.value == 0) return;
    let messageBody = event.target.value;
    let userData = DATA.find(user => user.id == currentChat);
    // malumot[userIndex] = userData;
    // localStorage.setItem("data", JSON.stringify(malumot))
    userData.messages.push({
      body: messageBody,
      isMine: true
    });
    renderMessages(messagesList, userData.messages);
    event.target.value = "";
  }
});
