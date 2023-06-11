import Axios, { AxiosError } from 'axios'

import AppConstant from '../constants/app'

export interface BodyRequest {
  email: string
  customerNumber?: string
  tel?: string
}

export interface BodyResponse {
  status: number
  body: BodyRequest
}

export interface CreateCustomer {}

export interface ShopifyRequest {
  createCustomer(body: BodyRequest): Promise<BodyResponse>
}

export default class Shopify implements ShopifyRequest {
  async createCustomer(body: BodyRequest): Promise<BodyResponse> {
    try {
      const { data } = await Axios.post<BodyRequest>(
        `${AppConstant.BACKEND_API}/`,
        { body },
        { headers: { Accept: 'application/json' } },
      )

      return { status: 200, body: data }
    } catch (error) {
      const isError = Axios.isAxiosError(error)
      throw new Error(isError ? error.message : 'different error than axios')
    }
  }
}
