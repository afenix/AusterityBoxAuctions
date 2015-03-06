AusterityBox.NewItemController = Ember.Controller.extend({
  needs: ['box'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
        name: this.get('name'),
        description: this.get('description'),
        owner: this.get('owner'),
        bidnumber: this.get('bidnumber'),
        eststartprice: this.get('eststartprice'),
        backstory: this.get('backstory'),
        date: this.get('date')
      });
      item.save();

      var box = this.get('controllers.box.model');
      box.get('items').pushObject(item);
      box.save();
    }
  }
});
