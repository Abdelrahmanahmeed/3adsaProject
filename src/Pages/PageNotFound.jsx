import { Link } from "react-router-dom";
import { FaArrowLeft, FaCompass, FaHome, FaNewspaper } from "react-icons/fa";

export default function PageNotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.45)_1px,transparent_1px)] bg-size-[60px_60px]" />
        <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-right">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
                <FaCompass />
                الصفحة غير موجودة
              </span>

              <h1 className="mb-5 text-6xl font-black leading-none text-white md:text-7xl">
                404
              </h1>

              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                يبدو أنك وصلت إلى رابط غير صحيح
              </h2>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
                الصفحة التي تبحث عنها قد تكون نُقلت، حُذفت، أو أن الرابط مكتوب
                بشكل غير دقيق. يمكنك الرجوع للصفحة الرئيسية أو تصفح المقالات من
                جديد.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <FaHome />
                  الرجوع للرئيسية
                </Link>

                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#262626] bg-[#161616] px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-orange-500/40 hover:text-orange-400"
                >
                  <FaNewspaper />
                  تصفح المقالات
                </Link>
              </div>
            </div>

            <div className="rounded-4xl border border-[#262626] bg-[#111111]/80 p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Error Code</p>
                  <p className="text-2xl font-bold text-white">NOT_FOUND</p>
                </div>
                <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-3 text-2xl font-black text-orange-400">
                  404
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-[#262626] bg-[#0a0a0a] p-5">
                  <p className="mb-2 text-sm text-neutral-500">اقتراح سريع</p>
                  <p className="text-white">
                    تأكد من كتابة الرابط بشكل صحيح أو ارجع للأقسام الرئيسية.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#262626] bg-[#0a0a0a] p-5">
                  <p className="mb-2 text-sm text-neutral-500">أماكن مفيدة</p>
                  <div className="space-y-3">
                    <Link
                      to="/"
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-white transition-colors hover:bg-[#161616]"
                    >
                      <span>الصفحة الرئيسية</span>
                      <FaArrowLeft />
                    </Link>
                    <Link
                      to="/blog"
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-white transition-colors hover:bg-[#161616]"
                    >
                      <span>المدونة</span>
                      <FaArrowLeft />
                    </Link>
                    <Link
                      to="/about"
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-white transition-colors hover:bg-[#161616]"
                    >
                      <span>من نحن</span>
                      <FaArrowLeft />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
