"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, MeshDistortMaterial, GradientTexture } from "@react-three/drei"
import { useRef, Suspense } from "react"
import type * as THREE from "three"

function FloatingSphere({
  position,
  color,
  speed = 1,
  distort = 0.4,
}: {
  position: [number, number, number]
  color: string
  speed?: number
  distort?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={color} distort={distort} speed={2} roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  )
}

function FloatingTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.8, 0.3, 32, 64]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.9} />
      </mesh>
    </Float>
  )
}

function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial roughness={0.1} metalness={1}>
          <GradientTexture stops={[0, 0.5, 1]} colors={["#6366f1", "#8b5cf6", "#d946ef"]} />
        </meshStandardMaterial>
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={0.5} />
      <pointLight position={[10, -10, 10]} color="#d946ef" intensity={0.5} />

      <FloatingSphere position={[-3, 1, -2]} color="#6366f1" speed={1.2} distort={0.5} />
      <FloatingSphere position={[3.5, -0.5, -3]} color="#8b5cf6" speed={0.8} distort={0.3} />
      <FloatingSphere position={[0, 2, -4]} color="#d946ef" speed={1} distort={0.4} />
      <FloatingTorus position={[-2, -1.5, -2]} color="#06b6d4" />
      <FloatingTorus position={[2.5, 1.5, -3]} color="#f43f5e" />
      <FloatingBox position={[4, -1, -2]} />
      <FloatingBox position={[-3.5, 2, -4]} />

      <Environment preset="city" />
    </>
  )
}

export function Hero3DSection() {
  return (
    <section className="relative h-full w-full overflow-hidden bg-zinc-950">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950" />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[600px] flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Now in Public Beta
        </div>

        <h1 className="mt-8 max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Build the future with{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            stunning 3D
          </span>{" "}
          experiences
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg">
          Create immersive web experiences that captivate your users. Our platform makes 3D development accessible,
          fast, and beautiful.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105">
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Get Started Free
            </span>
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
            View Documentation
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 sm:gap-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50K+</div>
            <div className="text-sm text-zinc-500">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1M+</div>
            <div className="text-sm text-zinc-500">Projects Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">99.9%</div>
            <div className="text-sm text-zinc-500">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
