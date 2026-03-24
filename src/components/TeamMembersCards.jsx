import React from 'react'
const teamMembers = [
  {
    name: "سالم أحمد",
    role: "مصور محترف",
    image: new URL("../assets/imgaes/member1.png", import.meta.url).href,
  },
  {
    name: "محمد علي",
    role: "مصور بورتريه",
    image: new URL("../assets/imgaes/member2.png", import.meta.url).href,
  },
  {
    name: "إبراهيم حسن",
    role: "مصور طبيعة",
    image: new URL("../assets/imgaes/member3.png", import.meta.url).href,
  },
  {
    name: "داود خالد",
    role: "مدرب تصوير",
    image: new URL("../assets/imgaes/member4.png", import.meta.url).href,
  },
  {
    name: "ليث محمود",
    role: "فنان بصري",
    image: new URL("../assets/imgaes/member5.png", import.meta.url).href,
  },
  {
    name: "جمال عبدالله",
    role: "مصور ومراجع تقني",
    image: new URL("../assets/imgaes/member6.png", import.meta.url).href,
  },
  {
    name: "خالد الفيصل",
    role: "مصور فلكي",
    image: new URL("../assets/imgaes/member7.png", import.meta.url).href,
  },
  {
    name: "نادر سعيد",
    role: "مصور شوارع",
    image: new URL("../assets/imgaes/member8.png", import.meta.url).href,
  },
  {
    name: "هاني الشمري",
    role: "مصور طعام",
    image: new URL("../assets/imgaes/member9.png", import.meta.url).href,
  },
  {
    name: "عمر الراشد",
    role: "مصور حياة برية",
    image: new URL("../assets/imgaes/member10.png", import.meta.url).href,
  },
  {
    name: "فارس العلي",
    role: "فنان فوتوغرافي",
    image: new URL("../assets/imgaes/member11.png", import.meta.url).href,
  },
  {
    name: "سامي الحربي",
    role: "خبير تعديل صور",
    image: new URL("../assets/imgaes/member12.png", import.meta.url).href,
  },
  {
    name: "رامي الخطيب",
    role: "مصور ماكرو",
    image: new URL("../assets/imgaes/member13.png", import.meta.url).href,
  },
  {
    name: "باسم المصري",
    role: "مصور فني",
    image: new URL("../assets/imgaes/member14.png", import.meta.url).href,
  },
  {
    name: "منصور الزهراني",
    role: "مصور زفاف",
    image: new URL("../assets/imgaes/member15.png", import.meta.url).href,
  },
  {
    name: "فيصل الدوسري",
    role: "مصور جوي",
    image: new URL("../assets/imgaes/member16.png", import.meta.url).href,
  },
  {
    name: "لؤي الصالح",
    role: "مصور تجاري",
    image: new URL("../assets/imgaes/member17.png", import.meta.url).href,
  },
  {
    name: "طارق النعيمي",
    role: "مصور معماري",
    image: new URL("../assets/imgaes/member18.png", import.meta.url).href,
  },
  {
    name: "أحمد الشهري",
    role: "مصور رياضي",
    image: new URL("../assets/imgaes/member19.png", import.meta.url).href,
  },
  {
    name: "ماجد القحطاني",
    role: "مصور استوديو",
    image: new URL("../assets/imgaes/member20.png", import.meta.url).href,
  },
  {
    name: "ياسر العتيبي",
    role: "مصور رحالة",
    image: new URL("../assets/imgaes/member21.png", import.meta.url).href,
  },
  {
    name: "دحام الحسيني",
    role: "فنان بصري",
    image: new URL("../assets/imgaes/member22.png", import.meta.url).href,
  },
  {
    name: "نايف المطيري",
    role: "مصور مواليد",
    image: new URL("../assets/imgaes/member23.png", import.meta.url).href,
  },
  {
    name: "عبدالله الغامدي",
    role: "مصور عقارات",
    image: new URL("../assets/imgaes/member24.png", import.meta.url).href,
  },
  {
    name: "كريم الفهد",
    role: "خبير تقني",
    image: new URL("../assets/imgaes/member25.png", import.meta.url).href,
  },
  {
    name: "سلطان الراجحي",
    role: "فنان تصوير",
    image: new URL("../assets/imgaes/member26.png", import.meta.url).href,
  },
  {
    name: "فهد السبيعي",
    role: "مراجع معدات",
    image: new URL("../assets/imgaes/member27.png", import.meta.url).href,
  },
  {
    name: "راشد الجاسر",
    role: "فنان بصري",
    image: new URL("../assets/imgaes/member28.png", import.meta.url).href,
  },
];
import {
  FaCheck,
  FaGithub,
  FaLinkedin,

} from "react-icons/fa";
import {FaXTwitter } from "react-icons/fa6";
export default function TeamMembersCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <div
          key={`${member.name}-${index}`}
          className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
        >
          <div className="relative inline-block mb-4">
            <img
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
              src={member.image}
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
              <FaCheck className="w-3 h-3 text-white" />
            </div>
          </div>

          <h3 className="font-bold text-white text-lg">{member.name}</h3>
          <p className="text-orange-500 text-sm font-medium mb-4">{member.role}</p>

          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

