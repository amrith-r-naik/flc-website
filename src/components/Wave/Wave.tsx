"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"

function Wave() {
    return (
        <div className="w-full h-screen">
            <Canvas camera={{ position: [0, 0, -5], fov: 75, far: 50 }} >
                <OrbitControls
          enableZoom={true}
          // autoRotate={true}
          autoRotateSpeed={-0.1}
          enablePan={true}
          // azimuth={[-Math.PI / 4, Math.PI / 4]}
          zoomSpeed={0.15}
          dampingFactor={0.05}
        />
                <WaveImplementaion />
            </Canvas>
        </div>
    )
}


function WaveImplementaion() {
    const clock = new THREE.Clock();
    const ref = useRef<THREE.ShaderMaterial>(null);
    const points:number[][] = [];
    for (let i = -50; i <= 50; i++) {
        points.push([i, 0]); // x, y, z
    }

    useFrame(() => {
        ref.current!.uniforms.uTime!.value = clock.getElapsedTime();
    })

    const material =( 
    <shaderMaterial 
        attach="material" 
        vertexShader={`
            uniform float uTime;
            void main() {
                vec3 newPos = position;
                newPos.y =  sin(.4*position.x + .7*position.z + mod(uTime,6.28318530718))*2.0;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
            }
        `}

        fragmentShader={`
            void main() {
                gl_FragColor = vec4(1.0,1.0,0.0,0.0);
            }
            
        `}
         uniforms={{uTime: { value: 20 }}}  ref={ref}/>)
    return (
        <>
            {
                Array.from({ length: 25 }, (v, i) => (
                    <line key={i} >
                        <bufferGeometry attach="geometry">
                            <bufferAttribute
                                attach='attributes-position'// Attach position attribute
                                array={new Float32Array(points.map(point=>[...point,i/4]).flat())} // Flatten points array for buffer
                                count={points.length} // Set vertex count
                                itemSize={3} // Number of components per vertex (x, y, z)
                                usage={THREE.StaticDrawUsage} // Optimization for static geometry
                            />
                        </bufferGeometry>
                        {material}
                    </line>
                ))
            }

            
        </>
    )
}

export default Wave