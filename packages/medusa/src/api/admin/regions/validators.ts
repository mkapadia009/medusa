import { z } from "zod"
import {
  createFindParams,
  createOperatorMap,
  createSelectParams,
} from "../../utils/validators"
import { applyAndAndOrOperators } from "../../utils/common-validators"

export type AdminGetRegionParamsType = z.infer<typeof AdminGetRegionParams>
export const AdminGetRegionParams = createSelectParams()

export const AdminGetRegionsParamsFields = z.object({
  q: z.string().optional(),
  id: z.union([z.string(), z.array(z.string())]).optional(),
  currency_code: z.union([z.string(), z.array(z.string())]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  created_at: createOperatorMap().optional(),
  updated_at: createOperatorMap().optional(),
  deleted_at: createOperatorMap().optional(),
})

export type AdminGetRegionsParamsType = z.infer<typeof AdminGetRegionsParams>
export const AdminGetRegionsParams = createFindParams({
  limit: 50,
  offset: 0,
})
  .merge(AdminGetRegionsParamsFields)
  .merge(applyAndAndOrOperators(AdminGetRegionsParamsFields))

export type AdminCreateRegionType = z.infer<typeof AdminCreateRegion>
export const AdminCreateRegion = z
  .object({
    name: z.string(),
    currency_code: z.string(),
    countries: z.array(z.string()).optional(),
    automatic_taxes: z.boolean().optional(),
    is_tax_inclusive: z.boolean().optional(),
    payment_providers: z.array(z.string()).optional(),
    metadata: z.record(z.unknown()).nullish(),
  })
  .strict()

export type AdminUpdateRegionType = z.infer<typeof AdminUpdateRegion>
export const AdminUpdateRegion = z
  .object({
    name: z.string().optional(),
    currency_code: z.string().optional(),
    countries: z.array(z.string()).optional(),
    automatic_taxes: z.boolean().optional(),
    is_tax_inclusive: z.boolean().optional(),
    payment_providers: z.array(z.string()).optional(),
    metadata: z.record(z.unknown()).nullish(),
  })
  .strict()
