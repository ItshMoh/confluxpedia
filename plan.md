# Conflux Expert Agent Website - Development Plan

## Bounty Overview

**Bounty #07: Conflux Expert Agent Website (RAG + Tools)**

| Field | Value |
|-------|-------|
| Reward | $1,200 |
| Difficulty | 🟡 Medium |
| Timeline | 3–4 weeks |
| Type | AI Agent, RAG, Full-Stack Web |
| Status | 🧪 Experimental / Non-Production |

**Goal**: Build an MVP public-facing AI assistant that answers Conflux questions using retrieval-augmented generation with citation-backed responses.

**Links**:
- [Bounty Issue](https://github.com/conflux-fans/conflux-bounties/issues/13)
- [Full Specification](https://github.com/conflux-fans/conflux-bounties/blob/main/bounties/07-conflux-expert-agent-website/spec.md)

---

## Requirements Summary

### Core Features Required
1. **Content Pipeline** - CLI script that syncs Markdown/docs; produces cleaned markdown + metadata; updates vector store
2. **RAG Service** - Embedding generation, chunking, metadata tagging, similarity search
3. **Agent Orchestration** - LangChain or similar with ONE tool integration (MCP OR ConfluxScan)
4. **Chat UI** - Streaming responses, message history, citation chips, copy buttons, dark mode
5. **Admin Panel** - Resource ingestion status, manual sync trigger

### Deliverables
1. RAG System with ingestion scripts and vector DB
2. Agent + Tools with ONE tool adapter (MCP OR ConfluxScan)
3. Web App with Chat UI, landing page, admin panel
4. Documentation (README, architecture diagram, deployment guide)
5. Tests (unit tests, 10 benchmark questions)

### Acceptance Criteria
- ✅ Answers cite at least one source per response with URL
- ✅ Agent can call at least one live tool and display results inline
- ✅ Admin can trigger content resync manually
- ✅ Vector store holds ≥2k chunks with working search
- ✅ Application runs locally with clear setup instructions

---

## Current Progress (What We've Built)

### ✅ Phase 1: Content Pipeline
| Task | Status | Details |
|------|--------|---------|
| Extract docs from Conflux repo | ✅ Done | `scripts/extract.js` |
| Clean markdown content | ✅ Done | Removes MDX components, imports |
| Generate metadata | ✅ Done | title, description, URL, section |

**Output**: `data/processed/all_documents.json` (201 documents)

### ✅ Phase 2: RAG Service - Chunking
| Task | Status | Details |
|------|--------|---------|
| Implement text splitter | ✅ Done | LangChain `RecursiveCharacterTextSplitter` |
| Create overlapping chunks | ✅ Done | 1000 chars, 200 overlap |
| Preserve metadata | ✅ Done | Full metadata in each chunk |

**Output**: `data/processed/chunks.json` (1,297 chunks)

### ✅ Phase 3: RAG Service - Embeddings
| Task | Status | Details |
|------|--------|---------|
| Set up Supabase pgvector | ✅ Done | 768 dimensions for Gemini |
| Generate embeddings | ✅ Done | Gemini `text-embedding-004` |
| Upload to vector store | ✅ Done | 1,297 chunks in Supabase |

**Output**: Supabase `documents` table with vectors

### ✅ Phase 4: RAG Service - Search
| Task | Status | Details |
|------|--------|---------|
| Create similarity search | ✅ Done | `match_documents` SQL function |
| Build search CLI | ✅ Done | `scripts/search.js` |
| Test search quality | ✅ Done | 73-80% similarity scores |

**Output**: Working `npm run search "query"` command

---

## Remaining Work

### Phase 5: Backend API
Build Express.js API server for the chat interface.

| Task | Status | Description |
|------|--------|-------------|
| [x] Set up Next.js API routes | Done | Created `web/src/app/api/` |
| [x] Create `/api/chat` endpoint | Done | Streaming SSE responses |
| [x] Create `/api/search` endpoint | Done | Direct vector search |
| [ ] Add conversation memory | Pending | Store chat history per session |
| [ ] Implement rate limiting | Pending | Basic request throttling |

**Tech Stack**: Next.js 16+, API Routes

---

### Phase 6: RAG Chat Agent
Implement the AI agent that retrieves context and generates answers.

| Task | Status | Description |
|------|--------|-------------|
| [ ] Create RAG orchestrator | Pending | Retrieve → Augment → Generate |
| [ ] Add citation generation | Pending | `[1]` style with source URLs |
| [ ] Implement streaming | Pending | Real-time response streaming |
| [ ] Add system prompt | Pending | Conflux expert personality |
| [ ] Handle follow-up questions | Pending | Conversation context |

**Tech Stack**: Gemini `gemini-2.0-flash`, LangChain (optional)

---

### Phase 7: Tool Integration (Choose ONE)

**Option A: ConfluxScan API** (Recommended - simpler)
| Task | Status | Description |
|------|--------|-------------|
| [ ] Create ConfluxScan client | Pending | Wrapper for REST API |
| [ ] Implement account lookup | Pending | Balance, transactions |
| [ ] Implement contract info | Pending | Contract details, ABI |
| [ ] Implement token lookup | Pending | Token info, holders |
| [ ] Add tool selection logic | Pending | Detect when to call API |

**Option B: MCP Server**
| Task | Status | Description |
|------|--------|-------------|
| [ ] Set up MCP connection | Pending | MCP client wrapper |
| [ ] Implement RPC calls | Pending | Gas price, block info |
| [ ] Add tool selection logic | Pending | Detect when to call MCP |

---

### Phase 8: Frontend - Next.js App
Build the user-facing web interface.

| Task | Status | Description |
|------|--------|-------------|
| [ ] Initialize Next.js project | Pending | App Router + Tailwind |
| [ ] Create landing page | Pending | Hero, featured topics |
| [ ] Build chat interface | Pending | Message bubbles, input |
| [ ] Add streaming display | Pending | Typewriter effect |
| [ ] Implement citations UI | Pending | Clickable source chips |
| [ ] Add copy button | Pending | Copy response to clipboard |
| [ ] Implement dark mode | Pending | Toggle theme |
| [ ] Add message history | Pending | Scrollable chat log |
| [ ] Create transcript download | Pending | Export as Markdown |

**Tech Stack**: Next.js 14+, Tailwind CSS, shadcn/ui

---

### Phase 9: Admin Panel
Simple admin interface for content management.

| Task | Status | Description |
|------|--------|-------------|
| [ ] Create admin login | Pending | Basic auth (acceptable per spec) |
| [ ] Build sync dashboard | Pending | Show ingestion status |
| [ ] Add manual sync trigger | Pending | Button to re-run pipeline |
| [ ] Show embedding progress | Pending | Progress bar during sync |
| [ ] Display source list | Pending | Curated sources overview |

---

### Phase 10: Testing & Documentation
Ensure quality and ease of deployment.

| Task | Status | Description |
|------|--------|-------------|
| [ ] Write unit tests | Pending | Ingestion, tool wrapper |
| [ ] Create benchmark suite | Pending | 10 test questions |
| [ ] Create README | Pending | Setup instructions |
| [ ] Draw architecture diagram | Pending | System overview |
| [ ] Write deployment guide | Pending | Vercel deployment |
| [ ] Update .env.example | Pending | All required variables |

---

## Tech Stack Summary

| Component | Technology |
|-----------|------------|
| Frontend | Next.js 14+ (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Express.js (API routes) |
| Vector DB | Supabase pgvector |
| Embeddings | Gemini `text-embedding-004` |
| Chat LLM | Gemini `gemini-2.0-flash` |
| Tool | ConfluxScan API (chosen) |
| Deployment | Vercel |

---

## Environment Variables Required

```env
# Gemini API
GEMINI_API_KEY=

# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_KEY=

# ConfluxScan (for tool integration)
CONFLUXSCAN_API_KEY=

# Conflux RPC (optional)
CONFLUX_RPC_URL=https://evm.confluxrpc.com

# GitHub (for admin sync)
GITHUB_TOKEN=

# App
NEXT_PUBLIC_SITE_NAME=Confluxpedia
```

---

## Project Structure (Target)

```
confluxpedia2/
├── data/
│   ├── raw/              # Source docs (git cloned)
│   └── processed/        # Chunks, embeddings
├── scripts/              # CLI tools ✅
│   ├── extract.js        ✅
│   ├── chunk.js          ✅
│   ├── embed.js          ✅
│   └── search.js         ✅
├── src/
│   ├── server/           # Express API (Phase 5)
│   │   ├── index.js
│   │   ├── routes/
│   │   └── services/
│   └── lib/              # Shared utilities
│       ├── supabase.js
│       ├── gemini.js
│       └── confluxscan.js
├── app/                  # Next.js frontend (Phase 8)
│   ├── page.tsx
│   ├── chat/
│   ├── admin/
│   └── api/
├── supabase/
│   └── schema.sql        ✅
├── tests/                # Test suite (Phase 10)
├── docs/                 # Documentation
├── .env.example          ✅
└── package.json          ✅
```

---

## Next Immediate Step

**Phase 5: Backend API** - Create Express server with `/api/chat` endpoint

This will allow us to:
1. Test the RAG chat flow end-to-end
2. Prepare for frontend integration
3. Add tool calling later

---

## Questions / Clarifications Needed

1. **Tool Choice**: I've suggested ConfluxScan API as it's simpler. Do you prefer MCP server instead?

2. **Authentication**: The spec allows "basic auth" for admin. Is simple username/password acceptable, or do you want OAuth?

3. **Hosting**: Planning for Vercel deployment. Is this your preferred platform?

4. **Design**: Any specific design preferences for the chat UI? (Colors, layout, etc.)

5. **Additional Sources**: Currently we have docs from `general/` and `espace/`. Should we add more sources (GitHub repos, blog posts)?

---

## Timeline Estimate

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1-4 (RAG Core) | 1 week | ✅ Done |
| Phase 5-6 (Backend + Agent) | 3-4 days | 🔄 Next |
| Phase 7 (Tool Integration) | 2 days | Pending |
| Phase 8 (Frontend) | 4-5 days | Pending |
| Phase 9 (Admin) | 2 days | Pending |
| Phase 10 (Testing/Docs) | 2-3 days | Pending |

**Total remaining**: ~2-3 weeks

---

*Last updated: 2026-02-05*
