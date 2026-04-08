"use client"
/**
 * Icon re-exports from Phosphor Icons.
 * Keeps existing import paths (`@/components/ui/Icons`) working
 * while using Phosphor under the hood.
 */

import {
  CaretDown,
  CaretLeft,
  CaretRight,
  List,
  X as PhosphorX,
  ArrowRight as PhosphorArrowRight,
  Phone as PhosphorPhone,
  EnvelopeSimple,
  MapPin as PhosphorMapPin,
  Clock as PhosphorClock,
  CalendarBlank,
  BookOpen as PhosphorBookOpen,
  GraduationCap as PhosphorGraduationCap,
  Flask as PhosphorFlask,
  Globe as PhosphorGlobe,
  Medal,
  UsersThree,
  TrendUp,
  FacebookLogo,
  InstagramLogo,
  XLogo,
  YoutubeLogo,
  Quotes,
  ShieldCheck,
  Lightbulb as PhosphorLightbulb,
  Heart as PhosphorHeart,
  Star as PhosphorStar,
  CheckCircle as PhosphorCheckCircle,
  FileText as PhosphorFileText,
  DownloadSimple,
  Briefcase as PhosphorBriefcase,
  Stack,
  Info as PhosphorInfo,
  PencilSimple,
  Camera as PhosphorCamera,
  Play as PhosphorPlay,
  Trophy as PhosphorTrophy,
  Barbell,
  MusicNote,
  Palette as PhosphorPalette,
  Cpu as PhosphorCpu,
  Tree as PhosphorTree,
  Buildings,
  Lightning,
  ChatCircle,
  SignIn,
} from "@phosphor-icons/react";

type IconProps = { size?: number; className?: string };

const wrap = (Icon: React.ComponentType<{ size?: number; className?: string }>) =>
  function WrappedIcon({ size, className }: IconProps) {
    return <Icon size={size} className={className} />;
  };

export const ChevronDown = wrap(CaretDown);
export const ChevronLeft = wrap(CaretLeft);
export const ChevronRight = wrap(CaretRight);
export const Menu = wrap(List);
export const X = wrap(PhosphorX);
export const ArrowRight = wrap(PhosphorArrowRight);
export const Phone = wrap(PhosphorPhone);
export const Mail = wrap(EnvelopeSimple);
export const MapPin = wrap(PhosphorMapPin);
export const Clock = wrap(PhosphorClock);
export const Calendar = wrap(CalendarBlank);
export const BookOpen = wrap(PhosphorBookOpen);
export const GraduationCap = wrap(PhosphorGraduationCap);
export const Flask = wrap(PhosphorFlask);
export const Globe = wrap(PhosphorGlobe);
export const Award = wrap(Medal);
export const Users = wrap(UsersThree);
export const TrendingUp = wrap(TrendUp);
export const Facebook = wrap(FacebookLogo);
export const Instagram = wrap(InstagramLogo);
export const Twitter = wrap(XLogo);
export const Youtube = wrap(YoutubeLogo);
export const QuoteIcon = wrap(Quotes);
export const Shield = wrap(ShieldCheck);
export const Lightbulb = wrap(PhosphorLightbulb);
export const Heart = wrap(PhosphorHeart);
export const Star = wrap(PhosphorStar);
export const CheckCircle = wrap(PhosphorCheckCircle);
export const FileText = wrap(PhosphorFileText);
export const Download = wrap(DownloadSimple);
export const Briefcase = wrap(PhosphorBriefcase);
export const Layers = wrap(Stack);
export const Info = wrap(PhosphorInfo);
export const Pencil = wrap(PencilSimple);
export const Camera = wrap(PhosphorCamera);
export const Play = wrap(PhosphorPlay);
export const Trophy = wrap(PhosphorTrophy);
export const Dumbbell = wrap(Barbell);
export const Music = wrap(MusicNote);
export const Palette = wrap(PhosphorPalette);
export const Cpu = wrap(PhosphorCpu);
export const Tree = wrap(PhosphorTree);
export const Building = wrap(Buildings);
export const Zap = wrap(Lightning);
export const MessageCircle = wrap(ChatCircle);
export const LogIn = wrap(SignIn);
