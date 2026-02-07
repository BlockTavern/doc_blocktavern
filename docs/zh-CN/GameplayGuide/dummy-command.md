---
title: 假人指令
description: 假人指令
order: 4
---


# 假人指令

BlockTavern 加入了假人指令，玩家可以模拟出多个假的玩家，进行一些游戏测试。

## 指令列表

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

## player spawn - 生成假人
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/player &lt;name&gt; spawn</span>
      <span class="cmd-desc">生成假人</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/dummy-command/dummy-command01.png" data-fancybox="gallery" class="cmd-img" alt="player spawn" />
      </div>
    </div>
  </div>
</div>

## player kill - 删除假人
<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/player &lt;name&gt; kill</span>
      <span class="cmd-desc">删除假人</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/dummy-command/dummy-command02.png" data-fancybox="gallery" class="cmd-img" alt="player kill" />
      </div>
    </div>
  </div>
</div>


<Contributors />

<GitHistoryInformation />