import Link from "next/link";
import Image from "next/image";
import { departments } from "@/components/academics/departmentsData";
import { ArrowRight, CheckCircle } from "@/components/ui/Icons";

export default function DepartmentList() {
  return (
    <div className="space-y-24 lg:space-y-32">
      {departments.map((dept, i) => {
        const Icon = dept.icon;
        const isEven = i % 2 === 0;

        return (
          <div key={dept.slug} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div className={isEven ? "lg:order-1" : "lg:order-2"}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10">
                  <span className="text-primary"><Icon size={22} /></span>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {dept.duration} · {dept.level}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-primary leading-tight mb-3">
                {dept.name}
              </h3>

              <p className="text-base text-gray-600 leading-relaxed mb-5">
                {dept.descriptor}
              </p>

              {/* Top careers preview */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Career Pathways</p>
                <div className="flex flex-wrap gap-2">
                  {dept.careers.slice(0, 4).map((career) => (
                    <span key={career} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5">
                      <CheckCircle size={12} className="text-primary flex-shrink-0" />
                      {career}
                    </span>
                  ))}
                  {dept.careers.length > 4 && (
                    <span className="text-xs text-gray-400 self-center">+{dept.careers.length - 4} more</span>
                  )}
                </div>
              </div>

              <Link
                href={`/academics/courses/${dept.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors group shadow-sm"
              >
                View Full Details
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Image */}
            <div className={isEven ? "lg:order-2" : "lg:order-1"}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={dept.photos[0]}
                  alt={dept.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
