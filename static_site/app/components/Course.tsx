
import Image from "next/image";

// course component

function Course({ CourseName, CourseDesc, src }: { CourseName: string, CourseDesc: string, src: string }) {
  return <>
      <div className=" mt-6 flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className=" p-6">
          <Image
            src={src}
            alt=""
            width={75}
            height={75}
          />
        </div>
        <div>
          <h1 className=" mb-2 px-6 block text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">{CourseName}</h1>
          <p className=" block px-6 pb-5 text-base font-normal leading-relaxed text-inherit antialiased">{CourseDesc}</p>
        </div>

      </div>

  </>
}

export default Course;