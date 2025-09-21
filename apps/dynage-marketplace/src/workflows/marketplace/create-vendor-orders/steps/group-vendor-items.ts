import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { CartDTO, CartLineItemDTO } from "@medusajs/framework/types"
import { ContainerRegistrationKeys, promiseAll } from "@medusajs/framework/utils"

export type StepInput = {
    cart: CartDTO
}

const groupVendorItemsStep = createStep(
    "group-vendor-items",
    async ({ cart }: StepInput, { container }) => {
        const query = container.resolve(ContainerRegistrationKeys.QUERY)

        const vendorsItems: Record<string, CartLineItemDTO[]> = {}

        await promiseAll((cart.items ?? [])
            .filter((item) => item.product_id !== undefined)
            .map(async (item) => {
                const { data: [product] } = await query.graph({
                    entity: "product",
                    fields: ["vendor.*"],
                    filters: {
                        id: [item.product_id as string],
                    },
                })

                const vendorId = product.vendor?.id

                if (!vendorId) {
                    return
                }
                vendorsItems[vendorId] = [
                    ...(vendorsItems[vendorId] || []),
                    item,
                ]
            }))

        return new StepResponse({
            vendorsItems,
        })
    }
)

export default groupVendorItemsStep