
import Image from "next/image";
import { sora } from "../layout";


// course component

function CurrentCourse({ CourseName, CourseDesc, src, btnlink }: { CourseName: string, CourseDesc: string, src: string, btnlink:string }) {
    return <>
        <div className=" mt-6 flex w-80 flex-col rounded-md bg-gray-200 bg-clip-border text-gray-900 shadow-md">
            <div className=" m-4 rounded-sm aspect-video relative">
                <Image
                fill
                    // width={500}
                    // height={350}
                    src={src}
                    alt=""
                />
            </div>
            <div className={sora.className}>
                <h1 className=" mb-2 px-6 block text-2xl font-bold tracking-normal text-atom_bg">{CourseName}</h1>
                <p className=" block px-6 pb-5 text-base font-medium text-atom_bg">{CourseDesc}</p>
                {/* design a button */}
                <button className=" block items-center rounded-sm mx-6 my-6 w-fit px-10 py-2 text-white hover:text-atom_bg bg-atom_bg hover:bg-datacamp_green">
                    <a href={btnlink}>See Details</a> 
                </button>
            </div>

        </div>

    </>
}

export default CurrentCourse;