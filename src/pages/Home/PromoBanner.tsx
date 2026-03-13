import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const slides = [
  [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=450&fit=crop",
      label: "Sillón Accent",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=450&fit=crop",
      label: "Sofá Modular Gris",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600&h=450&fit=crop",
      label: "Sofá de Cuero",
    },
  ],
  [
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop",
      label: "Sofá Nórdico",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=450&fit=crop",
      label: "Cama Moderna",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=450&fit=crop",
      label: "Mesa de Comedor",
    },
  ],
  [
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=450&fit=crop",
      label: "Sofá Seccional",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=450&fit=crop",
      label: "Lámpara de Pie",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=450&fit=crop",
      label: "Cama King Size",
    },
  ],
];

export default function PromoBanner() {
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const { ref: sectionRef, isVisible } = useInView(0.15);

  const total = slides.length;

  const changeTo = useCallback(
    (next: number, dir: "left" | "right") => {
      if (exiting) return;
      setDirection(dir);
      setExiting(true);
      setTimeout(() => {
        setCurrent(next);
        setExiting(false);
      }, 500);
    },
    [exiting],
  );

  const next = useCallback(() => {
    changeTo((current + 1) % total, "right");
  }, [current, total, changeTo]);

  const prev = useCallback(() => {
    changeTo((current - 1 + total) % total, "left");
  }, [current, total, changeTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
    touchStart.current = null;
  };

  return (
    <section ref={sectionRef} className="bg-[#f2eeef] dark:bg-[#121212] py-4 sm:py-8 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="mx-auto max-w-7xl w-full px-3 sm:px-6">
        {/* Banner heading */}
        <div
          className={`relative mb-2 sm:mb-7 overflow-hidden rounded-lg sm:rounded-xl px-1 py-1 sm:px-3 sm:py-1 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#eae6e5]/70 dark:bg-[#1e1e32]/80" />
          <h2 className="relative z-10 text-base font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
            Hasta <span className="text-lg sm:text-3xl md:text-4xl">30%</span>{" "}
            de descuento en muebles de sala
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={`relative px-6 sm:px-0 ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {slides[current].map((item, i) => (
              <div
                key={item.id}
                className="group relative aspect-video sm:aspect-4/3 overflow-hidden rounded-lg sm:rounded-2xl shadow-lg"
                style={{
                  opacity: exiting ? 0 : 1,
                  transform: exiting
                    ? direction === "right"
                      ? "translateX(-40px) scale(0.95)"
                      : "translateX(40px) scale(0.95)"
                    : "translateX(0) scale(1)",
                  transition: exiting
                    ? `opacity 450ms cubic-bezier(0.4,0,0.2,1) ${i * 80}ms, transform 450ms cubic-bezier(0.4,0,0.2,1) ${i * 80}ms`
                    : `opacity 500ms cubic-bezier(0,0,0.2,1) ${i * 100}ms, transform 500ms cubic-bezier(0,0,0.2,1) ${i * 100}ms`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="text-sm font-semibold text-white drop-shadow-lg sm:text-base">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows — inside on mobile, outside on desktop */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-4 lg:-left-5 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white dark:bg-[#2a2a42] shadow-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-110 hover:shadow-xl active:scale-95 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:-right-4 lg:-right-5 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white dark:bg-[#2a2a42] shadow-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-110 hover:shadow-xl active:scale-95 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Dots */}
          <div className="mt-4 sm:mt-8 flex items-center justify-center gap-2.5 sm:gap-3">
            {slides.map((_, i) => {
              const isActive = i === current;
              return (
                <button
                  key={i}
                  onClick={() => changeTo(i, i > current ? "right" : "left")}
                  className="relative cursor-pointer group"
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: isActive ? 28 : 10,
                    height: 10,
                    borderRadius: 999,
                    padding: 3,
                    border: isActive
                      ? "2px solid #4a6fa5"
                      : "2px solid transparent",
                    transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {/* Inner fill */}
                  <span
                    className="block h-full rounded-full"
                    style={{
                      backgroundColor: isActive ? "#4a6fa5" : "#c4cdd8",
                      transition:
                        "background-color 400ms cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />

                  {/* Progress sweep on active dot */}
                  {isActive && !isPaused && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "2px solid #4a6fa5",
                        opacity: 0.4,
                        animation: "dotRing 4.5s linear infinite",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dotRing {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
