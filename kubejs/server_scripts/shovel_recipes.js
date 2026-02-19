// SHOVEL RECIPES - Following your pattern
ServerEvents.recipes(event => {
    
    // ===== REMOVE ALL MODDED SHOVEL RECIPES FIRST =====
    event.remove({ output: 'harder_early_game:copper_tools_shovel' });
    
    // Remove other vanilla shovel recipes
    event.remove({ output: 'minecraft:wooden_shovel' });
    event.remove({ output: 'minecraft:stone_shovel' });
    event.remove({ output: 'minecraft:iron_shovel' });
    event.remove({ output: 'minecraft:golden_shovel' });
    event.remove({ output: 'minecraft:diamond_shovel' });
    
    // ===== WOODEN SHOVEL =====
    event.shaped('minecraft:wooden_shovel', [
        ' # ',
        'S/ ',
        ' / '
    ], {
        '#': 'tough_beginnings:tough_block_of_wood',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== STONE SHOVEL =====
    event.shaped('minecraft:stone_shovel', [
        ' F ',
        'S/ ',
        ' / '
    ], {
        'F': 'minecraft:flint',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== IRON SHOVEL =====
    event.shaped('minecraft:iron_shovel', [
        ' # ',
        'S/ ',
        ' / '
    ], {
        '#': 'minecraft:iron_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== GOLDEN SHOVEL =====
    event.shaped('minecraft:golden_shovel', [
        ' # ',
        'S/ ',
        ' / '
    ], {
        '#': 'minecraft:gold_ingot',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== DIAMOND SHOVEL =====
    event.shaped('minecraft:diamond_shovel', [
        ' # ',
        'S/ ',
        ' / '
    ], {
        '#': 'minecraft:diamond',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== COPPER SHOVEL (modded) =====
    event.shaped('harder_early_game:copper_tools_shovel', [
        ' # ',
        'S/ ',
        ' / '
    ], {
        '#': 'minecraft:copper_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
});