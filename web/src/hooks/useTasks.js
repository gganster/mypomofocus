import firebase from "firebase";
import { useEffect } from "react";
import { useUser } from "../contexts/contexts";

const firestore = firebase.firestore;

const useTasks = () => {
  const [user] = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore().collection("users")
                                   .doc(user.uid)
                                   .collection("tasks")
                                   .onSnapshot(snap => {
                                      const data = snap.docs.map(doc => ({uid: doc.id, ...doc.data()}));
                                      setTasks(data);
                                      setLoading(false);
                                   }, err => {
                                      setError(error);
                                      setLoading(false);
                                      console.error(err);
                                   });
    return () => unsubscribe();
  }, []);

  const updateDoc = async (uid, data) => {
    await firestore().collection("users")
                     .doc(user.uid)
                     .collection("tasks")
                     .doc(uid)
                     .update(data)
  }

  const deleteDoc = async (uid) => {
    await firestore().collection("users")
                     .doc(user.uid)
                     .collection("tasks")
                     .doc(uid)
                     .delete();
  }

  const createDoc = async (data) => {
    await firestore().collection("users")
                     .doc(user.uid)
                     .collection("tasks")
                     .add(data);
  }

  return {
    loading, error, tasks,
    updateDoc, deleteDoc, createDoc
  }
}

export default useTasks;