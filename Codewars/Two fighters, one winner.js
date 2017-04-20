// Instructions:
// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//
// Sample Tests:
// Test.describe("Example Test Cases", function(){
// 	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
// 	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
// 	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
// 	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
// 	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
// 	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")
// });

function declareWinner(fighter1, fighter2, firstAttacker) {
	var f1_name = fighter1.name,
		f2_name = fighter2.name,
		f1_health = fighter1.health,
		f2_health = fighter2.health,
		f1_damage = fighter1.damagePerAttack,
		f2_damage = fighter2.damagePerAttack,
		f1_round,
		f2_round,
		winner = '';

	f1_round = Math.ceil(f1_health / f2_damage);
	f2_round = Math.ceil(f2_health / f1_damage);

	if(f1_round > f2_round){
		winner = f1_name;
	} else if(f1_round < f2_round){
		winner = f2_name;
	} else {
		winner = firstAttacker == f1_name ? f1_name : f2_name;
	}

	return winner;
}