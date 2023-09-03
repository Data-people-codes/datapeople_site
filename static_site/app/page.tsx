import Image from "next/image"
import Course from "./components/Course"

export default function Home() {
  return (
    <main className=" justify-center bg-atom_bg min-h-full text-white font-medium">

{/* Intro Section */}
      <section id="intro" className=" flex flex-row flex-wrap justify-around content-center items-center p-32">

        <div className=" w-2/3">
          <h1 className=" text-8xl pb-12">Join Data People</h1>
          <div className=" pt-4 pb-8">
            <h2 className=" text-5xl underline underline-offset-4 pb-4">From <span className=" text-atom_red font-bold">No Code</span> to <span className=" text-datacamp_green font-bold">MLOPS</span>.</h2>
            <h2 className=" text-2xl">Unlock the power of data and AI by learning <br />Python, ChatGPT, SQL, Power BI, and more.</h2>
          </div>

          <div className=" flex flex-col">
            <div className="pb-4">
            <button className="outline outline-offset-0 outline-white hover:bg-white text-white hover:text-atom_bg py-2 px-32 rounded-sm">
            Browse Courses
            </button>
            </div>
          
          <div className="pb-4">
            <button className="  text-lg bg-white text-atom_bg hover:bg-datacamp_green py-2 px-32 rounded-sm">
              Register Now
            </button>
          </div>
          
          </div>
          

        </div>
    
        <div className=" w-1/3">
        <Image
          src="/memory_brain.png"
          alt="memory"
          width={400}
          height={400}
        />
        </div>
      </section>


{/* Course Section */}
      <section id="courses" className=" pb-20">
        <h1 className=" text-4xl text-center p-16"> <span className=" text-6xl text-datacamp_green">Project-based</span> Live Classes</h1>

        <div className=" flex flex-row flex-wrap justify-around content-center items-center">

          <Course CourseName="Python" CourseDesc="Python A-Z, Learn Python from the best" src="/python-logo.svg"/>

          <Course CourseName="ML Crash Course" CourseDesc="Everything about Machine Learning, hands on with projects" src="/python-logo.svg"/>
          <Course CourseName="DL Crash Course" CourseDesc="Everything about Deep Learning, hands on with projects" src="/python-logo.svg"/>
          <Course CourseName="MLOPS" CourseDesc="Apply ML to Production! Just a click away!" src="/python-logo.svg"/>
        </div>
      </section>

{/* Seminer */}
      <section id="seminer">
      <h1 className=" text-4xl text-center p-16"> <span className=" text-6xl text-datacamp_green">Free Seminer</span> Each Month</h1>

      </section>
      
      
    </main>

    
  )
}


