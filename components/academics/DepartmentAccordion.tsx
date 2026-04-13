"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, CheckCircle, ArrowRight } from "@/components/ui/Icons";
import { departments } from "@/components/academics/departmentsData";

export default function DepartmentAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {departments.map((dept, i) => {
        const Icon = dept.icon;
        const isOpen = openIndex === i;

        return (
          <div key={i}>
            <div className={`bg-white rounded-xl border transition-shadow duration-200 overflow-hidden ${isOpen ? "border-gray-200 shadow-md" : "border-gray-100 shadow-sm hover:shadow-md"}`}>
              {/* Card header — always visible */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-5 p-6 text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                {/* Color strip */}
                <div className="self-stretch w-1 rounded-full flex-shrink-0 bg-primary" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10">
                  <span className="text-primary"><Icon size={24} /></span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold font-heading text-primary leading-snug group-hover:text-accent transition-colors duration-200">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5 leading-snug">{dept.descriptor}</p>

                  {/* Key facts */}
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3">
                    {[
                      { label: "Duration", value: dept.duration },
                      { label: "Level", value: dept.level },
                      { label: "Intake", value: dept.intake },
                    ].map((fact) => (
                      <div key={fact.label}>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{fact.label} </span>
                        <span className="text-sm font-semibold text-primary">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chevron */}
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Expanded content */}
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{ maxHeight: isOpen ? "800px" : "0px" }}
              >
                <div className="border-t border-gray-100 mx-6 pt-5 pb-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Subjects */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                        Subjects & Modules
                      </h4>
                      <ul className="space-y-2">
                        {dept.subjects.map((subject) => (
                          <li key={subject} className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary" />
                            <span className="text-sm text-gray-600">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Careers */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                        Career Pathways
                      </h4>
                      <ul className="space-y-2">
                        {dept.careers.map((career) => (
                          <li key={career} className="flex items-center gap-2.5">
                            <CheckCircle size={14} className="flex-shrink-0 text-primary" />
                            <span className="text-sm text-gray-600">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Instructor strip */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 bg-primary">
                        {dept.instructorInitials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">{dept.instructorName}</p>
                        <p className="text-xs text-gray-400">{dept.instructorRole}</p>
                      </div>
                    </div>

                    <Link
                      href={`/academics/courses/${dept.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                    >
                      View Full Details
                      <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
