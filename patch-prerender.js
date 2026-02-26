const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'node_modules', 'prerender-spa-plugin', 'lib', 'compile-to-html.js');

try {
  let code = fs.readFileSync(filePath, 'utf8');
  
  // Replace the faulty line with one that logs the actual error output
  const badCode = 'if (error) throw stdout';
  const goodCode = 'if (error) { console.error("HIDDEN PRERENDER ERROR:", stderr); throw error; }';
  
  if (code.includes(badCode)) {
    code = code.replace(badCode, goodCode);
    fs.writeFileSync(filePath, code);
    console.log('Successfully patched compile-to-html.js');
  } else {
    console.log('Patch not applied: Target code not found.');
  }
} catch (err) {
  console.error('Failed to patch file:', err.message);
}
