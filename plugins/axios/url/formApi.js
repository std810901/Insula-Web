import { axiosInstance } from '../api'

export async function getEmployeeRole () {
  return await axiosInstance.get(
    'home/get_employee_role'
  )
}

export async function getEmployeeRange () {
  return await axiosInstance.get(
    'home/get_employee_range'
  )
}