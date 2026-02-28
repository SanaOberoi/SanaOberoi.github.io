import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
    <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter mb-2">
        Hi, I'm Sana Oberoi
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6">
        INSEAD (MBA) | Elevation Capital (SAIF Partners) | UBS | KPMG
      </h2>
      
      <p className="text-lg block text-slate-500 leading-relaxed max-w-3xl mb-8">
        I am a full-stack partner to founders, bridging the gap between capital formation, strategic operations, and venture investing. As the first hire to co-build Elevation Capital's Corporate Development practice, I managed ambiguity to scale systems from zero to one. Whether it's driving a fundraise, fixing unit economics, or building an investment thesis, I help companies navigate the entire lifecycle from early-stage growth to IPO readiness.
      </p>
        <a href="/assets/resume/Resume.pdf"
          className="bg-accent-1 hover:bg-white hover:text-accent-1 border border-accent-1 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-6 inline-block"
        >
          Download Resume
        </a>
      </div>
      <Image title={"lisafeets"} src={"/assets/posts/authors/annie.svg"} height={295} width={293}
      />
    </section>
  )
}
