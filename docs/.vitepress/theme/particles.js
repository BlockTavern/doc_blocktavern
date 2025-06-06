// 简化的粒子效果实现
export function createParticles() {
  if (typeof window === 'undefined') return

  // 创建粒子容器
  let particlesContainer = document.getElementById('particles-js')
  if (!particlesContainer) {
    particlesContainer = document.createElement('div')
    particlesContainer.id = 'particles-js'
    particlesContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
      overflow: hidden;
    `
    document.body.appendChild(particlesContainer)
  }

  // 创建canvas
  let canvas = particlesContainer.querySelector('canvas')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.style.cssText = `
      display: block;
      width: 100%;
      height: 100%;
    `
    particlesContainer.appendChild(canvas)
  }

  const ctx = canvas.getContext('2d')
  
  // 设置canvas尺寸
  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // 粒子类
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 1.5
      this.vy = (Math.random() - 0.5) * 1.5
      this.radius = Math.random() * 3 + 1
      this.opacity = Math.random() * 0.5 + 0.2
      this.colors = ['#FFD000', '#FFC107', '#FF8F00', '#FFA726', '#FFAB40']
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    }

    update() {
      this.x += this.vx
      this.y += this.vy

      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy

      // 边界处理
      if (this.x < 0) this.x = 0
      if (this.x > canvas.width) this.x = canvas.width
      if (this.y < 0) this.y = 0
      if (this.y > canvas.height) this.y = canvas.height
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0')
      ctx.fill()
    }
  }

  // 创建粒子数组
  const particles = []
  const particleCount = 60

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  // 鼠标交互
  let mouse = { x: null, y: null }
  
  canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null
    mouse.y = null
  })

  // 动画循环
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
      particle.update()
      particle.draw()

      // 鼠标排斥效果
      if (mouse.x && mouse.y) {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.x -= dx * force * 0.1
          particle.y -= dy * force * 0.1
        }
      }
    })

    // 连线效果
    particles.forEach((particleA, indexA) => {
      particles.slice(indexA + 1).forEach(particleB => {
        const dx = particleA.x - particleB.x
        const dy = particleA.y - particleB.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          ctx.beginPath()
          ctx.moveTo(particleA.x, particleA.y)
          ctx.lineTo(particleB.x, particleB.y)
          ctx.strokeStyle = `rgba(255, 208, 0, ${0.4 * (1 - distance / 120)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    })

    requestAnimationFrame(animate)
  }

  animate()
}



// 自动初始化
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      createParticles()
    })
  } else {
    createParticles()
  }
} 