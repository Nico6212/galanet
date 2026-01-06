export default function Categories() {
  const links = [
    "Vaisseau & Engine",
    "Armurerie",
    "Apparence",
    "Ferraille & Droïde",
    "Ravitaillement & Medic-pack",
    "Cyber-matériel & Cryptage",
    "Relicques - Trésors interdits",
    "Kit de survie & Exploration",
  ];

  return (
    <div className="w-full bg-gray-900 text-gray-100 py-3 shadow-inner">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 px-4">
        {links.map((label) => (
          <a
            key={label}
            href="#"
            className="text-center text-xs md:text-sm font-light hover:text-bleue-400 transition"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
