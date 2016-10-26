var DataService = function($q) {
  "ngInject";
  var categories, modifiersGroups, modifiers, printingOrder, priceLevels;

  function getGUID() {
    function s4() {return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);};
    let guid = "";
    while (guid.length<8) {
      guid+=s4();
    }
    return guid;
  };

  return {
    init: function() {
      sessionStorage.setItem('categories', JSON.stringify(window.catItems.categories));
      sessionStorage.setItem('modifiers', JSON.stringify(window.modifiers.modifiers));
      sessionStorage.setItem('modifiersGroups', JSON.stringify(window.modifierGroups.modifier_groups));
    },
    getCategories: function() {
      if (!categories) {
        categories = JSON.parse(sessionStorage.getItem('categories'));
      }
      return $q.resolve(categories);
    },
    getModifiersGroups: function() {
      if (!modifiers) {
        modifiers = JSON.parse(sessionStorage.getItem('modifiers'));                
      }
      if (!modifiersGroups) {
        //ASSUMPTION: since the modifiers were supplied in the data package, I will use the "options" array as if it's an array of modifiers IDs only
        modifiersGroups = JSON.parse(sessionStorage.getItem('modifiersGroups'));
        modifiersGroups.forEach(function(mg){
          mg.modifiers = mg.options.filter(function(modifierObj){          
            let exists = modifiers.some(modifier=>modifier.id===modifierObj.id);
            return exists ? true : false;
          });          
        });
      };
      return $q.resolve(modifiersGroups);
    },
    getModifiersPriceLevels: function() {
      var priceLevels = [];
      if (!modifiers) {
        modifiers = JSON.parse(sessionStorage.getItem('modifiers'));                
      }
      modifiers.forEach(function(modifier){
        modifier.price_levels.forEach(function(pl){
          priceLevels.push(pl);
        })        
      });
      return $q.resolve(priceLevels);
    },
    getItems: function() {
      if (!categories) {
        categories = JSON.parse(sessionStorage.getItem('categories'));
      }
      var items = [];      
      categories.forEach(function(category){
        category.items.forEach(function(item){
          items.push(item);
        })
      })
      return $q.resolve(items);      
    },
    getItemsPriceLevels: function() {
      var priceLevels = [];
      if (!categories) {
        categories = JSON.parse(sessionStorage.getItem('categories'));
      }
      categories.forEach(function(category){
        category.items.forEach(function(modifier){
          modifier.price_levels.forEach(function(pl){
            priceLevels.push(pl);
          });
        });
      });
      return $q.resolve(priceLevels);
    },    
    getPrintingOrder: function() {
      if (!printingOrder) {
        printingOrder = [];        
      }
      return $q.resolve(printingOrder);      
    },
    // getPriceLevels: function() {
    //   if (!priceLevels) {
    //     priceLevels = [];
    //   }
    //   return $q.resolve(priceLevels);
    // }
    getGUID: getGUID
  }
}

export default DataService;