import FadeInBlur from "@/components/ui/FadeInBlur";
import { Trophy, Dumbbell, Users, Clock } from "@/components/ui/Icons";

type SportType = "Team" | "Individual" | "Fitness";

interface Sport {
  name: string;
  type: SportType;
  description: string;
  schedule: string;
  level: string;
  achievements?: string;
}

const sports: Sport[] = [
  {
    name: "Football (Soccer)",
    type: "Team",
    description: "Our most popular sport. Weekly matches, inter-class tournaments, and an annual inter-institute competition. All skill levels welcome — casual players and competitive athletes alike.",
    schedule: "Every Saturday, 9:00 AM",
    level: "All levels",
    achievements: "Runners-up, Kigali TVET Cup 2025",
  },
  {
    name: "Volleyball",
    type: "Team",
    description: "Mixed and single-gender teams. Combines recreational sessions with structured competitive matches against other Kigali institutes.",
    schedule: "Tuesdays & Thursdays, 5:00 PM",
    level: "All levels",
  },
  {
    name: "Basketball",
    type: "Team",
    description: "3-on-3 and full-court games. Regular inter-institute friendly matches. Coaching provided for beginners.",
    schedule: "Wednesdays, 5:00 PM",
    level: "All levels",
  },
  {
    name: "Athletics (Track & Field)",
    type: "Individual",
    description: "Sprint events, long jump, and relay. Students representing Forever Tvet compete in city-wide TVET athletics meets. Training is structured and progression-based.",
    schedule: "Mondays, 5:30 PM",
    level: "All levels",
    achievements: "2 national-level finalists, 2025",
  },
  {
    name: "Fitness & Strength Training",
    type: "Fitness",
    description: "Structured gym and bodyweight training sessions with a student-led trainer guide. Focus on building fitness, discipline, and physical confidence for practical work.",
    schedule: "Daily — 6:00 AM or 5:30 PM",
    level: "All levels",
  },
];

const typeBadge: Record<SportType, string> = {
  Team:       "bg-blue-100 text-blue-700",
  Individual: "bg-purple-100 text-purple-700",
  Fitness:    "bg-green-100 text-green-700",
};

const typeIcon: Record<SportType, React.ElementType> = {
  Team:       Users,
  Individual: Trophy,
  Fitness:    Dumbbell,
};

export default function SportsList() {
  return (
    <div className="divide-y divide-gray-100">
      {sports.map((sport, i) => {
        const Icon = typeIcon[sport.type];
        return (
          <FadeInBlur key={sport.name} delay={200 + i * 80}>
            <div className="flex items-start gap-5 py-7">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={20} className="text-accent" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-heading font-bold text-xl text-primary">{sport.name}</h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${typeBadge[sport.type]}`}>
                    {sport.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{sport.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock size={13} className="flex-shrink-0" /> {sport.schedule}
                  </span>
                  <span className="text-xs text-gray-400">{sport.level}</span>
                  {sport.achievements && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                      🏆 {sport.achievements}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </FadeInBlur>
        );
      })}
    </div>
  );
}
