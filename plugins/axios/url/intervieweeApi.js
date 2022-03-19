import { axiosInstance } from '../api'

export async function getDiaryReport () {
  return await axiosInstance.get(
    'interviewee/get_diary_report'
  )
}
