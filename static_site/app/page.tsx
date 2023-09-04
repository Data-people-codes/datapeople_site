import Image from "next/image"
import Course from "./components/Course"

export default function Home() {
  return (
    <main className=" justify-center bg-atom_bg min-h-full text-white font-medium">

      {/* Intro Section */}
      <section id="intro" className=" flex flex-row flex-wrap justify-center lg:justify-around content-center items-center px-6 py-12 md:p-24 text-center lg:text-left">

        <div className=" w-2/3">
          <h1 className=" text-orange-300 text-6xl sm:text-8xl pb-12">Data People</h1>
          <div className=" pt-4 pb-8">
            <h2 className=" text-4xl pb-4">From <span className=" text-atom_red font-bold">No Code</span> to <span className=" underline underline-offset-4 text-datacamp_green font-bold">MLOPS</span>.</h2>
            <p className=" text-xl font-normal">Unlock the power of data and AI by learning <br />Python, ChatGPT, SQL, Power BI, and more.</p>
          </div>

          <div className=" flex items-center">
            <button className=" inline-flex items-center mx-3 border-2 border-white outline-white hover:border-transparent hover:bg-white text-white hover:text-atom_bg py-2 px-10 rounded-sm">
              Browse Courses
            </button>

            <button className=" inline-flex items-center mx-3 bg-white text-atom_bg hover:bg-datacamp_green py-2 px-10 rounded-sm">
              Register Now
            </button>
          </div>
        </div>

        <div className=" w-1/3 hidden lg:block">
          <Image
            src="/memory_brain.png"
            alt="memory"
            width={400}
            height={400}
          />
        </div>
      </section>


      {/* Course Section */}
      <section id="courses" className=" pt-6 px-20">
        <h1 className=" text-2xl md:text-4xl text-center p-16"> <span className=" underline underline-offset-8 text-4xl md:text-6xl text-datacamp_green">Project-based</span> Live Classes</h1>

        <div className=" flex flex-row flex-wrap justify-around content-center items-center">

          <Course CourseName="Noob to Pythonista" CourseDesc="Python A-Z, Learn Python from the best" src="/python-logo.svg" />

          <Course CourseName="ML Crash Course" CourseDesc="Everything about Machine Learning, hands on with projects" src="/machine-learning-svgrepo-com.svg" />

          <Course CourseName="DL Crash Course" CourseDesc="Everything about Deep Learning, hands on with projects" src="/deep-learning-svgrepo-com.svg" />

          <Course CourseName="MLOPS" CourseDesc="Apply ML to Production! Just a click away!" src="/production-concept-svgrepo-com.svg" />

          <Course CourseName="Project Pro" CourseDesc="Want to enhance portfolio? We got 50+ curated projects just for you" src="/github-svgrepo-com.svg" />

          <Course CourseName="Research Publication" CourseDesc="Looking for a research group to learn and publish your work? " src="/experiment-svgrepo-com.svg" />

          <Course CourseName="Expert Solution" CourseDesc="Looking for an expert for enterprise solution? Drop a message." src="/boss-svgrepo-com.svg" />
        </div>
      </section>

      {/* Seminer */}
      <section id="seminer">
        <h1 className=" text-4xl text-center p-16"> <span className=" text-6xl text-datacamp_green">Free Seminer</span> Each Month</h1>

      </section>


    </main>


  )
}


