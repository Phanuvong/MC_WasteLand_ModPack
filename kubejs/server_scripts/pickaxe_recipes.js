ServerEvents.recipes(event => {
    
    // ===== REMOVE ALL MODDED PICKAXE RECIPES FIRST =====
    
    // Remove by output (removes ALL recipes that output this item)
    event.remove({ output: 'harder_early_game:copper_tools_pickaxe' });
    
    // If you want to be more precise, you can remove by recipe ID
    // To find the recipe ID: turn on advanced tooltips (F3+H) and hover over the recipe in JEI
    // event.remove({ id: 'harder_early_game:copper_tools_pickaxe' }); // or whatever the actual ID is
    
    // Remove other vanilla pickaxe recipes if you haven't already
    event.remove({ output: 'minecraft:wooden_pickaxe' });
    event.remove({ output: 'minecraft:stone_pickaxe' });
    event.remove({ output: 'minecraft:iron_pickaxe' });
    event.remove({ output: 'minecraft:golden_pickaxe' });
    event.remove({ output: 'minecraft:diamond_pickaxe' });
    
    // ===== THEN ADD YOUR CUSTOM RECIPES =====
    
    // ===== WOODEN PICKAXE =====
    event.shaped('minecraft:wooden_pickaxe', [
        '###',
        ' /S',
        ' / '
    ], {
        '#': 'tough_beginnings:tough_block_of_wood',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== STONE PICKAXE =====
    event.shaped('minecraft:stone_pickaxe', [
        'F##',
        ' /S',
        ' / '
    ], {
        'F': 'minecraft:flint',
        '#': 'minecraft:stone',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== IRON PICKAXE =====
    event.shaped('minecraft:iron_pickaxe', [
        '###',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:iron_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== GOLDEN PICKAXE =====
    event.shaped('minecraft:golden_pickaxe', [
        '###',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:gold_ingot',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== DIAMOND PICKAXE =====
    event.shaped('minecraft:diamond_pickaxe', [
        '###',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:diamond',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== COPPER PICKAXE (modded) =====
    event.shaped('harder_early_game:copper_tools_pickaxe', [
        '###',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:copper_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
});