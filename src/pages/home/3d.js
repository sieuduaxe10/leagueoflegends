import React, { Suspense, useRef, useEffect } from 'react'; // Import React, Suspense, và useRef từ thư viện React
import { Canvas, useFrame } from 'react-three-fiber'; // Import Canvas và useFrame hook từ thư viện react-three-fiber
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls từ thư viện @react-three/drei
import { useLoader } from 'react-three-fiber'; // Import useLoader hook từ thư viện react-three-fiber
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader từ three.js
import * as THREE from 'three'; // Import THREE từ three.js

// Khai báo component Hero3D
const Hero3D = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35vw', height: '35vw' }}>
      <Canvas style={{ width: '100%', height: '100%' }}>
        {/* Ánh sáng môi trường */}
        <ambientLight intensity={1.0} />
        {/* Ánh sáng hướng */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Ánh sáng đốt cháy */}
        <spotLight position={[10, 10, 10]} angle={10.15} penumbra={1} />
        {/* Ánh sáng điểm */}
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        {/* Ánh sáng môi trường */}
        <ambientLight intensity={0.5} />
        {/* Ánh sáng điểm */}
        <pointLight position={[10, 10, 10]} />
        {/* Controls cho việc xoay và điều chỉnh camera */}
        <OrbitControls />
        {/* Dùng Suspense để xử lý việc load mô hình */}
        <Suspense fallback={null}>
          <Yasuo /> {/* Component Yasuo */}
        </Suspense>
      </Canvas>
    </div>
  );
};

// Khai báo component Yasuo
const Yasuo = () => {
  // Sử dụng GLTFLoader để load mô hình
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  // Sử dụng useRef để tham chiếu đến đối tượng trong không gian 3D
  const group = useRef();
  useEffect(() => {
    if (gltf.scene) {
      // Đặt vị trí của mô hình ở phía dưới
      gltf.scene.position.y = -2; // Thay đổi giá trị -5 để điều chỉnh vị trí theo ý muốn
    }
  }, [gltf.scene]);
  // Tự xoay mô hình 3D
  useFrame(() => {
    // Cập nhật góc xoay của mô hình 3D mỗi frame
    group.current.rotation.y += 0.01; // Tự xoay 0.01 radians mỗi frame
  });

  // Render mô hình 3D bên trong group để có thể tự xoay
  return (
    <group ref={group}>
      <primitive object={gltf.scene} scale={[2.1, 2.1, 2.1]} />
    </group>
  );
};

export default Hero3D; // Xuất component Hero3D để sử dụng ở các file khác
