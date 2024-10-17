import { api, LightningElement } from 'lwc';

export default class Snackbar extends LightningElement {

    snackbarMessage;

    @api
    showSnackBar(message, text) {
        // Get the snackbar DIV
        const snackbar = this.template.querySelector('.snackbar');
        
        this.snackbarMessage = message;

        // Add the success of error class to DIV
        snackbar.classList.add(text);
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snackbar.classList.remove(text); }, 2800);
      }

}