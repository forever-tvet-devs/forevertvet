"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInBlur from "@/components/ui/FadeInBlur";
import { ChevronDown, CheckCircle, ArrowRight, Globe, Flask, BookOpen, GraduationCap } from "@/components/ui/Icons";
import { departmentColors } from "@/components/academics/departmentColors";

interface Department {
  name: string;
  descriptor: string;
  duration: string;
  level: string;
  intake: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  subjects: string[];
  careers: string[];
  instructorName: string;
  instructorRole: string;
  instructorYears: number;
  instructorInitials: string;
}

const departments: Department[] = [
  {
    name: "Heavy Machinery Operation",
    descriptor: "Operate and maintain heavy construction and mining equipment to industry standards",
    duration: "28 weeks",
    level: "RQF Level 3",
    intake: "Jan & Jul",
    icon: GraduationCap,
    subjects: [
      "Equipment Safety & Regulations",
      "Hydraulic Systems",
      "Engine Maintenance",
      "Load Calculations",
      "Operational Procedures",
      "Pre-Shift Inspections",
      "Emergency Protocols",
      "Operator Certification Prep",
    ],
    careers: [
      "Equipment Operator",
      "Site Supervisor",
      "Plant Manager",
      "Maintenance Technician",
      "Heavy Equipment Inspector",
    ],
    instructorName: "Mr. Gaspard Niyitegeka",
    instructorRole: "Lead Instructor, Heavy Machinery",
    instructorYears: 14,
    instructorInitials: "GN",
  },
  {
    name: "Land Survey & Geomatics",
    descriptor: "Master the tools and techniques of modern land measurement, mapping, and GIS",
    duration: "28 weeks",
    level: "RQF Level 3",
    intake: "Jan & Jul",
    icon: Globe,
    subjects: [
      "Plane Surveying",
      "Total Station Operation",
      "GPS & GNSS Systems",
      "GIS Fundamentals",
      "Cadastral Surveying",
      "Topographic Mapping",
      "AutoCAD for Surveyors",
      "Legal Framework for Land",
    ],
    careers: [
      "Land Surveyor",
      "GIS Analyst",
      "Cadastral Officer",
      "Site Engineer",
      "Mapping Technician",
      "Urban Planner Support",
    ],
    instructorName: "Ms. Yvette Mukamugema",
    instructorRole: "Lead Instructor, Land Survey",
    instructorYears: 11,
    instructorInitials: "YM",
  },
  {
    name: "Industrial Electricity",
    descriptor: "Design, install, and maintain industrial electrical systems to national safety codes",
    duration: "28 weeks",
    level: "RQF Level 4",
    intake: "Jan & Jul",
    icon: Flask,
    subjects: [
      "AC/DC Circuit Theory",
      "Electrical Wiring Standards",
      "Motor Control Systems",
      "PLC Programming Basics",
      "Solar PV Installation",
      "Industrial Panel Building",
      "Fault Diagnosis",
      "Rwanda Electrical Codes",
    ],
    careers: [
      "Electrician",
      "Electrical Technician",
      "PLC Programmer",
      "Solar Installer",
      "Panel Builder",
      "Maintenance Engineer",
    ],
    instructorName: "Mr. Théodore Nsengiyumva",
    instructorRole: "Lead Instructor, Industrial Electricity",
    instructorYears: 16,
    instructorInitials: "TN",
  },
  {
    name: "Road Construction Technology",
    descriptor: "Plan, construct, and supervise road infrastructure projects from base to finish",
    duration: "28 weeks",
    level: "RQF Level 3",
    intake: "Jan & Jul",
    icon: BookOpen,
    subjects: [
      "Road Design Fundamentals",
      "Soil Mechanics",
      "Bituminous Materials",
      "Road Geometry",
      "Drainage Systems",
      "Quality Control Testing",
      "Compaction & Paving",
      "Construction Project Management",
    ],
    careers: [
      "Road Construction Technician",
      "Site Supervisor",
      "Quality Control Inspector",
      "Civil Works Foreman",
      "Road Safety Auditor",
    ],
    instructorName: "Mr. Innocent Habimana",
    instructorRole: "Lead Instructor, Road Construction",
    instructorYears: 13,
    instructorInitials: "IH",
  },
  {
    name: "Computer Engineering",
    descriptor: "Build, maintain, and troubleshoot computer hardware and network infrastructure",
    duration: "32 weeks",
    level: "RQF Level 4",
    intake: "Jan & Jul",
    icon: GraduationCap,
    subjects: [
      "Computer Architecture",
      "Network Fundamentals",
      "Operating Systems",
      "Hardware Troubleshooting",
      "Structured Cabling",
      "Cybersecurity Basics",
      "Database Introduction",
      "Cloud Computing Essentials",
    ],
    careers: [
      "IT Technician",
      "Network Engineer",
      "Systems Administrator",
      "Hardware Specialist",
      "Help Desk Analyst",
      "IT Support Officer",
    ],
    instructorName: "Ms. Clarisse Umurerwa",
    instructorRole: "Lead Instructor, Computer Engineering",
    instructorYears: 9,
    instructorInitials: "CU",
  },
];

export default function DepartmentAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {departments.map((dept, i) => {
        const Icon = dept.icon;
        const color = departmentColors[dept.name];
        const isOpen = openIndex === i;

        return (
          <FadeInBlur key={dept.name} delay={300 + i * 100}>
            <div className={`bg-white rounded-xl border transition-shadow duration-200 overflow-hidden ${isOpen ? "border-gray-200 shadow-md" : "border-gray-100 shadow-sm hover:shadow-md"}`}>
              {/* Card header — always visible */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-5 p-6 text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                {/* Color strip */}
                <div className="self-stretch w-1 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <span style={{ color }}><Icon size={24} /></span>
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
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
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
                            <CheckCircle size={14} className="flex-shrink-0 text-green-600" />
                            <span className="text-sm text-gray-600">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Instructor strip */}
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: color }}
                      >
                        {dept.instructorInitials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">{dept.instructorName}</p>
                        <p className="text-xs text-gray-400">{dept.instructorRole} · {dept.instructorYears} years industry experience</p>
                      </div>
                    </div>

                    <Link
                      href="/academics/curriculum"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                    >
                      View Full Curriculum
                      <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeInBlur>
        );
      })}
    </div>
  );
}
