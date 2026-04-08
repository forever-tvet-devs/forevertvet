import {
  House,
  GraduationCap,
  Newspaper,
  Image as ImageIcon,
  GearSix,
  BookOpen,
  FileText,
  Megaphone,
  Buildings,
  Handshake,
  UsersThree,
  Info,
  Trophy,
  CalendarDots,
  EnvelopeSimple,
  FolderOpen,
  SoccerBall,
} from "@phosphor-icons/react/dist/ssr";

import type React from "react";
type PhosphorIcon = React.ComponentType<{ size?: number; className?: string }>;

export interface AdminNavItem {
  title: string;
  href: string;
  icon?: PhosphorIcon;
  children?: { title: string; href: string }[];
}

export interface AdminNavGroup {
  label: string;
  items: AdminNavItem[];
}

export const adminNavGroups: AdminNavGroup[] = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", href: "/portal", icon: House },
    ],
  },
  {
    label: "Website",
    items: [
      {
        title: "About",
        href: "/portal/about",
        icon: Info,
        children: [
          { title: "Our Story", href: "/portal/about/our-story" },
          { title: "Vision & Mission", href: "/portal/about/vision-mission" },
          { title: "Headmaster", href: "/portal/about/headmaster" },
          { title: "Leadership", href: "/portal/about/leadership" },
          { title: "Accreditations", href: "/portal/about/accreditations" },
          { title: "Partners", href: "/portal/about/partners" },
        ],
      },
      {
        title: "Academics",
        href: "/portal/academics",
        icon: GraduationCap,
        children: [
          { title: "Curriculum", href: "/portal/academics/curriculum" },
          { title: "Departments", href: "/portal/academics/departments" },
          { title: "Calendar", href: "/portal/academics/calendar" },
          { title: "Results", href: "/portal/academics/results" },
        ],
      },
      {
        title: "Admissions",
        href: "/portal/admissions",
        icon: BookOpen,
        children: [
          { title: "Applications", href: "/portal/admissions/applications" },
          { title: "Requirements", href: "/portal/admissions/requirements" },
          { title: "Fees Structure", href: "/portal/admissions/fees" },
          { title: "FAQs", href: "/portal/admissions/faqs" },
        ],
      },
      {
        title: "School Life",
        href: "/portal/school-life",
        icon: Buildings,
        children: [
          { title: "Gallery", href: "/portal/school-life/gallery" },
          { title: "Facilities", href: "/portal/school-life/facilities" },
          { title: "Clubs", href: "/portal/school-life/clubs" },
          { title: "Sports", href: "/portal/school-life/sports" },
        ],
      },
      {
        title: "Publications",
        href: "/portal/publications",
        icon: Newspaper,
        children: [
          { title: "News", href: "/portal/publications/news" },
          { title: "Announcements", href: "/portal/publications/announcements" },
          { title: "Events", href: "/portal/publications/events" },
          { title: "Resources", href: "/portal/publications/resources" },
          { title: "Job Offers", href: "/portal/publications/jobs" },
        ],
      },
      {
        title: "Contact",
        href: "/portal/contact",
        icon: EnvelopeSimple,
        children: [
          { title: "Messages", href: "/portal/contact/messages" },
          { title: "Info & Details", href: "/portal/contact/info" },
        ],
      },
    ],
  },
  {
    label: "Media",
    items: [
      { title: "Media Library", href: "/portal/media", icon: ImageIcon },
    ],
  },
  {
    label: "People",
    items: [
      { title: "Staff & Faculty", href: "/portal/staff", icon: UsersThree },
      { title: "Partners", href: "/portal/partners", icon: Handshake },
    ],
  },
  {
    label: "System",
    items: [
      {
        title: "Settings",
        href: "/portal/settings",
        icon: GearSix,
        children: [
          { title: "General", href: "/portal/settings" },
          { title: "Users", href: "/portal/settings/users" },
        ],
      },
    ],
  },
];
