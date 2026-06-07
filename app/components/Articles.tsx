const posts = [
  {
    tag: "AI in testing",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7458626161338851330?collapsed=1",
    url: "https://www.linkedin.com/posts/vijay-a-inn0v2ta6_artificialintelligence-ai-generativeai-share-7458626161338851330-7QrI/",
  },
  // ADD YOUR NEXT POST HERE:
  // {
  //   tag: "QA leadership",
  //   embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:XXXXXXXXX?collapsed=1",
  //   url: "https://www.linkedin.com/posts/your-post-url",
  // },
];

export default function Articles() {
  return (
    <section id="articles" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Latest from LinkedIn
        </p>
        <p className="text-sm text-gray-400 mb-10">
          Perspectives on QA, AI, and how quality engineering evolves.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden hover:border-[#1D9E75] transition-all"
            >
              <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                <span className="text-xs font-medium text-[#1D9E75] uppercase tracking-wider">
                  {post.tag}
                </span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-[#1D9E75] transition-colors"
                >
                  View on LinkedIn →
                </a>
              </div>
              <div className="px-5 pb-5">
                <iframe
                  src={post.embedUrl}
                  height="500"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={"LinkedIn post " + (index + 1)}
                  className="rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
         <a 
            href="https://www.linkedin.com/in/vijay-a-945aa629"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-gray-200 text-gray-500 px-6 py-2.5 rounded-lg hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors inline-block"
          >
            Follow on LinkedIn for more
          </a>
        </div>

      </div>
    </section>
  );
}