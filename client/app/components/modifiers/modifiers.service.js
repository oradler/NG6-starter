var modifiersService = function ($q, DataService) {
	"ngInject";

	var modifierGroups;

	return {
		getModifierGroups: function(){
			if (!categories) {
				return DataService.getCategories()
					.then(function(categories_){
						categories = categories_;
						//$q.resolve(categories)
						return categories;
					})
			} else {
				return $q.resolve(categories);				
			}
		},
		addCategory: function(){
			var newCategory = {
				id: DataService.getGUID(),
				name: "Unnamed Category",
				items: []
			};
			categories.push(newCategory);
			return newCategory;
		},
		addItem: function(category){
			var newItem = {
				id: DataService.getGUID(),
				in_stock: false,
				modifier_groups_count: 0,
				modifier_groups_id: [],
				name: "Unnamed Item",
				open: false,
				price: 0,
				price_levels: [
				]				
			};
			category.items.push(newItem);
			return newItem;
		},
		removeCategory: function(category){
			let catIdx = categories.indexOf(category);
			categories.splice(catIdx, 1);
		},
		removeItem: function(category, item){
			let itemIdx = category.items.indexOf(item);
			category.items.splice(itemIdx, 1);
		}
	}
}

export default categoriesService;