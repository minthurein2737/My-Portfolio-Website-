import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, isOpen, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#141719] border border-[#C8FF00] text-[#F4F5F2] px-4 py-3 rounded-none shadow-2xl shadow-[#C8FF00]/10 transition-all transform animate-in fade-in slide-in-from-bottom-2 clip-chamfer"
    >
      <div className="w-2 h-2 bg-[#C8FF00] rounded-full animate-ping" />
      <CheckCircle2 className="w-5 h-5 text-[#C8FF00] shrink-0" />
      <span className="text-sm font-medium font-mono-tech">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="ml-2 text-[#A6AAA5] hover:text-[#F4F5F2] transition-colors p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
