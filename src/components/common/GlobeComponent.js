import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const GlobeComponent = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;

    // Create renderer with transparent background
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);

    // Add renderer to DOM
    if (mountRef.current) {
      // Clear any existing content first to prevent duplicates
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);
    }

    // Store a reference to the current DOM node for cleanup
    const currentRef = mountRef.current;

    // Create globe
    const geometry = new THREE.SphereGeometry(1, 64, 64);

    // Load earth texture using map.png from assets
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/img/content/map.png", () => {
      material.map = earthTexture;
      material.needsUpdate = true;
    });

    // Create material with texture and light mode gradient colors
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpScale: 0.01,
      specular: new THREE.Color("#4dabf7"), // Light blue specular highlight
      emissive: new THREE.Color("#c5f6fa"), // Very light cyan for emissive
      emissiveIntensity: 0.1, // Reduced intensity for light mode
      shininess: 5, // Increased shininess for more reflective look
    });

    // Create globe mesh
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add ambient light with bright white-blue color for light mode
    const ambientLight = new THREE.AmbientLight(
      new THREE.Color("#e7f5ff"), // Very light blue ambient light
      0.8 // Increased ambient light intensity
    );
    scene.add(ambientLight);

    // Add directional light with light blue color
    const directionalLight = new THREE.DirectionalLight(
      new THREE.Color("#74c0fc"), // Light blue directional light
      1.2 // Increased intensity for brighter appearance
    );
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the globe
      globe.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Clean up on unmount
    return () => {
      if (currentRef) {
        const canvas = currentRef.querySelector("canvas");
        if (canvas) {
          currentRef.removeChild(canvas);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="globe-container"
      style={{
        width: "300px",
        height: "300px",
        position: "relative",
        overflow: "hidden",
      }}
    />
  );
};

export default GlobeComponent;
