var ModifiersController = function(modifiersService) {
	"ngInject";

	var ctrl = this;

	ctrl.selectMG = function(mg) {
		ctrl.modifiersGroups.forEach(mg=>{if (mg!==ctrl.modifiersGroup) mg.__edit=false});
		ctrl.modifiersGroup = mg;
		ctrl.modifier = undefined;
	}

	ctrl.selectModifier = function(modifier) {
		ctrl.modifier = modifier;

		ctrl.modifier.pls = [];
		ctrl.modifier.price_levels.forEach(function(price_level){
			ctrl.priceLevels.some(function(pl_){
				if (pl_.id===price_level.id) {
					ctrl.modifier.pls.push(pl_);
					return true;
				}
			});
		})
	}

	ctrl.addMG = function() {
		ctrl.selectMG(modifiersService.addModifiersGroup());
	}

	ctrl.addModifier = function() {
		ctrl.selectModifier(modifiersService.addModifier(ctrl.modifiersGroup));
	}

	ctrl.adjustMaximum = function() {
		if (!ctrl.modifiersGroup.maximum<ctrl.modifiersGroup.minimum) {
			ctrl.modifiersGroup.maximum = ctrl.modifiersGroup.minimum;
		}
	}

	ctrl.deleteMG = function(mg) {
		//TODO alert for confirmation
		ctrl.modifier = undefined;
		ctrl.modifiersGroup = undefined;
		modifiersService.removeGroup(mg);
	}

	ctrl.deleteModifier = function(modifier) {
		//TODO alert for confirmation
		ctrl.modifier = undefined;
		modifiersService.removeModifier(ctrl.modifiersGroup, modifier);
	}

	// ctrl.onMgDblClick = function(mg){
	// 	//this.categories.forEach(cat=>cat.__edit=false);
	// 	mg.__edit=true;
	// }
}

export default ModifiersController;
