---
title: Command List
description: Complete list of available commands on BlockTavern server
order: 1
---

# Command List

This page contains all the essential commands available on the BlockTavern server. These commands will help you navigate, teleport, and interact with other players.

## Basic Commands

### Warp Command
The warp command allows you to teleport to predefined locations on the server.

**Usage**: `/warp [location]`

**Examples**:
- `/warp spawn` - Teleport to the server spawn point
- `/warp shop` - Teleport to the shopping district
- `/warp pvp` - Teleport to the PvP arena

![Warp Command Example](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20chat%20interface%20showing%20warp%20command%20usage%20with%20teleportation%20effect&image_size=landscape_4_3)

### Back Command
Return to your previous location after teleporting.

**Usage**: `/back`

**Description**: This command teleports you back to your location before your last teleportation. Very useful if you accidentally warp to the wrong place!

![Back Command Example](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20player%20using%20back%20command%20with%20purple%20teleportation%20particles&image_size=landscape_4_3)

### TPA (Teleport Ask) Command
Request to teleport to another player or invite them to teleport to you.

**Usage**: 
- `/tpa <player>` - Request to teleport to a player
- `/tpahere <player>` - Request a player to teleport to you
- `/tpaccept` - Accept a teleport request
- `/tpdeny` - Deny a teleport request

**Examples**:
- `/tpa Steve` - Ask to teleport to player "Steve"
- `/tpahere Alex` - Ask player "Alex" to teleport to you

![TPA Command Example](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20multiplayer%20interface%20showing%20teleport%20request%20notification%20between%20players&image_size=landscape_4_3)

## Home Commands

The home system allows you to set personal teleportation points for quick travel.

### Set Home
Create a new home location at your current position.

**Usage**: `/sethome [name]`

**Examples**:
- `/sethome` - Set your default home
- `/sethome base` - Set a home named "base"
- `/sethome farm` - Set a home named "farm"

![Set Home Command](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20player%20setting%20home%20location%20with%20house%20in%20background%20and%20command%20interface&image_size=landscape_4_3)

### Teleport to Home
Teleport to one of your saved home locations.

**Usage**: `/home [name]`

**Examples**:
- `/home` - Teleport to your default home
- `/home base` - Teleport to your "base" home
- `/home farm` - Teleport to your "farm" home

![Home Teleport Command](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20player%20teleporting%20home%20with%20cozy%20house%20and%20magical%20particles&image_size=landscape_4_3)

### Delete Home
Remove a home location from your saved homes.

**Usage**: `/delhome [name]`

**Examples**:
- `/delhome` - Delete your default home
- `/delhome oldbase` - Delete the home named "oldbase"

![Delete Home Command](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20interface%20showing%20home%20deletion%20confirmation%20message&image_size=landscape_4_3)

### List Homes
View all your saved home locations.

**Usage**: `/homes`

**Description**: This command displays a list of all your saved homes, showing their names and coordinates.

![Homes List Command](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20chat%20interface%20displaying%20list%20of%20player%20homes%20with%20coordinates&image_size=landscape_4_3)

## Command Tips

### General Usage Tips
- **Tab Completion**: Use the Tab key to auto-complete player names and command parameters
- **Case Sensitivity**: Player names are case-sensitive, but commands are not
- **Cooldowns**: Some commands have cooldown periods to prevent spam
- **Permissions**: Certain commands may require specific permissions or ranks

### Safety Reminders
- Always check your destination before accepting teleport requests
- Be cautious when teleporting to unknown players
- Use `/back` if you accidentally teleport somewhere dangerous
- Set homes in safe, protected areas

### Command Limits
- **Home Limit**: Default players can set up to 3 homes
- **TPA Timeout**: Teleport requests expire after 60 seconds
- **Cooldown Period**: Most teleport commands have a 5-second cooldown

## Getting Help

If you need help with commands:
- Use `/help` for a basic command list
- Use `/help <command>` for specific command information
- Ask staff members or experienced players
- Check our [FAQ section](/en-US/FAQ/) for common issues

<Contributors />

<GitHistoryInformation />