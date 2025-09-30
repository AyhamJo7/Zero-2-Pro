#!/usr/bin/env node
/**
 * Render progress dashboard from JSON data
 * Input: docs/_data/progress.json
 * Output: docs/progress/index.md
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

interface LearnerProgress {
  issueNumber: number;
  url: string;
  author: string;
  levels: Record<number, boolean>;
  totalChecked: number;
  updatedAt: string;
  awarded: Record<string, boolean>;
}

interface ProgressData {
  generatedAt: string;
  learners: LearnerProgress[];
}

/**
 * Format ISO date to readable short date
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

/**
 * Generate level badge emoji
 */
function getLevelBadge(level: number, completed: boolean): string {
  if (!completed) return '⬜';
  const badges = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣'];
  return badges[level] || '✅';
}

/**
 * Generate progress bar
 */
function getProgressBar(completed: number, total: number = 5): string {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const filled = Math.round((completed / total) * 10);
  const empty = 10 - filled;
  return '█'.repeat(filled) + '░'.repeat(empty) + ` ${percentage}%`;
}

/**
 * Main renderer
 */
async function main(): Promise<number> {
  try {
    console.log('📊 Rendering progress dashboard...');

    // Read progress data
    const dataPath = join('docs', '_data', 'progress.json');
    const rawData = await readFile(dataPath, 'utf-8');
    const data: ProgressData = JSON.parse(rawData);

    // Sort learners by completion (most first)
    const sortedLearners = [...data.learners].sort((a, b) => {
      const aCompleted = Object.values(a.levels).filter(Boolean).length;
      const bCompleted = Object.values(b.levels).filter(Boolean).length;
      return bCompleted - aCompleted;
    });

    // Build markdown
    let content = `# 📊 Progress Dashboard\n\n`;
    content += `Track learner progress across all Zero-to-Pro tracks.\n\n`;
    content += `**Last updated**: ${formatDate(data.generatedAt)}\n\n`;
    content += `**Active learners**: ${data.learners.length}\n\n`;

    // Summary stats
    const totalCompleted = data.learners.reduce((sum, l) => {
      return sum + Object.values(l.levels).filter(Boolean).length;
    }, 0);
    const avgCompleted = data.learners.length > 0
      ? (totalCompleted / data.learners.length).toFixed(1)
      : '0';

    content += `## 📈 Quick Stats\n\n`;
    content += `- **Total levels completed**: ${totalCompleted}\n`;
    content += `- **Average levels per learner**: ${avgCompleted}\n`;
    content += `- **Most completed**: ${Math.max(...sortedLearners.map(l => Object.values(l.levels).filter(Boolean).length), 0)} levels\n\n`;

    // Leaderboard
    content += `## 🏆 Leaderboard\n\n`;
    content += `| Rank | Learner | Progress | L0 | L1 | L2 | L3 | L4 | Modules | Last Updated |\n`;
    content += `|------|---------|----------|----|----|----|----|----|---------|--------------|\n`;

    sortedLearners.forEach((learner, idx) => {
      const rank = idx + 1;
      const completed = Object.values(learner.levels).filter(Boolean).length;
      const progressBar = getProgressBar(completed);
      const levelBadges = [0, 1, 2, 3, 4]
        .map(level => getLevelBadge(level, learner.levels[level] || false))
        .join(' ');

      content += `| ${rank} | [@${learner.author}](${learner.url}) | ${progressBar} | `;
      content += [0, 1, 2, 3, 4].map(l => getLevelBadge(l, learner.levels[l] || false)).join(' | ');
      content += ` | ${learner.totalChecked} | ${formatDate(learner.updatedAt)} |\n`;
    });

    content += `\n## 📋 Detailed Progress\n\n`;

    if (sortedLearners.length === 0) {
      content += `*No active progress trackers yet. [Create yours!](https://github.com/AyhamJo7/Zero-2-Pro/issues/new?template=progress.md)*\n\n`;
    } else {
      sortedLearners.forEach(learner => {
        const completed = Object.values(learner.levels).filter(Boolean).length;
        const levelsList = [0, 1, 2, 3, 4]
          .filter(l => learner.levels[l])
          .map(l => `L${l}`)
          .join(', ');

        content += `### [@${learner.author}](${learner.url})\n\n`;
        content += `- **Levels completed**: ${levelsList || 'None yet'} (${completed}/5)\n`;
        content += `- **Total modules checked**: ${learner.totalChecked}\n`;
        content += `- **Last activity**: ${formatDate(learner.updatedAt)}\n`;
        content += `- **Progress**: ${getProgressBar(completed)}\n\n`;
      });
    }

    content += `---\n\n`;
    content += `*Want to track your progress? [Create a Progress Tracker issue](https://github.com/AyhamJo7/Zero-2-Pro/issues/new?template=progress.md)*\n`;

    // Ensure output directory exists
    const outputDir = join('docs', 'progress');
    await mkdir(outputDir, { recursive: true });

    // Write output
    const outputPath = join(outputDir, 'index.md');
    await writeFile(outputPath, content, 'utf-8');

    console.log(`✅ Dashboard rendered: ${outputPath}`);
    console.log(`   Learners: ${data.learners.length}`);
    console.log(`   Total completions: ${totalCompleted}`);

    return 0;
  } catch (error) {
    console.error('❌ Failed to render dashboard:', error);
    return 1;
  }
}

// Run
if (import.meta.url === `file://${process.argv[1]}`) {
  main().then(code => process.exit(code));
}