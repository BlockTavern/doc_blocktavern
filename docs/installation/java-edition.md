# Minecraft Java 版安装教程

本页面提供详细的 Minecraft Java 版安装指南，适用于所有主流操作系统。

## 📋 安装前准备

### 1. 购买游戏
- 访问 [Minecraft 官网](https://www.minecraft.net/)
- 创建 Mojang/Microsoft 账户
- 购买 Minecraft Java 版

### 2. 系统检查
确保您的系统满足 [最低要求](/installation/#系统要求)

## 🖥️ Windows 安装

### 步骤 1：下载启动器

1. 访问 [Minecraft 官方下载页面](https://www.minecraft.net/download)
2. 点击 **"Download for Windows"**
3. 下载 `MinecraftInstaller.msi` 文件

### 步骤 2：安装启动器

1. 双击下载的 `.msi` 文件
2. 按照安装向导完成安装
3. 选择安装位置（建议使用默认路径）
4. 完成安装

### 步骤 3：首次启动

1. 从开始菜单或桌面启动 **Minecraft Launcher**
2. 使用您的 Microsoft/Mojang 账户登录
3. 启动器会自动下载游戏文件

### 步骤 4：Java 安装（如需要）

如果遇到 Java 相关错误：

1. 访问 [Oracle Java 下载页面](https://www.oracle.com/java/technologies/downloads/)
2. 下载适合您系统的 Java 版本
3. 安装 Java 并重启电脑

## 🍎 macOS 安装

### 步骤 1：下载启动器

1. 访问 [Minecraft 官方下载页面](https://www.minecraft.net/download)
2. 点击 **"Download for macOS"**
3. 下载 `MinecraftInstaller.dmg` 文件

### 步骤 2：安装启动器

1. 双击下载的 `.dmg` 文件
2. 将 Minecraft 拖拽到 Applications 文件夹
3. 从 Launchpad 或 Applications 文件夹启动

### 步骤 3：处理安全警告

第一次启动时可能遇到安全警告：

1. 按住 **Control** 键点击 Minecraft 图标
2. 选择 **"打开"**
3. 在弹出对话框中点击 **"打开"**

### 步骤 4：登录并下载

1. 使用您的账户登录
2. 等待游戏文件下载完成

## 🐧 Linux 安装

### 方法 1：官方启动器

#### Ubuntu/Debian 系统：

```bash
# 下载启动器
wget https://launcher.mojang.com/download/Minecraft.deb

# 安装启动器
sudo dpkg -i Minecraft.deb

# 安装依赖
sudo apt-get install -f
```

#### Arch Linux/Manjaro：

```bash
# 使用 AUR
yay -S minecraft-launcher

# 或使用官方包管理器
sudo pacman -S minecraft-launcher
```

### 方法 2：通用方法

1. 下载 `Minecraft.tar.gz` 文件
2. 解压到合适位置
3. 运行启动脚本

```bash
# 解压文件
tar -xzf Minecraft.tar.gz

# 进入目录
cd minecraft-launcher

# 运行启动器
./minecraft-launcher
```

### Java 环境配置

确保安装了 Java：

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-17-jre

# Arch Linux
sudo pacman -S jre-openjdk

# CentOS/RHEL
sudo yum install java-17-openjdk
```

## ⚙️ 启动器配置

### 内存分配

为了更好的游戏体验，建议调整内存分配：

1. 在启动器中点击 **"启动选项"**
2. 选择要修改的版本配置
3. 启用 **"JVM 参数"**
4. 修改内存参数：
   ```
   -Xmx4G -Xms2G
   ```
   （4G 表示最大内存，2G 表示初始内存）

### 游戏目录

自定义游戏安装位置：

1. 在启动选项中选择配置
2. 修改 **"游戏目录"** 路径
3. 选择您希望的安装位置

### Java 版本

指定特定的 Java 版本：

1. 在启动选项中找到 **"Java 可执行文件"**
2. 浏览并选择您系统上的 Java 路径
3. 保存设置

## 🔧 常见问题解决

### 启动器无法打开

**Windows:**
- 以管理员身份运行
- 检查 Windows Defender 是否阻止
- 重新安装 Microsoft Visual C++ 运行库

**macOS:**
- 检查系统安全设置
- 允许来自已识别开发者的应用

**Linux:**
- 检查文件权限：`chmod +x minecraft-launcher`
- 安装缺失的依赖包

### 登录问题

- 确认网络连接正常
- 检查账户状态
- 尝试重置密码
- 清除启动器缓存

### 下载缓慢

- 更换网络环境
- 使用 VPN（如果网络受限）
- 选择离峰时间下载
- 检查防火墙设置

### Java 相关错误

```
Could not find or load main class
```

**解决方法：**
1. 重新安装 Java
2. 设置 JAVA_HOME 环境变量  
3. 更新显卡驱动

## 📊 安装验证

安装完成后，验证游戏是否正常：

### 检查清单
- [ ] 启动器能正常打开
- [ ] 可以成功登录账户
- [ ] 游戏文件下载完整
- [ ] 能够创建新世界
- [ ] 能够加入多人服务器

### 性能测试
1. 创建新的单人世界
2. 检查帧率是否稳定
3. 测试各种游戏设置
4. 尝试连接到 BlockTavern 服务器

## 🎮 下一步

安装完成后，您可以：

1. **[配置客户端](/installation/client-config)** - 优化游戏设置
2. **[加入服务器](/gameplay/join-server)** - 连接到 BlockTavern
3. **[安装模组](/installation/mods)** - 增强游戏体验
4. **[阅读游戏指南](/gameplay/basic-gameplay)** - 学习基础玩法

## 📞 获取帮助

安装过程中遇到问题？

- 查看 [技术问题 FAQ](/faq/technical)
- 访问 [连接问题解决](/troubleshooting/connection-issues)
- 联系 BlockTavern 社区管理员

---

*安装完成！现在您可以开始 BlockTavern 的冒险之旅了！* 