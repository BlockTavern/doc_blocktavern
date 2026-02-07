---
title: 指令列表
description: 指令列表
order: 2
---

# 基本指令

## warp - 服务器公共地标

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

<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/warp</span>
      <span class="cmd-desc">服务器公共地标</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/command-list/command-list01.png" data-fancybox="gallery" class="cmd-img" alt="warp" />
      </div>
    </div>
  </div>
</div>

## back - 返回上一次的位置

<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/back</span>
      <span class="cmd-desc">返回上一次的位置</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <span class="cmd-label">当前位置</span>
        <img src="/assets/GameplayGuide/command-list/command-list02.png" data-fancybox="gallery" class="cmd-img" alt="back current" />
      </div>
      <div class="cmd-img-group">
        <span class="cmd-label">上次位置</span>
        <img src="/assets/GameplayGuide/command-list/command-list03.png" data-fancybox="gallery" class="cmd-img" alt="back previous" />
      </div>
    </div>
  </div>
</div>




## tpa - 申请传送至其他玩家

<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/tpa [玩家名]</span>
      <span class="cmd-desc">申请传送至其他玩家</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <span class="cmd-label">申请传送</span>
        <img src="/assets/GameplayGuide/command-list/command-list04.png" data-fancybox="gallery" class="cmd-img" alt="tpa request" />
      </div>
      <div class="cmd-img-group">
        <span class="cmd-label">接受/拒绝</span>
        <img src="/assets/GameplayGuide/command-list/command-list05.png" data-fancybox="gallery" class="cmd-img" alt="tpa reply" />
      </div>
    </div>
  </div>
</div>



## Home - 家指令

<div class="cmd-list">
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/home set</span>
      <span class="cmd-desc">设置家</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/command-list/command-list06.png" data-fancybox="gallery" class="cmd-img" alt="home set" />
      </div>
    </div>
  </div>
  
  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/home tp</span>
      <span class="cmd-desc">传送回家</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/command-list/command-list07.png" data-fancybox="gallery" class="cmd-img" alt="home tp" />
      </div>
    </div>
  </div>

  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/home unset</span>
      <span class="cmd-desc">删除家</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/command-list/command-list08.png" data-fancybox="gallery" class="cmd-img" alt="home unset" />
      </div>
    </div>
  </div>

  <div class="cmd-item">
    <div class="cmd-header">
      <span class="cmd-code">/home list</span>
      <span class="cmd-desc">家列表</span>
    </div>
    <div class="cmd-body">
      <div class="cmd-img-group">
        <img src="/assets/GameplayGuide/command-list/command-list09.png" data-fancybox="gallery" class="cmd-img" alt="home list" />
      </div>
    </div>
  </div>
</div>


<Contributors />

<GitHistoryInformation />