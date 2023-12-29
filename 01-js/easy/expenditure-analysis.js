/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let out = []
  for(const element of transactions){
    if(!out.find(x => x.category === element.category)){
      out.push({
        category: element.category,
        totalSpent: element.price
      })
    } else {
      let obj = out.find(x => x.category === element.category)
      let idx = out.findIndex(x => x.category === element.category)
      out.splice(idx, 1, {
        category: element.category,
        totalSpent: obj.totalSpent + element.price
      })
    }
  }
  return out
}

module.exports = calculateTotalSpentByCategory;
