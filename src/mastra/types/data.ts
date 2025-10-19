import z from "zod";

export const dataSchema = z.object({
  invoiceNumber: z.string().nullable(),
  date: z.string().nullable(),
  vendorName: z.string().nullable(),
  lineItems: z
    .array(
      z.object({
        description: z.string().nullable(),
        quantity: z.number().nullable(),
        amount: z.number().nullable(),
      })
    )
    .nullable(),
  subtotal: z.number().nullable(),
  tax: z.number().nullable(),
  totalAmount: z.number().nullable(),
  currency: z.string().nullable(),
});
