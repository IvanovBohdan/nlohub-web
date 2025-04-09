import classNames from "classnames";
import { ChevronLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";

type Props = { emailsCount?: number };

export default function Inbox({ emailsCount = 0 }: Props) {
    const location = useLocation();

    return (
        <div className="flex-1 bg-white rounded-lg border border-zinc-200 overflow-hidden flex flex-col shadow-sm">
            <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <Link to="/">
                        <ChevronLeft
                            className={classNames("text-lg", {
                                hidden: location.pathname === "/",
                            })}
                        />
                    </Link>
                    <h2 className="font-medium text-lg">Inbox</h2>
                </div>
                <span className="text-sm text-zinc-600">
                    {emailsCount} messages
                </span>
            </div>
            <Outlet />
        </div>
    );
}
