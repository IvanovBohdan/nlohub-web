import { Mail, Github, Linkedin } from "lucide-react";

const About = () => {
    return (
        <div className="overflow-y-auto">
            <div className="max-w-3xl mx-auto p-6 space-y-6 text-zinc-800">
                <h1 className="text-3xl font-bold text-center ">
                    About NLOHUB
                </h1>
                <p className="text-lg text-zinc-600 text-center">
                    Your go-to solution for fast, secure, and anonymous
                    temporary email addresses.
                </p>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-3">
                        Why Choose NLOHUB?
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-zinc-700">
                        <li>
                            <strong>Instant Access</strong> – No sign-ups, no
                            hassle. Get a temporary email in seconds.
                        </li>
                        <li>
                            <strong>Privacy First</strong> – Your data is never
                            stored, ensuring complete anonymity.
                        </li>
                        <li>
                            <strong>Spam-Free</strong> – Keep your personal
                            inbox clean from unwanted emails.
                        </li>
                        <li>
                            <strong>User-Friendly</strong> – Simple, intuitive
                            interface for a seamless experience.
                        </li>
                        <li>
                            <strong>Auto-Expiration</strong> – Emails and
                            inboxes automatically expire after 24 hours.
                        </li>
                        <li>
                            <strong>Custom Usernames</strong> – Choose any
                            username you want, but avoid overly common ones.
                        </li>
                        <li>
                            <strong>Completely Free</strong> – Enjoy all
                            features without any cost.
                        </li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
                    <p className="text-zinc-700">
                        At NLOHUB, we believe in privacy and convenience. Our
                        goal is to provide a secure, disposable email service
                        that gives you control over your online interactions.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold">Get in Touch</h2>
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="mailto:bodaivanov@gmail.com"
                            className="flex items-center space-x-2 bg-zinc-100 p-3 rounded-lg shadow hover:bg-zinc-200"
                        >
                            <Mail className="w-5 h-5" />{" "}
                            <span>bodaivanov@gmail.com</span>
                        </a>
                        <a
                            href="https://github.com/IvanovBohdan"
                            target="_blank"
                            className="flex items-center space-x-2 bg-zinc-100 p-3 rounded-lg shadow hover:bg-zinc-200"
                        >
                            <Github className="w-5 h-5" /> <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/bohdan-ivanov-648b71225/"
                            target="_blank"
                            className="flex items-center space-x-2 bg-zinc-100 p-3 rounded-lg shadow hover:bg-zinc-200"
                        >
                            <Linkedin className="w-5 h-5" />{" "}
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
