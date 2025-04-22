import { useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { Email } from "../types/postal-mime";

export function useEmailsCollection(
    address: string,
    setEmails: (emails: Email[]) => void
) {
    useEffect(() => {
        const collectionRef = collection(db, "emails");
        const queryRef = query(
            collectionRef,
            where("recipients", "array-contains", address)
        );

        const unsubscribe = onSnapshot(
            queryRef,
            (snapshot) => {
                const emails = snapshot.docs.map((doc) => doc.data() as Email);
                setEmails(emails);
            },
            (error) => {
                console.error("Error fetching emails:", error);
            }
        );

        return () => unsubscribe();
    }, [address, setEmails]);
}
