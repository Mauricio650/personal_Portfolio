import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


/* Rubiks Cube by J-Toastie [CC-BY] 
(https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/rVyPMVCGlw)

*/

function SuperMario() {
    const { scene } = useGLTF('models/SuperMario.glb');
    const cubeRef = useRef();

    useFrame((state, delta) => {
        if (cubeRef.current) {
            cubeRef.current.rotation.y += delta * 2;
        }
    });

    return (
        <primitive 
            ref={cubeRef}
            object={scene}
            scale={[3, 3, 3]} 
            position={[0, 0, 0]} 
            castShadow 
        />
    );
}

export function SuperMarioModel() {
    return (
        <Canvas
            camera={{ 
                position: [5, 5, 5], 
                fov: 50
            }}
            style={{ 
                width: '100%',
                height: '100%',
                background: 'transparent', 
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <SuperMario />
            </Suspense>
            <OrbitControls 
                enableZoom={false}
                enablePan={false} 
            />
        </Canvas>
    );
}