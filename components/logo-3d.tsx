"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, GradientTexture, Sparkles } from "@react-three/drei"

function LogoMark() {
  const groupRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)
  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * (hovered ? 2 : 1)
    groupRef.current.rotation.x += delta * 0.2
  })

  return (
    <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[-0.55, 0, 0]}>
          <boxGeometry args={[0.18, 1.1, 0.18]} />
          <meshStandardMaterial metalness={0.9} roughness={0.15}>
            <GradientTexture stops={[0, 0.5, 1]} colors={["#6366f1", "#8b5cf6", "#d946ef"]} />
          </meshStandardMaterial>
        </mesh>
        <mesh position={[-0.05, 0.05, 0]} rotation={[0, 0, -0.9]}>
          <boxGeometry args={[0.18, 0.9, 0.18]} />
          <meshStandardMaterial color="#06b6d4" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.05, 0.05, 0]} rotation={[0, 0, 0.9]}>
          <boxGeometry args={[0.18, 0.9, 0.18]} />
          <meshStandardMaterial color="#f43f5e" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.55, 0, 0]}>
          <boxGeometry args={[0.18, 1.1, 0.18]} />
          <meshStandardMaterial metalness={0.9} roughness={0.15}>
            <GradientTexture stops={[0, 0.5, 1]} colors={["#6366f1", "#8b5cf6", "#d946ef"]} />
          </meshStandardMaterial>
        </mesh>
      </Float>

      <Sparkles count={12} scale={1.6} size={1} speed={0.6} color="#ffffff" />
    </group>
  )
}

export default function Logo3D({ className }: { className?: string }) {
  return (
    <div className={className} style={{ display: "inline-block" }}>
      <Canvas className="h-full w-full" dpr={[1, 2]} camera={{ position: [0, 0, 2.2], fov: 50 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 2, 2]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-2, -2, -2]} intensity={0.7} color="#8b5cf6" />
        <LogoMark />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
