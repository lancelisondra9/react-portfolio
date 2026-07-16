"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

type Job = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

const logoImages: Record<string, string> = {
  DigiKey: "/images/logos/digikey.png",
  AdPipe: "/images/logos/adpipe.webp",
  ZieglerCat: "/images/logos/zieglercat.png",
};

export default function ExperienceOrbs({ jobs }: { jobs: Job[] }) {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  const topRow = jobs.slice(0, 2);
  const bottomRow = jobs.slice(2);

  const renderOrb = (job: Job, i: number) => {
    const isOpen = openCompany === job.company;
    const logoSrc = logoImages[job.company];
    return (
      <div
        key={job.company}
        className="animate-float"
        style={{
          animationDelay: `${i * 2}s`,
          animationDuration: `${22 + i * 5}s`,
        }}
      >
        <button
          type="button"
          onClick={() => setOpenCompany(isOpen ? null : job.company)}
          aria-expanded={isOpen}
          aria-controls={`job-panel-${job.company}`}
          className={`flex h-56 w-56 flex-col items-center justify-center gap-3 rounded-full border p-6 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-64 sm:w-64 ${
            isOpen
              ? "scale-110 border-accent/40 bg-accent/25 shadow-accent/30"
              : "border-white/30 bg-white/10 shadow-black/10 hover:bg-white/20 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          }`}
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-sm">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={`${job.company} logo`}
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            ) : (
              <HiOutlineBuildingOffice2 className="h-8 w-8 text-accent" aria-hidden />
            )}
          </div>
          <span className="text-base font-semibold leading-tight wrap-break-word">
            {job.company}
          </span>
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4 p-6">
        <div className="flex flex-wrap justify-center gap-4">
          {topRow.map((job, i) => renderOrb(job, i))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {bottomRow.map((job, i) => renderOrb(job, topRow.length + i))}
        </div>
      </div>

      {jobs.map((job) => {
        const isOpen = openCompany === job.company;
        return (
          <div
            key={job.company}
            id={`job-panel-${job.company}`}
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white/60 p-5 dark:border-zinc-800 dark:bg-white/5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium">
                    {job.role} · {job.company}
                  </h3>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{job.dates}</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.location}</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
