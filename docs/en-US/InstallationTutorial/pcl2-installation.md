---
title: PCL2 Installation
description: Complete guide for installing BlockTavern using PCL2 launcher
order: 2
---

# PCL2 Installation Guide

PCL2 (Plain Craft Launcher 2) is a user-friendly Minecraft launcher that makes installing and managing modpacks simple. This guide will walk you through setting up BlockTavern using PCL2.

## Prerequisites

Before starting, ensure you have:
- **Java 17 or higher** installed ([Installation Guide](/en-US/InstallationTutorial/installation-details))
- **PCL2 launcher** downloaded
- **BlockTavern modpack** file ready
- **Stable internet connection**

## Step 1: Download PCL2

### Official Download
Download PCL2 from the official source:
**[PCL2 Official Download](https://afdian.net/p/0164034c016c11ebafcb52540025c377)**

### Installation Options
- **Portable Version** - No installation required, run directly
- **Installer Version** - Traditional Windows installation
- **Microsoft Store** - Available through Windows Store

### System Requirements
- **Windows 10/11** (recommended)
- **4GB RAM** minimum (8GB recommended)
- **2GB free disk space** for launcher and game
- **.NET Framework 4.8** or newer

## Step 2: Initial PCL2 Setup

### First Launch
1. **Run PCL2** as administrator (recommended)
2. **Accept license agreement** if prompted
3. **Choose installation directory** for Minecraft files
4. **Configure basic settings**

![PCL2 First Launch](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20launcher%20first%20time%20setup%20screen%20with%20configuration%20options&image_size=landscape_4_3)

### Language Settings
1. Click **Settings** (设置) in the top menu
2. Select **Language** (语言)
3. Choose **English** or your preferred language
4. **Restart PCL2** to apply changes

![PCL2 Language Settings](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20settings%20menu%20showing%20language%20selection%20options&image_size=landscape_4_3)

## Step 3: Java Configuration

### Verify Java Installation
1. Go to **Settings** → **Game Settings**
2. Check **Java Path** section
3. Ensure **Java 17+** is detected
4. If not detected, click **Browse** and locate Java installation

### Memory Allocation
Set appropriate memory allocation:

1. In **Game Settings**, find **Memory** section
2. Set **Maximum Memory**:
   - **4GB RAM system**: 2048MB
   - **8GB RAM system**: 4096MB
   - **16GB+ RAM system**: 6144MB or higher
3. Set **Minimum Memory**: 1024MB

![PCL2 Java Settings](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20Java%20configuration%20screen%20with%20memory%20allocation%20settings&image_size=landscape_4_3)

## Step 4: Import BlockTavern Modpack

### Method 1: Direct Import
1. Click **Download** tab in PCL2
2. Select **Import Modpack**
3. **Browse** for your BlockTavern .zip file
4. Click **Import** and wait for completion

### Method 2: Manual Installation
1. Create **New Instance**:
   - Click **+** button
   - Choose **Fabric** as mod loader
   - Select **Minecraft 1.20.1**
   - Name it "BlockTavern"

2. **Extract modpack contents**:
   - Extract BlockTavern .zip file
   - Copy **mods** folder to instance directory
   - Copy **config** folder to instance directory
   - Copy any **resource packs** to resourcepacks folder

![PCL2 Modpack Import](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20modpack%20import%20process%20with%20file%20selection%20dialog&image_size=landscape_4_3)

## Step 5: Configure Game Instance

### Instance Settings
1. **Right-click** on BlockTavern instance
2. Select **Instance Settings**
3. Configure the following:

#### Basic Settings
- **Instance Name**: BlockTavern
- **Minecraft Version**: 1.20.1
- **Mod Loader**: Fabric (latest compatible)
- **Java Version**: Java 17+

#### Advanced Settings
- **JVM Arguments**: Add if needed for performance
- **Game Directory**: Verify correct path
- **Icon**: Set custom icon (optional)

![PCL2 Instance Configuration](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20instance%20settings%20panel%20with%20configuration%20options&image_size=landscape_4_3)

### Mod Verification
1. Click **Mods** tab in instance settings
2. Verify all **BlockTavern mods** are loaded
3. Check for any **missing dependencies**
4. **Enable/disable** mods as needed

![PCL2 Mod Management](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20mod%20management%20interface%20showing%20loaded%20mods%20list&image_size=landscape_4_3)

## Step 6: Account Setup

### Microsoft Account (Recommended)
1. Click **Account** tab
2. Select **Microsoft Account**
3. **Sign in** with your Microsoft/Xbox account
4. **Authorize** PCL2 access
5. Verify account appears in launcher

### Offline Account (Temporary)
For testing purposes only:
1. Click **Add Account**
2. Select **Offline Account**
3. Enter a **username**
4. Click **Add**

**Note**: Offline accounts cannot connect to most servers.

![PCL2 Account Setup](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20account%20management%20screen%20with%20Microsoft%20login%20option&image_size=landscape_4_3)

## Step 7: First Launch

### Launch Preparation
1. **Select BlockTavern instance**
2. **Choose your account**
3. **Verify settings** one final time
4. **Close unnecessary programs** for better performance

### Starting the Game
1. Click **Launch** button
2. **Wait for game to load** (first launch takes longer)
3. **Check for any error messages**
4. **Verify mods loaded** in main menu

![PCL2 Game Launch](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=PCL2%20launching%20Minecraft%20with%20progress%20bar%20and%20loading%20screen&image_size=landscape_4_3)

### First Launch Checklist
- [ ] Game starts without errors
- [ ] All mods appear in mod menu
- [ ] Resource packs loaded correctly
- [ ] Performance is acceptable
- [ ] No missing texture warnings

## Step 8: Connect to BlockTavern Server

### Server Information
- **Server Address**: `play.blocktavern.com`
- **Port**: 25565 (default)
- **Version**: 1.20.1 with Fabric mods

### Adding the Server
1. In Minecraft main menu, click **Multiplayer**
2. Click **Add Server**
3. Enter server details:
   - **Server Name**: BlockTavern
   - **Server Address**: play.blocktavern.com
4. Click **Done**

### Connecting
1. **Select BlockTavern** from server list
2. Click **Join Server**
3. **Wait for connection** and world loading
4. **Follow any on-screen instructions**

![Minecraft Server Connection](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20multiplayer%20server%20list%20with%20BlockTavern%20server%20entry&image_size=landscape_4_3)

## Troubleshooting

### Common Issues

#### Game Won't Start
**Symptoms**: PCL2 shows error, game crashes immediately
**Solutions**:
1. Verify **Java 17+** is installed
2. Check **memory allocation** settings
3. **Disable antivirus** temporarily
4. **Run PCL2 as administrator**

#### Missing Mods Error
**Symptoms**: "Missing required mods" message
**Solutions**:
1. **Re-download** BlockTavern modpack
2. **Verify mod files** in instance folder
3. **Check Fabric loader** version
4. **Reinstall instance** if necessary

#### Connection Failed
**Symptoms**: Cannot connect to BlockTavern server
**Solutions**:
1. **Check internet connection**
2. **Verify server address** spelling
3. **Disable firewall** temporarily
4. **Try different DNS** servers

#### Performance Issues
**Symptoms**: Low FPS, lag, stuttering
**Solutions**:
1. **Increase memory allocation**
2. **Lower graphics settings**
3. **Close background programs**
4. **Update graphics drivers**

### Advanced Troubleshooting

#### Log Files
If issues persist, check log files:
1. **PCL2 logs**: In PCL2 installation folder
2. **Minecraft logs**: In instance folder → logs
3. **Crash reports**: In instance folder → crash-reports

#### Clean Installation
For persistent issues:
1. **Backup saves** (if any)
2. **Delete instance** completely
3. **Clear PCL2 cache**
4. **Reinstall** from scratch

## Performance Optimization

### Graphics Settings
Optimal settings for BlockTavern:
- **Render Distance**: 8-12 chunks
- **Graphics**: Fast or Fancy
- **Smooth Lighting**: ON
- **VSync**: OFF (use FPS limit instead)
- **Max FPS**: 60-120 (based on monitor)

### JVM Arguments
For better performance, add these JVM arguments:
```
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

### Mod Optimization
Optional performance mods (if not included):
- **Sodium** - Rendering optimization
- **Lithium** - General performance
- **Phosphor** - Lighting optimization
- **FerriteCore** - Memory optimization

## Getting Help

If you need additional assistance:

### Community Resources
- **[BlockTavern FAQ](/en-US/FAQ/)** - Common questions
- **Discord Server** - Live community support
- **PCL2 Documentation** - Launcher-specific help

### Contact Support
- **Server Administrators** - Technical issues
- **Community Forums** - General discussions
- **QQ Group** - Chinese language support

---

**Congratulations!** You should now have BlockTavern running through PCL2. Enjoy your time on the server!

**Next Steps**:
- Read the **[Gameplay Guide](/en-US/GameplayGuide/)** to learn server features
- Check out **[Server Rules](/en-US/GameplayGuide/server-rules)** before playing
- Join our **community** to meet other players