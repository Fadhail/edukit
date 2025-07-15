
'use client'

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";

export function DroneModel() {
    const geometry = useLoader(STLLoader, '/drone.STL')
    
    // Center the geometry
    geometry.computeBoundingBox()
    if (geometry.boundingBox) {
      const box = geometry.boundingBox
      const center = box.getCenter(new THREE.Vector3())
      geometry.translate(-center.x, -center.y, -center.z)
    }
    
    return (
      <mesh 
        geometry={geometry} 
        scale={[0.015, 0.015, 0.015]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color="#2563eb" 
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>
    )
  }
