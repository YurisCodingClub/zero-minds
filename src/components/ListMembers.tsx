import Link from "next/link";
import Image from "next/image";

export default function Members() {
  return (
    <div className="lg:px-6 px-8 max-w-7xl mx-auto">
      <ul className="grid grid-cols-1 gap-x-20 gap-y-8 lg:mx-auto mt-16 max-w-2xl lg:grid-cols-4 lg:max-w-none">
        <li className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image
              src="/members/members_1.png"
              alt=""
              className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]"
              width="250"
              height="250"
            />
            <h3 className="text-lg font-semibold mt-6">Michael Foster</h3>
            <p className="text-base text-gray-500">Co-Founder / CTO</p>
            <ul role="list" className="list-none gap-x-6 flex mt-6">
              <li>
                <Link href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    Twitter
                  </span>
                  <svg
                    className="block w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    LinkedIn
                  </span>
                  <svg
                    className="block w-5 h-5 "
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image
              src="/members/members_2.png"
              alt=""
              className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]"
              width="250"
              height="250"
            />
            <h3 className="text-lg font-semibold mt-6">Michael Foster</h3>
            <p className="text-base text-gray-500">Co-Founder / CTO</p>
            <ul role="list" className="list-none gap-x-6 flex mt-6">
              <li>
                <Link href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    Twitter
                  </span>
                  <svg
                    className="block w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <a href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    LinkedIn
                  </span>
                  <svg
                    className="block w-5 h-5 "
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image
              src="/members/members_3.png"
              alt=""
              className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]"
              width="250"
              height="250"
            />
            <h3 className="text-lg font-semibold mt-6">Michael Foster</h3>
            <p className="text-base text-gray-500">Co-Founder / CTO</p>
            <ul role="list" className="list-none gap-x-6 flex mt-6">
              <li>
                <Link href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    Twitter
                  </span>
                  <svg
                    className="block w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    LinkedIn
                  </span>
                  <svg
                    className="block w-5 h-5 "
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image
              src="/members/members_4.png"
              alt=""
              className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]"
              width="250"
              height="250"
            />
            <h3 className="text-lg font-semibold mt-6">Michael Foster</h3>
            <p className="text-base text-gray-500">Co-Founder / CTO</p>
            <ul role="list" className="list-none gap-x-6 flex mt-6">
              <li>
                <Link href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    Twitter
                  </span>
                  <svg
                    className="block w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  <span className="absolute w-1 h-1 p-0 -m-1 overflow-hidden whitespace-nowrap border-none clip">
                    LinkedIn
                  </span>
                  <svg
                    className="block w-5 h-5 "
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
