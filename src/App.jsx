import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh',
      overflow: 'hidden',
    }}>
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
        {/* First row */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <ProductCard position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2} />
            <OrbitControls maxDistance={10} minDistance={2} />
          </Canvas>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <ProductCard position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2} />
            <OrbitControls maxDistance={10} minDistance={2} />
          </Canvas>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <ProductCard position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2} />
            <OrbitControls maxDistance={10} minDistance={2} />
          </Canvas>
        </div>

        {/* Second row */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <ProductCard position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2} />
            <OrbitControls maxDistance={10} minDistance={2} />
          </Canvas>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <ProductCard position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2} />
            <OrbitControls maxDistance={10} minDistance={2} />
          </Canvas>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <ProductCard position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2} />
            <OrbitControls maxDistance={10} minDistance={2} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default App
