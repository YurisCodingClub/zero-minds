import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-slate-200 px-6 lg:px-0"
      aria-labelledby="footer-heading"
    >
      <div className="lg:pt-32 lg:px-8 sm:pt-24 pt-16 pb-8 max-w-7xl mx-auto">
        <div className="xl:gap-8 xl:grid-cols-3 grid">
          <div>
            <Image
              className="block max-w-full w-auto h-7"
              src="/logo.svg"
              alt=""
              width="200"
              height="49"
            />
            <p className="text-sm text-gray-600 my-6">
              Helping career switchers and aspiring web creators land their
              first job in tech.
            </p>
            <div className="flex my-8">
              <a
                href="https://twitter.com/YuriDevAT"
                className="text-gray-600 decoration-inherit"
                aria-label="Twitter"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://github.com/YuriDevAT"
                className="text-gray-600 decoration-inherit ml-6"
                aria-label="GitHub"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.juliaundeutsch.com/"
                className="text-gray-600 decoration-inherit ml-6"
                aria-label="Website"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">powered by</p>
              <div className="flex items-center">
                <a
                  href="https://www.yuriscodingclub.com/"
                  className="text-gray-600 decoration-inherit"
                  aria-label="YurisCodingClub"
                >
                  <Image src="/ycc.svg" alt="" width={150} height={100} />
                </a>
                <a
                  href="https://www.accessibilityfirst.xyz/"
                  className="text-gray-600 decoration-inherit ml-6"
                  aria-label="AccessibilityFirst"
                >
                  <Image
                    src="/accessibilityfirst.svg"
                    alt=""
                    width={150}
                    height={100}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="grid gap-8 grid-cols-2 mt-16 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold m-0">Support</h3>
              <ul role="list" className="mt-6">
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    Mentors
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm text-gray-600">
                    Documentation
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm text-gray-600">
                    Guides
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm text-gray-600">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-0">
              <h3 className="text-sm font-semibold m-0">Company</h3>
              <ul role="list" className="mt-6">
                <li>
                  <a href="#" className="text-sm text-gray-600">
                    About
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm text-gray-600">
                    Blog
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm text-gray-600">
                    Press
                  </a>
                </li>
                <li className="mt-4">
                  <a href="#" className="text-sm text-gray-600">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-16 xl:mt-0">
            <h3 className="text-sm font-semibold m-0">
              Subscribe to newsletter
            </h3>
            <p className="text-sm text-gray-600 my-6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="sm:max-w-md mt-0">
              <p className="text-sm text-gray-600 h-6">Enter you Email</p>
              <div className="flex">
                <label
                  htmlFor="email-address-footer"
                  title="Enter your Email address"
                ></label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address-footer"
                  autoComplete="email"
                  required
                  className="xl:w-full sm:text-sm h-10 px-2 border rounded-full min-w-0 border-gray-400 appearance-none"
                />
                <div className="sm:shrink-0 sm:mt-0 sm:ml-4">
                  <button
                    type="submit"
                    className="w-full cursor-pointer transform-none py-2 px-6 bg-purple-700 text-white rounded-full"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 sm:mt-20 lg-mt-24 border-t border-t-1px border-t-gray-400 text-center mt-16">
          <p className="text-gray-600 text-sm">
            ZeroMinds © Made with &hearts; and ♫ since 2023. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
