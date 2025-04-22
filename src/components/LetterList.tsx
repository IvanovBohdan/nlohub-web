import { formatDistanceToNowStrict } from "date-fns";
import { InboxError } from "./InboxError";
import { useNavigate } from "react-router";
import { useEmailsStore } from "../store/emailsStore";
import { useEffect, useState } from "react";
import { Email } from "../types/postal-mime";

export function LetterList() {
    const emails = useEmailsStore((state) => state.emails);

    return (
        <div className="flex-1 overflow-y-auto p-1">
            {emails.length === 0 ? (
                <InboxError />
            ) : (
                <table className="w-full">
                    <tbody>
                        {emails
                            .toSorted(
                                (a, b) =>
                                    Number(new Date(b.date ?? Date.now())) -
                                    Number(new Date(a.date ?? Date.now()))
                            )
                            .map((email) => {
                                return (
                                    <Row email={email} key={email.messageId} />
                                );
                            })}
                    </tbody>
                </table>
            )}
        </div>
    );
}

type RowProps = {
    email: Email;
};

function Row({ email }: RowProps) {
    const { name, address } = email.from;

    const navigate = useNavigate();

    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        setTimeString(formatDistanceToNowStrict(email.date || Date.now()));

        const interval = setInterval(() => {
            setTimeString(formatDistanceToNowStrict(email.date || Date.now()));
        }, 20000);
        return () => clearInterval(interval);
    }, [email]);

    return (
        <tr
            className="border-b border-zinc-200 hover:bg-zinc-50 cursor-pointer transition-colors"
            key={email.messageId}
            onClick={() => {
                navigate(`/view/${email.messageId}`);
            }}
        >
            <td className="p-2">
                <div className="font-medium">{name}</div>
                <div className="text-xs text-zinc-500">{address}</div>
            </td>
            <td className="p-2">
                <span className="line-clamp-1">{email.subject}</span>
            </td>
            <td className="p-2 text-zinc-500 w-25">{timeString}</td>
        </tr>
    );
}
