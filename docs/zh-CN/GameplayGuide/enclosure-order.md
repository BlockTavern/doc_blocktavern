---
title: "领地指令"
description: BlockTavern的领地指令
order: 3
---

# 领地指令

BlockTavern 加入了 Enclosure 领地，玩家可以使用木锄头来为自己建立保护罩，以防止其他玩家破坏。玩家可以在领地内设置一些基本的属性，例如名称，访问权限等。

::: tip 提示
如果你没有GUI显示，那么你需要下载此 Enclosure MOD：[点击下载](/assets/GameplayGuide/enclosure-order/[领地]enclosure-fabric-0.4.5+1.21.jar)
放至mods文件夹并重启动游戏。
:::

## 指令

<style>
.cmd-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
}
.cmd-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.cmd-item:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.cmd-header {
  padding: 14px 20px;
  background: var(--vp-c-bg-mute);
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.cmd-code {
  font-family: var(--vp-font-family-mono);
  font-weight: 600;
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  font-size: 1.1em;
}
.cmd-desc {
  color: var(--vp-c-text-2);
  font-size: 0.95em;
  font-weight: 500;
}
.cmd-body {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.cmd-img-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cmd-label {
  font-size: 0.9em;
  color: var(--vp-c-text-1);
  font-weight: 600;
  display: flex;
  align-items: center;
}
.cmd-label::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 14px;
  background: var(--vp-c-brand);
  margin-right: 8px;
  border-radius: 2px;
}
.cmd-img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: transform 0.2s;
}
</style>

::: info 提示
领地需要使用 木锄 选择对角点，然后使用指令创建领地。![木锄](/assets/GameplayGuide/enclosure-order/wooden_hoe.png "木锄")
:::

## enclosure help - 领地帮助
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure help</span>
      <span class="cmd-desc">领地帮助</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order01.png" data-fancybox="gallery" class="cmd-img" alt="enclosure help" />
      </div>
    </div>
  </div>
</div>

## enclosure create - 创建领地
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure create &lt;name&gt;</span>
      <span class="cmd-desc">创建领地</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order02.png" data-fancybox="gallery" class="cmd-img" alt="enclosure create" />
      </div>
    </div>
  </div>
</div>

## enclosure tp - 传送至领地
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure tp</span>
      <span class="cmd-desc">传送至领地</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order03.png" data-fancybox="gallery" class="cmd-img" alt="enclosure tp" />
      </div>
    </div>
  </div>
</div>

## enclosure list - 领地列表
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure list</span>
      <span class="cmd-desc">领地列表</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order04.png" data-fancybox="gallery" class="cmd-img" alt="enclosure list" />
      </div>
    </div>
  </div>
</div>

## enclosure set - 设置领地属性
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure set &lt;name&gt;</span>
      <span class="cmd-desc">设置领地属性(可以使用GUI)</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order05.png" data-fancybox="gallery" class="cmd-img" alt="enclosure set" />
      </div>
    </div>
  </div>
</div>

## enclosure gui - GUI设置
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure gui &lt;name&gt;</span>
      <span class="cmd-desc">GUI设置(需要客户端下载MOD)</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order06.png" data-fancybox="gallery" class="cmd-img" alt="enclosure gui" />
      </div>
    </div>
  </div>
</div>

## enclosure info - 查看领地信息
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure info &lt;name&gt;</span>
      <span class="cmd-desc">查看领地信息</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order07.png" data-fancybox="gallery" class="cmd-img" alt="enclosure info" />
      </div>
    </div>
  </div>
</div>

## enclosure remove - 删除领地
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/enclosure remove &lt;name&gt;</span>
      <span class="cmd-desc">删除领地</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/enclosure-order/enclosure-order08.png" data-fancybox="gallery" class="cmd-img" alt="enclosure remove" />
      </div>
    </div>
  </div>
</div>

<Contributors />

<GitHistoryInformation />
