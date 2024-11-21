export const dealAnalysisData = {
  valuationDetails: {
    companyValuation: '£800,569.00',
    sellerDesiredValue: '£1,000,000.00',
    initialOffer: '£500,000.00',
  },
  executiveSummary: {
    metrics: [
      {
        label: 'Revenue',
        value: '£110,000.00',
        description: 'The total income generated from sales or services is'
      },
      {
        label: 'Net Income',
        value: '£22,169.00',
        description: 'The total profit after all expenses, including taxes and interest, is'
      },
      {
        label: 'Current Liabilities',
        value: '£93,039.00',
        description: "The company's short-term debts or obligations total"
      }
    ],
    ebitda: '£114,367.00'
  },
  periodMetrics: {
    metrics: [
      { label: 'Revenue', value: '£274,663.00' },
      { label: 'Gross Profit Margin', value: '78.51%' },
      { label: 'Net Income', value: '£44,338.00' },
      { label: 'Profit Margin', value: '16.81%' },
      { label: 'Current Assets', value: '£874,663.00' }
    ],
    growthNote: 'The revenue grew by -33.20% from the first to the last period, reflecting the company\'s growth over time.'
  }
} as const;