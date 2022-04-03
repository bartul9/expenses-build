import { FormBase } from "core/stores/FormBase";

class LoginForm extends FormBase {

    
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
        }
    ]) {
        super(actions, {fields: fields})
    }

}

export default LoginForm;

