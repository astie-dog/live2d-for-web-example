import { Live2DCubismFramework } from './Framework/live2dcubismframework'
const CubismFramework = Live2DCubismFramework.CubismFramework

import { Live2DCubismFramework as icubismmodelsetting } from './Framework/icubismmodelsetting'
abstract class ICubismModelSetting extends icubismmodelsetting.ICubismModelSetting {}

import { Live2DCubismFramework as cubismmodelsettingjson } from './Framework/cubismmodelsettingjson'
class CubismModelSettingJson extends cubismmodelsettingjson.CubismModelSettingJson {}

// math
import { Live2DCubismFramework as cubismmatrix44 } from './Framework/math/cubismmatrix44'
class CubismMatrix44 extends cubismmatrix44.CubismMatrix44 {}

import { Live2DCubismFramework as cubismusermodel } from './Framework/model/cubismusermodel'
class CubismUserModel extends cubismusermodel.CubismUserModel {}

// motion
import { Live2DCubismFramework as acubismmotion } from './Framework/motion/acubismmotion'
abstract class ACubismMotion extends acubismmotion.ACubismMotion {}

// import { Live2DCubismFramework as cubismmotion } from './Framework/motion/cubismmotion'
// class CubismMotion extends cubismmotion.CubismMotion {}

// import { Live2DCubismFramework as cubismmotionmanager } from './Framework/motion/cubismmotionmanager'
// class CubismMotionManager extends cubismmotionmanager.CubismMotionManager {}

// physics
import { Live2DCubismFramework as cubismphysics } from './Framework/physics/cubismphysics'
class CubismPhysics extends cubismphysics.CubismPhysics {}

// cubismid
import { Live2DCubismFramework as cubismid } from './Framework/id/cubismid'
type CubismIdHandle = cubismid.CubismIdHandle

// effect
import { Live2DCubismFramework as cubismeyeblink } from './Framework/effect/cubismeyeblink'
class CubismEyeBlink extends cubismeyeblink.CubismEyeBlink {}

// type
import { Live2DCubismFramework as csmvector } from './Framework/type/csmvector'
class csmVector<T> extends csmvector.csmVector<T> {}

export {
  CubismFramework,
  ICubismModelSetting,
  CubismModelSettingJson,
  CubismMatrix44,
  CubismUserModel,
  ACubismMotion,
  // CubismMotion,
  // CubismMotionManager,
  CubismPhysics,
  CubismEyeBlink,
  csmVector
}
export type {
  CubismIdHandle
}