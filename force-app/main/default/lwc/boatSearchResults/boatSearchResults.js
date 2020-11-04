import { LightningElement, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class BoatSearchResults extends LightningElement {
    @api recordId;
}