var ModifiersController = function(modifiersService) {
	"ngInject";

	var ctrl = this;

	this.$onChanges = function(changes) {
		// if (changes.categories) {
			//debugger;
			//this.categories = angular.copy(this.categories);
		// }
	}

	this.$onInit = function() {
		//console.log(this.modifiersGroup);		
		//this.name = 'categorieszzz';
		// this.selectedCategory;		
	}		

	this.selectMG = function(mg) {
		this.modifiersGroups.forEach(mg=>{if (mg!==this.modifiersGroup) mg.__edit=false});
		this.modifiersGroup = mg;
		this.modifier = undefined;
	}

	this.selectModifier = function(modifier) {
		this.modifier = modifier;
	}

	this.modifierChanged = function(modifier) {
		//TODO validate..
		//TODO persist the change.
	}

	this.addMG = function() {
		this.selectMG(modifiersService.addModifiersGroup());
	}

	this.addModifier = function() {
		this.selectModifier(modifiersService.addModifier(this.modifiersGroup));
	}

	this.adjustMaximum = function() {
		if (!this.modifiersGroup.maximum<this.modifiersGroup.minimum) {
			this.modifiersGroup.maximum = this.modifiersGroup.minimum;
		}
	}

	// this.deleteCategory = function(category) {
	// 	//TODO alert for confirmation
	// 	this.item = undefined;
	// 	this.category = undefined;
	// 	categoriesService.removeCategory(category);
	// }

	// this.deleteItem = function(item) {
	// 	//TODO alert for confirmation
	// 	this.item = undefined;
	// 	categoriesService.removeItem(this.category, item);
	// }

	this.onMgDblClick = function(mg){
		//this.categories.forEach(cat=>cat.__edit=false);
		mg.__edit=true;
	}
}

export default ModifiersController;
