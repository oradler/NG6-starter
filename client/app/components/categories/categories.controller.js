// class CategoriesController {
//   constructor() {
//     //this.name = 'home';
//   }
// }


var CategoriesController = function(categoriesService) {
	"ngInject";

	var ctrl = this;

	this.$onChanges = function(changes) {
		if (changes.categories) {
			//debugger;
			//this.categories = angular.copy(this.categories);
		}
	}

	this.$onInit = function() {
		//this.name = 'categorieszzz';
		// this.selectedCategory;		
	}		

	this.selectCategory = function(category) {
		this.categories.forEach(cat=>{if (cat!==category) cat.__edit=false});
		this.category = category;
		this.item = undefined;
	}

	this.selectItem = function(item) {
		this.item = item;
	}

	this.itemChanged = function(item) {
		//validate..
		//persist the change..
	}

	this.addCategory = function() {
		this.selectCategory(categoriesService.addCategory());
	}

	this.addItem = function() {
		this.selectItem(categoriesService.addItem(this.category));
	}

	this.onCatDblClick = function(category){
		//this.categories.forEach(cat=>cat.__edit=false);
		category.__edit=true;
	}
}

export default CategoriesController;
