let db;
let budgetTrack;

const request = indexedDB.open('BudgetDB', budgetTrack || 1);

request.onsuccess = event => {
    console.log(request.result.name);
  };