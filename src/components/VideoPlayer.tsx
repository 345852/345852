import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  SkipForward,
  SkipBack,
  Share2
} from 'lucide-react';
import { useShare } from '../contexts/ShareContext';

interface VideoPlayerProps {
  movieId: string;
  movieTitle: string;
  onBack: () => void;
}

export function VideoPlayer({ movieId, movieTitle, onBack }: VideoPlayerProps) {
  const { openShare } = useShare();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(7200); // 模拟2小时视频
  const [showControls, setShowControls] = useState(true);
  const [quality, setQuality] = useState('高清');
  const [speed, setSpeed] = useState(1.0);
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    setCurrentTime(Math.min(currentTime + 10, duration));
  };

  const handleSkipBack = () => {
    setCurrentTime(Math.max(currentTime - 10, 0));
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleQualityChange = (newQuality: string) => {
    setQuality(newQuality);
    setShowQualityMenu(false);
    alert(`已切换至${newQuality}画质`);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    setShowSpeedMenu(false);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen?.().catch(() => {
          alert('进入全屏模式');
        });
      } else {
        document.exitFullscreen?.().catch(() => {
          alert('退出全屏模式');
        });
      }
    }
  };

  const handleShareClick = () => {
    openShare({
      title: movieTitle,
      url: typeof window !== 'undefined' ? window.location.href : '',
    });
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="relative h-screen bg-black flex items-center justify-center">
      {/* Video Area (模拟) */}
      <div 
        ref={videoRef}
        className="w-full h-full relative"
        onClick={() => setShowControls(!showControls)}
      >
        {/* 模拟视频画面 */}
        <div className="w-full h-full flex items-center justify-center bg-gray-900">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1655367574486-f63675dd69eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3Njg0ODc2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt={movieTitle}
            className="w-full h-full object-contain opacity-50"
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayPause();
                }}
                className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </button>
            </div>
          )}
        </div>

        {/* Controls Overlay */}
        {showControls && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 pointer-events-none">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 flex items-center gap-4 pointer-events-auto">
              <button
                onClick={onBack}
                className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex-1">
                <h2 className="text-white text-lg">{movieTitle}</h2>
              </div>
              <button 
                onClick={handleShareClick}
                className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
              >
                <Share2 className="w-6 h-6" />
              </button>
              <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
                <Settings className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto">
              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${progress}%, #4b5563 ${progress}%, #4b5563 100%)`
                  }}
                />
                <div className="flex justify-between text-white text-sm mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={handleSkipBack}
                  className="p-3 text-white hover:text-red-500 transition-colors"
                >
                  <SkipBack className="w-6 h-6" />
                </button>
                
                <button
                  onClick={handlePlayPause}
                  className="p-4 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </button>

                <button
                  onClick={handleSkipForward}
                  className="p-3 text-white hover:text-red-500 transition-colors"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
              </div>

              {/* Additional Controls */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleMute}
                    className="p-2 text-white hover:text-red-500 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6" />
                    ) : (
                      <Volume2 className="w-6 h-6" />
                    )}
                  </button>
                  
                  {/* Volume Slider (Always visible next to volume icon) */}
                  <div className="w-24">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${isMuted ? 0 : volume}%, #4b5563 ${isMuted ? 0 : volume}%, #4b5563 100%)`
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowQualityMenu(!showQualityMenu)}
                    className="text-white text-sm hover:text-red-500 px-3 py-1 bg-black/50 rounded"
                  >
                    {quality}
                  </button>
                  <button
                    onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                    className="text-white text-sm hover:text-red-500 px-3 py-1 bg-black/50 rounded"
                  >
                    {speed}x
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="p-2 text-white hover:text-red-500 transition-colors"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quality Menu Modal */}
        {showQualityMenu && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-auto z-50" onClick={() => setShowQualityMenu(false)}>
            <div className="bg-gray-900 rounded-xl p-6 w-64" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg">选择清晰度</h3>
                <button onClick={() => setShowQualityMenu(false)} className="text-white hover:text-red-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-2">
                {['超清', '高清', '标清', '流畅'].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQualityChange(q)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      quality === q ? 'bg-red-500 text-white' : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Speed Menu Modal */}
        {showSpeedMenu && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-auto z-50" onClick={() => setShowSpeedMenu(false)}>
            <div className="bg-gray-900 rounded-xl p-6 w-64" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg">播放速度</h3>
                <button onClick={() => setShowSpeedMenu(false)} className="text-white hover:text-red-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-2">
                {[0.5, 0.75, 1.0, 1.25, 1.5, 2.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSpeedChange(s)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      speed === s ? 'bg-red-500 text-white' : 'text-white hover:bg-gray-800'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
