import Validator from 'validatorjs';

const Adduser = {
    email: 'required|email',
    role: 'required|string',
};

const errmsg = {
    Adduser: {
        "required.email": 'Email Required',
        "required.role": 'Role Required',
    }
};

const validatedata = async (body, option) => {
    try {
        let validation;
        let validation_result = { status: false, message: "option cannot be identified" };
        if (option == 'add_user') {
            validation = new Validator(body, Adduser, errmsg.Adduser)
            validation_result = validation.fails() ? { status: false, message: 'List_houses Validation Unsuccessfull', validation: validation.errors.errors } : { status: true };
        } else validation_result = { status: false, message: "option cannot be identified" };
        return validation_result;
    } catch (err) {
        console.log(err);
        return { status: false, message: "Internal Server Error Please try Again" };
    }
}

export default validatedata