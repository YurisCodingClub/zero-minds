import Link from "next/link";
import Image from "next/image";

export default function MarketPlace() {
  return (
    <main className="flex w-desktop min-h-screen flex-col items-center justify-between p-24">
      <div className="py-32">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold">Project Marketplace</h2>
            <p className="text-xl mt-2 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-20 gap-y-8 mx-auto mt-16 max-w-2xl">
            <article className="flex items-start flex-col justify-between">
              <div className="relative w-full">
                <Image src="/logo.svg" alt="" className="block object-cover rounded-md w-full h-auto max-w-full aspect-[2/1]" width="250" height="250" />
                <div className="shadow-md rounded-md"></div>
              </div>
              <div className="max-w-xl">
                <div className="lh ls yu aab avx">
                  <time dateTime="2020-03-16" className="axm">Mar 16, 2020</time>
                  <Link href="#" className="ab eb adn ail ara arl avz axn bhw">Marketing</Link>
                </div>
                <div className="bpv ab">
                  <h3 className="la avu awb awk axq brc">
                    <a href="#">
                      <span className="aa af"></span>Boost your conversion rate
                    </a>
                  </h3>
                  <p className="le lo avv awk axn">
                    Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.
                  </p>
                </div>
                <div className="ab lh ls yu aab">
                  <Image src="/icon.svg" alt="" className="nc re adn aie" width="250" height="250" />
                  <div className="avv awk">
                    <p className="awb axq">
                      <a href="#"><span className="aa af"></span>Michael Foster</a>
                    </p>
                    <p className="axn">Co-Founder / CTO</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
