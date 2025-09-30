#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

interface Module {
  id: string;
  track: string;
  level: number;
  path: string;
  title: string;
}

interface Track {
  id: string;
  name: string;
  modules: Module[];
}

/**
 * Enhanced build_docs script with --cards mode support
 *
 * Usage:
 *   tsx scripts/build_docs.ts           # Default list layout
 *   tsx scripts/build_docs.ts --cards   # Material cards layout
 */

/**
 * Normalize markdown content to fix formatting issues
 */
function normalizeMd(md: string): string {
  return md
    .replace(/\r/g, '')            // normalize line endings
    .replace(/[ \t]+$/gm, '')      // trim trailing spaces
    .replace(/\n{3,}/g, '\n\n')    // squash 3+ blanks -> single blank line
    .replace(/\n*$/, '\n');        // ensure exactly one trailing newline
}

/**
 * Load catalog data
 */
async function loadCatalog(): Promise<Module[]> {
  const catalogPath = join('docs', '_meta', 'catalog.json');
  const catalogContent = await readFile(catalogPath, 'utf-8');
  return JSON.parse(catalogContent);
}

/**
 * Group modules by track
 */
function groupModulesByTrack(modules: Module[]): Track[] {
  const trackMap = new Map<string, Track>();

  for (const module of modules) {
    if (!trackMap.has(module.track)) {
      trackMap.set(module.track, {
        id: module.track,
        name: getTrackDisplayName(module.track),
        modules: []
      });
    }
    trackMap.get(module.track)!.modules.push(module);
  }

  // Sort modules within each track by level
  for (const track of trackMap.values()) {
    track.modules.sort((a, b) => a.level - b.level);
  }

  return Array.from(trackMap.values()).sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Get human-readable track name
 */
function getTrackDisplayName(trackId: string): string {
  const names: Record<string, string> = {
    '00-git-path': 'Git Fundamentals',
    '01-web-development': 'Web Development',
    '02-python': 'Python',
    '03-java': 'Java',
    '04-go': 'Go',
    '05-ai-ml': 'AI/ML',
    '06-cyber-security': 'Cyber Security'
  };
  return names[trackId] || trackId;
}

/**
 * Get level badge and description
 */
function getLevelInfo(level: number): { badge: string; description: string } {
  const levels = [
    { badge: 'Orientation', description: 'Getting started and setup' },
    { badge: 'Foundations', description: 'Core concepts and basics' },
    { badge: 'Core Skills', description: 'Practical application' },
    { badge: 'Project', description: 'Real-world milestone' },
    { badge: 'Advanced', description: 'Production-ready expertise' }
  ];
  return levels[level] || { badge: `Level ${level}`, description: 'Advanced topics' };
}

/**
 * Generate list-style track page (default)
 */
function generateListTrackPage(track: Track): string {
  let content = `# ${track.name}\n\n`;

  content += `Learn ${track.name.toLowerCase()} from zero to production-ready skills through structured, hands-on modules.\n\n`;

  content += `## Learning Path\n\n`;

  for (const module of track.modules) {
    const levelInfo = getLevelInfo(module.level);
    content += `### ${levelInfo.badge}: ${module.title}\n\n`;
    content += `**Level ${module.level}** • ${levelInfo.description}\n\n`;
    const gh = `https://github.com/AyhamJo7/Zero-2-Pro/blob/main/${module.path}`;
    content += `[Start Module →](${gh})\n\n`;
  }

  content += `---\n\n`;
  content += `## Track Overview\n\n`;
  content += `- **Modules**: ${track.modules.length}\n`;
  content += `- **Levels**: ${Math.max(...track.modules.map(m => m.level)) + 1}\n`;
  content += `- **Format**: Self-paced with milestones\n\n`;

  return content;
}

/**
 * Generate cards-style track page (Material Design)
 */
function generateCardsTrackPage(track: Track): string {
  let content = `# ${track.name}\n\n`;

  content += `Learn ${track.name.toLowerCase()} from zero to production-ready skills through structured, hands-on modules.\n\n`;

  content += `<div class="grid cards" markdown>\n\n`;

  for (const module of track.modules) {
    const levelInfo = getLevelInfo(module.level);

    content += `-   **${levelInfo.badge}**\n\n`;
    content += `    ---\n\n`;
    content += `    ### ${module.title}\n\n`;
    content += `    ${levelInfo.description}\n\n`;
    content += `    **Level ${module.level}**\n\n`;
    const gh = `https://github.com/AyhamJo7/Zero-2-Pro/blob/main/${module.path}`;
    content += `    [Start Module :material-arrow-right:](${gh})\n\n`;
  }

  content += `</div>\n\n`;

  content += `## Track Details\n\n`;
  content += `| Metric | Value |\n`;
  content += `|--------|-------|\n`;
  content += `| **Modules** | ${track.modules.length} |\n`;
  content += `| **Levels** | ${Math.max(...track.modules.map(m => m.level)) + 1} |\n`;
  content += `| **Format** | Self-paced with milestones |\n`;
  content += `| **Prerequisites** | Varies by level |\n\n`;

  return content;
}

/**
 * Generate track overview page
 */
function generateTrackOverview(tracks: Track[], useCards: boolean): string {
  let content = `# Learning Tracks\n\n`;

  content += `Choose your learning path based on your goals and interests. Each track takes you from zero to production-ready skills.\n\n`;

  if (useCards) {
    content += `<div class="grid cards" markdown>\n\n`;

    for (const track of tracks) {
      content += `-   **${track.name}**\n\n`;
      content += `    ---\n\n`;
      content += `    ${track.modules.length} modules • ${Math.max(...track.modules.map(m => m.level)) + 1} levels\n\n`;
      content += `    Build production-ready ${track.name.toLowerCase()} skills through hands-on projects\n\n`;
      content += `    [View Track :material-arrow-right:](${track.id.replace(/^\d+-/, '')}.md)\n\n`;
    }

    content += `</div>\n\n`;
  } else {
    content += `## Available Tracks\n\n`;

    for (const track of tracks) {
      content += `### [${track.name}](${track.id.replace(/^\d+-/, '')}.md)\n\n`;
      content += `**${track.modules.length} modules** across **${Math.max(...track.modules.map(m => m.level)) + 1} levels**\n\n`;
      content += `Build production-ready ${track.name.toLowerCase()} skills through hands-on learning.\n\n`;
    }
  }

  content += `## How Tracks Work\n\n`;
  content += `Each track follows a proven learning progression:\n\n`;
  content += `- **Level 0**: Orientation and setup\n`;
  content += `- **Level 1**: Foundation concepts\n`;
  content += `- **Level 2**: Core practical skills\n`;
  content += `- **Level 3**: Real-world project milestone\n`;
  content += `- **Level 4**: Advanced production techniques\n\n`;

  return content;
}

/**
 * Main function
 */
async function main(): Promise<number> {
  try {
    const useCards = process.argv.includes('--cards');
    console.log(`🏗️ Building track pages${useCards ? ' with cards layout' : ' with list layout'}...`);

    // Load catalog
    const modules = await loadCatalog();
    const tracks = groupModulesByTrack(modules);

    // Ensure docs/tracks directory exists
    const tracksDir = join('docs', 'tracks');
    await mkdir(tracksDir, { recursive: true });

    // Generate track overview page
    const overviewContent = generateTrackOverview(tracks, useCards);
    await writeFile(join(tracksDir, 'index.md'), normalizeMd(overviewContent));

    // Generate individual track pages
    for (const track of tracks) {
      const trackFileName = `${track.id.replace(/^\d+-/, '')}.md`;
      const trackContent = useCards
        ? generateCardsTrackPage(track)
        : generateListTrackPage(track);

      await writeFile(join(tracksDir, trackFileName), normalizeMd(trackContent));
      console.log(`  ✅ Generated ${trackFileName}`);
    }

    console.log(`🎉 Generated ${tracks.length + 1} track pages`);
    return 0;

  } catch (error) {
    console.error('❌ Error building docs:', error);
    return 1;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().then(code => process.exit(code));
}