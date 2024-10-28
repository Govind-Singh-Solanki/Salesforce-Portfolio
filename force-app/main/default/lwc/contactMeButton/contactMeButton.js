import { api, LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createLead from '@salesforce/apex/ContactMeController.createLead';

export default class ContactMeButton extends LightningElement {
    
    dialog;
    fname;
    lname;
    company;
    email;
    description;
    snackbar;

    renderedCallback(){
        this.dialog = this.template.querySelector('.contact-dialog');
        this.fname = this.template.querySelector('.fname');
        this.lname = this.template.querySelector('.lname');
        this.company = this.template.querySelector('.company');
        this.email = this.template.querySelector('.email');
        this.description = this.template.querySelector('.description');
        this.snackbar = this.template.querySelector('c-snackbar');
    }

    showDialog(event){
        this.dialog.showModal();
    }

    closeDialog(event){
        this.dialog.close();
    }

    handleSubmit(event){
        const fnameValue = this.fname.value;
        const lnameValue = this.lname.value;
        const companyValue = this.company.value;
        const emailValue = this.email.value;
        const descriptionValue = this.description.value;
        
        if (lnameValue === ""){
            this.snackbar.showSnackBar('Last Name is a required field.', 'error');
            return;
        } else if (emailValue === ""){
            this.snackbar.showSnackBar('Email is a required field.', 'error');
            return;
        } else if (descriptionValue === ""){
            this.snackbar.showSnackBar('Description is a required field.', 'error');
            return;
        } else {
            createLead({
                fname: fnameValue,
                lname: lnameValue,
                company: companyValue,
                email: emailValue,
                description: descriptionValue
            })
            .then(() => {
                this.closeDialog();
                // this.showToast('Submitted!', 'Your request has been submitted.', 'success');
                this.snackbar.showSnackBar('Your request has been received.', 'success');
            })
            .catch(error => {});

            // this.closeDialog();    //for closing the dialog box
            // this.showToast('Submitted!', 'Your request has been submitted.', 'success');
        }
    }
    
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}