<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()

const notice = computed(() => frontmatter.value.hero?.Notice)

const hasNotice = computed(() => !!notice.value)
</script>

<template>
  <div v-if="hasNotice" class="home-notice">
    <div class="notice-container">
      <div class="notice-content">
        <div class="notice-header">
          <div class="title-section">
            <span class="notice-title">{{ notice.title }}</span>
          </div>
          <a v-if="notice.link" :href="notice.link" target="_blank" class="notice-link">查看详情 &rarr;</a>
        </div>
        
        <div v-if="notice.desc" class="notice-desc" v-html="notice.desc"></div>
        
        <div v-if="notice.date" class="notice-meta">
          <div class="meta-item">
            <span class="meta-icon">{{ notice.dateIcon || '⚡' }}</span>
            <span class="meta-label">{{ notice.dateText || '发布时间' }}:</span>
            <span class="meta-value">{{ notice.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-notice {
  position: relative;
  padding: 0 24px;
  margin-bottom: 24px;
}

@media (min-width: 640px) {
  .home-notice {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .home-notice {
    padding: 0 64px;
  }
}

.notice-container {
  margin: 0 auto;
  max-width: 1152px;
}

.notice-content {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 16px 24px;
  transition: border-color 0.25s;
}

.notice-content:hover {
  border-color: var(--vp-c-brand);
}

.notice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 1.1em;
}

.title-icon {
  font-size: 1.2em;
}

.notice-link {
  font-size: 0.9em;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}

.notice-link:hover {
  text-decoration: underline;
}

.notice-desc {
  font-size: 0.95em;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
  line-height: 1.6;
}

.notice-desc :deep(.promo-text) {
  color: var(--vp-c-brand);
  font-weight: 600;
  background: var(--vp-c-brand-dimm);
  padding: 0 4px;
  border-radius: 4px;
}

.notice-meta {
  display: flex;
  gap: 16px;
  font-size: 0.9em;
  color: var(--vp-c-text-3);
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 12px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
