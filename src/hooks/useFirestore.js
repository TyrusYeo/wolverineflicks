import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        // takes a snapshot at the whole database at that point in time once
        // once collection changes, this function is called again
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents);
        })

        // cleanup function when we don't need it
        return () => unsub();
    }, [collection] )

    return { docs };
}

export default useFirestore;