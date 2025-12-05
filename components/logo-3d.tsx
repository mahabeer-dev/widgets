"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function SpinningLogo() {
  const ref = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.6
    ref.current.rotation.y += delta * (hovered ? 2 : 1)
  })
  return (
    <mesh ref={ref} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#a78bfa" : "#6366f1"} metalness={0.6} roughness={0.2} />
    </mesh>
  )
}

export default function Logo3D({ className }: { className?: string }) {
  return (
    <div className={className} style={{ display: "inline-block" }}>
      <Canvas dpr={[1, 2]} camera={{ position: [1.8, 1.8, 2.4], fov: 50 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <SpinningLogo />
      </Canvas>
    </div>
  )
}

