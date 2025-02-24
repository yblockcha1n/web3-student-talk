<template>
  <div ref="container" class="absolute inset-0 z-0">
    <canvas ref="canvas" class="w-full h-full"></canvas>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref, onUnmounted } from 'vue'

const container = ref(null)
const canvas = ref(null)
let scene, camera, renderer, currentMesh
let morphing = false

onMounted(() => {
  // シーンのセットアップ
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setClearColor(0xffffff, 0)

  // オブジェクトの定義
  const geometries = {
    ethereum: new THREE.IcosahedronGeometry(2, 1),
    bitcoin: new THREE.TorusGeometry(1.5, 0.5, 16, 100),
    pizza: new THREE.CylinderGeometry(2, 2, 0.2, 32)
  }

  const material = new THREE.MeshPhongMaterial({
    color: 0x4a90e2,
    wireframe: true,
    wireframeLinewidth: 2,
    transparent: true,
    opacity: 0.7
  })

  // 初期オブジェクトの作成
  currentMesh = new THREE.Mesh(geometries.ethereum, material)
  scene.add(currentMesh)

  // ライティング
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0x4a90e2, 1)
  pointLight.position.set(5, 5, 5)
  scene.add(pointLight)

  // オブジェクトの変更関数
  const changeObject = () => {
    if (morphing) return

    const objects = ['ethereum', 'bitcoin', 'pizza']
    const currentIndex = objects.indexOf(currentMesh.geometry.type === 'IcosahedronGeometry' ? 'ethereum' :
      currentMesh.geometry.type === 'TorusGeometry' ? 'bitcoin' : 'pizza')
    const nextIndex = (currentIndex + 1) % objects.length
    const nextGeometry = geometries[objects[nextIndex]]

    const oldMesh = currentMesh
    currentMesh = new THREE.Mesh(nextGeometry, material.clone())
    currentMesh.scale.set(0, 0, 0)
    scene.add(currentMesh)

    // アニメーション
    morphing = true
    let progress = 0
    const morphAnimation = () => {
      progress += 0.02
      if (progress >= 1) {
        scene.remove(oldMesh)
        morphing = false
        return
      }

      oldMesh.scale.setScalar(1 - progress)
      currentMesh.scale.setScalar(progress)
      requestAnimationFrame(morphAnimation)
    }
    morphAnimation()
  }

  // 定期的なオブジェクト変更
  const interval = setInterval(changeObject, 3000)

  // アニメーションループ
  const animate = () => {
    requestAnimationFrame(animate)
    
    if (currentMesh) {
      currentMesh.rotation.x += 0.002
      currentMesh.rotation.y += 0.003
    }
    
    renderer.render(scene, camera)
  }
  animate()

  // リサイズ対応
  const handleResize = () => {
    const width = container.value.clientWidth
    const height = container.value.clientHeight
    
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    
    renderer.setSize(width, height)
  }
  
  window.addEventListener('resize', handleResize)
  
  // クリーンアップ
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    clearInterval(interval)
    scene.remove(currentMesh)
    renderer.dispose()
  })
})
</script>