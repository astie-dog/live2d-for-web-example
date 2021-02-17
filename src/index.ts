import { FacePoint } from './lib/FacePoint';
import axios from 'axios'
import { live2dRender } from './renderer'
import { getAngle, getDistance } from './util/MathUtil'
const canvas = document.getElementById('canvas') as HTMLCanvasElement

const MODEL_FILES = {
  moc3: './model/Hiyori/hiyori.moc3',
  model3: './model/Hiyori/hiyori.model3.json',
  physics3: './model/Hiyori/hiyori.physics3.json',
  textures: [
    './model/Hiyori/hiyori.2048/texture_00.png',
    './model/Hiyori/hiyori.2048/texture_01.png'
  ]
}

async function load() {
  try {
    const [model, moc3, physics, ...textures] = await Promise.all([
      axios.get<ArrayBuffer>(MODEL_FILES.model3, { responseType: 'arraybuffer' }).then(res => res.data),
      axios.get(MODEL_FILES.moc3, { responseType: 'arraybuffer' }).then(res => res.data),
      axios.get(MODEL_FILES.physics3, { responseType: 'arraybuffer' }).then(res => res.data),
      ...MODEL_FILES.textures.map(texture => {
        return axios.get(texture, { responseType: 'blob' }).then(res => res.data)
      })
    ])
    const { updatePoint } = await live2dRender(canvas, model, {
      moc3,
      physics,
      textures,
    }, {
      autoBlink: true,
      x: 0,
      y: 1,
      scale: 1
    })
    let point = new FacePoint()
    const _handleOnMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      const rect = canvas.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const distance = getDistance(x, y, cx, cy)
      const dx = cx - x
      const dy = cy - y
      const angle = getAngle(x, y, cx, cy)
      const r = Math.cos(angle) * Math.sin(angle) * 180 / Math.PI
      Object.assign(point, {
        angleX: -dx / 10,
        angleY: dy / 10,
        angleZ: r * (distance / cx),
        angleEyeX: -dx / cx,
        angleEyeY: dy / cy,
      })
      updatePoint(point)
    }
    document.body.addEventListener('mousemove', _handleOnMouseMove, false)
  } catch(e) {
    alert(e.message)
    console.error(e)
  }
}
window.addEventListener('load', () => {
  load()
})
