
import Image from "next/image";
import { sora } from "../layout";


// course component

function CurrentCourse({ CourseName, CourseDesc, src }: { CourseName: string, CourseDesc: string, src: string }) {
    return <>
        <div className=" mt-6 flex w-80 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-900 shadow-md">
            <div className=" p-4 rounded-xl">
                <Image
                    width={500}
                    height={500}
                    src={src}
                    alt=""
                />
            </div>
            <div className={sora.className}>
                <h1 className=" mb-2 px-6 block text-2xl font-bold tracking-normal text-atom_bg">{CourseName}</h1>
                <p className=" block px-6 pb-5 text-base font-normal text-atom_bg">{CourseDesc}</p>
            </div>

        </div>

    </>
}

export default CurrentCourse;