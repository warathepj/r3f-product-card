import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ProductCard from './components/ProductCard'
import GamePage from './pages/GamePage'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Game } from './components/Game'

function HomePage() {
  const navigate = useNavigate()

  const handleProductClick = (productId) => {
    navigate(`/game/${productId}`)
  }

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
      position: 'relative',
    }}>
      <div className="retro-pattern" />
      <h1 style={{ 
        textAlign: 'center', 
        margin: '0', 
        padding: '10px 0',
        height: '40px'
      }}>My Shop</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '10px',
        padding: '10px',
        height: 'calc(100vh - 60px)',
        width: '100%',
      }}>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%',
            backgroundColor: '#bb99ff',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 2] }}>
              <ambientLight intensity={2.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} />
              <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.7} />
              <directionalLight position={[0, 5, 5]} intensity={0.7} />
              <ProductCard 
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]} 
                scale={0.6} 
                productId={id}
                onClick={handleProductClick} 
              />
              <OrbitControls maxDistance={5} minDistance={1} />
            </Canvas>
          </div>
        ))}
      </div>
      <div style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        fontSize: '10px', 
        padding: '5px' 
      }}>
        {Game.credit}
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
