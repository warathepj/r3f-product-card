import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export function Cube() {
  const meshRef = useRef(null)
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta
    }
  })

  return (
    <mesh 
      ref={meshRef} 
      position-x={0}
      position-y={0} 
      position-z={0}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}