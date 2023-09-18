import Image from "next/image"

export default function Sidecard({src, heading, text}: {src: string, heading: string, text: string}) {
    return <>
    <div className=" mx-8 p-8 rounded flex flex-row items-center shadow-sm hover:shadow-lg">
        <div className=" w-1/3">
            <Image
            src={src}
            width={75}
            height={75}
            alt=""
            />
        </div>
        <div className=" w-2/3">
            <h1 className=" text-2xl font-bold pb-2">{heading}</h1>
            <p className=" text-sm">{text}</p>
        </div>
    </div>
    </>
}


