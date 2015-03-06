AusterityBox.Item = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  bidnumber: DS.attr(),
  eststartprice: DS.attr(),
  backstory: DS.attr(),
  date: DS.attr(),
  box: DS.belongsTo('box', {async: true})
});
