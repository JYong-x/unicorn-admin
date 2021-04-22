import request from '@/utils/request'

export default {
  // 考试类型
  examType (params = { a: 1 }) {
    const url = `/optionFinder/exam-type`
    return request.get(url, params)
  }
}
