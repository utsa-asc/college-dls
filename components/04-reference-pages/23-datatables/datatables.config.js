// test values
const rawItems = [
  {
    name: "2023-Annual-Financial-Statement-Final.pdf",
    filePath: "documents/reports/financials/2023/2023-Annual-Financial-Statement-Final.pdf",
    sizeMB: 1.85
  },
  {
    name: "Quarter4-Investor-Briefing-Deck-v7.pptx",
    filePath: "documents/reports/financials/2023/Q4/Quarter4-Investor-Briefing-Deck-v7.pptx",
    sizeMB: 2.34
  },
  {
    name: "HR-policy-update-extended-appendix-jan2024.docx",
    filePath: "documents/hr/updates/HR-policy-update-extended-appendix-jan2024.docx",
    sizeMB: 3.12
  },
  {
    name: "onboarding-instructions-employee-kit.pdf",
    filePath: "documents/hr/onboarding/onboarding-instructions-employee-kit.pdf",
    sizeMB: 0.92
  },
  {
    name: "MarketingCampaign2024-overview-finalversion.pptx",
    filePath: "documents/marketing/2024/MarketingCampaign2024-overview-finalversion.pptx",
    sizeMB: 1.25
  }
];

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
    sizeMB: rawSize, // keep numeric for logic
    sizeMBDisplay: isNaN(rawSize) ? '0.00' : rawSize.toFixed(2), // pre-format for rendering
    highlight: rawSize > 2
  };
});

const totalSizeMB = processedItems
  .reduce((sum, file) => sum + file.sizeMB, 0)
  .toFixed(2);

module.exports = {
  title: "DataTables",
  preview: '@datatables-preview',
  context: {
    items: processedItems,
    totalSizeMB
  }
};