var modifiersService = function ($q, DataService) {
	"ngInject";

	var modifiersGroups;

	return {
		getModifiersGroups: function(){
			if (!modifiersGroups) {
				return DataService.getModifiersGroups()
					.then(function(mgs_){
						modifiersGroups = mgs_;
						//$q.resolve(categories)
						return modifiersGroups;
					})
			} else {
				return $q.resolve(modifiersGroups);				
			}
		},
		addModifiersGroup: function(){
			var newMG = {
				id: DataService.getGUID(),
				maximum: 0,
				minimum: 0,
				name: "Unnamed Modifier Group",
				required: false,
				options: []
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
		// removeCategory: function(category){
		// 	let catIdx = categories.indexOf(category);
		// 	categories.splice(catIdx, 1);
		// },
		// removeItem: function(category, item){
		// 	let itemIdx = category.items.indexOf(item);
		// 	category.items.splice(itemIdx, 1);
		// }
	}
}

export default modifiersService;