import { useEffect } from "react";
import { UsernameCreator } from "./../components/UsernameCreator";
import { useEmailsStore } from "../store/emailsStore";
import { useUsername } from "../store/usernameStore";
import { generateRandomUsername } from "../utils/randomize";
import Inbox from "../components/Inbox";
import { useDebounceValue } from "usehooks-ts";
import { useEmailsCollection } from "../hooks/useEmailsCollection";

export default function Home() {
    const username = useUsername((state) => state.username);
    const [debouncedUsername] = useDebounceValue(username, 500);
    const setUsername = useUsername((state) => state.setUsername);
    const emails = useEmailsStore((state) => state.emails);
    const setEmails = useEmailsStore((state) => state.setEmails);

    useEmailsCollection(debouncedUsername + "@nlohub.xyz", setEmails);

    useEffect(() => {
        if (username === "") {
            setUsername(generateRandomUsername());
        }
    }, []);

    return (
        <>
            <UsernameCreator username={username} setUsername={setUsername} />
            <Inbox emailsCount={emails.length} />
        </>
    );
}
