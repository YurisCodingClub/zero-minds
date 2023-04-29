import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Step 1: Find a project.",
    description:
      'Head over to marketplace and look for a project which needs your skills. You can find the open skills under the "Looking for" section on each project.',
    icon: CloudArrowUpIcon,
  },
  {
    name: "Step 2: Start working in a team.",
    description:
      'Click on "Join team" to notice the project maintainer that you are interested to work on the team for a particular position. Communication will happen over GitHub Discussions and Discord.',
    icon: LockClosedIcon,
  },
  {
    name: "Step 3: Mark your project as ready to review.",
    description:
      "If you consider your project as finished, mark it as ready to review as a team. Mentors will review your work and give you feedback. If everything is fine, your project will appear in the gallery is ready to be shown to the world.",
    icon: ArrowPathIcon,
  },
  {
    name: "Step 4: Look for another project.",
    description:
      'It is said that you should have 2-3 really good projects for your portfolio in order to get an interview. If you have finished one project, look out for another one or create your own by hitting the "New project" button.',
    icon: FingerPrintIcon,
  },
];

export default function FeatureSectionGrid() {
  return (
    <div className="bg-white py-24 sm:py-32 rounded-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            Start collaborating
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about collaborating on a project
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Work on a website or web application in a team. Get feedback from
            mentors and other team members. Improve your skills and get ready
            for your first job in tech.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
