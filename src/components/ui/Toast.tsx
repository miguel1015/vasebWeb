import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";

export interface ToastData {
  id: number;
  message: string;
  image?: string;
}

let toastId = 0;
let listeners: Array<(toast: ToastData) => void> = [];

export function showToast(message: string, image?: string) {
  const toast: ToastData = { id: ++toastId, message, image };
  listeners.forEach((fn) => fn(toast));
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  useEffect(() => {
    const handler = (toast: ToastData) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 3000);
    };
    listeners.push(handler);
    return () => {
      listeners = listeners.filter((fn) => fn !== handler);
    };
  }, []);

  const dismiss = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 rounded-xl bg-white dark:bg-[#1e1e32] px-4 py-3 shadow-2xl border border-gray-100 dark:border-white/10 animate-toast-in min-w-[260px] max-w-[340px]"
        >
          {toast.image ? (
            <img
              src={toast.image}
              alt=""
              className="h-10 w-10 rounded-lg object-cover shrink-0"
            />
          ) : (
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
          )}
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100 flex-1 line-clamp-2">
            {toast.message}
          </p>
          <button
            type="button"
            onClick={() => dismiss(toast.id)}
            className="shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
