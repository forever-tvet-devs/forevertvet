const programs = [
  { name: "Heavy Machinery Operation & Maintenance", duration: "Short Course", level: "Certificate", fee: "RWF 850,000" },
  { name: "Solar Technology",                        duration: "Short Course", level: "Certificate", fee: "RWF 750,000" },
  { name: "EV Cars",                                 duration: "Short Course", level: "Certificate", fee: "RWF 800,000" },
  { name: "Computer Systems & Architecture",         duration: "3 Years",      level: "Level 3–5",    fee: "RWF 980,000" },
  { name: "Electrical Technology",                   duration: "3 Years",      level: "Level 3–5",    fee: "RWF 920,000" },
  { name: "Land Surveying",                          duration: "3 Years",      level: "Level 3–5",    fee: "RWF 820,000" },
  { name: "Public Works",                            duration: "3 Years",      level: "Level 3–5",    fee: "RWF 800,000" },
];

const headers = ["Program", "Duration", "Level", "Total Fee (RWF)"];

export default function FeesTable() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Desktop table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary text-white text-xs uppercase tracking-wide">
              {headers.map((h) => (
                <th key={h} scope="col" className="py-4 px-4 text-left font-semibold whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {programs.map((p, i) => (
              <tr key={p.name} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-primary/5 transition-colors border-b border-gray-100 last:border-0`}>
                <td className="py-4 px-4 font-medium text-primary border-l-2 border-accent">{p.name}</td>
                <td className="py-4 px-4 text-gray-600">{p.duration}</td>
                <td className="py-4 px-4 text-gray-600">{p.level}</td>
                <td className="py-4 px-4">
                  <span className="font-heading font-bold text-base text-primary">{p.fee}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden divide-y divide-gray-100">
        {programs.map((p) => (
          <div key={p.name} className="p-5 bg-white">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-1 self-stretch rounded-full bg-primary flex-shrink-0" />
              <p className="font-semibold text-primary text-sm leading-snug">{p.name}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { label: "Duration", value: p.duration },
                { label: "Level", value: p.level },
                { label: "Total Fee", value: p.fee },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-gray-400 uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold text-primary mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
