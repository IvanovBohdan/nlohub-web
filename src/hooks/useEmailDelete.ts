import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useCallback } from "react";

export function useEmailDelete(emailId: string) {
    const deleteEmail = useCallback(async () => {
        const emailRef = doc(db, "emails", emailId);
        return await deleteDoc(emailRef);
    }, [emailId]);

    return deleteEmail;
}
