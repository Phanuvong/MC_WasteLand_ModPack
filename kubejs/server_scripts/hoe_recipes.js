// HOE RECIPES - Following your pattern
ServerEvents.recipes(event => {
    
    // ===== REMOVE ALL MODDED HOE RECIPES FIRST =====
    event.remove({ output: 'harder_early_game:copper_tools_hoe' });
    
    // Remove other vanilla hoe recipes
    event.remove({ output: 'minecraft:wooden_hoe' });
    event.remove({ output: 'minecraft:stone_hoe' });
    event.remove({ output: 'minecraft:iron_hoe' });
    event.remove({ output: 'minecraft:golden_hoe' });
    event.remove({ output: 'minecraft:diamond_hoe' });
    
    // ===== WOODEN HOE =====
    event.shaped('minecraft:wooden_hoe', [
        '## ',
        ' /S',
        ' / '
    ], {
        '#': 'tough_beginnings:tough_block_of_wood',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== STONE HOE =====
    event.shaped('minecraft:stone_hoe', [
        'F# ',
        ' /S',
        ' / '
    ], {
        'F': 'minecraft:flint',
        '#': 'minecraft:stone',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== IRON HOE =====
    event.shaped('minecraft:iron_hoe', [
        '## ',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:iron_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== GOLDEN HOE =====
    event.shaped('minecraft:golden_hoe', [
        '## ',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:gold_ingot',
        '/': 'minecraft:stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== DIAMOND HOE =====
    event.shaped('minecraft:diamond_hoe', [
        '## ',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:diamond',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
    
    // ===== COPPER HOE (modded) =====
    event.shaped('harder_early_game:copper_tools_hoe', [
        '## ',
        ' /S',
        ' / '
    ], {
        '#': 'minecraft:copper_ingot',
        '/': 'harder_early_game:thick_stick',
        'S': 'tough_beginnings:fiber_rope'
    });
});