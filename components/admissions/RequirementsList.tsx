import { CheckCircle, Info } from "@/components/ui/Icons";
import { departmentColors } from "@/components/academics/departmentColors";

interface Program {
  name: string;
  level: string;
  academic: string[];
  physical: string[];
}

const shortCourses: Program[] = [
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
    name: "Solar Technology",
    level: "Short Course",
    academic: [
      "S6 certificate (any subject combination)",
      "Basic understanding of electrical concepts (advantageous)",
      "English literacy",
    ],
    physical: [
      "Physical fitness for rooftop and outdoor installation work",
      "Ability to work at height — ladder and scaffolding access required",
      "Normal colour vision for cable identification",
    ],
  },
  {
    name: "EV Cars",
    level: "Short Course",
    academic: [
      "S6 certificate (any subject combination)",
      "Basic understanding of automotive or electrical systems (advantageous)",
      "English literacy — technical documentation is in English",
    ],
    physical: [
      "Good manual dexterity for working with vehicle components",
      "No known cardiac conditions — high-voltage battery systems",
      "Normal or corrected vision for diagnostic work",
    ],
  },
];

const nesaProgrammes = [
  "Computer Systems & Architecture",
  "Electrical Technology",
  "Land Surveying",
  "Public Works",
];

export default function RequirementsList() {
  return (
    <div className="space-y-5">
      {/* Short courses with requirements */}
      {shortCourses.map((prog, i) => {
        const color = departmentColors[prog.name];
        return (
          <div key={i}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
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

      {/* NESA-appointed programmes */}
      <div className="bg-primary/5 rounded-xl border border-primary/10 p-6">
        <div className="flex items-start gap-3 mb-4">
          <Info size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-heading font-semibold text-lg text-primary">
              3-Year Programmes (Level 3 – Level 5)
            </h3>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              Students for the following programmes are appointed by <strong>NESA</strong> (National Examination and School Inspection Authority). There is no direct application or entry requirements process through the school — placement is managed centrally by NESA.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {nesaProgrammes.map((name) => {
            const color = departmentColors[name];
            return (
              <div key={name} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <div className="w-1.5 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                <span className="text-sm font-semibold text-primary">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
