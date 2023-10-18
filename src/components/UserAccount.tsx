"use client";

import Image from "next/image";
import { XMarkIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const SkillStack = [
  {
    id: 1,
    title: "Frontend",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Backend",
  },
  {
    id: 3,
    title: "Tools",
    stack: ["Git", "Github"],
  },
];
const Socials = [
  {
    id: 1,
    name: "Email",
    value: "tomilola@me.com",
  },
  {
    id: 2,
    name: "Twitter",
    value: "MaOlMy",
  },
  {
    id: 3,
    name: "Discord",
    value: "MaOlMy",
  },
];
export default function UserAccount() {
  return (
    <div className="w-full py-16 bg-white md:px-20 px-4">
      <div className="flex flex-wrap justify-between">
        <div className="mb-10 md:mb-0">
          <Image
            src="/profile.jpg"
            alt=""
            width="300"
            height="900"
            className="rounded-3xl mb-8 md:mb-24"
          />
          <button className="rounded-full w-full border-2 py-3 shadow-[rgba(0,_0,_0,_0.25)_5px_5px_35px]">
            Upload Profile Picture
          </button>
        </div>
        <div className="mb-10 md:mb-0">
          <div>
            <h3 className="text-purple-400 font-semibold mb-3 text-xl">
              Personal details
            </h3>
            <h4 className="text-slate-500 font-semibold mb-1">Name</h4>
            <p className="font-semibold mb-4 text-xl">Maria Olympia Myrs</p>
          </div>
          <div>
            <h4 className="text-slate-500 font-semibold mb-1">
              Job description
            </h4>
            <p className="font-semibold text-xl bg-green-100 py-3 px-5 rounded-full mb-4">
              Frontend Developer
            </p>
          </div>
          <div>
            <h4 className="text-slate-500 font-semibold mb-1">City</h4>
            <p className="font-semibold mb-4 text-xl">Chicago</p>
            <h4 className="text-slate-500 font-semibold mb-1">Country</h4>
            <p className="font-semibold mb-2 text-xl">USA</p>
          </div>
          <div>
            <p className="text-purple-400 font-semibold mb-3 text-xl">
              Contact Details
            </p>
            {Socials.map((social) => {
              return (
                <div className="mb-4" key={social.id}>
                  <h4 className="text-slate-500 font-semibold mb-1">
                    {social.name}
                  </h4>
                  <p className="font-semibold text-xl">{social.value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-purple-400 font-semibold mb-3 text-xl">Skills</h3>
          {SkillStack.map((skill) => {
            return (
              <div className="mb-6" key={skill.id}>
                <h4 className="text-slate-500 font-semibold mb-2">
                  {skill.title}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {skill.stack ? (
                    skill.stack?.map((skill, idx) => {
                      return (
                        <li
                          className="bg-[#FED6C2] rounded-full flex items-center gap-1 py-3 px-5"
                          key={idx}
                        >
                          <p className="text-xl">{skill}</p>
                          <button type="button">
                            <XMarkIcon className="h-8 w-8 hover:text-red-600" />
                          </button>
                        </li>
                      );
                    })
                  ) : (
                    <button>
                      <PlusCircleIcon className="h-8 w-8 text-gray-500" />
                    </button>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap flex-col-reverse md:flex-row justify-center gap-10 mt-8 lg:mt-24">
        <button
          type="button"
          className="border-2 border-red-600 py-3 px-5 text-2xl font-semibold rounded-full text-red-600"
        >
          Cancel
        </button>
        <button
          type="button"
          className="border-2 border-green-600 py-3 px-5 text-2xl font-semibold rounded-full text-green-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
