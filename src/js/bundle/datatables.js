import DataTable from 'datatables.net-dt';
let table = new DataTable('#file-report',{
    "pageLength": 50,
    "order": [[ 2, "desc" ]],
    fixedHeader: true
 });

// Process raw items to match expected structure
// This replaces the previous .json config file using processed inline test data.
// The raw items are now processed to include displayName, displayPath, sizeMB, sizeMBDisplay, and highlight properties.
// The sizeMB is kept numeric for logic, while sizeMBDisplay is pre-formatted for rendering.
// The highlight property is set to true if sizeMB is greater than 2, allowing for conditional styling in the template.
const processedItems = rawItems.map(file => {
  const rawSize = parseFloat(file.sizeMB);
  return {
    displayName: `filename-${file.name}`,
    displayPath: `college-dls/filename-${file.name}`,
    sizeMB: rawSize,
    sizeMBDisplay: isNaN(rawSize) ? '0.00' : rawSize.toFixed(2), // pre-format for rendering
    highlight: rawSize > 2
  };
});

const totalSizeMB = processedItems
  .reduce((sum, file) => sum + file.sizeMB, 0)
  .toFixed(2);