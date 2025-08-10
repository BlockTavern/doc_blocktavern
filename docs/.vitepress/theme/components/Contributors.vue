<template>
  <div class="contributors-container">
    <h2>贡献者</h2>
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">加载贡献者失败: {{ error.message }}</div>
    <div v-else class="contributors-grid">
      <a v-for="contributor in contributors" :key="contributor.id" :href="contributor.html_url" target="_blank" rel="noopener noreferrer" class="contributor-card">
        <img :src="contributor.avatar_url" :alt="contributor.login" class="contributor-avatar" />
        <span class="contributor-name">{{ contributor.login }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const contributors = ref([]);
const loading = ref(true);
const error = ref(null);

// TODO: Replace with your GitHub repository owner and name
const GITHUB_REPO_OWNER = 'Re0XIAOPA'; // 例如: 'vuejs'
const GITHUB_REPO_NAME = 'doc_blocktavern'; // 例如: 'vitepress'

const fetchContributors = async () => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/contributors`);
    contributors.value = response.data;
  } catch (err) {
    error.value = err;
    console.error('Error fetching contributors:', err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchContributors();
});
</script>

<style scoped>
.contributors-container {
  padding: 20px 0;
  text-align: left;
  margin: 20px 0;
  max-width: 100%;
  background-color: transparent;
  box-shadow: none;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.5em;
  color: var(--vp-c-text-1);
  padding-bottom: 10px;
}

.loading,
.error {
  font-size: 1em;
  color: var(--vp-c-text-2);
  margin-top: 10px;
}

.contributors-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-start;
  max-width: 100%;
  margin: 0;
}

.contributor-card {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background-color 0.3s ease-in-out;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: transparent;
}

.contributor-card:hover {
  background-color: var(--vp-c-bg-soft);
}

.contributor-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
  border: 1px solid var(--vp-c-divider);
  object-fit: cover;
}

.contributor-name {
  font-weight: normal;
  font-size: 0.9em;
  color: var(--vp-c-text-1);
}

.contributor-card:hover .contributor-name {
  color: var(--vp-c-brand-1);
}
</style>