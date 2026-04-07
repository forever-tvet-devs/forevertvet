const stats = [
  { value: "500+",  label: "Graduates Placed" },
  { value: "150+",  label: "Students Enrolled" },
  { value: "5",     label: "Vocational Programs" },
  { value: "2018",  label: "Year Established" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary-dark py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-4 lg:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center lg:px-8 ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <span className="font-heading font-bold text-4xl lg:text-5xl text-accent leading-none">
                {stat.value}
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-white/50 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
