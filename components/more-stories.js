import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight text-left">
        Selected Initiatives
      </h2>
      <p className="text-lg block text-slate-500 leading-relaxed mb-12 text-left">
        These projects highlight select initiatives I've led or collectively brought to life. While they represent some of my favorite work, they're just a snapshot of my broader portfolio. These examples demonstrate my approach to value creation and ecosystem building.
      </p>
      <div className="mb-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
