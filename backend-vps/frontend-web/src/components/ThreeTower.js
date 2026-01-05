import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function ThreeTower() {
  return (
    <div className="h-64 w-full">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        {/* Network Tower এর একটি ফিউচারিস্টিক ৩ডি রিপ্রেজেন্টেশন */}
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial color="#00ffcc" attach="material" distort={0.5} speed={2} />
        </Sphere>
      </Canvas>
    </div>
  );
}
