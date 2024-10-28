import { LightningElement } from 'lwc';
import LOCATION from '@salesforce/resourceUrl/locationIcon';
import CALL from '@salesforce/resourceUrl/callIcon';
import INSTA from '@salesforce/resourceUrl/instagram';
import LINKEDIN from '@salesforce/resourceUrl/linkedIn';
import GITHUB from '@salesforce/resourceUrl/github';
import TWITTER from '@salesforce/resourceUrl/twitter';
import GMAIL from '@salesforce/resourceUrl/gmail';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class Footer extends LightningElement {

  linkedIn = 'https://www.linkedin.com/in/govind-singh-solanki/';

  renderedCallback() {
    // loads third-party/external css
    loadStyle(this, LOCATION + '/style.css');
    loadStyle(this, CALL + '/style.css');
    loadStyle(this, INSTA + '/style.css');
    loadStyle(this, LINKEDIN + '/style.css');
    loadStyle(this, GITHUB + '/style.css');
    loadStyle(this, TWITTER + '/style.css');
    loadStyle(this, GMAIL + '/style.css');
  }

  handleSocialProfiles(event){
    window.open("https://www.linkedin.com/in/govind-singh-solanki/", "_blank");
  }

}