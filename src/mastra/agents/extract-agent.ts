import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";

export const ExtractAgent = new Agent({
  name: "extract-agent",
  instructions: `# Prompt
  You are an expert at extracting structured data from documents. Given the raw text extracted from an PDF, your task is to identify and extract key fields. Return the extracted data in a well-structured JSON format. If any field is not found, return null for that field.
  
  ## Fields
   - number
   - date (use ISO 8601 format YYYY-MM-DD if possible)
   - vendor name
   - line items (with description, quantity, and amount)
   - subtotal
   - tax
   - total amount
   - currency`,
  model: google("gemini-2.5-pro"),
});
