import { format } from "date-fns";
import { Letter } from "react-letter";
import { useNavigate, useParams } from "react-router";
import { useEmails } from "../store/emailsStore";
import { InboxError } from "./InboxError";
import { Trash2Icon } from "lucide-react";
import { deleteEmailById } from "../api/emails";
import { toast } from "react-toastify";

export function LetterView() {
    const { id } = useParams();
    const navigate = useNavigate();

    const email = useEmails((state) =>
        state.emails.find((email) => email.messageId === id)
    );

    const deleteEmailFromStore = useEmails((state) => state.deleteEmailById);

    if (!email) {
        return (
            <InboxError
                title="Email Not Found"
                text="The email you are trying to view does not exist or may have been deleted."
                error={true}
            />
        );
    }

    const name = email?.from?.value?.[0].name;
    const address = email?.from?.value?.[0].address;
    const { text, html, textAsHtml } = email;

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

        deleteEmailById(email.messageId)
            .then((res) => {
                if (res.success) {
                    toast.success("Email deleted successfully.");
                    deleteEmailFromStore(res.messageId);
                    navigate("/");
                } else {
                    toast.error(
                        `Error deleting email: ${res.error || "Unknown error"}`
                    );
                }
            })
            .catch((error) =>
                toast.error(`Error deleting email: ${error.message}`)
            );
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
                    <Letter text={text} html={html || textAsHtml || ""} />
                </div>
            </div>
        </div>
    );
}
