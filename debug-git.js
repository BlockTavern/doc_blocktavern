const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log("=== Debugging Git History Logic ===");

const repoRoot = process.cwd();
console.log(`Repo Root: ${repoRoot}`);

const targetFile = "docs/zh-CN/GameplayGuide/command-list.md";
console.log(`Target File Request: ${targetFile}`);

// 1. Check Git Repo
try {
    const gitDir = execSync('git rev-parse --git-dir', { encoding: 'utf-8' }).trim();
    console.log(`Git Dir: ${gitDir}`);
} catch (e) {
    console.error("Not a git repository!", e.message);
    process.exit(1);
}

// 2. Resolve Path
const resolvedPath = path.resolve(repoRoot, targetFile);
console.log(`Resolved Absolute Path: ${resolvedPath}`);

const relativeToRoot = path.relative(repoRoot, resolvedPath);
console.log(`Relative to Root: ${relativeToRoot}`);

// 3. Check File Existence & Case
const dir = path.dirname(resolvedPath);
const filename = path.basename(resolvedPath);

if (fs.existsSync(dir)) {
    console.log(`Directory exists: ${dir}`);
    const files = fs.readdirSync(dir);
    console.log(`Files in dir: ${files.join(', ')}`);
    
    const actualFile = files.find(f => f.toLowerCase() === filename.toLowerCase());
    if (actualFile) {
        console.log(`Found file match: ${actualFile}`);
        if (actualFile !== filename) {
             console.log(`⚠️ CASE MISMATCH DETECTED: Requested '${filename}' vs Actual '${actualFile}'`);
        } else {
             console.log(`Case matches perfectly.`);
        }
    } else {
        console.error(`❌ File not found in directory scan!`);
    }
} else {
    console.error(`❌ Directory does not exist!`);
}

// 4. Run Git Log
console.log("\n--- Running Git Log ---");
try {
    // Try original path
    console.log(`Command 1: git log -n 1 -- "${relativeToRoot}"`);
    const log1 = execSync(`git log -n 1 --pretty=format:"%H" -- "${relativeToRoot}"`, { encoding: 'utf-8', stdio: ['pipe','pipe','ignore'] });
    console.log(`Result 1: ${log1 ? log1 : '(empty)'}`);

    // If correction needed, try corrected path
    // Let's assume the user has "command-list.md"
    const correctedCasing = "docs/zh-CN/GameplayGuide/command-list.md";
    const relCorrected = path.relative(repoRoot, path.resolve(repoRoot, correctedCasing));
    
    console.log(`Command 2: git log -n 1 -- "${relCorrected}"`);
    const log2 = execSync(`git log -n 1 --pretty=format:"%H" -- "${relCorrected}"`, { encoding: 'utf-8', stdio: ['pipe','pipe','ignore'] });
    console.log(`Result 2: ${log2 ? log2 : '(empty)'}`);
    
} catch (e) {
    console.error("Git command failed:", e.message);
}

console.log("=== End Debug ===");
