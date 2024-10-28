import { LightningElement } from 'lwc';
import ICONS from '@salesforce/resourceUrl/Icons';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class NavBar extends LightningElement {

    // Default active tab = home
    activeTab = 'home';

    //Setting Home active
    get activeHome() {
        return this.activeTab === 'home' ? 'active' : '';
    }

    //Setting Skills active
    get activeSkill() {
        return this.activeTab === 'skills' ? 'active' : '';
    }

    //Setting About Me active
    get activeAbout() {
        return this.activeTab === 'about' ? 'active' : '';
    }

    renderedCallback() {
        // loads third-party/external css
        loadStyle(this, ICONS + '/style.css');
    }

    switchActiveTab(event){
        // Get the tab id from the data-id attribute
        const clickedTab = event.target.dataset.id;
        this.activeTab = clickedTab;
    }

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    handleHamburger() {
        const isResponsive = this.template.querySelector('.topnav');
        isResponsive.classList.toggle('responsive'); //Adds this class if not present and removes if already present
    }

}