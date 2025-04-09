import { ParsedMail } from "mailparser";
import { create } from "zustand";
import { devtools } from "zustand/middleware"; // Added import for devtools

interface EmailsState {
    emails: ParsedMail[];
    setEmails: (emails: ParsedMail[]) => void;
    addEmail: (email: ParsedMail) => void;
    deleteEmailById: (messsageId: string) => void;
    clear: () => void;
}

export const useEmails = create<EmailsState>()(
    devtools((set) => ({
        emails: [],
        setEmails: (emails: ParsedMail[]) => set({ emails }),

        addEmail: (email: ParsedMail) =>
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
