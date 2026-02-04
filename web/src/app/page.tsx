import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <nav className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-semibold">Confluxpedia</span>
          </div>
          <Link
            href="/chat"
            className="px-5 py-2.5 bg-violet-600 rounded-lg font-medium hover:bg-violet-500 transition"
          >
            Open Chat
          </Link>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-8">
            AI-Powered Documentation Assistant
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            Your Conflux Expert Agent
          </h1>

          <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Ask questions about Conflux Network, eSpace, Core Space, smart contracts,
            and more. Get accurate answers with citations from official documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-violet-500/25"
            >
              Start Chatting →
            </Link>
            <a
              href="https://doc.confluxnetwork.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-800 border border-zinc-700 rounded-xl font-semibold text-lg hover:bg-zinc-700 transition"
            >
              View Docs
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-32">
          {[
            {
              title: 'RAG-Powered',
              description: 'Answers grounded in official Conflux documentation with source citations.',
              icon: '📚'
            },
            {
              title: 'Real-time Streaming',
              description: 'Get instant responses with live streaming AI generation.',
              icon: '⚡'
            },
            {
              title: 'Always Current',
              description: 'Documentation synced from official Conflux sources.',
              icon: '🔄'
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Example Questions */}
        <div className="mt-32 text-center">
          <h2 className="text-2xl font-semibold mb-8">Try asking about...</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'How do I run a Conflux node?',
              'What is the difference between eSpace and Core Space?',
              'How to deploy a smart contract?',
              'What is the CFX token used for?',
              'Explain Conflux consensus mechanism'
            ].map((q, i) => (
              <Link
                key={i}
                href={`/chat?q=${encodeURIComponent(q)}`}
                className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-sm hover:bg-zinc-700 transition"
              >
                {q}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>Built for the Conflux Bounty Program • Powered by Gemini AI</p>
        </div>
      </footer>
    </div>
  );
}
