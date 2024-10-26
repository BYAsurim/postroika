import {addDoc, collection, getDocs, getFirestore} from "firebase/firestore";
import '../../firebase';

const db = getFirestore();

export const setDataToFirestore = async (name: string, comment: string) => {
    try {
        await addDoc(collection(db, "myCollection"), {
            name: name,
            comment: comment,
        });
    } catch (e) {
        console.log('set error')
    }


};

export const fetchDataFromFirestore = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "myCollection"));
        const temporaryArr: any = []
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        return temporaryArr
    } catch (e) {
        console.log(e)
    }
};

