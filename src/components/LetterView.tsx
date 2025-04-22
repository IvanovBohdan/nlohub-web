import { format } from "date-fns";
import { Letter } from "react-letter";
import { useNavigate, useParams } from "react-router";
import { useEmailsStore } from "../store/emailsStore";
import { InboxError } from "./InboxError";
import { Trash2Icon } from "lucide-react";
import { toast } from "react-toastify";
import { useEmailDelete } from "../hooks/useEmailDelete";

export function LetterView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const deleteEmail = useEmailDelete(id || "");

    const email = useEmailsStore((state) =>
        state.emails.find((email) => email.messageId === id)
    );

    if (!email) {
        return (
            <InboxError
                title="Email Not Found"
                text="The email you are trying to view does not exist or may have been deleted."
                error={true}
            />
        );
    }

    const { text, html } = email;
    const { name, address } = email.from;

    const handleDelete = () => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this email? This action cannot be undone."
        );

        if (!confirmation) {
            return;
        }

        if (!email.messageId) {
            toast.error("Email ID not found. Cannot delete email.");
            return;
        }

        deleteEmail()
            .then(() => {
                toast.success("Email deleted successfully.");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error deleting email:", error);
                toast.error("Failed to delete email. Please try again.");
            });
    };

    return (
        <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-6">
                <div className="text-lg font-medium mb-4 flex items-center justify-between">
                    <h3>{email.subject}</h3>
                    <button
                        className="text-white bg-red-500 rounded p-1 border-red-500 border-2 hover:text-red-500 hover:bg-red-50 active:bg-red-200"
                        onClick={handleDelete}
                    >
                        <Trash2Icon size={17} />
                    </button>
                </div>
                <div className="flex justify-between text-sm mb-6">
                    <div>
                        <span className="text-zinc-600">From: </span>
                        <span>{name}</span>
                        <a
                            className="hover:underline"
                            href={`mailto:${address}`}
                        >
                            &lt;{address}&gt;
                        </a>
                    </div>
                    <div className="text-zinc-600">
                        {format(email.date || Date.now(), "d MMM yyyy, hh:mm")}
                    </div>
                </div>
                <div className="border-t border-zinc-200 pt-6">
                    <Letter text={text} html={html || ""} />
                </div>
            </div>
        </div>
    );
}
