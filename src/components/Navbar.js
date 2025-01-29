export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">
                    My Website
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}