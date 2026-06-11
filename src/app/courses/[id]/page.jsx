// 강의 상세페이지
// 강의 설명 / 찜하기

import CourseDetail from '@/app/components/course/CourseDetail'

import '@/styles/courseDetail.scss'
import courses from '@/data/courses.json';

async function page({params}) {
  const  {id}  = await params;  
  const course = courses.find((item)=> item.id === Number(id))
  
  return (
    <CourseDetail course={course} />
  )
}

export default page