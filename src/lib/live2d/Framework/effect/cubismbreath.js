"use strict";
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 呼吸機能
     *
     * 呼吸機能を提供する。
     */
    var CubismBreath = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismBreath() {
            this._currentTime = 0.0;
        }
        /**
         * インスタンスの作成
         */
        CubismBreath.create = function () {
            return new CubismBreath();
        };
        /**
         * インスタンスの破棄
         * @param instance 対象のCubismBreath
         */
        CubismBreath.delete = function (instance) {
            if (instance != null) {
                instance = null;
            }
        };
        /**
         * 呼吸のパラメータの紐づけ
         * @param breathParameters 呼吸を紐づけたいパラメータのリスト
         */
        CubismBreath.prototype.setParameters = function (breathParameters) {
            this._breathParameters = breathParameters;
        };
        /**
         * 呼吸に紐づいているパラメータの取得
         * @return 呼吸に紐づいているパラメータのリスト
         */
        CubismBreath.prototype.getParameters = function () {
            return this._breathParameters;
        };
        /**
         * モデルのパラメータの更新
         * @param model 対象のモデル
         * @param deltaTimeSeconds デルタ時間[秒]
         */
        CubismBreath.prototype.updateParameters = function (model, deltaTimeSeconds) {
            this._currentTime += deltaTimeSeconds;
            var t = this._currentTime * 2.0 * 3.14159;
            for (var i = 0; i < this._breathParameters.getSize(); ++i) {
                var data = this._breathParameters.at(i);
                model.addParameterValueById(data.parameterId, data.offset + data.peak * Math.sin(t / data.cycle), data.weight);
            }
        };
        return CubismBreath;
    }());
    Live2DCubismFramework.CubismBreath = CubismBreath;
    /**
     * 呼吸のパラメータ情報
     */
    var BreathParameterData = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param parameterId   呼吸をひもづけるパラメータID
         * @param offset        呼吸を正弦波としたときの、波のオフセット
         * @param peak          呼吸を正弦波としたときの、波の高さ
         * @param cycle         呼吸を正弦波としたときの、波の周期
         * @param weight        パラメータへの重み
         */
        function BreathParameterData(parameterId, offset, peak, cycle, weight) {
            this.parameterId = parameterId == undefined ? null : parameterId;
            this.offset = offset == undefined ? 0.0 : offset;
            this.peak = peak == undefined ? 0.0 : peak;
            this.cycle = cycle == undefined ? 0.0 : cycle;
            this.weight = weight == undefined ? 0.0 : weight;
        }
        return BreathParameterData;
    }());
    Live2DCubismFramework.BreathParameterData = BreathParameterData;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));
//# sourceMappingURL=cubismbreath.js.map