import React from 'react'
import { FaBolt, FaBookOpen, FaBullseye, FaEnvelope, FaHandshake, FaNewspaper, FaPenNib, FaUsers } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';
import TeamMembersCards from '../components/TeamMembersCards';
export default function AboutUs() {
  return (
    <>
    <main className='grow pt-20'>
      <div className="bg-[#0a0a0a]">
         <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
          </div>
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm  text-orange-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse "></span>
              من نحن
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              مهمتنا هي{" "}
              <span className="bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                الإعلام والإلهام
              </span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaUsers className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +2مليون
                </div>
                <div className="text-sm text-neutral-500">قارئ شهرياً</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaNewspaper className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +500
                </div>
                <div className="text-sm text-neutral-500">مقالة منشورة</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaPenNib className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +50
                </div>
                <div className="text-sm text-neutral-500">كاتب خبير</div>
              </div>

              <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                <FaBookOpen className="text-2xl text-orange-500 mb-2 mx-auto block" />
                <div className="text-3xl font-bold bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                  +15
                </div>
                <div className="text-sm text-neutral-500">تصنيف</div>
              </div>
            </div>
          </div>
         </section>
         <section className="py-20 bg-[#111111] border-y border-[#262626]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full"></span>
                قيمنا
                <span className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full"></span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaBullseye className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    الجودة أولاً
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    محتوى مدروس ومكتوب بخبرة
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaBolt className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    تركيز عملي
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أمثلة واقعية يمكنك تطبيقها اليوم
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaHandshake className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    المجتمع
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    تعلم مع آلاف المصورين
                  </p>
                </div>
              </div>

              <div className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <FaArrowsRotate className="text-4xl text-orange-500 mb-4 mx-auto block" />
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    دائماً محدث
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    أحدث الاتجاهات وأفضل الممارسات
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm text-neutral-400">
                فريقنا
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                تعرف على كتابنا
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>

            <TeamMembersCards />
          </div>
        </section>

        <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaEnvelope className="w-5 h-5" />
                تواصل معنا
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
                href="/blog"
              >
                تصفح المقالات
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}
