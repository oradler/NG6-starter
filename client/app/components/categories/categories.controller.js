// class CategoriesController {
//   constructor() {
//     //ctrl.name = 'home';
//   }
// }


var CategoriesController = function(categoriesService) {
	"ngInject";

	var ctrl = this;		

	ctrl.selectCategory = function(category) {
		ctrl.categories.forEach(cat=>{if (cat!==ctrl.category) cat.__edit=false});
		ctrl.category = category;
		ctrl.item = undefined;
	}

	ctrl.selectItem = function(item) {
		ctrl.item = item;

		ctrl.item.pls = [];
		ctrl.item.price_levels.forEach(function(price_level){
			ctrl.priceLevels.some(function(pl_){
				if (pl_.id===price_level.id) {
					ctrl.item.pls.push(pl_);
					return true;
				}
			});
		})		
	}

	ctrl.itemChanged = function(item) {
		//TODO validate..
		//TODO persist the change.
	}

	ctrl.addCategory = function() {
		ctrl.selectCategory(categoriesService.addCategory());
	}

	ctrl.addItem = function() {
		ctrl.selectItem(categoriesService.addItem(ctrl.category));
	}

	ctrl.deleteCategory = function(category) {
		//TODO alert for confirmation
		ctrl.item = undefined;
		ctrl.category = undefined;
		categoriesService.removeCategory(category);
	}

	ctrl.deleteItem = function(item) {
		//TODO alert for confirmation
		ctrl.item = undefined;
		categoriesService.removeItem(ctrl.category, item);
	}

	ctrl.onCatDblClick = function(category){
		//ctrl.categories.forEach(cat=>cat.__edit=false);
		category.__edit=true;
	}
}

export default CategoriesController;
