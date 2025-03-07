import React, { useRef, useState } from 'react'
import { Text } from '@react-three/drei'
import { Game } from './Game'

const ProductCard = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1.3,
  productId = 1,
  productData,
  onClick
}) => {
  const titleRef = useRef()
  const priceRef = useRef()
  const [hovered, setHovered] = useState(false)

  const handleClick = (event) => {
    event.stopPropagation()
    if (onClick) {
      onClick(productId)
    }
  }

  return (
    <group 
      position={position} 
      rotation={rotation} 
      scale={scale}
      onClick={handleClick}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setHovered(false)
        document.body.style.cursor = 'auto'
      }}
    >
      {/* Product title */}
      <group ref={titleRef}>
        <Text
          position={[0, 2.2, 0]}
          fontSize={0.35}
          color="#000000"
        >
          {productData ? productData.name : "Game Boy Classic"}
        </Text>
      </group>

      {/* Game model */}
      <Game 
        scale={0.018} 
        position={[0, -1.2, 0]}
        hovered={hovered} // Optional: pass hovered state to Game component if you want to add hover effects
      />

      {/* Product price */}
      <group ref={priceRef}>
        <Text
          position={[0, -2, 0]}
          fontSize={0.3}
          color="#000000"
        >
          ${productData ? productData.price : "149.99"}
        </Text>
      </group>
    </group>
  )
}

export default ProductCard
