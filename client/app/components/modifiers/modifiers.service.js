var modifiersService = function ($q, DataService) {
	"ngInject";

	var modifiersGroups, priceLevels;

	return {
		getModifiersGroups: function(){
			if (!modifiersGroups) {
				return DataService.getModifiersGroups()
					.then(function(mgs_){
						modifiersGroups = mgs_;
						return modifiersGroups;
					})
			} else {
				return $q.resolve(modifiersGroups);				
			}
		},
		getPriceLevels: function() {
			if (!priceLevels) {
				return DataService.getModifiersPriceLevels()
					.then(function(pls_){
						priceLevels = pls_;
						return priceLevels;
					})
			} else {
				return $q.resolve(priceLevels);
			}
		},
		addModifiersGroup: function(){
			var newMG = {
				id: DataService.getGUID(),
				maximum: 0,
				minimum: 0,
				name: "Unnamed Modifier Group",
				required: false,
				modifiers: []
			};
			modifiersGroups.push(newMG);
			return newMG;
		},
		addModifier: function(mg){
			var newModifier = {
				id: DataService.getGUID(),
				name: "Unnamed Modifier",
				open: false,
				price_per_unit: 0
			};
			mg.modifiers.push(newModifier);
			return newModifier;
		},
		removeGroup: function(mg){
			let mgIdx = modifiersGroups.indexOf(mg);
			modifiersGroups.splice(mgIdx, 1);
		},
		removeModifier: function(mg, modifier){
			let modifierIdx = mg.modifiers.indexOf(modifier);
			mg.modifiers.splice(modifierIdx, 1);
		}
	}
}

export default modifiersService;