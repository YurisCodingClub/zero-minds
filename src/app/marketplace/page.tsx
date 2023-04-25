import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function MarketPlace() {
  return (
    <main className="flex w-desktop min-h-screen flex-col items-center justify-between p-24">
      <div className="sm:py-32">
        <div className="lg:px-6 px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold">Project Marketplace</h2>
            <p className="text-xl mt-2 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          <div className="mt-6 flex items-center">
            <button type="button" className="rounded-full bg-purple-600 py-4 px-6 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 inline-flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="block w-5 h-5 mr-1.5">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>New Project
            </button>
          </div>
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:mx-auto mt-16 max-w-2xl lg:grid-cols-3 lg:max-w-none">
            <article className="flex items-start flex-col justify-between">
              <div className="relative w-full border border-gray-50">
                <Image src="/marketplace/marketplace_1.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
                <div className="shadow-md rounded-md"></div>
              </div>
              <div className="max-w-xl">
                <div className="text-xs gap-4 items-center flex mt-2">
                  <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                  <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-xl mt-3">
                    <a href="#">
                      <span className="inset-0 absolute"></span>Boost your conversion rate
                    </a>
                  </h3>
                  <p className="text-sm overflow-hidden mt-5">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                  </p>
                </div>
                <div className="gap-4 items-center flex mt-8 relative">
                  <Image src="/members/members_1.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
                  <div className="text-sm">
                    <p className="m-0 font-semibold">
                      <a href="#"><span className="inset-0 absolute"></span>Michael Foster</a>
                    </p>
                    <p className="m-0">Co-Founder / CTO</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex items-start flex-col justify-between">
              <div className="relative w-full border border-gray-50">
                <Image src="/marketplace/marketplace_2.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
                <div className="shadow-md rounded-md"></div>
              </div>
              <div className="max-w-xl">
                <div className="text-xs gap-4 items-center flex mt-2">
                  <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                  <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-xl mt-3">
                    <a href="#">
                      <span className="inset-0 absolute"></span>Boost your conversion rate
                    </a>
                  </h3>
                  <p className="text-sm overflow-hidden mt-5">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                  </p>
                </div>
                <div className="gap-4 items-center flex mt-8 relative">
                  <Image src="/members/members_2.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
                  <div className="text-sm">
                    <p className="m-0 font-semibold">
                      <a href="#"><span className="inset-0 absolute"></span>Michael Foster</a>
                    </p>
                    <p className="m-0">Co-Founder / CTO</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex items-start flex-col justify-between">
              <div className="relative w-full border border-gray-50">
                <Image src="/marketplace/marketplace_3.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
                <div className="shadow-md rounded-md"></div>
              </div>
              <div className="max-w-xl">
                <div className="text-xs gap-4 items-center flex mt-2">
                  <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                  <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-xl mt-3">
                    <a href="#">
                      <span className="inset-0 absolute"></span>Boost your conversion rate
                    </a>
                  </h3>
                  <p className="text-sm overflow-hidden mt-5">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                  </p>
                </div>
                <div className="gap-4 items-center flex mt-8 relative">
                  <Image src="/members/members_3.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
                  <div className="text-sm">
                    <p className="m-0 font-semibold">
                      <a href="#"><span className="inset-0 absolute"></span>Michael Foster</a>
                    </p>
                    <p className="m-0">Co-Founder / CTO</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="flex items-start flex-col justify-between">
              <div className="relative w-full border border-gray-50">
                <Image src="/marketplace/marketplace_4.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
                <div className="shadow-md rounded-md"></div>
              </div>
              <div className="max-w-xl">
                <div className="text-xs gap-4 items-center flex mt-2">
                  <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                  <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-xl mt-3">
                    <a href="#">
                      <span className="inset-0 absolute"></span>Boost your conversion rate
                    </a>
                  </h3>
                  <p className="text-sm overflow-hidden mt-5">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                  </p>
                </div>
                <div className="gap-4 items-center flex mt-8 relative">
                  <Image src="/members/members_4.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
                  <div className="text-sm">
                    <p className="m-0 font-semibold">
                      <a href="#"><span className="inset-0 absolute"></span>Michael Foster</a>
                    </p>
                    <p className="m-0">Co-Founder / CTO</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main >
  )
}
