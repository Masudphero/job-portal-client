import * as motion from "motion/react-client"
import team1 from "../../assets/team/baner4.jpg"
import team2 from "../../assets/team/team5.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 p-6  mt-10 ">
          <motion.img
            src={team1}
            animate={{y:[50,100,50]}}
            transition={{duration:10, repeat:Infinity}}
            className="max-w-full rounded-t-[40px] border-l-8 border-b-4 border-red-200  rounded-br-[40px] shadow-2xl" />
          <motion.img
            src={team2}
            animate={{x:[100,150,100]}}
            transition={{duration:10, delay:5, repeat:Infinity}}
            className="max-w-full rounded-t-[40px] border-r-8 border-b-4 border-red-200  rounded-bl-[40px] shadow-2xl" />
          </div>
          <div className="flex-1">
        
            <motion.h1 
            animate={{x:50}}
            transition={{duration: 2, delay: 1, ease: "easeOut", repeat:Infinity}}
            className="lg:text-5xl text-3xl font-bold ">Latest <motion.span
            animate={{color:['#e2340f','#03ddaf','#b0c40d']}}
            transition={{duration:1.5, repeat:Infinity}}
            >Jobs</motion.span>  For You!
            </motion.h1>

            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;