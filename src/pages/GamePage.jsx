import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ProductCard from '../components/ProductCard'
import { useParams, useNavigate } from 'react-router-dom'

// Mockup product data
const PRODUCT_DATA = {
  1: { id: 1, name: "Game Boy Classic", price: 149.99, color: "Gray" },
  2: { id: 2, name: "Game Boy Color", price: 169.99, color: "Purple" },
  3: { id: 3, name: "Game Boy Advance", price: 189.99, color: "Blue" },
  4: { id: 4, name: "Game Boy SP", price: 199.99, color: "Red" },
  5: { id: 5, name: "Game Boy Micro", price: 209.99, color: "Silver" },
  6: { id: 6, name: "Game Boy Pocket", price: 159.99, color: "Black" },
}

export default function GamePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = PRODUCT_DATA[id]

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh',
      position: 'relative',
      background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
    }}>
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px',
          zIndex: 1000,
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>
      
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '20px',
        background: 'rgba(255,255,255,0.9)',
        borderRadius: '10px',
        zIndex: 1000
      }}>
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Color: {product.color}</p>
      </div>

      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={2.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.7} />
        <directionalLight position={[0, 5, 5]} intensity={0.7} />
        <ProductCard 
          position={[0, 0, 0]} 
          rotation={[0, 0, 0]} 
          scale={.6}
          productData={product}
        />
        <OrbitControls maxDistance={5} minDistance={1} />
      </Canvas>
    </div>
  )
}