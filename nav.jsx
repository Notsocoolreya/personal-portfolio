import react from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to='/about'>about
                    </Link>
                </li>
                <li>
                    <Link to ='/contact'>contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;