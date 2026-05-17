import {
  Component,
  signal,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
  NgZone,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  life: number;
  decay: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  protected readonly title = signal('examplesA');

  @ViewChild('starCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private W = 0;
  private H = 0;
  private animFrameId = 0;
  private shootingStars: ShootingStar[] = [];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.ngZone.runOutsideAngular(() => this.draw());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animFrameId);
  }

  @HostListener('window:click')
  onClick(): void {
    this.shootingStars.push(this.mkShooter());
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resize();
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    this.W = canvas.width = window.innerWidth;
    this.H = canvas.height = window.innerHeight;
  }

  private rnd(a: number, b: number): number {
    return a + Math.random() * (b - a);
  }

  private mkShooter(): ShootingStar {
    const angle = this.rnd(15, 45);
    const rad = (angle * Math.PI) / 180;
    return {
      x: this.rnd(0, this.W * 0.6),
      y: this.rnd(0, this.H * 0.4),
      vx: Math.cos(rad) * this.rnd(6, 12),
      vy: Math.sin(rad) * this.rnd(6, 12),
      len: this.rnd(80, 160),
      life: 1,
      decay: this.rnd(0.012, 0.025),
    };
  }

  private draw(): void {
    this.animFrameId = requestAnimationFrame(() => this.draw());
    const { ctx, W, H } = this;

    ctx.clearRect(0, 0, W, H);

    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      const angle = Math.atan2(s.vy, s.vx);
      const tx = s.x - Math.cos(angle) * s.len * s.life;
      const ty = s.y - Math.sin(angle) * s.len * s.life;

      const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
      grad.addColorStop(0, 'blueviolet');
      grad.addColorStop(1, `rgba(255,255,255,${s.life * 0.9})`);

      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(s.x, s.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5 * s.life;
      ctx.stroke();

      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;

      if (s.life <= 0) this.shootingStars.splice(i, 1);
    }
  }

  curX = 0;
  curY = 0;
  ringX = 0;
  ringY = 0;

  private targetX = 0;
  private targetY = 0;

  ngOnInit() {
    // Mouse move — Angular-ის გარეთ ვაწარმოებთ change detection-ის თავიდან ასარიდებლად
    this.ngZone.runOutsideAngular(() => {
      document.addEventListener('mousemove', (e) => {
        this.targetX = e.clientX;
        this.targetY = e.clientY;

        // cursor პირდაპირ მიყვება
        this.ngZone.run(() => {
          this.curX = e.clientX;
          this.curY = e.clientY;
        });
      });

      // ring lag-ით მიყვება — rAF loop
      const animateRing = () => {
        const dx = this.targetX - this.ringX;
        const dy = this.targetY - this.ringY;

        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          this.ringX += dx * 0.1;
          this.ringY += dy * 0.1;

          this.ngZone.run(() => {
            this.ringX = this.ringX;
            this.ringY = this.ringY;
          });
        }

        requestAnimationFrame(animateRing);
      };

      requestAnimationFrame(animateRing);
    });
  }
}
