declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    flat?: boolean;
    ticks?: number;
    origin?: { x: number; y: number };
    colors?: string[];
    shapes?: any[];
    zIndex?: number;
    disableForReducedMotion?: boolean;
    useWorker?: boolean;
    resize?: boolean;
    canvas?: HTMLCanvasElement | null;
    scalar?: number;
  }

  interface ConfettiInstance {
    (options?: ConfettiOptions): void;
    reset(): void;
    create(canvas: HTMLCanvasElement, options?: { resize?: boolean; useWorker?: boolean }): ConfettiInstance;
  }

  interface ConfettiStatic extends ConfettiInstance {
    shapeFromPath(options: { path: string; [key: string]: any }): any;
    shapeFromText(options: { text: string; [key: string]: any }): any;
  }

  const confetti: ConfettiStatic;
  export default confetti;
} 