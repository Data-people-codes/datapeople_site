

export default function Footer() {
    return <>
        <footer className=" bg-slate-950 text-slate-200">
            <div className=" flex flex-col md:flex-row justify-between items-start p-8 md:p-20">
                <div className=" w-full md:w-1/3">
                    <h1 className="text-5xl  font-bold">Data People</h1>
                    <p className=" pt-8 text-slate-400">Data People was created by Nurul Akter Towhid with an aim to make AI, Data Science and Machine Learning accessible to everyone. Initially it started as an ed-tech, which later proceeded on becoming a fully enterprise AI solution and research center.</p>
                </div>

                <div className=" md:w-1/3">

                </div>

                <div className=" w-full md:w-1/3 flex ">
                    <div className=" flex flex-col justify-end">
                        <h1 className=" underline underline-offset-4 text-lg md:text-xl py-8">
                            Find Us on Social Media
                        </h1>
                        <div className=" flex flex-row justify-between md:justify-evenly">                        
                        <a href="https://www.facebook.com/natowhidpage">
                            <div className=" fill-slate-200 hover:fill-datacamp_green">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" /></svg>
                            </div>
                        </a>

                        <a href="https://www.facebook.com/groups/mlwtowhid/">
                            <div className=" fill-slate-200 hover:fill-datacamp_green">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" /></svg>
                            </div>
                        </a>

                        <a href="https://www.facebook.com/natowhidpage">
                            <div className=" fill-slate-200 hover:fill-datacamp_green">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                            </div>
                        </a>
                        </div>
                    </div>

                        



                </div>

            </div>


            <div className=" px-20 py-8">
                <h1 className=" text-sm font-medium text-slate-400">2023 © All rights reserved by Data People.Inc</h1>
            </div>
        </footer>

    </>
}