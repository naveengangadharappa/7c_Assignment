import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Pagination } from 'react-bootstrap';
import './Admin_Layout.css';
import { useState, useEffect } from 'react';
import Add_User from './Add_User';
import Offlinestorage from '../Services/Offline_services';
import { Fab } from '@material-ui/core'

const Admin_Layout = (props) => {
    const [adduser_flg, setadduser_flg] = useState(false);
    const [user_list, setuser_list] = useState();
    const [validation_msg, setvalidation_msg] = useState()

    useEffect(async () => {
        await loaddata();
    }, [])

    const loaddata = async () => {
        try {
            let res = await Offlinestorage({ choice: 'getdata', key: 'users' })
            if (res.status) setuser_list(res.data)
            else setvalidation_msg(res.message);
        } catch (err) {
            console.log("load data error = ", (err));
            setvalidation_msg('Internal Error');
        }
    }

    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(number == 5 ? 'Next' : number);
    }

    const Set_Adduser = () => {
        setadduser_flg(!adduser_flg)
    }

    const Delete_User = async (user_data) => {
        try {
            let del = window.confirm("Can we proceed with deleting this user");
            if (del) {
                let temp = user_list
                if (user_data == 0) temp.splice(user_data.id, 1);
                else {
                    let diff = user_list[user_list.length - 1].id - user_list.length;
                    temp.splice(user_data.id - (diff + 1), 1)
                }
                let res = await Offlinestorage({ choice: 'adddata', key: "users", value: temp })
                if (res.status) {
                    window.alert("Users Deleted Successfully");
                    loaddata();
                } else window.alert("Sorry Unsuccessfull operation please try again");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="Admin_layout">
            <Fab variant="extended" size="small" className="button" style={{ marginLeft: 10, float: 'left', width: 100, position: 'relative', backgroundColor: 'rgb(104, 196, 119)', color: 'white', marginBottom: '3%' }} onClick={Set_Adduser}>Add User</Fab>
            {validation_msg && <h5>{validation_msg}</h5>}
            <Container fluid='lg' >

                <Table responsive="lg" bordered hover>
                    <thead style={{ background: 'lightgray' }}>
                        <tr>
                            <th>#</th>
                            <th>Users</th>
                            <th>Last Signed In</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user_list && user_list.map(item =>
                            <tr key={item.id}>
                                <td>{item.id + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.time}</td>
                                <td>{item.role}</td>
                                <th> <Button variant="success" size="sm" style={{ borderRadius: '50%', borderWidth: 0, backgroundColor: "rgb(90, 180, 105)", width: 32, height: 30, paddingBottom: '30%', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }} onClick={() => Delete_User(item)}><img src="delete.png" style={{ width: 26, height: 20, paddingRight: 10, color: 'white' }} /></Button></th>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div style={{ width: '30%', height: '100%', marginRight: 5, float: 'right', flexDirection: 'row-reverse' }}>
                    <Pagination>
                        {items.map(data =>
                            <Pagination.Item key={data} onClick={(e) => { console.log(data) }}>
                                {data}
                            </Pagination.Item>
                        )}
                    </Pagination>
                </div>
                {adduser_flg && <Add_User Set_Adduser={Set_Adduser} users={user_list} loaddata={loaddata} />}
            </Container>

        </div>
    )
}

export default Admin_Layout;

