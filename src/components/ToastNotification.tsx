import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  readonly message: string | null;
  readonly onClose: () => void;
}

export const ToastNotification: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="toast-badge">
      <CheckCircle2 size={18} />
      <span style={{ fontSize: '0.9rem' }}>{message}</span>
      <button
        type="button"
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.8)',
          cursor: 'pointer',
          padding: '0 0 0 0.5rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};
