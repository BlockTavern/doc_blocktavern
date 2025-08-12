---
title: Dummy Player Commands
description: Commands for spawning and managing dummy players on BlockTavern
order: 2
---

# Dummy Player Commands

BlockTavern provides dummy player functionality that allows you to spawn AI-controlled players for various purposes such as testing, decoration, or automation assistance.

## What are Dummy Players?

Dummy players are AI-controlled entities that look and behave like real players but are controlled by the server. They can be useful for:
- **Testing redstone contraptions** that require player interaction
- **Decorating builds** with "NPCs" or guards
- **Holding items** or maintaining certain positions
- **Simulating player presence** for various mechanisms

## Spawning Dummy Players

### Basic Spawn Command
Create a dummy player at your current location.

**Usage**: `/dummy spawn <name>`

**Parameters**:
- `<name>` - The name for your dummy player (must be unique)

**Example**:
```
/dummy spawn Guard01
```

This will spawn a dummy player named "Guard01" at your current position.

![Dummy Player Spawn](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20player%20spawning%20dummy%20NPC%20character%20with%20magical%20summoning%20effects&image_size=landscape_4_3)

### Advanced Spawn Options
Spawn dummy players with specific configurations.

**Usage**: `/dummy spawn <name> [skin] [position]`

**Parameters**:
- `<name>` - The dummy player's name
- `[skin]` - Optional: Specify a player skin to use
- `[position]` - Optional: Coordinates where to spawn (x y z)

**Examples**:
```
/dummy spawn Shopkeeper Steve
/dummy spawn Miner Alex 100 64 200
```

## Managing Dummy Players

### List Active Dummies
View all currently spawned dummy players.

**Usage**: `/dummy list`

**Description**: This command shows all active dummy players, their names, locations, and current status.

![Dummy List Command](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20interface%20showing%20list%20of%20active%20dummy%20players%20with%20their%20coordinates&image_size=landscape_4_3)

### Move Dummy Players
Relocate a dummy player to a new position.

**Usage**: `/dummy move <name> [coordinates]`

**Parameters**:
- `<name>` - The dummy player to move
- `[coordinates]` - Target location (x y z), or omit to move to your location

**Examples**:
```
/dummy move Guard01
/dummy move Shopkeeper 150 65 300
```

### Control Dummy Actions
Make dummy players perform specific actions.

**Usage**: `/dummy action <name> <action>`

**Available Actions**:
- `sit` - Make the dummy sit down
- `stand` - Make the dummy stand up
- `look <direction>` - Make the dummy look in a direction
- `wave` - Make the dummy wave
- `point` - Make the dummy point

**Examples**:
```
/dummy action Guard01 sit
/dummy action Shopkeeper wave
/dummy action Miner look north
```

## Removing Dummy Players

### Remove Specific Dummy
Remove a single dummy player by name.

**Usage**: `/dummy kill <name>`

**Example**:
```
/dummy kill Guard01
```

This will permanently remove the dummy player named "Guard01" from the server.

![Dummy Kill Command](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20dummy%20player%20disappearing%20with%20smoke%20particles%20and%20despawn%20effects&image_size=landscape_4_3)

### Remove All Dummies
Remove all dummy players you have spawned.

**Usage**: `/dummy killall`

**Warning**: This command will remove ALL dummy players that belong to you. Use with caution!

### Auto-Cleanup
Dummy players are automatically removed when:
- The player who spawned them logs off for more than 30 minutes
- The server restarts
- The chunk they're in is unloaded for extended periods

## Permissions and Limits

### Player Limits
- **Default Players**: Can spawn up to 2 dummy players
- **VIP Players**: Can spawn up to 5 dummy players
- **Staff Members**: Can spawn up to 10 dummy players

### Permission Requirements
- Basic dummy commands require no special permissions
- Advanced features may require higher ranks
- Staff can manage any player's dummies if needed

## Usage Guidelines

### Best Practices
1. **Name your dummies clearly** - Use descriptive names like "ShopGuard" or "FarmHelper"
2. **Clean up after yourself** - Remove dummies when you're done with them
3. **Respect server performance** - Don't spawn unnecessary dummies
4. **Be considerate** - Don't place dummies in other players' areas without permission

### Prohibited Uses
- **Griefing**: Don't use dummies to harass other players
- **Lag creation**: Avoid spawning too many dummies in one area
- **Impersonation**: Don't create dummies that impersonate real players
- **Exploitation**: Don't use dummies to exploit game mechanics

## Troubleshooting

### Common Issues

**Q: My dummy disappeared**
A: Dummies may despawn if:
- The chunk was unloaded
- Server restarted
- You exceeded your dummy limit
- The dummy was idle too long

**Q: Can't spawn more dummies**
A: Check if you've reached your limit with `/dummy list`. Remove unused dummies first.

**Q: Dummy not responding to commands**
A: Ensure you're using the correct name and that the dummy still exists. Use `/dummy list` to verify.

### Getting Help
If you encounter issues with dummy players:
1. Check the `/dummy help` command for quick reference
2. Ask staff members for assistance
3. Report bugs in our Discord server
4. Check our [FAQ section](/en-US/FAQ/) for common solutions

## Advanced Features

### Dummy Equipment
Some ranks can equip dummies with items:
```
/dummy equip <name> <item>
/dummy equip Guard01 diamond_sword
```

### Dummy Behavior
Advanced users can set dummy behavior patterns:
```
/dummy behavior <name> <pattern>
/dummy behavior Patrol guard_route
```

*Note: Advanced features may require special permissions or ranks.*

<Contributors />

<GitHistoryInformation />