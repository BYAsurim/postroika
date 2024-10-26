import {collection, getDocs, getFirestore} from "firebase/firestore";
import '../../../firebase'

const db = getFirestore();


export const fetchDescriptionForWorksFromFirestore = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "descriptions"));
        const temporaryArr: any = []
        querySnapshot.forEach((doc) => {
            temporaryArr.push(doc.data());
        });
        return temporaryArr
    } catch (e) {
        console.log(e)
    }
};