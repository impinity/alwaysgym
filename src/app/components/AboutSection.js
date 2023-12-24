import Link from "next/link";
import AboutSlider from "./AboutSlider";
import TextSpan from "./TextSpan";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const ContentAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const sentence =
    "Empowering Lives Through Fitness: Our AlwaysGym Story".split("");
  return (
    <section
      className="w-full h-auto xl:px-20 px-5 py-20 bg-gray-100"
      id="about"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={ContentAnimation}
        transition={{ duration: 2 }}
        className="flex flex-col md:flex-row gap-8 justify-center items-center"
      >
        <div className="md:w-[60%] w-full flex flex-col gap-5 order-2 md:order-1">
          <AboutSlider />

          <span className="font-normal text-gray-500 text-sm text-justify mt-3">
            Welcome to AlwaysGym, where our commitment to your well-being goes
            beyond the weights and treadmills. Established with a passion for
            empowering lives through fitness, we believe that a healthy
            lifestyle is a transformative journey. At AlwaysGym, we strive to
            create a community where every individual, regardless of fitness
            level, finds the support and motivation needed to reach their goals.
            <br />
            <br />
            Our state-of-the-art facility is more than just a gym; its a space
            designed for inspiration and growth. What sets us apart is our team
            of dedicated and certified trainers who are not just experts in
            fitness but also your partners in success. We understand that
            everyones journey is unique, and thats why we offer personalized
            training programs tailored to your specific needs.
          </span>
        </div>
        <div className=" md:w-[40%] w-full gap-8 order-1 md:order-2">
          <h1 className="font-normal text-4xl underline underline-offset-4 mb-3 text-[#437F63]">
            About us
          </h1>
          {sentence.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}

          <div className="flex gap-3 mt-5">
            <Link
              href={"#"}
              type="button"
              className="py-4 px-4 text-md transition-transform delay-75 hover:px-10 hover:shadow-xl font-normal rounded-lg text-white bg-[#438063]"
            >
              Contact Us
            </Link>

            <Link
              href={"#"}
              type="button"
              className="py-4 px-4 font-medium text-xl underline underline-offset-4 text-gray-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
