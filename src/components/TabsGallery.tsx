"use client";
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { ListMembers, ListProjects } from '@/components';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsGallery() {
  let [categories] = useState({
    'Finished Projects': [
      {
        id: 1,
        content: <ListProjects />
      },
    ],
    'Members - Hall of fame': [
      {
        id: 2,
        content: <ListMembers />
      },
    ],
  })

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-teal-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-teal-900',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-900 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((content, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-teal-900 focus:outline-none focus:ring-2'
              )}
            >
              {content.map((item) =>
                <div key={item.id}>
                  {item.content}
                </div>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
