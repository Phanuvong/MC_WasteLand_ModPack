// AXE RECIPES - Working Version
ServerEvents.recipes(event => {
    
    // ===== REMOVE ALL MODDED AXE RECIPES FIRST =====
    event.remove({ output: 'harder_early_game:copper_tools_axe' });
    
    // Remove other vanilla axe recipes
    event.remove({ output: 'minecraft:wooden_axe' });
    event.remove({ output: 'minecraft:stone_axe' });
    event.remove({ output: 'minecraft:iron_axe' });
    event.remove({ output: 'minecraft:golden_axe' });
    event.remove({ output: 'minecraft:diamond_axe' });
    
    // ===== THEN ADD YOUR CUSTOM RECIPES =====
    
    // ===== WOODEN AXE =====
    event.shaped('minecraft:wooden_axe', [
        '## ',
        '#/S',
        ' / '
    ], {
        '#': 'tough_beginnings:tough_block_of_wood',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== STONE AXE =====
    event.shaped('minecraft:stone_axe', [
        '## ',
        'F/S',
        ' / '
    ], {
        'F': 'minecraft:flint',
        '#': 'minecraft:stone',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== IRON AXE =====
    event.shaped('minecraft:iron_axe', [
        '## ',
        '#/S',
        ' / '
    ], {
        '#': 'minecraft:iron_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== GOLDEN AXE =====
    event.shaped('minecraft:golden_axe', [
        '## ',
        '#/S',
        ' / '
    ], {
        '#': 'minecraft:gold_ingot',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== DIAMOND AXE =====
    event.shaped('minecraft:diamond_axe', [
        '## ',
        '#/S',
        ' / '
    ], {
        '#': 'minecraft:diamond',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== COPPER AXE (modded) =====
    event.shaped('harder_early_game:copper_tools_axe', [
        '## ',
        '#/S',
        ' / '
    ], {
        '#': 'minecraft:copper_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
});