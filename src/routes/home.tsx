import { useEffect } from "react";
import { getAllEmailsForUsername, subscribeForMessages } from "../api/emails";
import { UsernameCreator } from "./../components/UsernameCreator";
import { useEmails } from "../store/emailsStore";
import { useUsername } from "../store/usernameStore";
import { generateRandomUsername } from "../utils/randomize";
import Inbox from "../components/Inbox";
import { useDebounceValue } from "usehooks-ts";
import { toast } from "react-toastify";

export default function Home() {
    const username = useUsername((state) => state.username);
    const [debouncedUsername] = useDebounceValue(username, 500);
    const setUsername = useUsername((state) => state.setUsername);
    const emails = useEmails((state) => state.emails);
    const setEmails = useEmails((state) => state.setEmails);
    const addEmail = useEmails((state) => state.addEmail);

    useEffect(() => {
        if (username === "") {
            setUsername(generateRandomUsername());
        }
    }, []);

    useEffect(() => {
        getAllEmailsForUsername(debouncedUsername).then((data) =>
            setEmails(data)
        );
        const { close } = subscribeForMessages(debouncedUsername, (message) => {
            toast.info("New email received");
            addEmail(message);
        });

        return close;
    }, [debouncedUsername]);

    return (
        <>
            <UsernameCreator username={username} setUsername={setUsername} />
            <Inbox emailsCount={emails.length} />
        </>
    );
}
