import { api, LightningElement, track } from 'lwc';

export default class ContactMeButton extends LightningElement {
    
    dialog;

    renderedCallback(){
        this.dialog = this.template.querySelector('.contact-dialog');
    }

    showDialog(event){
        this.dialog.showModal();
    }

    closeDialog(event){
        this.dialog.close();
    }
}