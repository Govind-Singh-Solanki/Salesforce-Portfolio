import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/PortfolioImages'

export default class SkillCards extends LightningElement {

    lwcImage = IMAGES + '/lwc.png';
    apexImage = IMAGES + '/apex.png';
    soqlImage = IMAGES + '/soql-sosl.png';
    
}