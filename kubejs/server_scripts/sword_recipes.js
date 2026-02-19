// SWORD RECIPES - Fixed Version
ServerEvents.recipes(event => {
    
    // ===== REMOVE ALL MODDED SWORD RECIPES FIRST =====
    event.remove({ output: 'harder_early_game:copper_tools_sword' });
    
    // Remove other vanilla sword recipes
    event.remove({ output: 'minecraft:wooden_sword' });
    event.remove({ output: 'minecraft:stone_sword' });
    event.remove({ output: 'minecraft:iron_sword' });
    event.remove({ output: 'minecraft:golden_sword' });
    event.remove({ output: 'minecraft:diamond_sword' });
    
    // ===== THEN ADD YOUR CUSTOM RECIPES =====
    
    // ===== WOODEN SWORD =====
    event.shaped('minecraft:wooden_sword', [
        ' # ',
        ' # ',
        'S/ '
    ], {
        '#': 'tough_beginnings:tough_block_of_wood',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== STONE SWORD =====
    event.shaped('minecraft:stone_sword', [
        ' F ',
        ' # ',
        'S/ '
    ], {
        '#': 'minecraft:stone',
        'F': 'minecraft:flint',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== IRON SWORD =====
    event.shaped('minecraft:iron_sword', [
        ' # ',
        ' # ',
        'S/ '
    ], {
        '#': 'minecraft:iron_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== GOLDEN SWORD =====
    event.shaped('minecraft:golden_sword', [
        ' # ',
        ' # ',
        'S/ '
    ], {
        '#': 'minecraft:gold_ingot',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== DIAMOND SWORD =====
    event.shaped('minecraft:diamond_sword', [
        ' # ',
        ' # ',
        'S/ '
    ], {
        '#': 'minecraft:diamond',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== COPPER SWORD (modded) =====
    event.shaped('harder_early_game:copper_tools_sword', [
        ' # ',
        ' # ',
        'S/ '
    ], {
        '#': 'minecraft:copper_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
});
