import { requestApi } from '/utils/request'

export const login = payload => requestApi('login', payload)
