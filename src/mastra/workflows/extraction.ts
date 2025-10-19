import { createStep, createWorkflow } from "@mastra/core/workflows";
import { PDFParse } from "pdf-parse";
import { z } from "zod";
import { ExtractAgent } from "../agents/extract-agent";
import { dataSchema } from "../types/data";

const extractTextFromPdf = createStep({
  id: "Extract Text from PDF",
  inputSchema: z.object({
    fileUrl: z.url(),
  }),
  outputSchema: z.object({
    text: z.string(),
  }),
  execute: async ({ inputData }) => {
    const { fileUrl } = inputData;
    const parsed = new PDFParse({
      url: fileUrl,
    });
    const data = await parsed.getText();
    return {
      text: data.text,
    };
  },
});

const exportDataFromText = createStep({
  inputSchema: z.object({
    text: z.string(),
  }),
  outputSchema: z.object({
    data: dataSchema,
  }),
  id: "Extract Agent",
  execute: async ({ inputData }) => {
    const { text } = inputData;
    const agent = await ExtractAgent.generate(text, {
      structuredOutput: {
        schema: dataSchema,
      },
    });
    console.log("Extracted Data:", agent.object);
    return {
      data: agent.object,
    };
  },
});

export const ExtractionWorkflow = createWorkflow({
  id: "extraction-workflow",
  inputSchema: z.object({
    fileUrl: z.url(),
  }),
  outputSchema: dataSchema,
})
  .then(extractTextFromPdf)
  .then(exportDataFromText)
  .commit();
