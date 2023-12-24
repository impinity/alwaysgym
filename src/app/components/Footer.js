
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="w-full h-auto xl:px-20 px-5 pt-20 pb-8 border-t">
        <div className="grid md:grid-cols-3 md:gap-5 gap-10 ite">
          <div className="flex flex-col gap-5 md:mx-auto md:order-1 order-3">
            <Link
              href={"/"}
              className="flex items-center w-28 space-x-3 transition-transform delay-75 hover:rotate-3 hover:p-2 hover:bg-[#438063]"
            >
              <span className="self-center font-semibold text-gray-900 text-lg transition delay-75 hover:text-white">
                AlwaysGym
              </span>
            </Link>
            <ul className="flex md:flex-row gap-2 flex-col md:space-x-8 text-md font-normal">
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>About</li>
              </Link>
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>Privacy Policy</li>
              </Link>
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>Terms & Condition</li>
              </Link>
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>FAQ</li>
              </Link>
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>PDF Download</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-5 mx-auto items-center md:order-2 order-1">
            <Link
              href={"#"}
              className="flex items-center w-40 space-x-3 transition-transform delay-75 hover:rotate-3 hover:p-2 hover:bg-[#438063]"
            >
              <span className="self-center font-semibold text-gray-900 text-lg transition delay-75 hover:text-white">
                Connect with Us!
              </span>
            </Link>
            <ul className="flex flex-row gap-5">
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.8518 16.4939C20.9382 16.4939 15.2098 22.1235 15.2098 29.1359C15.2098 36.1482 20.8395 41.7778 27.8518 41.7778C34.8642 41.7778 40.4938 36.0495 40.4938 29.1359C40.4938 22.2223 34.7654 16.4939 27.8518 16.4939ZM27.8518 37.2346C23.4074 37.2346 19.753 33.5803 19.753 29.1359C19.753 24.6914 23.4074 21.0371 27.8518 21.0371C32.2963 21.0371 35.9506 24.6914 35.9506 29.1359C35.9506 33.5803 32.2963 37.2346 27.8518 37.2346Z"
                      fill="black"
                    />
                    <path
                      d="M40.9876 19.0616C42.5695 19.0616 43.8518 17.7793 43.8518 16.1974C43.8518 14.6156 42.5695 13.3333 40.9876 13.3333C39.4058 13.3333 38.1234 14.6156 38.1234 16.1974C38.1234 17.7793 39.4058 19.0616 40.9876 19.0616Z"
                      fill="black"
                    />
                    <path
                      d="M48.3951 8.7901C45.8272 6.12344 42.1728 4.74072 38.0247 4.74072H17.679C9.08643 4.74072 3.35803 10.4691 3.35803 19.0617V39.3086C3.35803 43.5555 4.74075 47.2099 7.50618 49.8765C10.1728 52.4444 13.7284 53.7284 17.7778 53.7284H37.9259C42.1728 53.7284 45.7284 52.3457 48.2963 49.8765C50.963 47.3086 52.3457 43.6543 52.3457 39.4074V19.0617C52.3457 14.9136 50.963 11.358 48.3951 8.7901ZM48 39.4074C48 42.4691 46.9136 44.9383 45.1358 46.6173C43.358 48.2963 40.8889 49.1852 37.9259 49.1852H17.7778C14.8148 49.1852 12.3457 48.2963 10.5679 46.6173C8.79013 44.8395 7.90124 42.3704 7.90124 39.3086V19.0617C7.90124 16.0987 8.79013 13.6296 10.5679 11.8518C12.2469 10.1728 14.8148 9.28393 17.7778 9.28393H38.1235C41.0864 9.28393 43.5556 10.1728 45.3333 11.9506C47.0124 13.7284 48 16.1975 48 19.0617V39.4074Z"
                      fill="black"
                    />
                  </svg>
                </li>
              </Link>
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 14.127C28.1006 14.127 38.0275 14.127 44.5813 14.5995L44.87 14.6257C45.745 14.7045 46.69 14.7963 47.6175 15.7545C48.055 16.192 48.5538 17.7407 48.7244 18.8476C49.0009 21.2749 49.147 23.7153 49.1619 26.1582V29.7632C49.1465 32.2076 49.0004 34.6494 48.7244 37.0782C48.5625 38.1588 48.0506 39.7295 47.6219 40.1407C46.6987 41.0945 45.7319 41.1863 44.8788 41.2695L44.5813 41.3001C38.1413 41.7376 28.4419 41.7813 28.0044 41.7813C27.5013 41.7813 15.7544 41.6632 12.005 41.3438C11.7819 41.3088 11.5675 41.2782 11.3138 41.252C10.3163 41.1338 9.18312 40.9982 8.36937 40.1538C7.93187 39.7163 7.43313 38.172 7.26688 37.0695C6.99031 34.6422 6.84426 32.2018 6.82937 29.7588V26.1888C6.84492 23.7459 6.99097 21.3055 7.26688 18.8782C7.4375 17.7626 7.945 16.2138 8.37375 15.7851C9.30125 14.827 10.2681 14.7395 11.1213 14.6563L11.41 14.6301C17.9725 14.162 27.8906 14.1576 27.9869 14.1576H28M28 11.3138C28 11.3138 17.8981 11.3138 11.165 11.7951C10.2244 11.9045 8.17688 11.9132 6.3525 13.8032C4.91313 15.247 4.44062 18.5238 4.44062 18.5238C4.13469 21.0679 3.96674 23.6266 3.9375 26.1888V29.7938C3.95832 32.3659 4.11897 34.9349 4.41875 37.4895C4.41875 37.4895 4.88688 40.7663 6.33063 42.2057C8.16375 44.0957 10.5656 44.0388 11.6375 44.2401C15.4875 44.6032 28 44.717 28 44.717C28 44.717 38.1106 44.717 44.8481 44.2226C45.7888 44.1132 47.8406 44.1001 49.6606 42.2101C51.1 40.7707 51.5725 37.4938 51.5725 37.4938C51.8751 34.9394 52.0387 32.3704 52.0625 29.7982V26.1932C52.0416 23.6212 51.881 21.0522 51.5813 18.4976C51.5813 18.4976 51.1131 15.2207 49.6694 13.777C47.8406 11.887 45.7887 11.8738 44.8569 11.7688C38.1106 11.2832 28 11.2832 28 11.2832V11.3138Z"
                      fill="black"
                    />
                    <path
                      d="M23.6819 20.8293V35.1706L35.9275 28L23.6819 20.8293Z"
                      fill="black"
                    />
                  </svg>
                </li>
              </Link>
              <Link
                href={"/"}
                className="block transition-transform delay-100 hover:translate-y-2 hover:border-b hover:border-green-800"
              >
                <li>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M36.75 23.1875C40.3201 25.7508 44.605 27.1281 49 27.125V18.375C45.7511 18.375 42.6353 17.0844 40.3379 14.7871C38.0406 12.4897 36.75 9.3739 36.75 6.125H28V34.125C27.9999 35.2211 27.7057 36.2971 27.1481 37.2407C26.5904 38.1844 25.7898 38.9611 24.8296 39.4898C23.8695 40.0186 22.7851 40.28 21.6895 40.2468C20.5939 40.2136 19.5272 39.887 18.6009 39.3011C17.6745 38.7152 16.9224 37.8914 16.4229 36.9157C15.9234 35.94 15.6949 34.8482 15.7612 33.7541C15.8275 32.66 16.1862 31.6037 16.7999 30.6955C17.4135 29.7873 18.2597 29.0604 19.25 28.5906V19.4906C16.4644 19.99 13.8791 21.2737 11.7975 23.191C9.71586 25.1083 8.2244 27.5796 7.49815 30.3149C6.77189 33.0501 6.84099 35.9358 7.69731 38.6332C8.55364 41.3305 10.1617 43.7276 12.3326 45.5431C14.5036 47.3586 17.1474 48.517 19.9537 48.8826C22.76 49.2481 25.6124 48.8055 28.176 47.6067C30.7396 46.4079 32.908 44.5027 34.4267 42.1147C35.9454 39.7267 36.7514 36.955 36.75 34.125V23.1875Z"
                        stroke="black"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-3 md:mx-auto md:order-3 order-2">
            <Link
              href={"#"}
              className="flex items-center w-48 space-x-3 transition-transform delay-75 hover:rotate-3 hover:p-2 hover:bg-[#438063]"
            >
              <span className="self-center font-semibold text-gray-900 text-lg transition delay-75 hover:text-white">
                Join our newsletter!
              </span>
            </Link>
            <span className="font-normal text-sm text-gray-500">
              Subscribe to our newsletter for exclusive updates, fitness tips,
              and special promotions.
            </span>
            <div>
              <form action="" method="POST">
                <div className="mb-3">
                  <input
                    name="email"
                    id="name"
                    type="email"
                    placeholder="example@company.com"
                    className="p-2 pl-3 w-64 bg-gray-100 rounded-lg transition delay-75 focus:bg-gray-100 focus:w-full focus:outline-none"
                  ></input>
                </div>
                <button
                  type="submit"
                  className="py-2 px-4 text-md transition-transform delay-75 hover:px-10 hover:shadow-xl font-normal rounded-lg text-white bg-[#438063]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t py-5 mt-8">
            <span className="text-md font-normal text-center">© 2023 AlwaysGym. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
