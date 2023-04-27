import Link from "next/link";
import Image from "next/image";

export default function ListProjects() {
  return (
    <div className="lg:px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:mx-auto mt-16 max-w-2xl lg:grid-cols-3 lg:max-w-none">
        <article className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image src="/gallery/gallery_1.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
            <div className="shadow-md rounded-md"></div>
          </div>
          <div className="max-w-xl">
            <div className="text-xs gap-4 items-center flex mt-2">
              <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
              <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
            </div>
            <div className="relative">
              <h3 className="font-semibold text-xl mt-3">
                <Link href="#">
                  <span className="inset-0 absolute"></span>Boost your conversion rate
                </Link>
              </h3>
              <p className="text-sm overflow-hidden mt-5">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
              </p>
            </div>
            <div className="gap-4 items-center flex mt-8 relative">
              <Image src="/members/members_1.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
              <div className="text-sm">
                <p className="m-0 font-semibold">
                  <Link href="#"><span className="inset-0 absolute"></span>Michael Foster</Link>
                </p>
                <p className="m-0">Co-Founder / CTO</p>
              </div>
            </div>
          </div>
        </article>
        <article className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image src="/gallery/gallery_2.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
            <div className="shadow-md rounded-md"></div>
          </div>
          <div className="max-w-xl">
            <div className="text-xs gap-4 items-center flex mt-2">
              <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
              <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
            </div>
            <div className="relative">
              <h3 className="font-semibold text-xl mt-3">
                <Link href="#">
                  <span className="inset-0 absolute"></span>Boost your conversion rate
                </Link>
              </h3>
              <p className="text-sm overflow-hidden mt-5">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
              </p>
            </div>
            <div className="gap-4 items-center flex mt-8 relative">
              <Image src="/members/members_2.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
              <div className="text-sm">
                <p className="m-0 font-semibold">
                  <Link href="#"><span className="inset-0 absolute"></span>Michael Foster</Link>
                </p>
                <p className="m-0">Co-Founder / CTO</p>
              </div>
            </div>
          </div>
        </article>
        <article className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image src="/gallery/gallery_3.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
            <div className="shadow-md rounded-md"></div>
          </div>
          <div className="max-w-xl">
            <div className="text-xs gap-4 items-center flex mt-2">
              <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
              <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
            </div>
            <div className="relative">
              <h3 className="font-semibold text-xl mt-3">
                <Link href="#">
                  <span className="inset-0 absolute"></span>Boost your conversion rate
                </Link>
              </h3>
              <p className="text-sm overflow-hidden mt-5">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
              </p>
            </div>
            <div className="gap-4 items-center flex mt-8 relative">
              <Image src="/members/members_3.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
              <div className="text-sm">
                <p className="m-0 font-semibold">
                  <Link href="#"><span className="inset-0 absolute"></span>Michael Foster</Link>
                </p>
                <p className="m-0">Co-Founder / CTO</p>
              </div>
            </div>
          </div>
        </article>
        <article className="flex items-start flex-col justify-between">
          <div className="relative w-full border border-gray-50">
            <Image src="/gallery/gallery_4.png" alt="" className="block object-cover rounded-md w-full h-auto max-w-full sm:aspect-[2/1] lg:aspect-[3/2]" width="250" height="250" />
            <div className="shadow-md rounded-md"></div>
          </div>
          <div className="max-w-xl">
            <div className="text-xs gap-4 items-center flex mt-2">
              <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
              <Link href="#" className="font-medium py-2 px-4 rounded-full relative z-10 bg-gray-100">Marketing</Link>
            </div>
            <div className="relative">
              <h3 className="font-semibold text-xl mt-3">
                <Link href="#">
                  <span className="inset-0 absolute"></span>Boost your conversion rate
                </Link>
              </h3>
              <p className="text-sm overflow-hidden mt-5">
                Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
              </p>
            </div>
            <div className="gap-4 items-center flex mt-8 relative">
              <Image src="/members/members_4.png" alt="" className="rounded-full w-10 h-10 max-w-full block object-cover" width="250" height="250" />
              <div className="text-sm">
                <p className="m-0 font-semibold">
                  <Link href="#"><span className="inset-0 absolute"></span>Michael Foster</Link>
                </p>
                <p className="m-0">Co-Founder / CTO</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
