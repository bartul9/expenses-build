import { makeAutoObservable } from "mobx";


class ModalStore {

    isOpen = false;


    constructor(doOnSubmit) {
        makeAutoObservable(this);

        this.doOnSubmit = doOnSubmit;
    }


    openModal = () => {
        this.isOpen = true;
    }

    closeModal = () => {
        this.isOpen = false;
    }

    onSubmit = () => {
        this.closeModal();
        this.doOnSubmit && this.doOnSubmit();
    }
 
}

export default ModalStore;