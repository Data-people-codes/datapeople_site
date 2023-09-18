import Image from "next/image"
import Course from "./components/Course"
import CurrentCourse from "./components/CurrentCourse"
import Sidecard from "./components/Sidecard"



export default function Home() {
  return (

    <main className=" justify-center bg-slate-950 min-h-full text-white font-medium">

      {/* Intro Section */}
      <section id="intro" className=" h-full flex flex-row flex-wrap justify-center lg:justify-around content-center items-center px-6 py-36 sm:p-48 text-center bg-hero-pattern">

        <div className="">
          <h1 className=" text-white font-bold text-6xl sm:text-8xl pb-4">Data People</h1>
          <div className=" pt-4 pb-8">
            <h2 className=" text-2xl sm:text-4xl font-semibold pb-4">From No Code to MLOPS</h2>
            <p className=" text-sm sm:text-xl font-normal">Unlock the power of data and AI by learning <br />Python, Tensorflow, MLOPS and more.</p>
          </div>

          <div className=" flex items-center justify-evenly">
            <button className=" inline-flex items-center mx-2 border-2 border-white outline-white hover:border-transparent hover:bg-white text-white hover:text-atom_bg py-2 px-10 rounded-sm">
              Browse Courses
            </button>

            <button className=" inline-flex items-center mx-2 bg-white text-atom_bg hover:bg-datacamp_green py-2 px-10 rounded-sm">
              Register Now
            </button>
          </div>
        </div>

      </section>

      {/* Current Courses */}
      <section id="current_courses" className=" py-10 px-20">
        <div className="p-16 text-center">
          <h1 className=" pb-6 underline underline-offset-8 font-semibold text-4xl sm:text-6xl text-datacamp_green">Current Courses</h1>
          <h2 className="text-base sm:text-2xl">Live Classes with Expert Support</h2>
        </div>


        <div className=" flex flex-row flex-wrap justify-around content-center items-center">

          <CurrentCourse CourseName="All about Python" CourseDesc="Python A-Z, Learn Python from the best" src="/python.jpg" btnlink="/python" />

          <CurrentCourse CourseName="Machine Learning Crash Course" CourseDesc="Everything about Machine Learning, hands on with projects" src="/ml_banner.jpg" btnlink="/python" />

          <CurrentCourse CourseName="Deep Learning Crash Course" CourseDesc="Everything about Deep Learning, hands on with projects" src="/deepLearning.jpeg" btnlink="/python" />
        </div>
      </section>


      {/* Course Section */}
      <section id="courses" className=" py-10 px-20">
        <div className="p-16 text-center">
          <h1 className=" pb-6 underline underline-offset-8 font-semibold text-4xl sm:text-6xl text-datacamp_green">Project-Based</h1>
          <h2 className="text-base sm:text-2xl">Live Classes</h2>
        </div>


        <div className=" flex flex-row flex-wrap justify-around content-center items-center">

          <Course CourseName="Noob to Pythonista" CourseDesc="Python A-Z, Learn Python from the best" src="/python-logo.svg" />

          <Course CourseName="ML Crash Course" CourseDesc="Everything about Machine Learning, hands on with projects" src="/machine-learning-svgrepo-com.svg" />

          <Course CourseName="DL Crash Course" CourseDesc="Everything about Deep Learning, hands on with projects" src="/deep-learning-svgrepo-com.svg" />

          <Course CourseName="MLOPS" CourseDesc="Apply ML to Production! Just a click away!" src="/production-concept-svgrepo-com.svg" />
        </div>
        <div className=" flex flex-row flex-wrap justify-around content-center items-center">
          <Course CourseName="Project Pro" CourseDesc="Want to enhance portfolio? We got 50+ curated projects." src="/github-svgrepo-com.svg" />

          <Course CourseName="Research Publication" CourseDesc="Looking for a research group to learn and publish your work? " src="/experiment-svgrepo-com.svg" />

          <Course CourseName="Expert Solution" CourseDesc="Looking for an expert for enterprise solution?" src="/boss-svgrepo-com.svg" />
        </div>
      </section>


      {/* student */}
      <section id="campusAmbassador" className="flex flex-col p-8 md:py-16 bg-white">
        <div className=" w-full px-16 py-8 text-center">
          <h1 className=" pb-4 font-semibold  text-5xl md:text-6xl text-atom_red">Join Us</h1>
          <h2 className=" text-atom_bg text-base md:text-2xl">Become the change, that you dream of</h2>
        </div>
        {/* contents */}
        <div className="flex flex-col md:flex-row flex-wrap justify-around content-center items-center">
          <div className=" w-full md:w-1/3 text-atom_bg">

            <Sidecard src="/student-svgrepo-com.svg" heading="Campus Ambassador"
              text="Take Data People to your campus. Organize events and workshops, get exclusive benefits, goodies and lots more. " />

            <Sidecard src="/team-group-svgrepo-com.svg" heading="Corporate Mentorship"
              text="Looking for a corporate mentor? We got you. Solve industry problems with us." />

            <Sidecard src="/physics-science-svgrepo-com.svg" heading="Research Help"
              text="Stuck in your research? We got you. Get help from our research team." />
          </div>
          <div className=" w-full md:w-2/3">
            <Image
              src={'/students.jpg'}
              width={750}
              height={750}
              alt="students" />
          </div>
        </div>


      </section>





      {/* Sign Up */}
      <section className=" pt-6 px-20">
        <div className="p-16 text-center">
          <h1 className=" pb-6 underline underline-offset-8 font-semibold text-4xl sm:text-6xl text-datacamp_green">Sign Up for Updates</h1>
          <h2 className="text-base md:text-2xl">Make the change, that you dream of</h2>
        </div>
      </section>





    </main>


  )
}


