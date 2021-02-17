"use strict";
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var cubismvector2_1 = require("../math/cubismvector2");
var csmvector_1 = require("../type/csmvector");
var csmVector = csmvector_1.Live2DCubismFramework.csmVector;
var CubismVector2 = cubismvector2_1.Live2DCubismFramework.CubismVector2;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 物理演算の適用先の種類
     */
    var CubismPhysicsTargetType;
    (function (CubismPhysicsTargetType) {
        CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter"; // パラメータに対して適用
    })(CubismPhysicsTargetType = Live2DCubismFramework.CubismPhysicsTargetType || (Live2DCubismFramework.CubismPhysicsTargetType = {}));
    /**
     * 物理演算の入力の種類
     */
    var CubismPhysicsSource;
    (function (CubismPhysicsSource) {
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
        CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle"; // 角度から
    })(CubismPhysicsSource = Live2DCubismFramework.CubismPhysicsSource || (Live2DCubismFramework.CubismPhysicsSource = {}));
    /**
     * @brief 物理演算で使用する外部の力
     *
     * 物理演算で使用する外部の力。
     */
    var PhysicsJsonEffectiveForces = /** @class */ (function () {
        function PhysicsJsonEffectiveForces() {
            this.gravity = new CubismVector2(0, 0);
            this.wind = new CubismVector2(0, 0);
        }
        return PhysicsJsonEffectiveForces;
    }());
    Live2DCubismFramework.PhysicsJsonEffectiveForces = PhysicsJsonEffectiveForces;
    /**
     * 物理演算のパラメータ情報
     */
    var CubismPhysicsParameter = /** @class */ (function () {
        function CubismPhysicsParameter() {
        }
        return CubismPhysicsParameter;
    }());
    Live2DCubismFramework.CubismPhysicsParameter = CubismPhysicsParameter;
    /**
     * 物理演算の正規化情報
     */
    var CubismPhysicsNormalization = /** @class */ (function () {
        function CubismPhysicsNormalization() {
        }
        return CubismPhysicsNormalization;
    }());
    Live2DCubismFramework.CubismPhysicsNormalization = CubismPhysicsNormalization;
    /**
     * 物理演算の演算委使用する物理点の情報
     */
    var CubismPhysicsParticle = /** @class */ (function () {
        function CubismPhysicsParticle() {
            this.initialPosition = new CubismVector2(0, 0);
            this.position = new CubismVector2(0, 0);
            this.lastPosition = new CubismVector2(0, 0);
            this.lastGravity = new CubismVector2(0, 0);
            this.force = new CubismVector2(0, 0);
            this.velocity = new CubismVector2(0, 0);
        }
        return CubismPhysicsParticle;
    }());
    Live2DCubismFramework.CubismPhysicsParticle = CubismPhysicsParticle;
    /**
     * 物理演算の物理点の管理
     */
    var CubismPhysicsSubRig = /** @class */ (function () {
        function CubismPhysicsSubRig() {
            this.normalizationPosition = new CubismPhysicsNormalization();
            this.normalizationAngle = new CubismPhysicsNormalization();
        }
        return CubismPhysicsSubRig;
    }());
    Live2DCubismFramework.CubismPhysicsSubRig = CubismPhysicsSubRig;
    /**
     * 物理演算の入力情報
     */
    var CubismPhysicsInput = /** @class */ (function () {
        function CubismPhysicsInput() {
            this.source = new CubismPhysicsParameter();
        }
        return CubismPhysicsInput;
    }());
    Live2DCubismFramework.CubismPhysicsInput = CubismPhysicsInput;
    /**
     * @brief 物理演算の出力情報
     *
     * 物理演算の出力情報。
     */
    var CubismPhysicsOutput = /** @class */ (function () {
        function CubismPhysicsOutput() {
            this.destination = new CubismPhysicsParameter();
            this.translationScale = new CubismVector2(0, 0);
        }
        return CubismPhysicsOutput;
    }());
    Live2DCubismFramework.CubismPhysicsOutput = CubismPhysicsOutput;
    /**
     * @brief 物理演算のデータ
     *
     * 物理演算のデータ。
     */
    var CubismPhysicsRig = /** @class */ (function () {
        function CubismPhysicsRig() {
            this.settings = new csmVector();
            this.inputs = new csmVector();
            this.outputs = new csmVector();
            this.particles = new csmVector();
            this.gravity = new CubismVector2(0, 0);
            this.wind = new CubismVector2(0, 0);
        }
        return CubismPhysicsRig;
    }());
    Live2DCubismFramework.CubismPhysicsRig = CubismPhysicsRig;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));
//# sourceMappingURL=cubismphysicsinternal.js.map