export default function Footer() {
    return <>
        <footer className=" bg-atom_bg">
            <div className=" flex flex-row justify-around items-center p-20">
                <div className=" w-1/3">
                    <h1 className="text-5xl text-slate-200 font-bold">Data People</h1>
                    <p className=" pt-8 text-slate-200">Data People was created by Nurul Akter Towhid with an aim to make AI, Data Science and Machine Learning accessible to everyone. Initially it started as an ed-tech, which later proceeded on becoming a fully enterprise AI solution and research center.</p>
                </div>

                <div className=" w-2/3 flex flex-row">

                </div>
            </div>

            <div className=" px-20 py-8">
                <h1 className=" text-sm font-medium text-slate-200">2023 © All rights reserved by Data People.Inc</h1>
            </div>
        </footer>

    </>
}