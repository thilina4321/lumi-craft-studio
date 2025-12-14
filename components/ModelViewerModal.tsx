import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface ModelViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelUrl: string;
  title: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const ModelViewerModal = ({ isOpen, onClose, modelUrl, title }: ModelViewerModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only import on client side
    if (typeof window !== 'undefined' && !isLoaded) {
      import('@google/model-viewer').then(() => {
        setIsLoaded(true);
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Viewer */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-gray-50">
          {isLoaded ? (
            <model-viewer
              src={modelUrl}
              alt={title}
              auto-rotate
              camera-controls
              shadow-intensity="1"
              style={{ width: '100%', height: '100%' }}
              loading="eager"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-500">Loading 3D Model...</div>
              </div>
            </model-viewer>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-500">Initializing viewer...</div>
            </div>
          )}
        </div>

        {/* Controls Info */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            🖱️ Click and drag to rotate • 📌 Pinch or scroll to zoom • 🔄 Auto-rotating
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelViewerModal;