import DS from 'ember-data';


export default DS.Model.extend({
  title: DS.attr(),
  category: DS.attr(),
  date: DS.attr(),
  price: DS.attr(),
  address: DS.attr(),
  contact: DS.attr(),
  text: DS.attr()
});
