import React from 'react';

export default function TabBar({ tabs, activeTab, onTabClick }) {
  return (
    <article className="border-t border-gray">
      <div className="pt-3 px-4 flex justify-center gap-3 overflow-x-auto lg:justify-evenly">
        {tabs.map((tab, index) => (
          <h1
            key={index}
            onClick={() => onTabClick(index)}
            className={`p-[10px] text-gray font-semibold text-base text-center capitalize leading-6 cursor-pointer lg:p-6 ${
              activeTab === index ? 'border-b-4 border-gray' : 'border-b-2 border-transparent hover:text-purple hover:bg-purple'
            }`}
          >
            {tab}
          </h1>
        ))}
      </div>
    </article>
  );
}
