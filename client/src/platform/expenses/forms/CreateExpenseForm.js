import { FormBase } from "core/stores/FormBase";

class CreateExpenseForm extends FormBase {

    
    constructor(actions,
        fields = [
        {
            name: 'name',
            label: 'Name',
            placeholder: 'Insert name',
            rules: 'required|string|between:1,60',
        }, 
        {
            name: 'description',
            label: 'Description',
            placeholder: 'Insert Description',
            rules: 'string|between:1,1000',
        }, 
        {
            name: 'cost',
            label: 'Cost',
            placeholder: 'Insert Cost',
            rules: 'required|numeric',
        },
        {
            name: 'priority',
            label: 'Priority',
            default: "Medium",
            rules: 'required',
        },
        {
            name: 'isActive',
            label: 'Active',
            type: "checkbox",
            default: false,
            rules: '',
        }, 
    ]) {
        super(actions, {fields: fields})
    }

}

export default CreateExpenseForm;

