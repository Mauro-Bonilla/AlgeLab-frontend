import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read current package.json
const packageJsonPath = join(process.cwd(), 'package.json');
let packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

// Read node_modules directory
const nodeModulesPath = join(process.cwd(), 'node_modules');
const modules = readdirSync(nodeModulesPath)
  .filter(file => !file.startsWith('.') && !file.startsWith('@'));

// Get versions for each module
const dependencies = {};
modules.forEach(module => {
  try {
    const modulePath = join(nodeModulesPath, module, 'package.json');
    const modulePackage = JSON.parse(readFileSync(modulePath, 'utf8'));
    dependencies[module] = modulePackage.version;
  } catch (error) {
    console.log(`Could not read version for ${module}`);
  }
});

// Add scoped packages
const scopedPackages = modules
  .filter(file => file.startsWith('@'))
  .forEach(scope => {
    const scopePath = join(nodeModulesPath, scope);
    readdirSync(scopePath).forEach(module => {
      try {
        const modulePath = join(scopePath, module, 'package.json');
        const modulePackage = JSON.parse(readFileSync(modulePath, 'utf8'));
        dependencies[`${scope}/${module}`] = modulePackage.version;
      } catch (error) {
        console.log(`Could not read version for ${scope}/${module}`);
      }
    });
  });

// Update package.json
packageJson.dependencies = {
  ...packageJson.dependencies,
  ...dependencies
};

// Write updated package.json
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Successfully updated package.json with local dependencies');