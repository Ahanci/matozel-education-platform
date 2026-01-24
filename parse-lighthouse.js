const fs = require('fs');
const html = fs.readFileSync('lighthouse-1.html', 'utf8');
const match = html.match(/window\.__LIGHTHOUSE_JSON__\s*=\s*(\{[\s\S]*?\});/);

if (match) {
  const json = JSON.parse(match[1]);
  
  console.log('=== LIGHTHOUSE SCORES ===\n');
  console.log('Performance:', json.categories.performance.score);
  console.log('Accessibility:', json.categories.accessibility.score);
  console.log('Best Practices:', json.categories['best-practices'].score);
  console.log('SEO:', json.categories.seo.score);
  
  console.log('\n=== PERFORMANCE AUDITS ===\n');
  const perfAudits = json.audits;
  
  console.log('First Contentful Paint:', perfAudits['first-contentful-paint'].displayValue, '(' + perfAudits['first-contentful-paint'].score + ')');
  console.log('Largest Contentful Paint:', perfAudits['largest-contentful-paint'].displayValue, '(' + perfAudits['largest-contentful-paint'].score + ')');
  console.log('Total Blocking Time:', perfAudits['total-blocking-time'].displayValue, '(' + perfAudits['total-blocking-time'].score + ')');
  console.log('Cumulative Layout Shift:', perfAudits['cumulative-layout-shift'].displayValue, '(' + perfAudits['cumulative-layout-shift'].score + ')');
  console.log('Speed Index:', perfAudits['speed-index'].displayValue, '(' + perfAudits['speed-index'].score + ')');
  
  console.log('\n=== FAILED AUDITS ===\n');
  Object.keys(json.audits).forEach(key => {
    const audit = json.audits[key];
    if (audit.score !== null && audit.score !== undefined && audit.score < 0.9 && audit.displayValue) {
      console.log(`${audit.title}: ${audit.displayValue} (score: ${audit.score})`);
      if (audit.description) {
        console.log(`  Description: ${audit.description.substring(0, 150)}...`);
      }
    }
  });
} else {
  console.log('Could not find Lighthouse JSON in the HTML file');
}
