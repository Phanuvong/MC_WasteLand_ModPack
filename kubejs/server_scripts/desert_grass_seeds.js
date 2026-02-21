// Desert Grass Seeds Drop - 15% chance for wheat seeds from any grass type

// Renamed to avoid conflict with the other script
const SEED_GRASS_TYPES = [
    'deserts_and_dunes:desert_grass',
    'deserts_and_dunes:tall_desert_grass',
    'deserts_and_dunes:thin_desert_grass',
    'deserts_and_dunes:desert_fern',
    'deserts_and_dunes:brown_desert_grass',
    'deserts_and_dunes:tall_brown_desert_grass',
    'deserts_and_dunes:thin_brown_desert_grass',
    'deserts_and_dunes:brown_desert_fern',
    'deserts_and_dunes:light_desert_grass',
    'deserts_and_dunes:tall_light_desert_grass',
    'deserts_and_dunes:thin_light_desert_grass',
    'deserts_and_dunes:light_desert_fern',
    'deserts_and_dunes:green_desert_grass',
    'deserts_and_dunes:tall_green_desert_grass',
    'deserts_and_dunes:thin_green_desert_grass',
    'deserts_and_dunes:green_desert_fern'
];

BlockEvents.broken(event => {
    let block = event.getBlock();
    let blockId = block.getId();
    
    // Check if the broken block is in our list
    if (SEED_GRASS_TYPES.includes(blockId)) {
        
        // Get position for drops
        let x = block.getX() + 0.5;
        let y = block.getY() + 0.5;
        let z = block.getZ() + 0.5;
        let level = block.getLevel();
        
        // 15% chance to drop wheat seeds
        if (Math.random() < 0.05) {
            // Create item entity on ground
            let itemEntity = level.createEntity('item');
            itemEntity.setPosition(x, y, z);
            itemEntity.setItem('minecraft:wheat_seeds');
            itemEntity.spawn();
        }
    }
});

console.log('Desert grass seeds drop script loaded - 15% chance for wheat seeds');