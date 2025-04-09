import type { ParsedMail } from "mailparser";

const API_URI = "http://api.nlohub.xyz";

export async function getAllEmailsForUsername(
    username: string
): Promise<ParsedMail[]> {
    const res = await fetch(`${API_URI}/emails/for/${username}@nlohub.xyz`);
    const data = await res.json();
    return data;
}

export async function getEmailById(id: string): Promise<ParsedMail> {
    const res = await fetch(`${API_URI}/emails/${id}`);
    const data = await res.json();
    return data;
}

export async function deleteEmailById(
    id: string
): Promise<{ success: boolean; error?: string; messageId: string }> {
    const res = await fetch(`${API_URI}/emails/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();
    return data;
}

export function subscribeForMessages(
    username: string,
    onMessage: (message: ParsedMail) => void
) {
    const eventSource = new EventSource(
        `${API_URI}/emails/subscribe/${username}@nlohub.xyz`
    );

    eventSource.onmessage = (event) => {
        const message = JSON.parse(event.data);
        onMessage(message);
    };

    eventSource.onerror = (error) => {
        console.error("Error with EventSource:", error);
    };

    return {
        eventSource,
        close: () => {
            eventSource.close();
        },
    };
}
