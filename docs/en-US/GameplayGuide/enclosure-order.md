---
title: Enclosure Land Claims
description: Complete guide to BlockTavern's Enclosure land claim system
order: 3
---

# Enclosure Land Claims

BlockTavern uses the Enclosure system for land protection and claims. This system allows players to protect their builds from griefing and unauthorized modifications while maintaining a fair and balanced gameplay environment.

## What is Enclosure?

Enclosure is a land claim plugin that allows players to:
- **Protect builds** from griefing and theft
- **Control access** to specific areas
- **Manage permissions** for friends and team members
- **Prevent unauthorized modifications** to your creations
- **Secure valuable items** and resources

## Getting Started

### Required Tool: Wooden Hoe
To use the Enclosure system, you need a **wooden hoe**. This is your primary tool for selecting and managing land claims.

**How to get a wooden hoe**:
```
/give @s wooden_hoe
```
Or craft one using 2 sticks and 2 wooden planks.

![Wooden Hoe Tool](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20wooden%20hoe%20tool%20in%20player%20hand%20with%20land%20selection%20interface&image_size=square)

### Basic Selection Process

1. **Hold the wooden hoe** in your hand
2. **Right-click** on the first corner of your desired area
3. **Right-click** on the opposite corner to complete the selection
4. **Use commands** to create your claim

![Land Selection Process](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20player%20selecting%20land%20area%20with%20wooden%20hoe%20showing%20corner%20markers&image_size=landscape_4_3)

## Core Commands

### Creating Land Claims

#### Create a New Claim
After selecting an area with your wooden hoe:

**Usage**: `/enclosure create <name>`

**Parameters**:
- `<name>` - A unique name for your land claim

**Example**:
```
/enclosure create MyHouse
```

**Requirements**:
- You must have selected an area first
- The name must be unique among your claims
- You must have sufficient claim blocks

![Creating Land Claim](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20land%20claim%20creation%20with%20protective%20barrier%20effect%20and%20boundary%20markers&image_size=landscape_4_3)

### Teleportation Commands

#### Teleport to Your Claims
Quickly travel to any of your land claims.

**Usage**: `/enclosure tp <name>`

**Example**:
```
/enclosure tp MyHouse
```

This will teleport you to the center of your specified land claim.

![Teleport to Claim](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20player%20teleporting%20to%20protected%20house%20with%20magical%20particles&image_size=landscape_4_3)

### Management Commands

#### List Your Claims
View all your current land claims.

**Usage**: `/enclosure list`

**Information shown**:
- Claim names
- Claim sizes
- Locations (coordinates)
- Creation dates
- Permission settings

![Claims List](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20interface%20showing%20list%20of%20player%20land%20claims%20with%20details&image_size=landscape_4_3)

#### Set Claim Properties
Modify settings for your existing claims.

**Usage**: `/enclosure set <name> <property> <value>`

**Available Properties**:
- `public` - Allow public access (true/false)
- `pvp` - Enable PvP in the claim (true/false)
- `greeting` - Set a welcome message
- `farewell` - Set a goodbye message

**Examples**:
```
/enclosure set MyHouse public false
/enclosure set MyShop greeting "Welcome to my shop!"
/enclosure set PvPArena pvp true
```

#### View Claim Information
Get detailed information about a specific claim.

**Usage**: `/enclosure info [name]`

**Parameters**:
- `[name]` - Claim name (optional, shows current location if omitted)

**Information displayed**:
- Owner and permissions
- Claim boundaries
- Settings and flags
- Trust levels

![Claim Information](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20claim%20information%20panel%20showing%20boundaries%20and%20settings&image_size=landscape_4_3)

#### Remove Claims
Delete a land claim permanently.

**Usage**: `/enclosure remove <name>`

**Warning**: This action is permanent and cannot be undone!

**Example**:
```
/enclosure remove OldBase
```

## Permission System

### Trust Levels
Enclosure uses a trust-based permission system:

1. **Owner** - Full control (you)
2. **Manager** - Can modify claim settings
3. **Builder** - Can build and break blocks
4. **Container** - Can access chests and containers
5. **Access** - Can enter the claim
6. **Public** - Everyone has access

### Managing Permissions

#### Add Trusted Players
**Usage**: `/enclosure trust <player> <level> [claim]`

