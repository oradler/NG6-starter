//import AppDataService from '../app.data.service';

var categoriesService = function ($q, DataService) {
	"ngInject";

	var categories;

	return {
		getCategories: function(){
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
				name: "unnamed category",
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
				name: "unnamed item",
				open: false,
				price: 0,
				price_levels: [
				]				
			};
			category.items.push(newItem);
			return newItem;
		}
	}
}

export default categoriesService;