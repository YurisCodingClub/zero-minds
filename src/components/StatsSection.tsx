const links = [
  { name: "Find a project", href: "/new-project" },
  { name: "Improve your skill", href: "#" },
  { name: "Land an interview / job", href: "#" },
  { name: "Enter the hall of fame", href: "#" },
];
const stats = [
  { name: "Open project", value: "8" },
  { name: "Current participants", value: "20+" },
  { name: "Finished projects", value: "4" },
  { name: "Happy job finders", value: "4" },
];

export default function StatsSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32 rounded-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Join ZeroMinds
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ZeroMinds helps aspiring designers, developers, and others to gain
            real-world experience by working in a professional setup, which is
            key to get an interview and finally land a job. <br />
            ZeroMinds provides a safe space for collaborators from all over the
            world,{" "}
            <span className="text-gray-900 font-bold">
              regardless of background, ethnicity, gender, or skills
            </span>
            . The more diverse the project team is the better for everyone.{" "}
            <br />
            <br />
            Start collaborating today.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-900">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-teal-700">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