**Examples**:
```
/enclosure trust Steve builder MyHouse
/enclosure trust Alex container MyShop
/enclosure trust Bob access MyBase
```

#### Remove Trust
**Usage**: `/enclosure untrust <player> [claim]`

**Example**:
```
/enclosure untrust Steve MyHouse
```

#### List Trusted Players
**Usage**: `/enclosure trustlist [claim]`

Shows all players with permissions in the specified claim.

## Advanced Features

### Claim Flags
Customize claim behavior with flags:

- **mob-spawning** - Control monster spawning
- **animal-spawning** - Control animal spawning
- **fire-spread** - Control fire spreading
- **explosion** - Control explosion damage
- **leaf-decay** - Control leaf decay

**Usage**: `/enclosure flag <claim> <flag> <value>`

**Examples**:
```
/enclosure flag MyHouse mob-spawning false
/enclosure flag MyFarm animal-spawning true
/enclosure flag MyBase explosion false
```

### Subclaims
Create smaller protected areas within larger claims:

**Usage**: `/enclosure subclaim <name> <parent>`

**Example**:
```
/enclosure subclaim Vault MyBase
```

### Claim Expansion
Expand existing claims by selecting additional area:

1. Select the expansion area with your wooden hoe
2. Use: `/enclosure expand <claim>`

## Claim Blocks and Limits

### Earning Claim Blocks
You earn claim blocks by:
- **Playing time** - Automatic hourly grants
- **Voting** - Bonus blocks for server votes
- **Purchases** - Buy additional blocks (if available)
- **Events** - Special server events

### Default Limits
- **New Players**: 100 claim blocks
- **Regular Players**: 500 claim blocks
- **VIP Players**: 1000 claim blocks
- **Staff**: Unlimited

### Checking Your Blocks
**Usage**: `/enclosure blocks`

Shows your current claim block balance and usage.

## GUI Interface (Optional)

### Enclosure MOD
For a better visual experience, you can download the Enclosure client-side MOD:

**Features**:
- **Visual boundaries** - See claim borders in-game
- **GUI management** - Manage claims through graphical interface
- **Real-time updates** - Live claim information
- **Easy navigation** - Click-to-teleport functionality

**Download**: Available on CurseForge and Modrinth
**Compatibility**: Fabric and Forge versions available

![Enclosure MOD Interface](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20mod%20interface%20showing%20land%20claim%20boundaries%20and%20management%20GUI&image_size=landscape_4_3)

## Best Practices

### Claiming Strategy
1. **Start small** - Claim only what you need initially
2. **Plan ahead** - Consider future expansion
3. **Protect valuables** - Prioritize important builds
4. **Be neighborly** - Don't claim excessively near others
5. **Use subclaims** - Organize large areas efficiently

### Security Tips
1. **Trust carefully** - Only give permissions to trusted friends
2. **Regular audits** - Check your trust lists periodically
3. **Use appropriate levels** - Don't over-permission players
4. **Monitor activity** - Watch for unauthorized changes

### Performance Considerations
1. **Reasonable sizes** - Avoid unnecessarily large claims
2. **Clean up unused claims** - Remove old, unused claims
3. **Optimize permissions** - Remove inactive trusted players

## Troubleshooting

### Common Issues

**Q: "Not enough claim blocks" error**
A: You need more claim blocks. Wait for automatic grants or vote for the server.

**Q: "Selection too large" error**
A: Your selection exceeds your available claim blocks. Make a smaller selection.

**Q: "Overlapping claims" error**
A: Your selection overlaps with another player's claim. Choose a different area.

**Q: Can't build in my own claim**
A: Check if you're actually in your claim with `/enclosure info`. Verify claim boundaries.

### Getting Help
- Use `/enclosure help` for command reference
- Ask staff members for assistance
- Check our [FAQ section](/en-US/FAQ/) for common issues
- Join our Discord for community support

## Command Reference

### Quick Command List
```
/enclosure create <name>     - Create new claim
/enclosure remove <name>     - Delete claim
/enclosure list              - List your claims
/enclosure tp <name>         - Teleport to claim
/enclosure info [name]       - View claim info
/enclosure trust <player>    - Add trusted player
/enclosure untrust <player>  - Remove trusted player
/enclosure blocks            - Check claim blocks
/enclosure help              - Show help
```

<Contributors />

<GitHistoryInformation />