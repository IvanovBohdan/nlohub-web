import { Email } from "../types/postal-mime"; // Adjust the import path as necessary
import { create } from "zustand";
import { devtools } from "zustand/middleware"; // Added import for devtools

interface EmailsState {
    emails: Email[];
    setEmails: (emails: Email[]) => void;
    addEmail: (email: Email) => void;
    deleteEmailById: (messsageId: string) => void;
    clear: () => void;
}

export const useEmailsStore = create<EmailsState>()(
    devtools((set) => ({
        emails: [],
        setEmails: (emails: Email[]) => set({ emails }),

        addEmail: (email: Email) =>
            set((state) => ({ emails: [...state.emails, email] })),

        deleteEmailById: (messageId: string) =>
            set((state) => ({
                emails: state.emails.filter(
                    (email) => email.messageId !== messageId
                ),
            })),

        clear: () => set({ emails: [] }),
    }))
);
