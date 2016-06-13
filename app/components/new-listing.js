import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveNewListing1() {
      var params = {
        title: this.get('title'),
        category: this.get('category'),
        date: this.get('date'),
        price: this.get('price'),
        address: this.get('address'),
        contact: this.get('contact'),
        text: this.get('text'),
      };

      this.set('addNewListing', false);
      this.sendAction('saveNewListing2', params);
    }
  }
});
