// Simple enchantment removal - Anvils work, Enchanting disabled

// Remove enchanting table and enchanted books, but keep anvils
ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:enchanting_table' });
    event.remove({ output: 'minecraft:enchanted_book' });
    // DO NOT remove anvils - this line is gone
    console.log('Enchanting recipes removed - Anvils untouched');
});

// Block enchanting table only
BlockEvents.rightClicked('minecraft:enchanting_table', event => {
    event.cancel();
    event.player.tell('§cEnchanting is disabled in this pack!');
});

// ANVILS ARE NOT BLOCKED - No event for anvils means they work normally

// Remove any enchanted items that somehow appear
PlayerEvents.inventoryChanged(event => {
    if (event.item && event.item.enchanted) {
        event.player.inventory.clear(event.item);
        event.player.tell('§cEnchanted items are not allowed!');
    }
});

// Remove enchanted books from loot
LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.CHEST)
        .removeLoot('minecraft:enchanted_book');
    
    event.addLootTypeModifier(LootType.ENTITY)
        .removeLoot('minecraft:enchanted_book');
});

console.log('Enchantment disabled - Anvils fully functional!');