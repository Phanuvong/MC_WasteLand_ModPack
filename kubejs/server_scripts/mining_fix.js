ServerEvents.tags('block', event => {
  const customOres = [
    'minecraft:iron_ore', 
    'minecraft:deepslate_iron_ore', 
    'scguns:sulfur_ore', 
    'create:zinc_ore',
    'create:deepslate_zinc_ore',
    'hardmodeores:richironore',
    'scguns:deepslate_sulfur_ore'
  ]

  // Allow Copper (Tier 1) to break the block
  event.remove('minecraft:needs_iron_tool', customOres)
  event.add('minecraft:needs_stone_tool', customOres)
})
