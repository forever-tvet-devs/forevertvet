"use client";

import { useState } from "react";
import Image from "next/image";
interface StaffMember {
  name: string;
  role: string;
  department: string;
  imageSrc: string;
}

const ME = "/images/me.png";
const TEAM = "/images/team3.jpg";

const staffData: StaffMember[] = [
  { name: "Mr. Jean-Baptiste Nkurunziza", role: "Headmaster", department: "Leadership", imageSrc: ME },
  { name: "Ms. Claudine Uwimana", role: "Deputy Head – Academics", department: "Leadership", imageSrc: TEAM },
  { name: "Mr. Patrick Habimana", role: "Director of Operations", department: "Leadership", imageSrc: ME },
  { name: "Dr. Emmanuel Nshimiyimana", role: "Head of Sciences", department: "Sciences", imageSrc: TEAM },
  { name: "Ms. Diane Mukamana", role: "Chemistry & Biology Instructor", department: "Sciences", imageSrc: ME },
  { name: "Mr. Robert Kayitare", role: "Physics & Electronics Instructor", department: "Sciences", imageSrc: TEAM },
  { name: "Ms. Aline Uwase", role: "Head of Humanities", department: "Humanities", imageSrc: ME },
  { name: "Mr. Théogène Bizimana", role: "History & Civics Instructor", department: "Humanities", imageSrc: TEAM },
  { name: "Ms. Grace Murerwa", role: "English & Communication Instructor", department: "Humanities", imageSrc: ME },
  { name: "Mr. Fidèle Nkusi", role: "Head of Mathematics", department: "Mathematics", imageSrc: TEAM },
  { name: "Ms. Josiane Iradukunda", role: "Applied Mathematics Instructor", department: "Mathematics", imageSrc: ME },
  { name: "Mr. Alexis Rugamba", role: "Statistics & Data Instructor", department: "Mathematics", imageSrc: TEAM },
  { name: "Ms. Vestine Ingabire", role: "Head of Arts & Design", department: "Arts", imageSrc: ME },
  { name: "Mr. Olivier Mutuyimana", role: "Technical Drawing Instructor", department: "Arts", imageSrc: TEAM },
  { name: "Ms. Chantal Nyiransengimana", role: "Digital Design Instructor", department: "Arts", imageSrc: ME },
  { name: "Mr. Aimé Ndayisaba", role: "Head of Sports & Physical Education", department: "Sports", imageSrc: TEAM },
  { name: "Ms. Solange Uwimana", role: "Athletics & Fitness Coach", department: "Sports", imageSrc: ME },
  { name: "Mr. Sylvestre Niyomugabo", role: "Dean of Students", department: "Administration", imageSrc: TEAM },
  { name: "Ms. Faustine Umurerwa", role: "Student Counsellor", department: "Administration", imageSrc: ME },
  { name: "Mr. Jean-Paul Gasana", role: "Finance & Bursary Manager", department: "Administration", imageSrc: TEAM },
  { name: "Ms. Yvonne Uwineza", role: "Admissions Officer", department: "Administration", imageSrc: ME },
];

const departments = ["All", "Leadership", "Sciences", "Humanities", "Mathematics", "Arts", "Sports", "Administration"];

export default function StaffGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? staffData : staffData.filter((s) => s.department === active);

  return (
    <div>
      {/* Filter bar */}
      <div>
        <div className="overflow-x-auto -mx-4 px-4 pb-2 mb-10">
          <div className="flex gap-2 min-w-max">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActive(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  active === dept
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-medium">No staff found in this department.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((member, i) => (
            <div key={i}>
              <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center h-full flex flex-col">
                {/* Photo */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col items-center flex-1">
                  <h3 className="text-sm font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{member.role}</p>
                  <span className="mt-3 text-xs rounded-full bg-primary/8 text-primary px-2.5 py-1 font-medium">
                    {member.department}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
