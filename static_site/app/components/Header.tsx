const Header = () => {
    // design navbar
    return <>
        <nav className=" bg-slate-950 h-20 flex flex-row flex-wrap justify-around content-center items-center text-white font-medium">

            <div>
                <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                </a>
                
            </div>

            <div>
                <ul className=" flex justify-evenly  items-center">
                    <a href="/course" className=" pr-8 text-lg text-slate-500  hover:text-white">Courses</a>
                    <a href="#" className=" pr-8 text-lg  text-slate-500  hover:text-white">Meet Instructors</a>

                    <div className=" pr-8">
                        <button className=" text-lg outline outline-offset-0 outline-white hover:bg-white text-white hover:text-atom_bg py-2 px-4 rounded-sm">
                            <a href="#">Sign Up</a>
                        </button>
                    </div>

                    <div>
                        <button className=" text-lg bg-white text-atom_bg hover:bg-datacamp_green py-2 px-4 rounded-sm">
                            <a href="#">Upcoming Seminer</a>
                        </button>
                    </div>


                </ul>
            </div>

        </nav>

    </>
};

export default Header;