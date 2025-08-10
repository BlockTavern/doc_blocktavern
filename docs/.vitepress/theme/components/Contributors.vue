<template>
  <div class="contributors-container">
    <h2>项目贡献者</h2>
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
  padding: 20px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 1.8em;
  color: var(--vp-c-text-1);
}

.loading,
.error {
  font-size: 1.2em;
  color: var(--vp-c-text-2);
}

.contributors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: 960px;
  margin: 0 auto;
}

.contributor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: transform 0.2s ease-in-out;
}

.contributor-card:hover {
  transform: translateY(-5px);
}

.contributor-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 8px;
  border: 2px solid var(--vp-c-brand-1);
}

.contributor-name {
  font-weight: bold;
  font-size: 0.9em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px; /* Limit name width */
}
</style>