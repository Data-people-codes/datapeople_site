import Sidecard from "../components/Sidecard"

export default function Allcourse() {
    return <>
        <div className=" px-8 md:px-32 py-16">
            <div className=" flex flex-col md:flex-row justify-between content-center">
                <div className=" md:w-1/2">
                    <Sidecard src="/numbers/1.jpg" heading="Basic Python and Statistics" 
                    text="Start with the basics of Python and Data Science. 
                    Covers statistics, loops, functions and more. This is the perfect place to start." />

                    <Sidecard src="/numbers/2.jpg" heading="Advanced Python" 
                    text="Take a deep dive into Python. Learn classes, inheritance, modules and more." />

                    <Sidecard src="/numbers/3.jpg" heading="Machine Learning Crash Course" 
                    text="Enter the world of Machine Learning. Learn about supervised and unsupervised learning. 
                    Use scikit-learn, pandas, matplotlib and more. Learn by completing real life projects" />
                </div>

                <div className=" md:w-1/2">
                    <Sidecard src="/numbers/4.jpg" heading="Deep Learning Crash Course" 
                    text="Learn Tensorflow, Keras and more. NLP, Computer vision and more advance topics. Full of projects" />
                    
                    <Sidecard src="/numbers/5.jpg" heading="Machine Learning in Operation (MLOPS)" 
                    text="Our most advanced course. Learn how to use MLOPS to build production ready machine learning models. This is not beginner recommended" />
                </div>

            </div>
        </div>


    </>
}