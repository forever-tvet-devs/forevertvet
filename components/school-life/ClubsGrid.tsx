"use client";

import { useState } from "react";
import { Cpu, Palette, Trophy, Tree, MessageCircle, Music, Users } from "@/components/ui/Icons";

type ClubCategory = "Technology" | "Creative" | "Sports" | "Environment" | "Community";
type FilterCategory = "All" | ClubCategory;

interface Club {
  name: string;
  category: ClubCategory;
  description: string;
  members: number;
  meets: string;
  icon: React.ElementType;
  openToAll: boolean;
}

const clubs: Club[] = [
  { name: "Coding & Innovation Club", category: "Technology", description: "Build apps, solve real problems, and explore AI tools. Weekly projects and an end-of-term hackathon.", members: 24, meets: "Tuesdays, 4:00 PM", icon: Cpu, openToAll: true },
  { name: "Electronics & Robotics Club", category: "Technology", description: "Hands-on electronics prototyping, circuit design, and robot build challenges using real components.", members: 18, meets: "Thursdays, 4:00 PM", icon: Cpu, openToAll: true },
  { name: "Photography & Media Club", category: "Creative", description: "Document campus life, learn photo editing, and produce content for the school's social media channels.", members: 15, meets: "Fridays, 3:30 PM", icon: Palette, openToAll: true },
  { name: "Music & Arts Club", category: "Creative", description: "Instruments, vocal practice, visual art, and cultural expression. Performs at all major school events.", members: 12, meets: "Fridays, 4:00 PM", icon: Music, openToAll: true },
  { name: "Debate Society", category: "Community", description: "Public speaking, structured argumentation, and current affairs discussions. Competes in inter-school events.", members: 20, meets: "Wednesdays, 4:00 PM", icon: MessageCircle, openToAll: true },
  { name: "Peer Mentorship Program", category: "Community", description: "Senior students mentor new intake students through their first weeks — academic, social, and practical support.", members: 30, meets: "Bi-weekly", icon: Users, openToAll: false },
  { name: "Environmental Action Club", category: "Environment", description: "Sustainability projects, campus greening initiatives, and community environmental education.", members: 22, meets: "Mondays, 4:00 PM", icon: Tree, openToAll: true },
  { name: "Sports & Fitness Club", category: "Sports", description: "Organised sports sessions, fitness training, and inter-institute competition. The largest club on campus.", members: 40, meets: "Daily, 5:30 PM", icon: Trophy, openToAll: true },
];

const categoryStyles: Record<ClubCategory, string> = {
  Technology: "bg-blue-100 text-blue-700",
  Creative:   "bg-purple-100 text-purple-700",
  Sports:     "bg-green-100 text-green-700",
  Environment:"bg-emerald-100 text-emerald-700",
  Community:  "bg-amber-100 text-amber-700",
};

const filters: FilterCategory[] = ["All", "Technology", "Creative", "Sports", "Environment", "Community"];

export default function ClubsGrid() {
  const [active, setActive] = useState<FilterCategory>("All");

  const displayed = active === "All" ? clubs : clubs.filter((c) => c.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div>
        <div className="overflow-x-auto -mx-4 px-4 pb-2 mb-8">
          <div className="flex gap-2 min-w-max">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  active === f
                    ? "bg-primary text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Empty state */}
      {displayed.length === 0 && (
        <div className="text-center py-16 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-sm text-gray-500">No clubs in this category yet. Check back soon.</p>
        </div>
      )}

      {/* Grid */}
      <div key={active} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {displayed.map((club, i) => {
          const Icon = club.icon;
          return (
            <div key={i}>
              <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 flex flex-col h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                {/* Badge */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryStyles[club.category]}`}>
                    {club.category}
                  </span>
                </div>

                {/* Name & desc */}
                <p className="font-heading font-bold text-base text-primary leading-snug mb-2">{club.name}</p>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{club.description}</p>

                {/* Divider + footer */}
                <div className="border-t border-gray-100 mt-4 pt-3 space-y-1">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{club.members} members</span>
                    {!club.openToAll && (
                      <span className="text-amber-600 font-medium">Invite only</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{club.meets}</p>
                </div>

                {/* CTA */}
                {club.openToAll && (
                  <a
                    href="/contact"
                    className="mt-3 text-center text-xs font-semibold text-primary border-2 border-primary/30 rounded-lg py-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                  >
                    Join This Club
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
