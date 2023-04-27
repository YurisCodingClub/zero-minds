import { ChatBubbleLeftRightIcon, ClipboardDocumentIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Find a project.',
    description:
      'Find a project that suits your tech stack and interest.',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Work in a team.',
    description: 'Gain real life experience by working in an agile team and a professional setup.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Create an outstanding portfolio.',
    description: 'Good project for your portfolio are key to get an interview and finally land a job. Make it possible by joining ZeroMinds.',
    icon: CommandLineIcon,
  },
]

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 rounded-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-teal-700">Improve faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                What most aspiring problem solvers lack is working in a dev team and a professional setup for real-world experience. ZeroMinds is here to help you gain that experience.
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <dl key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-teal-700" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </dl>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero2.png"
              alt="Product screenshot"
              className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
              width='450'
              height='230'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
