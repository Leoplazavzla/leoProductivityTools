import {collection, getDocs} from 'firebase/firestore/lite';
import db from "../firebase/firebaseConfig";

export async function getHours() {
    const timesCol = collection(db, 'hours');
    const timesSnapshot = await getDocs(timesCol);
    const timesList = timesSnapshot.docs.map(doc =>  doc.data());
    return timesList;
}
