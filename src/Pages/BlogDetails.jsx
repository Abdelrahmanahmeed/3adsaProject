
import { useParams, Link } from "react-router-dom";
import DataPosts from "../data/posts.json";
import {
  FaChevronLeft,
  FaHome,
  FaCalendar,
  FaClock,
  FaTags,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaList,
  FaEnvelope,
  FaCamera,
  FaArrowLeft,
} from "react-icons/fa";
import { FaImages, FaShareNodes, FaXTwitter } from "react-icons/fa6";

export default function BlogDetails()  {
  const { slug } = useParams();
  const article = DataPosts.posts.find((post) => post.slug === slug);
  const randomPosts = [...DataPosts.posts]
    .sort(() => Math.random() - 0.5)
    .filter((post) => post.slug !== slug)
    .slice(0, 3);
  const toc =
    article && typeof article.content === "string"
      ? article.content
          .split("\n")
          .filter((line) => line.startsWith("## "))
          .map((line, index) => ({
            id: `section-${index}`,
            text: line.replace("## ", "").trim(),
          }))
      : [];

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-white text-xl">المقال غير موجود.</p>
      </div>
    );
  }

  const renderContent = () => {
    if (!article.content) return null;

    let sectionIndex = 0;
    return article.content.split("\n").map((line, idx) => {
      line = line.trim();
      if (line.startsWith("## ")) {
        const heading = line.replace("## ", "");
        const headingId = `section-${sectionIndex}`;
        sectionIndex++;
        return (
          <h2
            key={idx}
            id={headingId}
            className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
          >
            <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <FaCamera className="text-orange-500" />
            </span>
            {heading}
          </h2>
        );
      } else if (line.length === 0) {
        return null;
      } else {
        return (
          <p
            key={idx}
            className="text-neutral-300 leading-relaxed mb-6 text-lg"
          >
            {line}
          </p>
        );
      }
    });
  };

  return (
    <main className="grow pt-20">
      <article className="min-h-screen bg-[#0a0a0a]">
        <div className="relative h-[60vh] min-h-105 overflow-hidden md:min-h-125">
          <img
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
            src={article.image}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent"></div>

          <div className="absolute left-4 right-4 top-6 md:left-auto md:right-8 md:top-8">
            <nav className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md">
              <span className="flex items-center gap-2">
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <FaHome />
                </Link>
                <FaChevronLeft className="text-white/30 text-xs" />
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  المدونة
                </Link>
                <FaChevronLeft className="text-white/30 text-xs" />
                <span className="max-w-35 truncate font-medium text-orange-400 md:max-w-50">
                  {article.category}
                </span>
              </span>
            </nav>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Link
                  to={`/blog?category=${article.category}`}
                  className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                >
                  {article.category}
                </Link>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <FaCalendar />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <h1 className="mb-6 max-w-4xl text-right text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {article.title}
              </h1>

              <div className="flex w-full max-w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <img
                  alt={article.author.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  src={article.author.avatar}
                />
                <div>
                  <p className="font-bold text-white">{article.author.name}</p>
                  <p className="text-sm text-white/60">{article.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div className="order-2 lg:order-1">
              <div className="p-6 bg-linear-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic text-right">
                  "{article.excerpt}"
                </p>
              </div>

              <div className="prose-custom text-right">{renderContent()}</div>

              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <FaTags className=" text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <FaShareNodes className="text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-[#1da1f2] hover:text-white">
                      <FaXTwitter />
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-[#0077b5] hover:text-white">
                      <FaLinkedin />
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-[#25d366] hover:text-white">
                      <FaWhatsapp />
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 transition-all duration-300 hover:border-transparent hover:bg-orange-500 hover:text-white">
                      <FaLink />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-8 bg-linear-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    alt={article.author.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    src={article.author.avatar}
                  />
                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {article.author.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3">
                      {article.author.role}
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                {toc.length > 0 && (
                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <FaList className="text-orange-500" />
                      </div>
                      <h3 className="font-bold text-white">محتويات المقال</h3>
                    </div>
                    <nav className="space-y-2">
                      {toc.map((heading, idx) => (
                        <a
                          key={idx}
                          href={`#${heading.id}`}
                      className="group flex items-center gap-3 rounded-xl p-3 text-neutral-400 transition-all duration-300 hover:bg-orange-500/5 hover:text-orange-500"
                        >
                          <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                            {idx + 1}
                          </span>
                          <span className="text-sm">{heading.text}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FaClock className="text-orange-500 text-xl mb-2 mx-auto" />
                      <p className="text-white font-bold">{article.readTime}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FaCalendar className="text-orange-500 text-xl mb-2 mx-auto" />
                      <p className="text-white font-bold text-sm">
                        {article.date}
                      </p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-linear-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FaEnvelope className="text-orange-500 text-xl" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>
                    <Link
                      to="/blog"
                      className="block w-full rounded-xl bg-orange-500 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600"
                    >
                      تصفح المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-20 pt-12 border-t border-[#262626]">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                  <FaImages className="text-orange-500 text-xl" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-neutral-500 text-sm">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>
              <Link
                className="group hidden items-center gap-2 text-orange-500 transition-colors hover:text-orange-400 sm:flex"
                to="/blog"
              >
                عرض الكل
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {randomPosts.map((post) => (
                <Link
                  key={post.id}
                  className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30"
                  to={`/blog/${post.slug}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={post.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent"></div>
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full"
                          src={post.author.avatar}
                        />
                        {post.author.name}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

