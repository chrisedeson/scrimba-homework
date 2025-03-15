# Use Python 3.12
FROM python:3.12

# Set the working directory
WORKDIR /app

# Copy only requirements first (for caching layers)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the project files
COPY . .

# Expose the correct port
EXPOSE 8080

# Run the FastAPI server
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8080"]
