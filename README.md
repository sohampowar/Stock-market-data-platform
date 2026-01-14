<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Stock Market Data Platform</title>
</head>
<body>

<h1>📈 Stock Market Data Platform</h1>

<p>
<strong>Stock Market Data Platform</strong> is a backend-focused web application designed
to collect, clean, analyze, and expose stock market data through REST APIs.
The project demonstrates practical skills in Python, data processing,
API development, and basic analytics for real-world financial data.
</p>

<hr>

<h2>🎯 Project Objective</h2>
<p>
The objective of this project is to build a <strong>mini stock analytics system</strong>
that fetches stock data from public sources or CSV files, processes it,
and provides meaningful insights such as returns, moving averages,
and yearly highs/lows through clean API endpoints.
</p>

<hr>

<h2>📌 Key Features</h2>
<ul>
    <li>Stock data ingestion from CSV or public APIs</li>
    <li>Data cleaning and preprocessing</li>
    <li>Date format normalization</li>
    <li>Daily return calculation</li>
    <li>7-day moving average calculation</li>
    <li>52-week high and low detection</li>
    <li>Creative metric such as volatility</li>
    <li>REST APIs with automatic documentation (Swagger)</li>
</ul>

<hr>

<h2>🧠 Data Metrics Calculated</h2>
<ul>
    <li><strong>Daily Returns</strong> – Percentage change between consecutive days</li>
    <li><strong>7-Day Moving Average</strong> – Short-term trend analysis</li>
    <li><strong>52-Week High</strong> – Highest price in the past year</li>
    <li><strong>52-Week Low</strong> – Lowest price in the past year</li>
    <li><strong>Volatility</strong> – Measure of price fluctuation</li>
</ul>

<hr>

<h2>🛠️ Technologies Used</h2>
<ul>
    <li>Python</li>
    <li>FastAPI (REST API development)</li>
    <li>Pandas (Data analysis & cleaning)</li>
    <li>NumPy (Numerical computations)</li>
    <li>Uvicorn (ASGI server)</li>
    <li>Swagger / OpenAPI (API documentation)</li>
</ul>

<hr>

<h2>🏗️ System Architecture</h2>
<pre>
Stock Data Source (CSV / API)
        ↓
Data Cleaning & Processing (Pandas)
        ↓
Metric Calculation Engine
        ↓
FastAPI Backend
        ↓
REST API Endpoints
        ↓
Client / Dashboard / Postman
</pre>

<hr>

<h2>📂 Project Structure</h2>
<pre>
stock-market-data-platform/
│── data/
│   │── stocks.csv
│
│── app/
│   │── main.py
│   │── data_loader.py
│   │── analytics.py
│   │── schemas.py
│
│── requirements.txt
│── README.html
</pre>

<hr>

<h2>⚙️ Setup Instructions</h2>

<ol>
    <li><strong>Clone the repository</strong></li>
</ol>
<pre>
git clone https://github.com/sohampowar/Stock-market-data-platform.git
</pre>

<ol start="2">
    <li><strong>Navigate to the project directory</strong></li>
</ol>
<pre>
cd Stock-market-data-platform
</pre>

<ol start="3">
    <li><strong>Create and activate virtual environment</strong></li>
</ol>
<pre>
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
</pre>

<ol start="4">
    <li><strong>Install required dependencies</strong></li>
</ol>
<pre>
pip install -r requirements.txt
</pre>

<ol start="5">
    <li><strong>Start the FastAPI server</strong></li>
</ol>
<pre>
uvicorn app.main:app --reload
</pre>

<ol start="6">
    <li><strong>Open API documentation</strong></li>
</ol>
<pre>
Swagger UI : http://127.0.0.1:8000/docs
ReDoc UI   : http://127.0.0.1:8000/redoc
</pre>

<hr>

<h2>📊 Output</h2>
<ul>
    <li>JSON-based API responses</li>
    <li>Cleaned and processed stock datasets</li>
    <li>Computed analytics metrics</li>
    <li>Interactive Swagger documentation</li>
</ul>

<hr>

<h2>🎥 Project Demonstration</h2>
<p>
A short demo video can showcase:
</p>
<ul>
    <li>API execution through Swagger UI</li>
    <li>Stock data retrieval</li>
    <li>Analytics endpoint responses</li>
</ul>

<hr>

<h2>⚠️ Disclaimer</h2>
<p>
This project is built for <strong>learning and evaluation purposes</strong>.
The stock data used may be historical or sample-based and should not be
used for real financial trading decisions.
</p>

<hr>

<h2>👨‍💻 Author</h2>
<p>
<strong>Soham Powar</strong><br>
Python Developer | Backend & Data Enthusiast
</p>

<hr>

<h2>📜 License</h2>
<p>
This project is licensed under the <strong>MIT License</strong>.
</p>

</body>
</html>
