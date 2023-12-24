import Link from "next/link";
import Image from "next/image";
import TextSpan from "./TextSpan";

export default function BannerSection() {
  
  const sentence =
    "Unleash Your Potential at AlwaysGym: Transform Your Fitness Journey with State-of-the-Art Facilities and Expert Trainers!".split(
      ""
    );

  return (
    <section className="w-full h-auto xl:px-20 px-5 pt-28 pb-8" id="banner">
      <div className="flex md:flex-row flex-col items-center gap-3">
        <div
          className="md:w-1/2 md:pr-36"
        >
          {sentence.map((letter, index) => {
            return (
              <TextSpan
                className="inline-block font-semibold md:text-4xl text-2xl text-gray-800"
                key={index}
              >
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}

          <div className="flex flex-row items-center mt-5">
            <Link
              href={"#"}
              type="button"
              className="py-4 px-4 text-md transition-transform delay-75 hover:px-10 hover:shadow-xl font-normal rounded-lg text-white bg-[#438063]"
            >
              Contact Us
            </Link>

            <Link href={"#"} type="button" className="py-3 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
              >
                <path
                  d="M24 33.6875C22.4503 33.6875 20.9006 33.1686 19.5788 32.117L0 16.5758V38.2812C0 40.8174 2.01469 42.875 4.5 42.875H43.5C45.9853 42.875 48 40.8183 48 38.2812V16.5758L28.425 32.1275C27.1031 33.1707 25.5469 33.6875 24 33.6875ZM1.52719 13.9057L21.4209 29.7062C22.9388 30.9121 25.065 30.9121 26.5828 29.7062L46.4766 13.9057C47.3531 13.14 48 11.9629 48 10.7188C48 8.18166 45.9844 6.125 43.5 6.125H4.5C2.01469 6.125 0 8.18166 0 10.7188C0 11.9629 0.563438 13.14 1.52719 13.9057Z"
                  fill="#437F63"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div
          className="md:w-1/2 transition-transform delay-75 hover:p-5 hover:ring-2 rounded-xl hover:ring-green-800"
        >
          <Image
            src={"/images/banner2.jpg"}
            className="w-full h-auto object-cover rounded-xl transition-transform delay-75 hover:rotate-3"
            width={1000}
            height={1000}
            alt="Banner Image"
            blurDataURL="data:..."
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </section>
  );
}
