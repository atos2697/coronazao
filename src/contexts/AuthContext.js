import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import firebase from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const db = firebase.database();
  /*
  async function signup(email, password) {
    try {
      return await auth.createUserWithEmailAndPassword(email, password)
      
    } catch (error) {
      return this.setState({ result: error.message })
    } // change this line to use a different database (firebase)
    // create user in db here
    
  }*/

  function signup(email, password) {
    /*auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });*/
    // here we get user id if creating is successful.
    /*.then(function (user) {
        db.ref(`Global/users/${user.uid}`).set({ name: name }); // I added user
        console.log('uid:', user.uid)

      })*/
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function writeUserData(name, email, phone) {
    firebase
      .database()
      .ref("Global/users/" + email)
      .set({
        username: name,
        email: email,
        phone: phone,
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateName(name) {
    // quizás esto deba ir en otra clase, ya que no es seguro que se maneje por authContext
    return currentUser
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  }

  function updateTel(tel) {
    // quizás esto deba ir en otra clase, ya que no es seguro que se maneje por authContext
    return currentUser
      .updateProfile({
        tel: tel,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  }

  /*function updateTel(tel) {
    return currentUser.updateTel(tel)
  }*/

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateName,
    updateTel,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
