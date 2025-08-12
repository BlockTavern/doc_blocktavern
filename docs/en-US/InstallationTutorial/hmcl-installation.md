---
title: HMCL Installation
description: Complete guide for installing BlockTavern using HMCL launcher
order: 3
---

# HMCL Installation Guide

HMCL (Hello Minecraft! Launcher) is a powerful, feature-rich Minecraft launcher that offers extensive customization options and advanced mod management. This guide will help you set up BlockTavern using HMCL.

## Prerequisites

Before starting, ensure you have:
- **Java 17 or higher** installed ([Installation Guide](/en-US/InstallationTutorial/installation-details))
- **HMCL launcher** downloaded
- **BlockTavern modpack** file ready
- **Stable internet connection**

## Step 1: Download HMCL

### Official Download
Download HMCL from the official website:
**[HMCL Official Download](https://hmcl.huangyuhui.net/)**

### Download Options
- **HMCL-3.x.x.exe** - Windows executable (recommended)
- **HMCL-3.x.x.jar** - Cross-platform JAR file
- **Portable Version** - No installation required

### System Requirements
- **Windows 7/8/10/11**, **macOS**, or **Linux**
- **Java 8+** (Java 17+ recommended for BlockTavern)
- **4GB RAM** minimum (8GB recommended)
- **2GB free disk space** for launcher and game

## Step 2: Initial HMCL Setup

### First Launch
1. **Run HMCL** (as administrator on Windows if needed)
2. **Choose language** from the welcome screen
3. **Accept terms** if prompted
4. **Select game directory** for Minecraft installations

![HMCL First Launch](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20launcher%20welcome%20screen%20with%20language%20selection%20and%20setup%20options&image_size=landscape_4_3)

### Basic Configuration
1. Click **Settings** (⚙️) in the top-right corner
2. Configure basic settings:
   - **Language**: English or preferred language
   - **Theme**: Choose your preferred theme
   - **Download Source**: Select fastest mirror
   - **Proxy Settings**: Configure if needed

![HMCL Settings](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20settings%20panel%20with%20language%20theme%20and%20configuration%20options&image_size=landscape_4_3)

## Step 3: Java Configuration

### Java Settings
1. In **Settings**, go to **Game** tab
2. **Java Settings** section:
   - **Java Path**: Verify Java 17+ is detected
   - **Java Arguments**: Leave default or customize
   - **Memory**: Set appropriate allocation

### Memory Allocation
Recommended memory settings:

- **Minimum Memory**: 1024MB
- **Maximum Memory**:
  - **4GB system RAM**: 2048MB
  - **8GB system RAM**: 4096MB
  - **16GB+ system RAM**: 6144-8192MB

### Advanced Java Arguments
For optimal performance, consider these JVM arguments:
```
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

![HMCL Java Configuration](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20Java%20settings%20screen%20with%20memory%20allocation%20and%20JVM%20arguments&image_size=landscape_4_3)

## Step 4: Account Management

### Adding Microsoft Account (Recommended)
1. Click **Account** tab in settings
2. Click **Add Account**
3. Select **Microsoft Account**
4. **Sign in** with your Microsoft/Xbox credentials
5. **Authorize** HMCL access
6. **Verify** account appears in account list

### Account Types
- **Microsoft Account**: Required for most servers (recommended)
- **Mojang Account**: Legacy accounts (being phased out)
- **Offline Account**: For testing only (limited server access)
- **External Account**: Third-party authentication

![HMCL Account Management](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20account%20management%20interface%20with%20Microsoft%20login%20options&image_size=landscape_4_3)

## Step 5: Create BlockTavern Instance

### Method 1: Import Modpack
1. Click **Download** tab
2. Select **Import Modpack**
3. **Browse** for BlockTavern .zip file
4. **Configure import settings**:
   - Instance name: "BlockTavern"
   - Game directory: Default or custom
5. Click **Import** and wait for completion

### Method 2: Manual Creation
1. Click **Game Management** tab
2. Click **New Instance** (+)
3. **Configure new instance**:
   - **Instance Name**: BlockTavern
   - **Minecraft Version**: 1.20.1
   - **Mod Loader**: Fabric (latest compatible)
4. Click **Create**

![HMCL Instance Creation](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20new%20instance%20creation%20dialog%20with%20version%20and%20modloader%20selection&image_size=landscape_4_3)

## Step 6: Install Mods and Configuration

### If Using Manual Method
1. **Extract BlockTavern modpack** to a temporary folder
2. **Open instance folder**:
   - Right-click BlockTavern instance
   - Select "Open Folder"
3. **Copy modpack contents**:
   - Copy **mods** folder contents to instance/mods
   - Copy **config** folder contents to instance/config
   - Copy **resourcepacks** to instance/resourcepacks
   - Copy any other folders as needed

### Mod Management
1. **Right-click** BlockTavern instance
2. Select **Manage Mods**
3. **Verify all mods** are loaded correctly
4. **Check dependencies** and resolve any conflicts
5. **Enable/disable** mods as needed

![HMCL Mod Management](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20mod%20management%20interface%20showing%20installed%20mods%20list&image_size=landscape_4_3)

### Resource Pack Installation
1. In mod management, go to **Resource Packs** tab
2. **Install** any included resource packs
3. **Set load order** if multiple packs
4. **Enable** required resource packs

## Step 7: Instance Configuration

### Instance Settings
1. **Right-click** BlockTavern instance
2. Select **Instance Settings**
3. Configure the following tabs:

#### Game Settings
- **Java Version**: Ensure Java 17+ is selected
- **Memory Allocation**: Set appropriate values
- **JVM Arguments**: Add performance arguments if desired
- **Game Arguments**: Usually leave default

#### Version Settings
- **Minecraft Version**: 1.20.1
- **Mod Loader**: Fabric (verify version)
- **Auto Update**: Configure as preferred

#### Advanced Settings
- **Working Directory**: Verify correct path
- **Server Resource Packs**: Enable for BlockTavern
- **Fullscreen**: Set preference
- **Resolution**: Set default window size

![HMCL Instance Settings](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20instance%20settings%20panel%20with%20various%20configuration%20tabs&image_size=landscape_4_3)

## Step 8: First Launch Test

### Pre-Launch Checklist
- [ ] Java 17+ configured
- [ ] Memory allocation set appropriately
- [ ] All mods installed and enabled
- [ ] Account selected
- [ ] Instance settings verified

### Launching the Game
1. **Select BlockTavern instance**
2. **Choose your account** from dropdown
3. **Click Launch** button
4. **Monitor launch process** in HMCL console
5. **Wait for game to fully load**

### First Launch Verification
1. **Check main menu** loads correctly
2. **Verify mod count** in mod menu (F3 + H or mod menu)
3. **Test resource packs** are applied
4. **Check for error messages** in logs
5. **Verify performance** is acceptable

![HMCL Game Launch](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20launching%20Minecraft%20with%20console%20output%20and%20progress%20indicators&image_size=landscape_4_3)

## Step 9: Connect to BlockTavern Server

### Server Information
- **Server Name**: BlockTavern
- **Server Address**: `play.blocktavern.com`
- **Port**: 25565 (default)
- **Version**: 1.20.1 with Fabric mods

### Adding the Server
1. In Minecraft, click **Multiplayer**
2. Click **Add Server**
3. Enter server information:
   - **Server Name**: BlockTavern
   - **Server Address**: play.blocktavern.com
4. Click **Done**

### First Connection
1. **Select BlockTavern** from server list
2. **Check connection status** (should show green bars)
3. Click **Join Server**
4. **Wait for world loading**
5. **Follow any server welcome messages**

![Minecraft Server List](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20multiplayer%20server%20list%20with%20BlockTavern%20server%20showing%20connection%20status&image_size=landscape_4_3)

## Advanced HMCL Features

### Multiple Instances
HMCL allows multiple game instances:
1. **Create separate instances** for different modpacks
2. **Organize instances** in folders
3. **Switch between instances** easily
4. **Share resources** between instances if needed

### Automatic Updates
Configure automatic updates:
1. **Instance Settings** → **Version Settings**
2. **Enable auto-update** for mod loader
3. **Set update frequency**
4. **Configure backup** before updates

### Backup and Export
Protect your progress:
1. **Right-click instance** → **Export**
2. **Create regular backups** of saves
3. **Export modpack** for sharing
4. **Version control** for configurations

### Custom Themes
Personalize HMCL:
1. **Settings** → **Appearance**
2. **Download themes** from community
3. **Create custom themes**
4. **Adjust UI scaling**

![HMCL Advanced Features](https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=HMCL%20advanced%20features%20interface%20showing%20themes%20and%20customization%20options&image_size=landscape_4_3)

## Troubleshooting

### Common Issues

#### Launch Failures
**Symptoms**: Game won't start, immediate crash
**Solutions**:
1. **Check Java version** (must be 17+)
2. **Verify memory allocation** (not too high/low)
3. **Check mod compatibility**
4. **Review HMCL console** for errors
5. **Try safe mode** launch

#### Mod Loading Errors
**Symptoms**: Missing mods, dependency errors
**Solutions**:
1. **Verify all mod files** are present
2. **Check Fabric loader** version
3. **Resolve dependency conflicts**
4. **Update incompatible mods**
5. **Reinstall problematic mods**

#### Performance Issues
**Symptoms**: Low FPS, stuttering, lag
**Solutions**:
1. **Increase memory allocation**
2. **Add performance JVM arguments**
3. **Lower graphics settings**
4. **Disable unnecessary mods**
5. **Update graphics drivers**

#### Connection Problems
**Symptoms**: Can't connect to BlockTavern
**Solutions**:
1. **Check internet connection**
2. **Verify server address**
3. **Disable firewall/antivirus** temporarily
4. **Try different DNS servers**
5. **Check server status**

### Advanced Troubleshooting

#### Log Analysis
HMCL provides detailed logs:
1. **HMCL Console**: Real-time launch information
2. **Game Logs**: In instance folder → logs
3. **Crash Reports**: In instance folder → crash-reports
4. **HMCL Logs**: In HMCL installation folder

#### Safe Mode
For persistent issues:
1. **Launch in safe mode** (minimal mods)
2. **Gradually enable mods** to identify conflicts
3. **Test with clean instance**
4. **Verify base game functionality**

#### Clean Reinstall
Last resort troubleshooting:
1. **Export saves** and important data
2. **Delete instance** completely
3. **Clear HMCL cache**
4. **Reinstall from scratch**
5. **Restore saves** after verification

## Performance Optimization

### Graphics Settings
Optimal in-game settings for BlockTavern:
- **Render Distance**: 8-12 chunks
- **Graphics**: Fast (for performance) or Fancy (for quality)
- **Smooth Lighting**: Maximum
- **Particles**: Decreased or Minimal
- **Entity Shadows**: OFF (performance)
- **VSync**: OFF (use FPS limit instead)

### Mod-Specific Optimizations
If performance mods are included:
- **Sodium**: Configure video settings
- **Iris**: Shader compatibility
- **Lithium**: Automatic optimizations
- **Phosphor**: Lighting improvements

### System Optimizations
1. **Close unnecessary programs**
2. **Set Windows to High Performance** mode
3. **Disable Windows Game Mode** if problematic
4. **Update graphics drivers**
5. **Use SSD storage** for better loading times

## Getting Help

### HMCL Resources
- **[HMCL Official Documentation](https://docs.hmcl.net/)**
- **HMCL GitHub Issues** for bug reports
- **Community Forums** for general help

### BlockTavern Support
- **[BlockTavern FAQ](/en-US/FAQ/)** - Common questions
- **Discord Server** - Live community support
- **Server Administrators** - Technical issues
- **Community Forums** - Detailed discussions

### Contact Information
- **Discord**: [Join our Discord](https://discord.gg/blocktavern)
- **QQ Group**: 123456789 (Chinese support)
- **Email**: support@blocktavern.com
- **Forums**: [Community Forums](https://forum.blocktavern.com)

---

**Congratulations!** You now have BlockTavern running through HMCL. The advanced features of HMCL give you powerful control over your Minecraft experience.

**Next Steps**:
- Explore **[Gameplay Guide](/en-US/GameplayGuide/)** to learn server features
- Review **[Server Rules](/en-US/GameplayGuide/server-rules)** before playing
- Join our **community** to connect with other players
- Consider **[contributing](/en-US/DevelopmentGuide/)** to server development