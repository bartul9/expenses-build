import MobxReactForm from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

const plugins = {
  dvr: dvr(validatorjs),
};

export class FormBase extends MobxReactForm {

    constructor(actions, { fields }){
        super({ fields }, {plugins, hooks: actions});
    }
};