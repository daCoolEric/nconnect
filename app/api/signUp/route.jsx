import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@utils/database";

// GET REQUEST FOR SPECIFIC DISTRICT IN A SPECIFIC REGION
const createUser = async () => {
  const querySnapshot = await addDoc(collection(db, "/ashanti"));

  querySnapshot.forEach((doc) => {
    let subin;
    console.log(`${doc.id} => ${doc.data()}`);
    // doc.id == "subin" ? (subin = doc.data()) : null;
    // console.log(subin);
    // const task = {
    //   id: doc.id,
    //   taskName: doc.data().taskName,
    //   completed: doc.data().completed,
    // };
    // dispatch(setTodoList(task.taskName !== "" ? task : todoList));
  });

  // return dispatch(setTodoList(returnData));
};
getInfos();
