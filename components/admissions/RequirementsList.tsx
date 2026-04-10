import { CheckCircle } from "@/components/ui/Icons";
import { departmentColors } from "@/components/academics/departmentColors";

interface Program {
  name: string;
  level: string;
  academic: string[];
  physical: string[];
}

const programs: Program[] = [
  {
    name: "Heavy Machinery Operation & Maintenance",
    level: "Short Course",
    academic: [
      "S6 certificate (any subject combination)",
      "Basic mathematics proficiency — assessed at intake orientation",
      "English literacy — reading comprehension level",
    ],
    physical: [
      "Good physical fitness — program involves outdoor work and heavy equipment",
      "Normal colour vision required for safety signage interpretation",
      "No history of epilepsy or uncontrolled seizures (safety requirement)",
    ],
  },
  {
    name: "Land Surveying",
    level: "Level 3 – Level 5",
    academic: [
      "S6 certificate with Mathematics (advantageous)",
      "Basic understanding of geography is beneficial",
      "English literacy",
    ],
    physical: [
      "Good eyesight — corrective lenses are acceptable",
      "Ability to work outdoors in varying weather conditions",
      "Physical fitness for extended fieldwork sessions",
    ],
  },
  {
    name: "Electrical Technology",
    level: "Level 3 – Level 5",
    academic: [
      "S6 certificate with Physics and/or Mathematics (required)",
      "Strong numeracy skills — electrical theory is mathematics-intensive",
      "English literacy — technical materials are in English",
    ],
    physical: [
      "No known cardiac conditions — working with live electrical systems",
      "Normal colour vision — essential for electrical wiring identification",
      "Good manual dexterity for precise wiring and assembly work",
    ],
  },
  {
    name: "Public Works",
    level: "Level 3 – Level 5",
    academic: [
      "S6 certificate (any subject combination)",
      "Basic mathematics",
      "English literacy",
    ],
    physical: [
      "Physical fitness for outdoor site work",
      "Ability to work in direct sunlight for extended periods",
      "No severe respiratory conditions affecting outdoor dust exposure",
    ],
  },
  {
    name: "Computer Systems & Architecture",
    level: "Level 3 – Level 5",
    academic: [
      "S6 certificate with Mathematics or Physics (required)",
      "Demonstrated logical thinking ability — assessed at intake",
      "English literacy — technical documentation is in English",
    ],
    physical: [
      "Normal or corrected vision for extended screen-based work",
      "Good manual dexterity for hardware assembly and cabling",
      "No conditions limiting fine motor skills in hands or fingers",
    ],
  },
];

export default function RequirementsList() {
  return (
    <div className="space-y-5">
      {programs.map((prog, i) => {
        const color = departmentColors[prog.name];
        return (
          <div key={i}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-4 p-6 pb-5">
                <div className="w-1.5 self-stretch rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-heading font-semibold text-lg text-primary">{prog.name}</h3>
                  <span
                    className="text-xs rounded-full px-3 py-1 font-semibold"
                    style={{ backgroundColor: `${color}20`, color }}
                  >
                    {prog.level}
                  </span>
                </div>
              </div>

              {/* Requirements columns */}
              <div className="grid md:grid-cols-2 gap-6 px-6 pb-6 pt-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Academic Requirements
                  </p>
                  <ul className="space-y-2">
                    {prog.academic.map((req) => (
                      <li key={req} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-sm text-gray-600 leading-snug">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    Physical / Practical Requirements
                  </p>
                  <ul className="space-y-2">
                    {prog.physical.map((req) => (
                      <li key={req} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="flex-shrink-0 mt-0.5 text-green-600" />
                        <span className="text-sm text-gray-600 leading-snug">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
