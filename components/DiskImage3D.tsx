'use client'

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Disk = ({ imageUrl }: { imageUrl: string }) => {
    const texture = useTexture(imageUrl);
    const meshRef = useRef<THREE.Mesh>(null);
    const [rotationSpeed, setRotationSpeed] = useState(0.005); // Velocidad inicial

    // Rotación animada
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y -= rotationSpeed;

            // Efecto de desaceleración progresiva si se hizo clic
            if (rotationSpeed > 0.005) {
                setRotationSpeed((prev) => Math.max(0.005, prev * 0.97));
            }
        }
    });

    // Aceleración por clic
    const handleClick = () => {
        setRotationSpeed(0.2); // Aumentamos la velocidad de forma brusca
    };

    return (
        <mesh
            ref={meshRef}
            rotation={[Math.PI / 2, 1.5, 0]}
            onClick={handleClick}
        >
            <cylinderGeometry args={[1, 1, 0.01, 64]} />
            <meshStandardMaterial attach="material-0" color="gray" />
            <meshStandardMaterial attach="material-1" map={texture} />
            <meshStandardMaterial attach="material-2" color='gray' />
        </mesh>
    );
};

const DiskWithImage = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <Canvas
            style={{ height: "500px", width: "100%" }}
            camera={{ position: [0, 0, 3], fov: 50 }}
        >
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={null}>
                <Disk imageUrl={imageUrl} />
            </Suspense>
            {/* OrbitControls sin drag ni pan */}
            <OrbitControls
                enableZoom={false}
                enableRotate={false}
                enablePan={false}
            />
        </Canvas>
    );
};

export default DiskWithImage;
