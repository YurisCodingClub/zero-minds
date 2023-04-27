'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex">
        <div className="mx-auto max-w-2xl py-16">
          <div className="">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Collaborate, <span className="text-purple-600">Improve</span>, Create: Work in Teams for an <span className="text-purple-600">Outstanding</span> <span className="text-teal-900">Portfolio</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In today&apos;s fast-paced and competitive world, it&apos;s essential to continuously improve your skills, work effectively with others in a team, and showcase your abilities through a well-crafted portfolio. Whether you&apos;re a complete beginner in tech, a student, a working professional who what&apos;s to switch careers, honing your skills, collaborating with others, and showcasing your work can be a game-changer in achieving your goals. In this context, ZeroMinds will help you improve your skills, collaborate effectively in a team, and pimp your portfolio to stand out in your field - many different minds but <span className="text-gray-900 font-semibold">zero</span> boundaries.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/how-it-works"
                className="rounded-full bg-purple-600 py-4 px-6 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <Image src="/hero.png" alt="" width="600" height="429" />
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
