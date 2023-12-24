import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function OurgymSection() {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const ContentAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
      <section className="w-full h-auto xl:px-20 px-5 py-20" id="ourgym">
        <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={ContentAnimation}
        transition={{ duration: 1 }}
        className="flex md:flex-row flex-col gap-10 items-center justify-center">
          <div className="md:w-[60%]">
            <Image
              className="w-full h-auto object-cover rounded-xl"
              src={"/images/ourimg.jpg"}
              width={1000}
              height={1000}
              alt="Photo Gym"
            />
          </div>
          <div className="md:w-[40%] flex flex-col gap-8">
            <span className="font-normal text-[#438063] text-3xl underline underline-offset-4">
              AlwaysGym
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-xl text-gray-800">
                Location:
              </span>
              <span className="font-normal text-md text-gray-500">
                123 Fitness Street, Cityville, State ZIP
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-xl text-gray-800">
                Contact Information:
              </span>
              <ul className="list-inside list-disc font-normal text-md text-gray-500">
                <li>(555) 123-4567</li>
                <li>info@alwaysgym.com</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-xl text-gray-800">
              Operating Hours:
              </span>
              <ul className="list-inside font-normal text-md text-gray-500">
                <li>Monday to Friday: 5:00 AM - 10:00 PM</li>
                <li>Saturday: 7:00 AM - 8:00 PM</li>
                <li>Sunday: 8:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
  );
}
