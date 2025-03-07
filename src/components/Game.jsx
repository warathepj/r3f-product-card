import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Game({ scale = 1, rotation = [0, 0, 0], position = [0, 0, 0] }) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/src/assets/game/scene.gltf')

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle rotation animation
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group ref={groupRef} scale={scale} rotation={rotation} position={position}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.M_GameBoy}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.M_GameBoy}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.M_GameBoy}
          />
        </group>
      </group>
    </group>
  )
}

// Add credit information as per license requirements
Game.credit = `Model: "Game Boy | 3D Model Low-Poly" by ItsKevin (https://sketchfab.com/ItsKevin) licensed under CC-BY-4.0`

// Preload the model
useGLTF.preload('/src/assets/game/scene.gltf')
