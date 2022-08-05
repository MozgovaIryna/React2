let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how you!", likesCount: 12 },
        { id: 2, message: "Hi, well!", likesCount: 13 },
        { id: 3, message: "Hi, I love you!", likesCount: 10 },
        { id: 4, message: "Hi, I love you!", likesCount: 18 },
        { id: 5, message: "Hi, I love you!", likesCount: 19 },
      ],
      newPostText: "it"
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Anna",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/22/11/00/emoticon-1611718_960_720.png",
        },
        {
          id: 2,
          name: "Vlada",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/29/11/55/emoticon-1628080__340.png",
        },
        {
          id: 3,
          name: "Andrey",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/31/20/04/emoticon-1634515_960_720.png",
        },
        {
          id: 4,
          name: "Alina",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/28/17/18/emoticon-1626442_960_720.png",
        },
        {
          id: 5,
          name: "Max",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/11/09/50/emoji-1585197_960_720.png",
        },
        {
          id: 6,
          name: "Serj",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/22/11/00/emoticon-1611718_960_720.png",
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Very Well" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Anna",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/22/11/00/emoticon-1611718_960_720.png",
        },
        {
          id: 2,
          name: "Vlada",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/29/11/55/emoticon-1628080__340.png",
        },
        {
          id: 3,
          name: "Andrey",
          photo:
            "https://cdn.pixabay.com/photo/2016/08/31/20/04/emoticon-1634515_960_720.png",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
 /*  addPost() {
    debugger;
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this.callSubscriber(this._state);
  
    /* rerenderEntireTree = this._state;   updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.callSubscriber(this._state);
    
  },  */

  dispatch (action){
   
    if(action.type === "ADD-POST"){
      
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
     
      this._state.profilePage.newPostText = "";
      this.callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT"){
      this._state.profilePage.newPostText = action.newText;
    this.callSubscriber(this._state);
    }
  } 
 
};
window.store = store;

export default store;
