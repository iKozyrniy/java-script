const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
      this.items.push(itemName);
    },
    remove(itemName) {
      this.items = this.items.filter(item => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function(itemName, Action) {
    console.log(`Invoking ${Action.name} opeartion on ${itemName}`);
    Action.call(inventory, itemName);
  };
  
  invokeInventoryAction('Medkit', inventory.add);
  
  console.log(inventory.items);
  
  invokeInventoryAction('Gas mask', inventory.remove);
  
  console.log(inventory.items);
