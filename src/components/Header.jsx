import {Link} from 'react-router-dom'

const Header = (props) => {
    return <nav>
        <Link to='/'><h1>Sheets.</h1></Link>
        <Link to='/new'><button>Add Sheet Music</button></Link>
    </nav>
}

export default Header