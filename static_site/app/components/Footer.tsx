

export default function Footer() {
    return <>
        <footer className=" bg-slate-950 text-slate-200">
            <div className=" flex flex-col md:flex-row justify-between items-start p-8 md:p-24">
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

                        <a href="https://www.youtube.com/@DSwithTowhid">
                            <div className=" fill-slate-200 hover:fill-datacamp_green">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                            </div>
                        </a>

                        <a href="https://www.youtube.com/@AIPodcastwithTowhid">
                            <div className=" fill-slate-200 hover:fill-datacamp_green">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
                            </div>
                        </a>
                        </div>
                    </div>

                        



                </div>

            </div>


            <div className=" px-24 py-8">
                <h1 className=" text-sm font-medium text-slate-400">2023 © All rights reserved by Data People.Inc</h1>
            </div>
        </footer>

    </>
}