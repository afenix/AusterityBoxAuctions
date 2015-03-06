AusterityBox.ItemController = Ember.Controller.extend({
  needs: ['box'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
        name: this.get('name'),
        description: this.get('description'),
        date: this.get('date'),
      });
      comment.save();

      var box = this.get('controllers.box.model');
      box.get('items').pushObject(item);
      box.save();
    }
  }
});
