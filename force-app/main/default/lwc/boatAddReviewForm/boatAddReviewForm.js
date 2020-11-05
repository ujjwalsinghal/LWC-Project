import { LightningElement, api } from 'lwc';
// imports
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import BOAT_REVIEW_OBJECT from schema - BoatReview__c
import BOAT_REVIEW_OBJECT from '@salesforce/schema/BoatReview__c';
// import NAME_FIELD from schema - BoatReview__c.Name
import NAME_FIELD from '@salesforce/schema/BoatReview__c.Name';
import RATING_FIELD from '@salesforce/schema/BoatReview__c.Rating__c';
// import COMMENT_FIELD from schema - BoatReview__c.Comment__c
import COMMENT_FIELD from '@salesforce/schema/BoatReview__c.Comment__c';
const SUCCESS_TITLE = 'Review Created!';

const SUCCESS_VARIANT     = 'success';
import BOAT_FIELD from '@salesforce/schema/BoatReview__c.Boat__c';
export default class BoatAddReviewForm extends LightningElement {
    // Private

    boatId;
    rating;
    boatReviewObject = BOAT_REVIEW_OBJECT;
    nameField        = NAME_FIELD;
    commentField     = COMMENT_FIELD;
    labelSubject = 'Review Subject';
    labelRating  = 'Rating';

    @api boat;

    review = '';
    title = '';
    rating = '';
    comment = '';
    // Public Getter and Setter to allow for logic to run on recordId change
    @api
    get recordId() { 
        return this.boatId;
    }

    set recordId(value) {
        //sets boatId attribute
        this.boatId = value;
        //sets boatId assignment
        }
    

    // Gets user rating input from stars component
  
    
    // Custom submission handler to properly set Rating
    handleRatingChanged(event) {
        this.rating = event.detail.rating;
    }
    // This function must prevent the anchor element from navigating to a URL.
    // form to be submitted: lightning-record-edit-form
    handleSubmit(event) { 
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Boat__c = this.boatId;
        fields.Rating__c = this.rating;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }
    
    // Shows a toast message once form is submitted successfully
    // Dispatches event when a review is created
    handleSuccess(event) {
      // TODO: dispatch the custom event and show the success message
        const evt = new ShowToastEvent({
            title: SUCCESS_TITLE,
            
            variant: SUCCESS_VARIANT,
        });
        this.dispatchEvent(evt);
        this.dispatchEvent(new CustomEvent('createreview'));
        this.handleReset(event);
    }
    
    // Clears form data upon submission
    // TODO: it must reset each lightning-input-field
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        const fields = event.detail.fields;
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
  }