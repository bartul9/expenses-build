import { FormBase } from "core/stores/FormBase";

class CreateUserForm extends FormBase {

    
    constructor(actions,
        fields = [
        {
            name: 'email',
            label: 'Email',
            placeholder: 'Insert Email',
            rules: 'required|email|string|between:5,25',
        }, 
        {
            name: 'password',
            label: 'Password',
            placeholder: 'Insert Password',
            rules: 'required|string|between:5,25',
        }, 
        {
            name: 'passwordConfirm',
            label: 'Password Confirmation',
            placeholder: 'Confirm Password',
            rules: 'required|string|same:password',
        },
        {
            name: 'firstName',
            label: 'First name',
            placeholder: 'Insert first name',
            rules: 'required|string|between:3,25',
        }, 
        {
            name: 'lastName',
            label: 'Last name',
            placeholder: 'Insert last name',
            rules: 'required|string|between:3,25',
        }
    ]) {
        super(actions, {fields: fields})
    }

}

export default CreateUserForm;

