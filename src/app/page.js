// 메인 홈 페이지

import Hero from "./components/home/Hero";
import NewCourses from "./components/home/NewCourses";
import Recommend from "./components/home/Recommend";



export default function Home() {
  return (
    <>
    <Hero />
    <Recommend />
    <NewCourses />
    </>
  );
}
