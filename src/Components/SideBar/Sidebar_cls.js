import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar_cls = (props) => {
    const [color, setcolor] = useState(['', '', '', '', '', 'rgb(104, 196, 119)']);

    const Handle_sidebar = (option) => {
        switch (option) {
            case 'products': setcolor(['rgb(104, 196, 119)', '', '', '', '', '']);
                break;
            case 'script': setcolor(['', 'rgb(104, 196, 119)', '', '', '', '']);
                break;
            case 'customer': setcolor(['', '', 'rgb(104, 196, 119)', '', '', '']);
                break;
            case 'sales': setcolor(['', '', '', 'rgb(104, 196, 119)', '', '']);
                break;
            case 'demo': setcolor(['', '', '', '', 'rgb(104, 196, 119)', '']);
                break;
            case 'settings': setcolor(['', '', '', '', '', 'rgb(104, 196, 119)']);
                break;
            default:
                break;
        }
    }

    return (
        <div className="sidebar_new">
            <SideNav className="sidebar_new" onSelect={Handle_sidebar} style={{ backgroundColor: "white" }}>
                <SideNav.Toggle expanded={true} style={{ backgroundColor: "gray", width: '100%' }} />
                <SideNav.Nav defaultSelected="settings">
                    <NavItem eventKey="products" action variant="light" href="#link1" style={{ borderBottomWidth: 0, backgroundColor: color && color[0] }}>
                        <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                        <NavText><Link to='/Products' style={{ textDecoration: "none" }}><p style={{ padding: '1%', width: '100%', fontWeight: 'bold', color: 'black' }}> Products </p></Link></NavText>

                    </NavItem>


                    <NavItem eventKey="script" action variant="light" href="#link1" style={{ borderBottomWidth: 0, backgroundColor: color && color[1] }}>
                        <NavIcon><i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', backgroundColor: "green" }} /></NavIcon>
                        <NavText> <Link to='/Demo' style={{ textDecoration: "none" }}><p style={{ padding: '1%', width: '100%', heigth: '100%', fontWeight: 'bold', color: 'black' }}> Script </p></Link></NavText>
                    </NavItem>


                    <NavItem eventKey="customer" action variant="light" href="#link1" style={{ borderBottomWidth: 0, backgroundColor: color && color[2] }}>
                        <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', backgroundColor: "green" }} /></NavIcon>
                        <NavText> <Link to='/Customer' style={{ textDecoration: "none" }}><p style={{ padding: '1%', width: '100%', fontWeight: 'bold', color: 'black' }}> Customer </p></Link></NavText>
                    </NavItem>


                    <NavItem eventKey="sales" action variant="light" href="#link1" style={{ borderBottomWidth: 0, backgroundColor: color && color[3] }}>
                        <NavIcon><i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', backgroundColor: "green" }} /></NavIcon>
                        <NavText><Link to='/Sales' style={{ textDecoration: "none" }}><p style={{ padding: '1%', width: '100%', fontWeight: 'bold', color: 'black' }}>Sales </p></Link></NavText>
                    </NavItem>


                    <NavItem eventKey="demo" action variant="light" href="#link1" style={{ borderBottomWidth: 0, backgroundColor: color && color[4] }}>
                        <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', backgroundColor: "green" }} /></NavIcon>
                        <NavText><Link to='/Demo' style={{ textDecoration: "none" }}><p style={{ padding: '1%', width: '100%', fontWeight: 'bold', color: 'black' }}>Demo</p></Link></NavText>
                    </NavItem>


                    <NavItem eventKey="settings" action variant="light" href="#link1" style={{ borderBottomWidth: 0, backgroundColor: color && color[5] }}>
                        <NavIcon><i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', backgroundColor: "green" }} /></NavIcon>
                        <NavText > <Link to='/Settings' style={{ textDecoration: "none" }}><p style={{ padding: '1%', width: '100%', heigth: '100%', fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>Settings</p></Link></NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        </div>
    )
}

export default Sidebar_cls;



