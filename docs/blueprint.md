# **App Name**: StockBoard

## Core Features:

- Company Listing: API endpoint to list all available companies and associated data identifiers.
- Real-time Data Ingestion: Retrieve and store stock data from an API such as yfinance, Alpha Vantage, or a mock CSV.
- Data Cleaning and Validation: Ensure the data is properly cleaned with proper formatting, missing values filled and incorrect data removed. Dates converted correctly.
- Key Metric Calculations: Calculate metrics: daily returns, 7-day moving average, 52-week high and low. And at least one novel metric that leverages AI as a tool, such as Volatility, Correlation or Sentiment Score, with LLM used to decide if a value is included in an output.
- Summary Statistics Endpoint: Provide summary stats of metrics that are calcluated, for analysis and visuzliation.
- Documentation: Implement Swagger or Postman to demonstrate endpoints
- Dashboard: A dashboard that has charts to allow user to view the collected and analzyed stock data

## Style Guidelines:

- Primary color: A muted green (#8FBC8F) to represent growth and stability in the stock market.
- Background color: Light gray (#F0F0F0), a clean and neutral backdrop that highlights the data visualizations.
- Accent color: Blue (#5DADE2), providing a clear visual distinction for interactive elements.
- Headline font: 'Space Grotesk', sans-serif. Body text font: 'Inter', sans-serif
- Use minimalist, clear icons to represent different stock metrics.
- Responsive layout, to scale with different devices
- Subtle transitions when updating charts, for a polished, fluid experience.