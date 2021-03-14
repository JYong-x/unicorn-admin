import request from '@/utils/request'

export default {
  // 考试类型
  examType () {
    const url = `/optionFinder/exam-type`
    return request.get(url)
  }
}
