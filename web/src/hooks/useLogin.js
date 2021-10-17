import firebase from "firebase";

const firestore = firebase.firestore;
const auth = firebase.auth();

const useLogin = () => {

  const _login = async (res) => {
    if (res.additionalUserInfo.isNewUser) {
      try {
        await firestore().collection("users")
                        .doc(res.user.uid)
                        .set({
                          createdAt: new Date()
                        })
      } catch (e) {
        auth.signOut();
        console.error(e.message);
      }
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      let res = await auth.signInWithPopup(provider);
      await _login(res);
      return (res);
    } catch (e) {
      console.warn(e.message);
      return (null);
    }
  };

  return {
    googleLogin
  }
}

export default useLogin;
