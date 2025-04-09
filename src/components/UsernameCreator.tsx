import { Copy, RefreshCw } from "lucide-react";
import React from "react";
import { generateRandomUsername } from "../utils/randomize";
import { toast } from "react-toastify";

type Props = {
    username: string;
    setUsername: React.Dispatch<string>;
};

export function UsernameCreator({ username, setUsername }: Props) {
    const handleRandomize = () => {
        setUsername(generateRandomUsername());
    };

    const handleCopy = () => {
        const address = username + "@nlohub.xyz";

        navigator.clipboard
            .writeText(address)
            .then(() => {
                toast.success(
                    `Email address has been copied to clipboard!\n${address}`
                );
            })
            .catch((err) => {
                toast.error(`Failed to copy email address: ${err.message}`);
            });
    };

    return (
        <div className="my-8 bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
            <div className="flex flex-col mb-4">
                <label className="text-sm text-zinc-600 mb-2">
                    Your temporary email address
                </label>
                <div className="flex">
                    <div className="flex-1 flex items-center bg-zinc-50 border border-zinc-300 rounded-l-md pl-3">
                        <input
                            type="text"
                            size={1}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="flex-1 bg-transparent outline-none"
                        />
                        <span className="px-2 text-zinc-600">@nlohub.xyz</span>
                    </div>
                    <button
                        onClick={handleRandomize}
                        className="bg-zinc-200 hover:bg-zinc-300 p-2 rounded-r-none rounded-l-none border-y border-r border-zinc-300"
                    >
                        <RefreshCw size={18} />
                    </button>
                    <button
                        onClick={handleCopy}
                        className="bg-emerald-500 hover:bg-emerald-600 p-2 rounded-r-md text-white"
                    >
                        <Copy size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
