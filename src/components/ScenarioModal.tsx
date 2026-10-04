// ============================================================================
// 1. ScenarioModal Component Definition
// Launch modal allowing competitors to start a live rehearsal room or upload a recorded video
// ============================================================================
import React, { useState } from 'react';
import { Radio, Shield, Upload, X, ArrowRight, Video, Clock, CheckCircle2 } from 'lucide-react';
import { DecaCaseStudy } from '../types/deca';

// ============================================================================
// 2. Component Props Interface
// Receives selected scenario metadata, active tab state, and launch callbacks
// ============================================================================
interface ScenarioModalProps {
  isOpen: boolean;
  selectedCase: DecaCaseStudy;
  initialTab?: 'create' | 'upload';
  onClose: () => void;
  onStartRoom: (caseStudy: DecaCaseStudy) => void;
  onUploadVideo: (caseStudy: DecaCaseStudy, file: File) => void;
}

// ============================================================================
// 3. ScenarioModal Functional Component
// Previews scenario roles, performance indicators, and supports drag-and-drop file upload
// ============================================================================
export const ScenarioModal: React.FC<ScenarioModalProps> = ({
  isOpen,
  selectedCase,
  initialTab = 'create',
  onClose,
  onStartRoom,
  onUploadVideo,
}) => {
  // --------------------------------------------------------------------------
  // 4. Modal Tab and File Upload State
  // Manages active segmented control tab ('create' or 'upload'), selected file, and drag feedback
  // --------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState<'create' | 'upload'>(initialTab);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Synchronize tab when initialTab prop updates on modal opening
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  // --------------------------------------------------------------------------
  // 5. File Selection and Drag-and-Drop Event Handlers
  // Validates video or audio MIME types for multimodal evaluation
  // --------------------------------------------------------------------------
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/') || file.type.startsWith('audio/')) {
        setSelectedFile(file);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150 select-none">
      <div className="bg-[#111827] rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row border border-slate-800 min-h-[520px]">
        {/* --------------------------------------------------------------------
            6. Left Branding Column
            Reinforces official DECA HTDM team rules: 2 participants, 30m prep, 15m presentation
        -------------------------------------------------------------------- */}
        <div className="bg-gradient-to-br from-[#0c111d] to-[#1e1b4b]/60 text-white p-8 md:w-5/12 flex flex-col justify-between shrink-0 border-r border-slate-800">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Radio className="w-3.5 h-3.5" />
              <span>Private Rehearsal</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight">
                Two seats.
                <br />
                One focused
                <br />
                rep.
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed font-normal">
                Practice the executive hospitality presentation under real DECA HTDM rules.
                Camera and microphone stay private inside this room.
              </p>
            </div>

            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                Official DECA HTDM Rules
              </div>
              <div>Team Preparation: <span className="font-semibold text-white">30:00 minutes</span></div>
              <div>Judge Presentation: <span className="font-semibold text-white">15:00 minutes</span></div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-start space-x-3 text-slate-400 text-xs">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="leading-snug text-[11px]">
              Private by design. Video evaluated objectively by Google Gemini AI.
            </p>
          </div>
        </div>

        {/* --------------------------------------------------------------------
            7. Right Column: Scenario Controls & Mode Switching
            Tabs for Live Video Rehearsal Room vs. Recorded Video Upload
        -------------------------------------------------------------------- */}
        <div className="p-8 md:w-7/12 flex flex-col justify-between bg-[#111827] relative text-slate-100">
          {/* Close Dismissal Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-5">
            {/* Scenario Header Metadata */}
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                  {selectedCase.instructionalArea}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                  {selectedCase.tier} Level
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                {selectedCase.title}
              </h3>
            </div>

            {/* Segmented Mode Control */}
            <div className="grid grid-cols-2 bg-[#0b0f19] p-1 rounded-xl text-xs font-semibold text-slate-300 max-w-md border border-slate-800">
              <button
                onClick={() => setActiveTab('create')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'create'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Live video rehearsal
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'upload'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Upload video for grading
              </button>
            </div>

            {/* ----------------------------------------------------------------
                8. Tab 1: Live Video Rehearsal Room Preview
                Displays participant executive roles and core performance indicators
            ---------------------------------------------------------------- */}
            {activeTab === 'create' && (
              <div className="space-y-4 pt-1">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Role Assignments
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Your Roles: </span>
                    <span className="text-white font-semibold">{selectedCase.participantRole}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Judge Role: </span>
                    <span className="text-white font-semibold">{selectedCase.judgeRole}</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    5 Performance Indicators to Address
                  </div>
                  <div className="space-y-1.5">
                    {selectedCase.performanceIndicators.slice(0, 3).map((pi, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-slate-300 text-xs flex items-center space-x-2"
                      >
                        <span className="font-bold text-blue-400 shrink-0">{idx + 1}.</span>
                        <span className="truncate">{pi.name}</span>
                      </div>
                    ))}
                    {selectedCase.performanceIndicators.length > 3 && (
                      <div className="text-[11px] text-slate-400 pl-1">
                        + 2 more performance indicators in prep room
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------
                9. Tab 2: Video Upload Dropzone
                Allows competitors to upload pre-recorded MP4/WebM presentations
            ---------------------------------------------------------------- */}
            {activeTab === 'upload' && (
              <div className="space-y-4 pt-1">
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all ${
                    isDragging
                      ? 'border-blue-500 bg-blue-950/40 scale-[1.01]'
                      : 'border-slate-700 bg-slate-900/60 hover:border-slate-600'
                  }`}
                >
                  <input
                    type="file"
                    accept="video/*,audio/*"
                    id="video-upload-file-modal"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="video-upload-file-modal"
                    className="cursor-pointer flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-400 hover:underline">
                        Choose video recording
                      </span>
                      <span className="text-xs text-slate-400"> or drag and drop</span>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      WebM, MP4, MOV (graded with Google Gemini AI)
                    </span>
                  </label>
                </div>

                {selectedFile && (
                  <div className="p-3 bg-blue-950/40 border border-blue-500/40 rounded-xl flex items-center justify-between text-xs text-blue-200">
                    <div className="flex items-center space-x-2 min-w-0">
                      <Video className="w-4 h-4 text-blue-400 shrink-0" />
                      <div className="truncate">
                        <span className="font-semibold block truncate">{selectedFile.name}</span>
                        <span className="text-[10px] text-slate-400">
                          {(selectedFile.size / (1024 * 1024)).toFixed(1)} MB · {selectedFile.type || 'video'}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedFile(null)}
                      className="text-slate-400 hover:text-white p-1 text-[11px]"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------------
              10. Modal Action Footer Buttons
              Enters 30-minute prep room or submits video file for Gemini grading
          ------------------------------------------------------------------ */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>

            {activeTab === 'create' ? (
              <button
                onClick={() => onStartRoom(selectedCase)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-600/30 flex items-center space-x-2 cursor-pointer"
              >
                <Clock className="w-4 h-4" />
                <span>Enter 30-Minute Prep Room</span>
              </button>
            ) : (
              <button
                disabled={!selectedFile}
                onClick={() => selectedFile && onUploadVideo(selectedCase, selectedFile)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center space-x-2 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Submit to Gemini for Grading</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
