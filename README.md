# Anyformat to Oneformat

This project is designed to extract structured data from PDF files using an AI-powered workflow. It can process any PDF document and convert the unstructured text into a structured JSON format, making it easy to use in other applications.

## Features

- Extracts text from PDF files.
- Uses an AI agent to identify and extract key information.
- Outputs data in a structured JSON format.
- Built with the Mastra framework for creating robust AI workflows.

## How It Works

The project defines a workflow that consists of two main steps:

1.  **Text Extraction**: The workflow takes a URL to a PDF file, downloads it, and extracts the raw text content.
2.  **Data Extraction**: The extracted text is then passed to an AI agent, which has been instructed to identify and extract specific fields like invoice number, date, vendor name, and line items.

The final output is a JSON object containing the extracted data, which can be easily integrated with other systems.

## Getting Started

### Prerequisites

- Node.js (version 20.9.0 or higher)
- pnpm (or your preferred package manager)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/anyformat-to-oneformat.git
    cd anyformat-to-oneformat
    ```

2.  Install the dependencies:
    ```bash
    pnpm install
    ```

### Running the Project

You can run the project in development mode, build it for production, or start the application using the following scripts:

- **Development Mode**:

  ```bash
  pnpm run dev
  ```

- **Build for Production**:

  ```bash
  pnpm run build
  ```

- **Start the Application**:
  ```bash
  pnpm run start
  ```

## Project Structure

The project is organized into the following directories:

- `src/mastra/agents`: Contains the AI agent responsible for data extraction.
- `src/mastra/types`: Defines the data structures and schemas for the extracted data.
- `src/mastra/workflows`: Defines the sequence of steps for the data extraction process.
- `src/mastra/index.ts`: The main entry point for the Mastra application.

## Dependencies

- **@mastra/core**: The core framework for building AI workflows.
- **@ai-sdk/google**: Integrates with Google's AI models.
- **pdf-parse**: A library for extracting text from PDF files.
- **zod**: A TypeScript-first schema declaration and validation library.
