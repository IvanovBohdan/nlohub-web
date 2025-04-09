import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.svg";
export function NavBar({}) {
    return (
        <nav className="bg-white border-b border-zinc-200 px-6 py-3 flex justify-between items-center shadow-sm">
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="NLOHUB logo" className="h-8.5" />
                <h1 className="text-2xl font-bold text-emerald-600 flex items-center">
                    NLOHUB
                </h1>
            </Link>
            <NavLink
                to="/about"
                className="text-zinc-600 hover:text-emerald-600 transition-colors"
            >
                About
            </NavLink>
        </nav>
    );
}
