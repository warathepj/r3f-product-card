import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Text } from '@react-three/drei'
import { Cube } from './Cube'
import { AxesHelper } from 'three'

const ProductCard = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  const meshRef = useRef()
  const titleRef = useRef()
  const priceRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
    if (titleRef.current && priceRef.current) {
      titleRef.current.rotation.y = -meshRef.current.rotation.y
      priceRef.current.rotation.y = -meshRef.current.rotation.y
    }
  })

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={new AxesHelper(2)} />

      {/* Product title */}
      <group ref={titleRef}>
        <Text
          position={[0, 1.5, 0.15]}
          fontSize={0.3}
          color="#000000"
        >
          Product Name
        </Text>
      </group>

      {/* Add Cube component */}
      <Cube />

      {/* Product price */}
      <group ref={priceRef}>
        <Text
          position={[0, -1.5, 0.15]}
          fontSize={0.25}
          color="#000000"
        >
          $99.99
        </Text>
      </group>
    </group>
  )
}

export default ProductCard
