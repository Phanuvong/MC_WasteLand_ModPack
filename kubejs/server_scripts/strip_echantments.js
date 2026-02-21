// Strip enchantments when items are picked up
PlayerEvents.inventoryChanged(event => {
    const { item, player } = event;
    
    // Check if item has enchantments
    if (item.enchanted) {
        // Remove enchantments
        if (item.components) {
            item.components.remove("enchantments");
        }
        
        // Optional: Give XP as compensation
        player.giveExperiencePoints(5); // 5 XP points
    }
});