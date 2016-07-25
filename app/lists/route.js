import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      { name: 'Dogs', id:'1'},
      { name: 'Cats', id:'2'},
      { name: 'Fish', id:'3'}
    ];
  }

});
