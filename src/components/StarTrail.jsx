import { useEffect, useRef } from "react";

const StarTrail = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const hue = useRef(0); // 🌈 hue value for rainbow color

  const createStar = () => {
    stars.current.push({
      x: mouse.current.x,
      y: mouse.current.y,
      radius: Math.random() * 2 + 1,
      alpha: 1,
      fade: Math.random() * 0.02 + 0.01,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      hue: hue.current, // assign hue color
    });

    hue.current = (hue.current + 5) % 360; // rotate hue for rainbow effect
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      createStar();

      stars.current.forEach((star, index) => {
        star.x += star.dx;
        star.y += star.dy;
        star.alpha -= star.fade;

        if (star.alpha <= 0) {
          stars.current.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `hsla(${star.hue}, 100%, 70%, ${star.alpha})`; // 🌈 use hue-based color
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default StarTrail;
