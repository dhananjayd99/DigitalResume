"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={1.5} ref={sphereRef}>
            <MeshDistortMaterial
                color="#6366f1"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
            />
        </Sphere>
    );
}

export default function HeroModel() {
    return (
        <div className="absolute inset-0 z-0 opacity-15 md:opacity-20 pointer-events-auto mix-blend-multiply dark:mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 5]} intensity={2} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
