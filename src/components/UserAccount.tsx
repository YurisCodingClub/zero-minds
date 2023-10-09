"use client";

import Image from "next/image";
import { XMarkIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const Frontend = [
  {
    id: 1,
    text: "HTML",
  },
  {
    id: 2,
    text: "CSS",
  },
  {
    id: 3,
    text: "JavaScript",
  },
];
const Tools = [
  {
    id: 1,
    text: "Git",
  },
  {
    id: 2,
    text: "Github",
  },
];
export default function UserAccount() {
  return (
    <div className="w-full py-16 bg-white px-24">
      <div className="flex flex-wrap justify-between">
        <div>
          <Image
            src="/profile.jpg"
            alt=""
            width="300"
            height="900"
            className="rounded-3xl mb-24"
          />
          <button className="rounded-full w-full border-2 py-3 shadow-[rgba(0,_0,_0,_0.25)_5px_5px_35px]">
            Upload Profile Picture
          </button>
        </div>
        <div>
          <h3 className="text-purple-400 font-semibold mb-3 text-xl">
            Personal details
          </h3>
          <p className="text-slate-500 font-semibold mb-1">Name</p>
          <p className="font-semibold mb-4 text-xl">Nathanael-R</p>
          <p className="text-slate-500 font-semibold mb-1">Job description</p>
          <p>Frontend Developer</p>
          <p className="text-slate-500 font-semibold mb-1">City</p>
          <p className="font-semibold mb-4 text-xl">Chicago</p>
          <p className="text-slate-500 font-semibold mb-1">Country</p>
          <p className="font-semibold mb-2 text-xl">USA</p>
          <p className="text-purple-400 font-semibold mb-4 text-xl">
            Contact Details
          </p>
          <p className="text-slate-500 font-semibold mb-1">Email</p>
          <p className="font-semibold mb-4 text-xl">vip@me.com</p>
          <p className="text-slate-500 font-semibold mb-1">Twitter</p>
          <p className="font-semibold mb-4 text-xl">MaOlMy</p>
          <p className="text-slate-500 font-semibold mb-1">Discord</p>
          <p className="font-semibold mb-4 text-xl">MaOlMy</p>
        </div>
        <div>
          <h3 className="text-purple-400 font-semibold mb-3 text-xl">Skills</h3>
          <div className="mb-6">
            <p className="text-slate-500 font-semibold mb-1">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {Frontend.map((skill) => {
                return (
                  <div
                    className="bg-[#FED6C2] rounded-full flex items-center gap-1 py-3 px-5"
                    key={skill.id}
                  >
                    <p className="text-xl">{skill.text}</p>
                    <button type="button">
                      <XMarkIcon className="h-8 w-8 hover:text-red-600" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-6">
            <p className="mb-1">Backend</p>
            <button>
              <PlusCircleIcon className="h-8 w-8 text-gray-500" />
            </button>
          </div>
          <div className="mb-6">
            <p className="mb-1">Tools</p>
            <div className="flex flex-wrap gap-2">
              {Tools.map((tool) => {
                return (
                  <div
                    className="bg-purple-200 rounded-full flex items-center gap-1 py-3 px-5"
                    key={tool.id}
                  >
                    <p className="text-xl">{tool.text}</p>
                    <button type="button">
                      <XMarkIcon className="h-8 w-8 hover:text-red-600" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
