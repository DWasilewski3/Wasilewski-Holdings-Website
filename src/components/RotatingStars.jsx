export default function RotatingStars() {
  return (
    <>
      <div className="preloader">
        <div className="crack crack1"></div>
        <div className="crack crack2"></div>
        <div className="crack crack3"></div>
      </div>

      <style jsx>{`
        .preloader {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 2px #fff);
        }

        .crack {
          position: absolute;
          width: 50%;
          aspect-ratio: 1;
          background-color: #fef3fc;
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          animation: rotate 6s infinite;
        }

        .crack2 {
          width: 60%;
          animation-delay: 1s;
        }

        .crack3 {
          width: 70%;
          animation-delay: 1.5s;
        }

        @keyframes rotate {
          to {
            rotate: 360deg;
          }
        }
      `}</style>
    </>
  );
}
