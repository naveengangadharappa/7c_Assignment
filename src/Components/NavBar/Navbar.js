import { Navbar } from 'react-bootstrap'
//import '../../App.css';
import './Navbar.css';
import { Dropdown } from 'react-bootstrap';

const NavBar = (props) => {

    return (
        <div className='Nav'>

            <Navbar bg="light" variant="light" className="Navbar_Right" >
                <div className="Navbar_Left" style={{ width: "80%", height: "100%", flexDirection: "row" }}>
                    <Dropdown style={{ borderLeftWidth: 2, width: '30%', height: "100%" }} >
                        <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ color: 'lightgray', borderLeftWidth: 2, width: '100%' }}>
                            <img src="logo.png" className='Nav_img' style={{ padding: '2%', width: '20%', height: '100%' }} />
                            <a href="#" style={{ fontWeight: 'bold', width: '80%', textDecoration: 'none', color: 'black', textSizeAdjust: 'auto', fontSize: '100%' }}>{' MY APPLICATION '} </a>
                        </Dropdown.Toggle>
                    </Dropdown>
                </div>
                <div className="Navbar_Right" style={{ borderLeftWidth: 2, borderColor: 'black', width: "40%", height: "100%" }}>
                    <Dropdown style={{ borderLeftWidth: 2, width: '50%', height: "100%" }} >
                        <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ borderLeftWidth: 2, width: '100%', color: 'lightgray' }}>
                            <img src="profile.png" style={{ borderRadius: 50, width: '20%', height: '100%' }} />
                            <a href="#" style={{ fontWeight: 'bold', width: '80%', textDecoration: 'none', color: 'gray', textSizeAdjust: 'auto', fontSize: '100%' }}>{' Profile Name '} </a>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;
