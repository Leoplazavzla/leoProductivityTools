import {apiClient} from './apiConfig'

export const getAllCompanies = () => {
  return apiClient.get(`/companies`)
}

export const addNewCompany = (company) => {
  return apiClient.post(`/companies/create`, company)
}


export const create = (id, company) => {
  return apiClient.put(`/companies/:id`, company);
}