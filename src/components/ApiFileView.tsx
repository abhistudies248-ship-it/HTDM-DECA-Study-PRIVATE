// ============================================================================
// 1. Imports and Dependencies
// Icons for visual hierarchy, UI controls, and data structures for DECA case scenarios
// ============================================================================
import React, { useState, useEffect } from 'react';
import {
  Code2,
  FileCode,
  Download,
  Copy,
  Check,
  Play,
  Database,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Server,
  Zap,
  Lock,
  Unlock,
  KeyRound,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { DecaCaseStudy } from '../types/deca';
import { INITIAL_CASES } from '../data/cases';

// ============================================================================
// 2. ApiFileView Component Definition
// Main component handling password gate and authenticated inspection of server.ts & docs
// ============================================================================
export const ApiFileView: React.FC = () => {
  // --------------------------------------------------------------------------
  // 3. Security & Authentication State
  // Manages session lock status, user input, verification status, and error alerts
  // --------------------------------------------------------------------------
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return sessionStorage.getItem('deca_api_passcode_authenticated') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState<string>(() => {
    return sessionStorage.getItem('deca_api_password_saved') || '';
  });
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  // --------------------------------------------------------------------------
  // 4. View Tabs & Interactive Query State
  // Controls active navigation tabs ('server', 'schema', 'cases', 'tester') and API outputs
  // --------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState<'server' | 'schema' | 'cases' | 'tester'>('server');
  const [copied, setCopied] = useState(false);
  const [testEndpoint, setTestEndpoint] = useState<'/api/docs' | '/api/cases' | '/api/cases/cr-01' | '/api/file'>('/api/docs');
  const [testOutput, setTestOutput] = useState<string>('Click "Execute Query" to test this endpoint.');
  const [isQuerying, setIsQuerying] = useState(false);

  // --------------------------------------------------------------------------
  // 5. Password Verification Handler
  // Submits the confidential passcode to POST /api/verify-api-password for validation
  // --------------------------------------------------------------------------
  const handleVerifyPassword = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAuthError(null);
    setIsVerifying(true);

    try {
      const res = await fetch('/api/verify-api-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput.trim() }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsUnlocked(true);
        sessionStorage.setItem('deca_api_passcode_authenticated', 'true');
        sessionStorage.setItem('deca_api_password_saved', passwordInput.trim());
      } else {
        setAuthError(data.error || 'Access denied. Incorrect passcode.');
      }
    } catch (err: any) {
      setAuthError('Authentication verification failed: ' + (err?.message || 'Server offline'));
    } finally {
      setIsVerifying(false);
    }
  };

  // --------------------------------------------------------------------------
  // 6. Security Relock Handler
  // Clears session storage and resets all credentials to lock the API and docs interface
  // --------------------------------------------------------------------------
  const handleLock = () => {
    setIsUnlocked(false);
    sessionStorage.removeItem('deca_api_passcode_authenticated');
    sessionStorage.removeItem('deca_api_password_saved');
    setPasswordInput('');
    setAuthError(null);
  };

  // --------------------------------------------------------------------------
  // 7. Clipboard Copy Utility
  // Copies code or JSON payloads to clipboard with timed visual confirmation
  // --------------------------------------------------------------------------
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // --------------------------------------------------------------------------
  // 8. File Export Utility
  // Creates an ephemeral blob URL to trigger browser downloads for JSON and source files
  // --------------------------------------------------------------------------
  const handleDownload = (filename: string, content: string, type = 'application/json') => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // --------------------------------------------------------------------------
  // 9. Authenticated API Query Executor
  // Sends live requests to backend routes with authentication credentials attached
  // --------------------------------------------------------------------------
  const runApiTest = async (endpoint: string) => {
    setIsQuerying(true);
    try {
      const savedPass = sessionStorage.getItem('deca_api_password_saved') || passwordInput;
      const sep = endpoint.includes('?') ? '&' : '?';
      const url = `${endpoint}${sep}password=${encodeURIComponent(savedPass)}`;

      const res = await fetch(url, {
        headers: {
          'x-api-password': savedPass,
        },
      });

      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await res.json();
        setTestOutput(JSON.stringify(data, null, 2));
      } else {
        const text = await res.text();
        setTestOutput(text.slice(0, 3000) + (text.length > 3000 ? '\n\n...[truncated remainder of file]' : ''));
      }
    } catch (err: any) {
      setTestOutput(JSON.stringify({ error: err?.message || 'Query failed' }, null, 2));
    } finally {
      setIsQuerying(false);
    }
  };

  // --------------------------------------------------------------------------
  // 10. Authenticated Resource URLs
  // Generates secured download and viewing links using the session passcode token
  // --------------------------------------------------------------------------
  const savedPass = sessionStorage.getItem('deca_api_password_saved') || passwordInput;
  const downloadUrl = `/api/file?download=true&password=${encodeURIComponent(savedPass)}`;
  const viewRawUrl = `/api/file?password=${encodeURIComponent(savedPass)}`;

  // --------------------------------------------------------------------------
  // 11. Official OpenAPI & DECA Rubric Schema
  // Defines specification documentation for DECA Hospitality Services roleplay endpoints
  // --------------------------------------------------------------------------
  const apiDocsJson = {
    title: 'DECA Hospitality Services Team Decision Making (HTDM) AI Evaluation API',
    version: '2.0.0',
    specification: 'RESTful JSON / Gemini Multimodal',
    accessControl: 'Confidential · Restricted to Authorized Evaluators and Staff',
    decaRules: {
      event: 'Hospitality Services Team Decision Making (HTDM)',
      teamStructure: 'Strictly TWO (2) PARTICIPANTS presenting as an executive hotel leadership team',
      judgeRole: 'Single industry judge evaluated by Google Gemini (gemini-flash-latest / gemini-3.8-flash)',
      prepDuration: '30:00 minutes team preparation with scratchpad',
      presentationDuration: '15:00 minutes executive presentation & roleplay',
      performanceIndicators: 5,
      scoringWeights: '70% Performance Indicators, 20% 21st Century Skills & Team Dynamic, 10% Overall Impression',
      floorHandoffs: 'Both participants speak freely with live open microphones (no forced floor handoff clicks)',
    },
    endpoints: [
      {
        path: '/api/file',
        method: 'GET',
        description: 'Direct download or inspection of server.ts source code (Protected endpoint)',
        auth: 'Authorization Passcode Required',
      },
      {
        path: '/api/docs',
        method: 'GET',
        description: 'Returns this complete API specification (Protected endpoint)',
        auth: 'Authorization Passcode Required',
      },
      {
        path: '/api/evaluate-roleplay',
        method: 'POST',
        description: 'Comprehensive evaluation of two-person roleplay presentation with multimodal video analysis',
        headers: { 'Content-Type': 'application/json' },
        body: {
          scenario: 'DecaCaseStudy',
          transcript: 'string (speech transcript or summary of presentation)',
          prepNotes: 'string (scratchpad notes from 30m team prep)',
          mediaBase64: 'string (optional base64 video/audio for visual poise grading)',
          videoMimeType: 'video/webm or video/mp4',
          answersToQuestions: 'string (answers to 2 judge questions)',
        },
      },
      {
        path: '/api/realtime-hint',
        method: 'POST',
        description: 'Generates live in-presentation observations and hospitality coaching hints',
      },
      {
        path: '/api/judge-interaction',
        method: 'POST',
        description: 'Generates conversational judge responses to competitor statements in real time',
      },
      {
        path: '/api/cases',
        method: 'GET',
        description: 'Returns all official DECA HTDM scenarios across all 21 instructional areas',
      },
      {
        path: '/api/cases/:id',
        method: 'GET',
        description: 'Returns a specific case study by ID',
      },
    ],
  };

  // --------------------------------------------------------------------------
  // 12. Server Architecture Code Snippet
  // Display snippet of server.ts demonstrating Express, WebSockets, and Gemini API setup
  // --------------------------------------------------------------------------
  const serverTsSnippet = `/**
 * Official DECA HTDM AI Backend API & Real-Time Server
 * Event: Hospitality Services Team Decision Making (HTDM)
 * Rules: Two (2) Participants + One (1) Judge (Google Gemini AI)
 * Security: Protected with Passcode Authentication
 */
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import http from 'http';
import fs from 'fs';
import { WebSocketServer, WebSocket } from 'ws';
import { GoogleGenAI } from '@google/genai';
import { INITIAL_CASES } from './src/data/cases.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

app.use(express.json({ limit: '100mb' }));

const API_PASSWORD = process.env.API_PASSWORD || '[CONFIGURED_SECRET]';

// Password verification middleware for /api/file and /api/docs
function verifyApiAuth(req: express.Request): boolean {
  const queryPass = req.query.password || req.query.key || req.query.auth;
  const headerPass = req.headers['x-api-password'];
  const authHeader = req.headers['authorization'];
  let bearerPass = '';
  if (typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
    bearerPass = authHeader.substring(7).trim();
  }
  return (queryPass || headerPass || bearerPass) === API_PASSWORD;
}

// GET /api/file - Download the actual server.ts file (Password Protected)
app.get(['/api/file', '/api/server-file', '/api/server.ts'], (req, res) => {
  if (!verifyApiAuth(req)) {
    return res.status(401).json({
      error: 'Password required to access DECA API File & Server Source',
      requiresPassword: true,
      hint: 'Valid authorization passcode required.'
    });
  }
  const serverPath = path.join(__dirname, 'server.ts');
  if (req.query.download === 'true') {
    res.setHeader('Content-Disposition', 'attachment; filename="server.ts"');
    res.setHeader('Content-Type', 'text/typescript');
  } else {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  }
  res.send(fs.readFileSync(serverPath, 'utf8'));
});

// GET /api/docs - API Documentation Schema (Password Protected)
app.get('/api/docs', (req, res) => {
  if (!verifyApiAuth(req)) {
    return res.status(401).json({
      error: 'Password required to access DECA API Documentation',
      requiresPassword: true,
      hint: 'Valid authorization passcode required.'
    });
  }
  res.json({ title: 'DECA HTDM AI API', version: '2.0.0', ... });
});

// Real-Time Room WebSocket Server (Two participants + Live Mics - No floor handoffs)
wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    const data = JSON.parse(msg.toString());
    if (data.type === 'join') {
      // Connects Partner 1 and Partner 2 in the same room
    } else if (data.type === 'webrtc_signal') {
      // Exchanges peer-to-peer audio/video tracks between teammates
    } else if (data.type === 'sync_action') {
      // Synchronizes scratchpads, PIs, timer, and transcripts in real time
    }
  });
});

// POST /api/evaluate-roleplay - Evaluates 2 participants with Gemini AI
app.post('/api/evaluate-roleplay', async (req, res) => {
  const { scenario, transcript, prepNotes, mediaBase64, videoMimeType } = req.body;
  const response = await ai.models.generateContent({
    model: 'gemini-flash-latest',
    contents: {
      parts: [
        ...(mediaBase64 ? [{ inlineData: { mimeType: videoMimeType, data: mediaBase64 } }] : []),
        { text: \`Evaluate DECA HTDM team roleplay. Grade 5 PIs and team dynamic.\` }
      ]
    },
    config: { responseMimeType: 'application/json' }
  });
  res.json(JSON.parse(response.text));
});`;

  // --------------------------------------------------------------------------
  // 13. Security Gate Render (Locked State)
  // Renders confidential login card when the user is unauthenticated
  // --------------------------------------------------------------------------
  if (!isUnlocked) {
    return (
      <div className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col items-center justify-center min-h-[85vh]">
        <div className="w-full max-w-md bg-[#111827] border border-amber-500/40 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md">
          {/* Ambient lighting glows */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Security Gate Header */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-950/50">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2">
                <h2 className="text-xl font-extrabold text-white tracking-tight">
                  Restricted Access
                </h2>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-950 border border-amber-500/50 text-amber-400">
                  Protected
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Enter your authorized passcode to inspect the <code className="text-blue-400 font-mono">server.ts</code> source file and backend documentation.
              </p>
            </div>
          </div>

          {/* Passcode Input Form */}
          <form onSubmit={handleVerifyPassword} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                <span>Authorization Passcode</span>
                <span className="text-[10px] text-amber-400 font-mono">Confidential</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (authError) setAuthError(null);
                  }}
                  placeholder="Enter access passcode..."
                  className="w-full bg-[#070b14] border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-mono outline-none transition-all pr-10"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-red-300 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isVerifying || !passwordInput.trim()}
              className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-950/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isVerifying ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                  <span>Verifying Passcode...</span>
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Unlock API File & Docs</span>
                </>
              )}
            </button>
          </form>

          {/* Privacy & Confidentiality Notice (No password leakage) */}
          <div className="pt-2 border-t border-slate-800 text-center space-y-1.5">
            <p className="text-[11px] text-slate-400 font-medium">
              Confidential Administrative Portal
            </p>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Protects proprietary DECA tournament rubrics, WebSocket signaling routes, and Google Gemini API server configurations.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // 14. Authenticated Interface Render (Unlocked State)
  // Renders complete system architecture explorer, documentation, and query console
  // --------------------------------------------------------------------------
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
      {/* Top Banner & Security Status */}
      <div className="bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#111827] border border-emerald-500/40 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-md">
              <Unlock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  API File & System Architecture
                </h1>
                <span className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Unlocked</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Full authenticated access to <code className="text-emerald-300 font-mono">server.ts</code>, WebSocket signaling server, and official DECA HTDM evaluation endpoints.
              </p>
            </div>
          </div>

          {/* Quick Header Actions: Download, Raw View, and Re-lock */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={downloadUrl}
              download="server.ts"
              className="flex items-center space-x-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-900/40"
              title="Download server.ts file directly"
            >
              <Download className="w-4 h-4" />
              <span>Download server.ts</span>
            </a>

            <a
              href={viewRawUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold rounded-xl transition-all"
              title="View raw plain text server file in browser"
            >
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>Raw File</span>
            </a>

            <button
              onClick={handleLock}
              className="flex items-center space-x-1.5 px-3 py-2 bg-red-950/60 hover:bg-red-900 text-red-300 border border-red-500/40 text-xs font-semibold rounded-xl transition-all cursor-pointer"
              title="Lock API & Docs with password"
            >
              <Lock className="w-4 h-4" />
              <span>Lock API</span>
            </button>
          </div>
        </div>

        {/* System Metric Pills */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-[#070b14]/70 p-2.5 rounded-xl border border-slate-800/80">
            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Server Entrypoint</div>
            <div className="text-white font-mono font-semibold text-xs mt-0.5">/server.ts</div>
          </div>
          <div className="bg-[#070b14]/70 p-2.5 rounded-xl border border-slate-800/80">
            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">WebSocket Signaling</div>
            <div className="text-blue-400 font-mono font-semibold text-xs mt-0.5">ws://localhost:3000/ws</div>
          </div>
          <div className="bg-[#070b14]/70 p-2.5 rounded-xl border border-slate-800/80">
            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">AI Evaluation Model</div>
            <div className="text-purple-400 font-mono font-semibold text-xs mt-0.5">gemini-flash-latest</div>
          </div>
          <div className="bg-[#070b14]/70 p-2.5 rounded-xl border border-slate-800/80">
            <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">DECA Case Bank</div>
            <div className="text-amber-400 font-mono font-semibold text-xs mt-0.5">210 Scenarios (10 / Area)</div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------
          15. Tab Bar Navigation
          Switches between Server Source Code, Schema Docs, Case Bank, and Tester
      ---------------------------------------------------------------------- */}
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-px overflow-x-auto">
        <button
          onClick={() => setActiveTab('server')}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all flex items-center space-x-2 cursor-pointer ${
            activeTab === 'server'
              ? 'bg-[#111827] text-blue-400 border-t-2 border-blue-500 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>API File (server.ts)</span>
        </button>
        <button
          onClick={() => setActiveTab('schema')}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all flex items-center space-x-2 cursor-pointer ${
            activeTab === 'schema'
              ? 'bg-[#111827] text-blue-400 border-t-2 border-blue-500 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>API Schema & Docs (/api/docs)</span>
        </button>
        <button
          onClick={() => setActiveTab('cases')}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all flex items-center space-x-2 cursor-pointer ${
            activeTab === 'cases'
              ? 'bg-[#111827] text-blue-400 border-t-2 border-blue-500 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Case Bank API (/api/cases)</span>
        </button>
        <button
          onClick={() => setActiveTab('tester')}
          className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all flex items-center space-x-2 cursor-pointer ${
            activeTab === 'tester'
              ? 'bg-[#111827] text-blue-400 border-t-2 border-blue-500 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Live API Test Console</span>
        </button>
      </div>

      {/* ----------------------------------------------------------------------
          16. Tab 1: Server Implementation (server.ts)
          Renders full backend file content with one-click copy and download
      ---------------------------------------------------------------------- */}
      {activeTab === 'server' && (
        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white">server.ts · Backend Express & WebSocket Implementation</h3>
              <p className="text-xs text-slate-400">
                Server-side proxy routes handling Google Gemini SDK calls, WebSockets, WebRTC signaling, and DECA rubric grading.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href={downloadUrl}
                download="server.ts"
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .ts</span>
              </a>
              <button
                onClick={() => handleCopy(serverTsSnippet)}
                className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
          </div>

          <pre className="p-5 bg-[#070b14] border border-slate-800/80 rounded-2xl text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[550px]">
            {serverTsSnippet}
          </pre>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          17. Tab 2: OpenAPI & DECA Rubric Schema
          Displays structured JSON endpoint definitions for team evaluation & judge prompts
      ---------------------------------------------------------------------- */}
      {activeTab === 'schema' && (
        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">DECA HTDM API Specification (JSON Schema)</h3>
              <p className="text-xs text-slate-400">
                Live endpoint specification returned by <code className="text-blue-400 font-mono">GET /api/docs</code>.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDownload('deca-api-spec.json', JSON.stringify(apiDocsJson, null, 2))}
                className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export JSON</span>
              </button>
              <button
                onClick={() => handleCopy(JSON.stringify(apiDocsJson, null, 2))}
                className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
              </button>
            </div>
          </div>

          <pre className="p-5 bg-[#070b14] border border-slate-800/80 rounded-2xl text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed max-h-[550px]">
            {JSON.stringify(apiDocsJson, null, 2)}
          </pre>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          18. Tab 3: Case Bank Dataset Explorer
          Provides sample JSON of scenarios categorized across all 21 instructional areas
      ---------------------------------------------------------------------- */}
      {activeTab === 'cases' && (
        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Full DECA Case Repository (210 Scenarios across 21 Areas)</h3>
              <p className="text-xs text-slate-400">
                Queried via <code className="text-blue-400">GET /api/cases</code> or filtered with <code className="text-blue-400">GET /api/cases?area=Operations</code>.
              </p>
            </div>
            <button
              onClick={() => handleCopy(JSON.stringify(INITIAL_CASES, null, 2))}
              className="flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Dataset'}</span>
            </button>
          </div>

          <pre className="p-5 bg-[#070b14] border border-slate-800/80 rounded-2xl text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[550px]">
            {JSON.stringify(INITIAL_CASES.slice(0, 3), null, 2)}
            {'\n// ... comprehensive authentic DECA HTDM scenarios across all 21 instructional areas'}
          </pre>
        </div>
      )}

      {/* ----------------------------------------------------------------------
          19. Tab 4: Interactive API Testing Console
          Allows authorized administrators to test live endpoints directly from the browser
      ---------------------------------------------------------------------- */}
      {activeTab === 'tester' && (
        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
          <div>
            <h3 className="text-base font-bold text-white">Interactive API Query Console (Authenticated)</h3>
            <p className="text-xs text-slate-400">
              Execute live GET requests against the server with the authenticated passcode automatically attached.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={testEndpoint}
              onChange={(e) => setTestEndpoint(e.target.value as any)}
              className="px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-mono text-white focus:outline-none focus:border-blue-500"
            >
              <option value="/api/docs">GET /api/docs (Protected API Schema)</option>
              <option value="/api/file">GET /api/file (Protected server.ts Source)</option>
              <option value="/api/cases">GET /api/cases (All 21 Instructional Areas)</option>
              <option value="/api/cases/cr-01">GET /api/cases/cr-01 (Single Scenario)</option>
            </select>

            <button
              onClick={() => runApiTest(testEndpoint)}
              disabled={isQuerying}
              className="flex items-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/30 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              <span>{isQuerying ? 'Executing...' : 'Execute Request'}</span>
            </button>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Response Payload ({testEndpoint})
            </div>
            <pre className="p-5 bg-[#070b14] border border-slate-800 rounded-2xl text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed max-h-[450px]">
              {testOutput}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
