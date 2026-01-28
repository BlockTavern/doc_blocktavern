// 进阶粒子效果：随机聚合成像素图案
export function createParticles() {
  if (typeof window === 'undefined') return

  // 1. 初始化容器与画布
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
      z-index: -1; /* 确保在最底层 */
      pointer-events: none;
      overflow: hidden;
    `
    // 插入到 body 最前，作为背景
    document.body.insertBefore(particlesContainer, document.body.firstChild)
  }

  let canvas = particlesContainer.querySelector('canvas')
  if (!canvas) {
    canvas = document.createElement('canvas')
    canvas.style.cssText = `display: block; width: 100%; height: 100%;`
    particlesContainer.appendChild(canvas)
  }

  const ctx = canvas.getContext('2d')

  // 2. 图案数据 (1 = 粒子点)
  const shapes = {
    heart: [
      "  XX XX  ",
      " X  X  X ",
      "X       X",
      "X       X",
      " X     X ",
      "  X   X  ",
      "   X X   ",
      "    X    "
    ],
    creeper: [
      "XXXXXXXX",
      "X      X",
      "X X  X X",
      "X      X",
      "  X  X  ",
      "  XXXX  ",
      "  X  X  ",
      "  X  X  "
    ],
    diamond: [
      "  XXX  ",
      " XXXXX ",
      "XXXXXXX",
      " XXXXX ",
      "  XXX  ",
      "   X   "
    ],
    sword: [
      "      X",
      "     X ",
      "    X  ",
      "   X   ",
      "  X    ",
      " X     ",
      "X      ",
      " X     ",
      "  X    "
    ],
    axe: [
      "  XX",
      " XXX",
      "  X ",
      "  X ",
      "  X ",
      "  X "
    ],
    shovel: [
      "  X",
      " X ",
      " X ",
      " X ",
      " X ",
      "X  "
    ],
    hoe: [
      " XX",
      "  X",
      "  X",
      "  X",
      "  X"
    ],
    bow: [
      "  XX ",
      " X  X",
      "X    ",
      "X    ",
      " X  X",
      "  XX "
    ],
    arrow: [
      "      X",
      "     X ",
      "XXXXX  ",
      " X     ",
      "  X    "
    ],
    potion: [
      "  X  ",
      " XXX ",
      "X   X",
      "X   X",
      " XXX "
    ],
    bread: [
      "  XXX  ",
      " XXXXX ",
      "XXXXXXX",
      " XXXXX "
    ],
    cookie: [
      "  XXX  ",
      " XXXXX ",
      "XX X XX",
      " XXXXX ",
      "  XXX  "
    ],
    ingot: [
      "  XXXX ",
      " XXXXXX",
      "X      ",
      "XXXXXX "
    ],
    bucket: [
      "X     X",
      "X     X",
      " XXXXX ",
      "  XXX  "
    ],
    bone: [
      "  XX  ",
      "  XX  ",
      "   X  ",
      "   X  ",
      "  XX  ",
      "  XX  "
    ],
    stick: [
      "      X",
      "     X ",
      "    X  ",
      "   X   ",
      "  X    ",
      " X     ",
      "X      "
    ],
    pickaxe: [
      "  XXX",
      " X  X",
      "X  X ",
      " XX  ",
      " X   ",
      "X    "
    ],
    cursor: [
      "X     ",
      "XX    ",
      "XXX   ",
      "XXXX  ",
      "XX X  ",
      "X  X  ",
      "   X  "
    ],
    apple: [
      "   X  ",
      " XXXXX",
      "XXXXXXX",
      "XXXXXXX",
      "XXXXXXX",
      " XXXXX"
    ]
  }

  // 3. 粒子系统配置
  const CONFIG = {
    particleCount: 80, // 降低粒子数量以优化性能
    baseColor: '#FFD700',
    colors: ['#FFD700', '#F0E68C', '#FFA500', '#FF4500', '#50C878', '#00BFFF'],
    shapeDuration: 3000,
    idleDuration: 4000,
    transitionSpeed: 0.05,
    gridSize: 15,
  }

  // 4. 状态管理
  let state = {
    mode: 'idle', // 'idle' | 'forming'
    lastSwitch: Date.now(),
    currentShape: null,
    targets: []
  }

  // 5. 粒子类
  class Particle {
    constructor() {
      this.reset()
    }

    reset() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 2
      this.vy = (Math.random() - 0.5) * 2
      this.size = Math.random() * 3 + 2
      this.color = CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)]
      this.targetX = null
      this.targetY = null
    }

    update(mouse) {
      // 优先级 1: 形成图案
      if (state.mode === 'forming' && this.targetX !== null) {
        // 聚合模式：趋向目标点
        const dx = this.targetX - this.x
        const dy = this.targetY - this.y
        this.x += dx * CONFIG.transitionSpeed
        this.y += dy * CONFIG.transitionSpeed
        
        // 抖动保持活力
        this.x += (Math.random() - 0.5) * 0.5
        this.y += (Math.random() - 0.5) * 0.5
      } 
      // 优先级 2: 自由游荡
      else {
        // 游荡模式
        this.x += this.vx
        this.y += this.vy

        // 边界反弹
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      // 鼠标排斥
      if (mouse.x) {
        const dx = this.x - mouse.x
        const dy = this.y - mouse.y
        const distSq = dx * dx + dy * dy // 使用平方距离优化性能
        const minDist = 100
        const minDistSq = minDist * minDist
        
        if (distSq < minDistSq) {
          const dist = Math.sqrt(distSq)
          const force = (minDist - dist) / minDist
          const angle = Math.atan2(dy, dx)
          this.x += Math.cos(angle) * force * 5
          this.y += Math.sin(angle) * force * 5
        }
      }
    }

    draw() {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.size, this.size) // 绘制成方块像素点
    }
  }

  const particles = []
  for (let i = 0; i < CONFIG.particleCount; i++) {
    particles.push(new Particle())
  }

  // 6. 核心逻辑：切换图案
  function switchShape() {
    const keys = Object.keys(shapes)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    const shapeMap = shapes[randomKey]
    
    // 解析点阵
    state.targets = []
    const rows = shapeMap.length
    const cols = shapeMap[0].length
    
    // 随机位置 (限制在画布范围内，预留边距)
    const margin = 50
    // 确保有足够的空间放置图案
    const safeW = Math.max(0, canvas.width - cols * CONFIG.gridSize - margin * 2)
    const safeH = Math.max(0, canvas.height - rows * CONFIG.gridSize - margin * 2)
    
    // 如果没有空间（比如移动端屏幕太小），则尝试居中，或者回退到左上角
    let offsetX = margin + (safeW > 0 ? Math.random() * safeW : 0)
    let offsetY = margin + (safeH > 0 ? Math.random() * safeH : 0)

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < shapeMap[r].length; c++) {
        if (shapeMap[r][c] !== ' ') {
          state.targets.push({
            x: offsetX + c * CONFIG.gridSize,
            y: offsetY + r * CONFIG.gridSize
          })
        }
      }
    }

    // 分配目标点
    particles.forEach((p, i) => {
      if (i < state.targets.length) {
        p.targetX = state.targets[i].x
        p.targetY = state.targets[i].y
      } else {
        p.targetX = null
        p.targetY = null
      }
    })

    state.currentShape = randomKey
  }

  // 7. 交互与尺寸
  let mouse = { x: null, y: null }

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })
  
  window.addEventListener('mouseleave', () => {
    mouse.x = null
    mouse.y = null
  })

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // 8. 动画循环
  function animate() {
    const now = Date.now()
    
    // 状态切换逻辑
    if (state.mode === 'idle') {
      if (now - state.lastSwitch > CONFIG.idleDuration) {
        state.mode = 'forming'
        state.lastSwitch = now
        switchShape()
      }
    } else if (state.mode === 'forming') {
      if (now - state.lastSwitch > CONFIG.shapeDuration) {
        state.mode = 'idle'
        state.lastSwitch = now
        // 释放所有粒子自由活动
        particles.forEach(p => {
          p.targetX = null
          p.targetY = null
          // 给一个随机速度让其散开
          p.vx = (Math.random() - 0.5) * 4
          p.vy = (Math.random() - 0.5) * 4
        })
      }
    }

    // 绘制
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(p => {
      p.update(mouse)
      p.draw()
    })

    // 绘制连线 (仅在 idle 模式且距离近时)
    if (state.mode === 'idle') {
      ctx.lineWidth = 0.5
      const connectDist = 80
      const connectDistSq = connectDist * connectDist
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distSq = dx * dx + dy * dy
          
          if (distSq < connectDistSq) {
            // 这里为了计算透明度还是需要 sqrt，或者是近似计算
            // 优化：只有在确定要画线时才开方，减少计算量
            const dist = Math.sqrt(distSq) 
            ctx.strokeStyle = `rgba(255, 215, 0, ${1 - dist/connectDist})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

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