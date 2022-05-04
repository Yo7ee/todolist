import db from "../firebase";
import {collection,  addDoc, deleteDoc, doc} from 'firebase/firestore';

const itemColRef = collection(db, 'todoItem');

class ItemDataService {
    addData = (item) => {
        return addDoc(itemColRef, item);
    };

    deleteData = (id) => {
        const itemDoc = doc(db, 'todoItem', id);
        return deleteDoc(itemDoc);
    };
}

export default new ItemDataService(); 