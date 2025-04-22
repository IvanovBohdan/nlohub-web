import classNames from "classnames";
import { Mail, MailX, MailWarning } from "lucide-react";

type Props = {
    title?: string;
    text?: string;
    error?: boolean;
    warn?: boolean;
};

export function InboxError({
    title = "Your inbox is empty",
    text = "New messages will appear here",
    error = false,
    warn = false,
}: Props) {
    return (
        <div
            className={classNames(
                "flex flex-col items-center justify-center h-full p-6 text-center",
                {
                    "bg-red-50 text-red-400": error,
                    "bg-amber-50 text-amber-400": warn,
                    "bg-zinc-50 text-zinc-600": !error && !warn,
                }
            )}
        >
            <div className={"animate-[float_2s_ease-in-out_infinite] mb-1"}>
                {error ? (
                    <MailX size={90} />
                ) : warn ? (
                    <MailWarning size={90} />
                ) : (
                    <Mail size={90} className="text-emerald-600" />
                )}
            </div>
            <div
                className={classNames(
                    "rounded-[40%] blur-[.3px] mb-4 h-2 w-11 animate-[float-shadow_2s_ease-in-out_infinite]",
                    {
                        "bg-red-900": error,
                        "bg-amber-800": warn,
                        "bg-emerald-900": !error && !warn,
                    }
                )}
            ></div>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="mt-3 text-md">{text}</p>
        </div>
    );
}
