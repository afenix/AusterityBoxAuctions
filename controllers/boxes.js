AusterityBox.BoxesController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  actions: {
    sortByDesc: function(){
      this.set('sortProperties', ['description']);
    },

    sortByName: function(){
      this.set('sortProperties', ['name']);
    },

    save: function() {
      var newBox = this.store.createRecord('boxes', {
        name: this.get('name'),
        description: this.get('description')
      });
      newBox.save();
      this.transitionToRoute('boxes');
    },

    delete: function(box) {
      if (confirm('Are you sure?')) {
        box.destroyRecord();
      };
    }
  }
});
