var DataService = function($q) {
  "ngInject";
  var categories, modifiers, modifierGroups;

  function getGUID() {
    function s4() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);};
    let guid = "";
    while (guid.length<8) {
      guid+=s4();
    }
    //return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
    return guid;
  };

  return {
    init: function() {
      sessionStorage.setItem('categories', JSON.stringify(window.catItems.categories));
      sessionStorage.setItem('modifiers', JSON.stringify(window.modifiers.modifiers));
      sessionStorage.setItem('modifierGroups', JSON.stringify(window.modifierGroups.modifier_groups));
    },
    getCategories: function() {
      if (!categories) {
        categories = JSON.parse(sessionStorage.getItem('categories'));
      }
      return $q.resolve(categories);
    },
    getModifiers: function() {
      if (!modifiers) {
        modifiers = JSON.parse(sessionStorage.getItem('modifiers'));
      }
      return $q.resolve(modifiers);
    },
    getModifierGroups: function() {
      if (!modifierGroups) {
        modifierGroups = JSON.parse(sessionStorage.getItem('modifierGroups'));
      }
      return $q.resolve(modifierGroups);
    },
    getGUID: getGUID
  }
}

export default DataService;