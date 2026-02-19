ServerEvents.blockLootTables(event => {
  
  // 1. Diamond Ore -> 2 Diamond Shards
  // Replicates diamond_ore.json logic
  event.addBlock('minecraft:diamond_ore', loot => {
    loot.addPool(pool => {
      // Entry 1: Silk Touch (Drops Ore)
      pool.addItem('minecraft:diamond_ore').addCondition({
        condition: "minecraft:match_tool",
        predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
      })
      
      // Entry 2: Default (Drops 2 Shards + Fortune)
      pool.addItem('hardmodeores:diamondshard')
        .count([2, 2])
        .addFunction({
          function: "minecraft:apply_bonus",
          enchantment: "minecraft:fortune",
          formula: "minecraft:ore_drops"
        })
        .addCondition({
          condition: "minecraft:inverted",
          term: {
            condition: "minecraft:match_tool",
            predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
          }
        })
    })
  })

  // 2. Rich Diamond Ore -> Diamond Ore Block
  // Replicates richdiamondore.json logic
  event.addBlock('hardmodeores:richdiamondore', loot => {
    loot.addPool(pool => {
      // Silk Touch case
      pool.addItem('hardmodeores:richdiamondore').addCondition({
        condition: "minecraft:match_tool",
        predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
      })
      // Default case
      pool.addItem('minecraft:diamond_ore')
        .addFunction({ function: "minecraft:apply_bonus", enchantment: "minecraft:fortune", formula: "minecraft:ore_drops" })
        .addFunction({ function: "minecraft:explosion_decay" })
        .addCondition({
          condition: "minecraft:inverted",
          term: {
            condition: "minecraft:match_tool",
            predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
          }
        })
    })
  })

  // 3. Rich Deepslate Diamond Ore -> Diamond
  // Replicates richdeepslatediamondore.json logic
  event.addBlock('hardmodeores:richdeepslatediamondore', loot => {
    loot.addPool(pool => {
      // Silk Touch case
      pool.addItem('hardmodeores:richdeepslatediamondore').addCondition({
        condition: "minecraft:match_tool",
        predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
      })
      // Default case
      pool.addItem('minecraft:diamond')
        .addFunction({ function: "minecraft:apply_bonus", enchantment: "minecraft:fortune", formula: "minecraft:ore_drops" })
        .addFunction({ function: "minecraft:explosion_decay" })
        .addCondition({
          condition: "minecraft:inverted",
          term: {
            condition: "minecraft:match_tool",
            predicate: { enchantments: [{ enchantment: "minecraft:silk_touch", levels: { min: 1 } }] }
          }
        })
    })
  })
})
