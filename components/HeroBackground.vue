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
let scene, camera, renderer
let blocks = []
let lines = []
let animationFrameId
let windowWidth = 0

onMounted(() => {
  // 初期化
  windowWidth = window.innerWidth
  initScene()
  
  // リサイズ対応
  const handleResize = () => {
    const width = container.value.clientWidth
    const height = container.value.clientHeight
    
    // 画面サイズが大きく変わった場合は再初期化（モバイル/デスクトップ切り替え時など）
    if ((windowWidth < 768 && window.innerWidth >= 768) || 
        (windowWidth >= 768 && window.innerWidth < 768)) {
      windowWidth = window.innerWidth
      cleanupScene()
      initScene()
      return
    }
    
    windowWidth = window.innerWidth
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  
  window.addEventListener('resize', handleResize)
  
  // クリーンアップ
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    cleanupScene()
  })
})

// シーンの初期化
function initScene() {
  // シーンのセットアップ
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true
  })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setClearColor(0xffffff, 0)

  // ブロックチェーンの作成
  createBlockchain()

  // ライティング
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0x4a90e2, 1)
  pointLight.position.set(5, 5, 5)
  scene.add(pointLight)

  // アニメーションループ
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    
    // ブロックのアニメーション
    animateBlocks()
    
    renderer.render(scene, camera)
  }
  animate()
}

// シーンのクリーンアップ
function cleanupScene() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  
  // メモリ解放
  blocks.forEach(block => {
    scene.remove(block)
    if (block.geometry) block.geometry.dispose()
    if (block.material) block.material.dispose()
  })
  
  lines.forEach(line => {
    scene.remove(line)
    if (line.geometry) line.geometry.dispose()
    if (line.material) line.material.dispose()
  })
  
  blocks = []
  lines = []
  
  if (renderer) renderer.dispose()
}

// ブロックチェーンの作成
function createBlockchain() {
  const isMobile = window.innerWidth < 768
  const blockCount = isMobile ? 8 : 12
  
  // ブロックの素材
  const blockMaterial = new THREE.MeshPhongMaterial({
    color: 0x4a90e2,
    wireframe: true,
    wireframeLinewidth: 1,
    transparent: true,
    opacity: 0.7
  })
  
  // ラインの素材
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x4a90e2,
    transparent: true,
    opacity: 0.5
  })
  
  // 位置の計算（モバイルでは縦に、デスクトップでは横に並べる）
  const positionStep = isMobile ? 0.8 : 1.2
  const startPos = isMobile 
    ? { x: 0, y: (blockCount * positionStep) / 2, z: 0 }
    : { x: -(blockCount * positionStep) / 2, y: 0, z: 0 }
  
  // ブロックを作成
  for (let i = 0; i < blockCount; i++) {
    const blockSize = 0.5 + Math.random() * 0.2
    const blockGeometry = new THREE.BoxGeometry(blockSize, blockSize, blockSize)
    
    const block = new THREE.Mesh(blockGeometry, blockMaterial.clone())
    
    // 位置設定
    if (isMobile) {
      block.position.set(
        startPos.x + (Math.random() - 0.5) * 2,
        startPos.y - i * positionStep,
        startPos.z + (Math.random() - 0.5) * 2
      )
    } else {
      block.position.set(
        startPos.x + i * positionStep,
        startPos.y + (Math.random() - 0.5) * 2,
        startPos.z + (Math.random() - 0.5) * 2
      )
    }
    
    // ランダムな回転
    block.rotation.x = Math.random() * Math.PI * 2
    block.rotation.y = Math.random() * Math.PI * 2
    block.rotation.z = Math.random() * Math.PI * 2
    
    // アニメーション用データ
    block.userData = {
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      },
      originalPosition: block.position.clone(),
      animationPhase: i * 0.5, // 位相差をつける
      active: false, // 活性化フラグ
      activationDelay: i * 0.5, // 連鎖的な活性化のための遅延
      floatSpeed: 0.005 + Math.random() * 0.005
    }
    
    scene.add(block)
    blocks.push(block)
    
    // 前のブロックとの接続線
    if (i > 0) {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        blocks[i-1].position,
        block.position
      ])
      
      const line = new THREE.Line(lineGeometry, lineMaterial.clone())
      line.userData = {
        fromBlock: blocks[i-1],
        toBlock: block,
        originalColor: 0x4a90e2,
        activeColor: 0x00ff00,
        active: false,
        activationDelay: (i-1) * 0.5 + 0.25 // ブロックの間で活性化
      }
      
      scene.add(line)
      lines.push(line)
    }
  }
  
  // 最初のブロックを活性化して連鎖を始める
  if (blocks.length > 0) {
    blocks[0].userData.active = true
  }
}

// ブロックのアニメーション
function animateBlocks() {
  const time = Date.now() * 0.001
  
  blocks.forEach((block, index) => {
    // 回転アニメーション
    block.rotation.x += block.userData.rotationSpeed.x
    block.rotation.y += block.userData.rotationSpeed.y
    block.rotation.z += block.userData.rotationSpeed.z
    
    // 浮遊アニメーション
    const floatOffset = Math.sin(time + index) * 0.1
    block.position.y = block.userData.originalPosition.y + floatOffset
    
    // 活性化チェック - 連鎖的な活性化
    if (!block.userData.active && time > block.userData.activationDelay) {
      block.userData.active = true
      
      // 活性化エフェクト
      block.material.color.set(0x00ff00)
      setTimeout(() => {
        block.material.color.set(0x4a90e2)
      }, 500)
    }
  })
  
  // ラインの更新と活性化
  lines.forEach((line, index) => {
    // 接続先の更新
    const points = [
      line.userData.fromBlock.position.clone(),
      line.userData.toBlock.position.clone()
    ]
    line.geometry.setFromPoints(points)
    
    // 活性化チェック - ブロックが活性化した後で線も活性化
    if (!line.userData.active && time > line.userData.activationDelay) {
      line.userData.active = true
      
      // 活性化エフェクト
      line.material.color.set(0x00ff00)
      setTimeout(() => {
        line.material.color.set(0x4a90e2)
      }, 500)
    }
  })
  
  // 全て活性化されたら最初から再スタート
  const allActivated = blocks.every(block => block.userData.active) &&
                      lines.every(line => line.userData.active)
  
  if (allActivated) {
    // リセット
    const resetDelay = 2 // 2秒後にリセット
    
    if (!window.resetTimeout) {
      window.resetTimeout = setTimeout(() => {
        blocks.forEach(block => {
          block.userData.active = false
        })
        
        lines.forEach(line => {
          line.userData.active = false
        })
        
        // 最初のブロックだけ再活性化して連鎖を再開
        if (blocks.length > 0) {
          blocks[0].userData.active = true
        }
        
        window.resetTimeout = null
      }, resetDelay * 1000)
    }
  }
}
</script>