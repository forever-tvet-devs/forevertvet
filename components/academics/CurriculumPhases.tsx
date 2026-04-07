import FadeInBlur from "@/components/ui/FadeInBlur";
import { BookOpen, Flask, Users, Briefcase, ChevronRight } from "@/components/ui/Icons";

const phases = [
  {
    number: 1,
    name: "Theory & Fundamentals",
    duration: "Weeks 1–8",
    icon: BookOpen,
    desc: "Core concepts, safety standards, and industry regulations. Delivered in structured classroom sessions with daily assessments to build a solid knowledge foundation.",
  },
  {
    number: 2,
    name: "Simulation & Lab Work",
    duration: "Weeks 9–16",
    icon: Flask,
    desc: "Hands-on practice in our purpose-built labs. Students operate equipment in controlled simulations before touching real machinery in a live environment.",
  },
  {
    number: 3,
    name: "Supervised Practice",
    duration: "Weeks 17–22",
    icon: Users,
    desc: "Working alongside industry instructors on real projects within our campus facilities and partner sites under close, structured supervision.",
  },
  {
    number: 4,
    name: "Industry Internship",
    duration: "Weeks 23–28",
    icon: Briefcase,
    desc: "A confirmed placement with one of our 30+ industry partners. Students work full-time and are assessed by both the partner company and our faculty.",
  },
];

export default function CurriculumPhases() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
      {phases.map((phase, i) => {
        const Icon = phase.icon;
        return (
          <div key={phase.number} className="flex flex-col lg:flex-row items-stretch flex-1">
            <FadeInBlur delay={300 + i * 120} className="flex-1">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-full flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-xs font-bold text-white">{phase.number}</span>
                  </div>
                  <span className="text-xs font-semibold rounded-full bg-primary/15 text-amber-700 px-3 py-1 whitespace-nowrap">
                    {phase.duration}
                  </span>
                </div>

                {/* Icon + Name */}
                <div>
                  <Icon size={24} className="text-accent mb-2" />
                  <h3 className="text-base font-semibold text-primary leading-snug">{phase.name}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{phase.desc}</p>
              </div>
            </FadeInBlur>

            {/* Connector arrow — desktop only, not after last item */}
            {i < phases.length - 1 && (
              <div className="hidden lg:flex items-center justify-center px-2 flex-shrink-0 text-gray-300">
                <ChevronRight size={22} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
