import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { ShareSheet } from '../components/ShareSheet';
import type { SharePayload } from '../components/ShareSheet';

type ShareContextValue = {
  openShare: (payload?: SharePayload) => void;
  closeShare: () => void;
  isOpen: boolean;
  payload: SharePayload | undefined;
};

const ShareContext = createContext<ShareContextValue | null>(null);

export function ShareProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState<SharePayload | undefined>(undefined);

  const openShare = useCallback((p?: SharePayload) => {
    setPayload(p);
    setIsOpen(true);
  }, []);

  const closeShare = useCallback(() => {
    setIsOpen(false);
    setPayload(undefined);
  }, []);

  return (
    <ShareContext.Provider
      value={{ openShare, closeShare, isOpen, payload }}
    >
      {children}
      <ShareSheet open={isOpen} onClose={closeShare} payload={payload} />
    </ShareContext.Provider>
  );
}

export function useShare() {
  const ctx = useContext(ShareContext);
  if (!ctx) throw new Error('useShare must be used within ShareProvider');
  return ctx;
}
