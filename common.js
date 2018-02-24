function writeUserData(userId, name, email, smileList) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      smile_list : smileList
    });
  }