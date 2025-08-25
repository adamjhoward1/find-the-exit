import styles from './TrapDoor.module.css';
import { useRef, useState } from 'react';

function TrapDoor() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className={styles.pageContainer}>
      <svg 
        ref={svgRef}
        className={styles.trapDoorSvg}
        width="800" 
        height="800" 
        viewBox="0 0 800 800"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
           <radialGradient id="glowGradient">
             <stop offset="0%" stopColor="#ffff00" stopOpacity="1" />
             <stop offset="50%" stopColor="#ffff00" stopOpacity="0.8" />
             <stop offset="80%" stopColor="#ffff00" stopOpacity="0.3" />
             <stop offset="100%" stopColor="#ffff00" stopOpacity="0" />
           </radialGradient>
         </defs>
         
         {/* Black rectangle */}
         <rect x="0" y="0" width="800" height="800" fill="#000" />
         
         {/* Yellow rectangle */}
         {isHovering && (
           <circle 
             cx={mousePos.x} 
             cy={mousePos.y} 
             r="100" 
             fill="url(#glowGradient)"
           />
         )}
      </svg>
    </div>
  );
}

export default TrapDoor;