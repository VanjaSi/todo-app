import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link><h1>ToDo</h1></Link>
                <div>Profile buttons</div>
            </div>
        </header>
    );
}

export default Navbar;
