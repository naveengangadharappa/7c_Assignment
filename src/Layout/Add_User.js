import '../App.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import Validation from '../Validation/Validation';
import Offlinestorage from '../Services/Offline_services';
import './Add_User.css';

const Add_User = (props) => {
    const [email, setemail] = useState('');
    const [role, setrole] = useState('');
    const [validation_msg, setvalidation_msg] = useState();

    const handler = async (option = '') => {
        try {
            if (option == 'close') props.Set_Adduser();
            else {
                let temp = props.users ? props.users : [];
                let today = new Date();
                let date = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} T ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
                temp.push({ id: temp.length > 0 ? temp[temp.length - 1].id + 1 : 0, email, role, time: date })
                let validation_res = await Validation({ email, role }, "add_user");
                console.log("validation_res = ", (validation_res));
                if (validation_res.status) {
                    let res = await Offlinestorage({ choice: 'adddata', key: "users", value: temp })
                    if (res.status) {
                        window.alert("Users Added Successfully");
                        props.loaddata();
                    }
                    else window.alert("Sorry Unsuccessfull operation please try again");
                } else {
                    setvalidation_msg(validation_res.validation)
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="Adduser">
            <div class="Adduser_left">
                <div>
                    <img src="add-user.png" style={{ width: "40%", height: "40%", margin: 5 }} /><br /><br />
                    <p style={{ color: 'white', fontSize: 12, textAlign: 'left' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
            </div>
            <div class="Adduser_right">
                <div>
                    <h5>User Information</h5><br />
                    <Form.Group>
                        <Form.Group controlId="email1">
                            <Form.Label><b>Email Id of User</b></Form.Label>
                            <Form.Control type="email" name="email" value={email} placeholder="name@example.com" onChange={(e) => { setemail(e.target.value) }} />
                        </Form.Group>
                        {(validation_msg && validation_msg.email) ? <h7 style={{ color: "darkred" }}>{validation_msg.email[0]}</h7> : null}
                        <br />
                        <Form.Group controlId="role1" style={{ width: '50%' }}>
                            <Form.Label><b>Role</b></Form.Label>
                            <Form.Control as="select" size="sm" name="role" onChange={(e) => { setrole(e.target.value) }}>
                                <option value={''}></option>
                                <option value={'admin'}>Admin</option>
                                <option value={'sales'}>sales</option>
                            </Form.Control>
                        </Form.Group>
                        {(validation_msg && validation_msg.role) ? <h7 style={{ color: "darkred" }}>{validation_msg.role[0]}</h7> : null}
                        <br />
                    </Form.Group>
                </div>
                <div className="Adduser_buttons">
                    <Button variant="flat" style={{ margin: 5, backgroundColor: 'orange', color: 'white' }} onClick={() => { handler('close') }}>Cancel</Button><br /><br />
                    <Button variant="flat" style={{ margin: 5, backgroundColor: 'rgb(46, 180, 46)', color: 'white' }} onClick={handler}>{' Add '}</Button><br /><br />
                </div>
            </div>
        </div>
    )
}

export default Add_User;
