import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class NavBar extends LightningElement {

    renderedCallback() {
        // loads third-party/external css
        loadStyle(this, ICONS + '/style.css');
    }

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    handleHamburger() {
        const isResponsive = this.template.querySelector('.topnav');
        isResponsive.classList.toggle('responsive'); //Adds this class if not present and removes if already present
    }

}