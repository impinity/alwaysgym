import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function MemberSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const ContentAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="w-full h-auto xl:px-20 px-5 py-20 bg-gray-100"
      id="member"
    >
      <span className="font-normal text-3xl text-[#437F63] underline underline-offset-4">
        Membership
      </span>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={ContentAnimation}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-3 py-10 gap-8"
      >
        <div className="bg-white flex flex-col px-7 py-8 ring-1 ring-black rounded-lg gap-5 transition-transform delay-100 hover:ring-green-800 hover:-translate-y-6">
          <span className="font-bold text-sm text-gray-800">
            Basic Membership
          </span>
          <span className="font-bold text-2xl text-[#437F63]">
            $29.99 <sub className="text-sm text-gray-800">/Monthly</sub>
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-md text-gray-800">Access:</span>
            <span className="font-normal text-sm text-gray-500">
              Unlimited access to gym facilities during regular hours.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-md text-gray-800">Benefits:</span>
            <ul className="list-inside list-disc font-normal text-sm text-gray-500">
              <li>Initial fitness assessment,</li>
              <li>Access to group classes,</li>
              <li>Basic nutrition guidance.</li>
            </ul>
          </div>
          <Link
            href={"#"}
            className="w-full mt-3 py-2 bg-[#438063] rounded-lg text-center text-white transition-transform delay-100 hover:rotate-3"
          >
            Get it now
          </Link>
        </div>

        <div className="bg-white flex flex-col px-7 py-8 ring-1 ring-black rounded-lg gap-5 transition-transform delay-100 hover:ring-green-800 hover:-translate-y-6">
          <span className="font-bold text-sm text-gray-800">
            Premium Membership
          </span>
          <span className="font-bold text-2xl text-[#437F63]">
            $49.99 <sub className="text-sm text-gray-800">/Monthly</sub>
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-md text-gray-800">Access:</span>
            <span className="font-normal text-sm text-gray-500">
              Unlimited 24/7 access to gym facilities.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-md text-gray-800">Benefits:</span>
            <ul className="list-inside list-disc font-normal text-sm text-gray-500">
              <li>Personalized training sessions,</li>
              <li>Priority booking for classes,</li>
              <li>Advanced fitness assessments.</li>
            </ul>
          </div>
          <Link
            href={"#"}
            className="w-full mt-3 py-2 bg-[#438063] rounded-lg text-center text-white transition-transform delay-100 hover:rotate-3"
          >
            Get it now
          </Link>
        </div>

        <div className="bg-[#121212] flex flex-col px-7 py-8 ring-1 ring-black rounded-lg gap-5 transition-transform delay-100 hover:ring-green-800 hover:-translate-y-6">
          <span className="font-bold text-sm text-white">
            Family Membership
          </span>
          <span className="font-bold text-2xl text-[#437F63]">
            $79.99 <sub className="text-sm text-gray-400">/Monthly</sub>
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-md text-gray-300">Access:</span>
            <span className="font-normal text-sm text-gray-400">
              Unlimited 24/7 access for two adults and up to two children (under
              18) residing at the same address.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-md text-gray-300">Benefits:</span>
            <ul className="list-inside list-disc font-normal text-sm text-gray-400">
              <li>Family-friendly classes,</li>
              <li>Child supervision during workout sessions,</li>
              <li>Exclusive family events.</li>
            </ul>
          </div>
          <Link
            href={"#"}
            className="w-full mt-3 py-2 bg-[#438063] rounded-lg text-center text-white transition-transform delay-100 hover:rotate-3"
          >
            Get it now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
