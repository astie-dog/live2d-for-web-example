"use strict";
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var cubismjson_1 = require("../utils/cubismjson");
var live2dcubismframework_1 = require("../live2dcubismframework");
var csmstring_1 = require("../type/csmstring");
var csmString = csmstring_1.Live2DCubismFramework.csmString;
var CubismFramework = live2dcubismframework_1.Live2DCubismFramework.CubismFramework;
var CubismJson = cubismjson_1.Live2DCubismFramework.CubismJson;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // JSON keys
    var Meta = 'Meta';
    var Duration = 'Duration';
    var Loop = 'Loop';
    var CurveCount = 'CurveCount';
    var Fps = 'Fps';
    var TotalSegmentCount = 'TotalSegmentCount';
    var TotalPointCount = 'TotalPointCount';
    var Curves = 'Curves';
    var Target = 'Target';
    var Id = 'Id';
    var FadeInTime = 'FadeInTime';
    var FadeOutTime = 'FadeOutTime';
    var Segments = 'Segments';
    var UserData = 'UserData';
    var UserDataCount = 'UserDataCount';
    var TotalUserDataSize = 'TotalUserDataSize';
    var Time = 'Time';
    var Value = 'Value';
    /**
     * motion3.jsonのコンテナ。
     */
    var CubismMotionJson = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param buffer motion3.jsonが読み込まれているバッファ
         * @param size バッファのサイズ
         */
        function CubismMotionJson(buffer, size) {
            this._json = CubismJson.create(buffer, size);
        }
        /**
         * デストラクタ相当の処理
         */
        CubismMotionJson.prototype.release = function () {
            CubismJson.delete(this._json);
        };
        /**
         * モーションの長さを取得する
         * @return モーションの長さ[秒]
         */
        CubismMotionJson.prototype.getMotionDuration = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(Duration)
                .toFloat();
        };
        /**
         * モーションのループ情報の取得
         * @return true ループする
         * @return false ループしない
         */
        CubismMotionJson.prototype.isMotionLoop = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(Loop)
                .toBoolean();
        };
        /**
         * モーションカーブの個数の取得
         * @return モーションカーブの個数
         */
        CubismMotionJson.prototype.getMotionCurveCount = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(CurveCount)
                .toInt();
        };
        /**
         * モーションのフレームレートの取得
         * @return フレームレート[FPS]
         */
        CubismMotionJson.prototype.getMotionFps = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(Fps)
                .toFloat();
        };
        /**
         * モーションのセグメントの総合計の取得
         * @return モーションのセグメントの取得
         */
        CubismMotionJson.prototype.getMotionTotalSegmentCount = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(TotalSegmentCount)
                .toInt();
        };
        /**
         * モーションのカーブの制御店の総合計の取得
         * @return モーションのカーブの制御点の総合計
         */
        CubismMotionJson.prototype.getMotionTotalPointCount = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(TotalPointCount)
                .toInt();
        };
        /**
         * モーションのフェードイン時間の存在
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionFadeInTime = function () {
            return !this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(FadeInTime)
                .isNull();
        };
        /**
         * モーションのフェードアウト時間の存在
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionFadeOutTime = function () {
            return !this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(FadeOutTime)
                .isNull();
        };
        /**
         * モーションのフェードイン時間の取得
         * @return フェードイン時間[秒]
         */
        CubismMotionJson.prototype.getMotionFadeInTime = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(FadeInTime)
                .toFloat();
        };
        /**
         * モーションのフェードアウト時間の取得
         * @return フェードアウト時間[秒]
         */
        CubismMotionJson.prototype.getMotionFadeOutTime = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(FadeOutTime)
                .toFloat();
        };
        /**
         * モーションのカーブの種類の取得
         * @param curveIndex カーブのインデックス
         * @return カーブの種類
         */
        CubismMotionJson.prototype.getMotionCurveTarget = function (curveIndex) {
            return this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(Target)
                .getRawString();
        };
        /**
         * モーションのカーブのIDの取得
         * @param curveIndex カーブのインデックス
         * @return カーブのID
         */
        CubismMotionJson.prototype.getMotionCurveId = function (curveIndex) {
            return CubismFramework.getIdManager().getId(this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(Id)
                .getRawString());
        };
        /**
         * モーションのカーブのフェードイン時間の存在
         * @param curveIndex カーブのインデックス
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionCurveFadeInTime = function (curveIndex) {
            return !this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(FadeInTime)
                .isNull();
        };
        /**
         * モーションのカーブのフェードアウト時間の存在
         * @param curveIndex カーブのインデックス
         * @return true 存在する
         * @return false 存在しない
         */
        CubismMotionJson.prototype.isExistMotionCurveFadeOutTime = function (curveIndex) {
            return !this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(FadeOutTime)
                .isNull();
        };
        /**
         * モーションのカーブのフェードイン時間の取得
         * @param curveIndex カーブのインデックス
         * @return フェードイン時間[秒]
         */
        CubismMotionJson.prototype.getMotionCurveFadeInTime = function (curveIndex) {
            return this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(FadeInTime)
                .toFloat();
        };
        /**
         * モーションのカーブのフェードアウト時間の取得
         * @param curveIndex カーブのインデックス
         * @return フェードアウト時間[秒]
         */
        CubismMotionJson.prototype.getMotionCurveFadeOutTime = function (curveIndex) {
            return this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(FadeOutTime)
                .toFloat();
        };
        /**
         * モーションのカーブのセグメントの個数を取得する
         * @param curveIndex カーブのインデックス
         * @return モーションのカーブのセグメントの個数
         */
        CubismMotionJson.prototype.getMotionCurveSegmentCount = function (curveIndex) {
            return this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(Segments)
                .getVector()
                .getSize();
        };
        /**
         * モーションのカーブのセグメントの値の取得
         * @param curveIndex カーブのインデックス
         * @param segmentIndex セグメントのインデックス
         * @return セグメントの値
         */
        CubismMotionJson.prototype.getMotionCurveSegment = function (curveIndex, segmentIndex) {
            return this._json
                .getRoot()
                .getValueByString(Curves)
                .getValueByIndex(curveIndex)
                .getValueByString(Segments)
                .getValueByIndex(segmentIndex)
                .toFloat();
        };
        /**
         * イベントの個数の取得
         * @return イベントの個数
         */
        CubismMotionJson.prototype.getEventCount = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(UserDataCount)
                .toInt();
        };
        /**
         *  イベントの総文字数の取得
         * @return イベントの総文字数
         */
        CubismMotionJson.prototype.getTotalEventValueSize = function () {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(TotalUserDataSize)
                .toInt();
        };
        /**
         * イベントの時間の取得
         * @param userDataIndex イベントのインデックス
         * @return イベントの時間[秒]
         */
        CubismMotionJson.prototype.getEventTime = function (userDataIndex) {
            return this._json
                .getRoot()
                .getValueByString(UserData)
                .getValueByIndex(userDataIndex)
                .getValueByString(Time)
                .toInt();
        };
        /**
         * イベントの取得
         * @param userDataIndex イベントのインデックス
         * @return イベントの文字列
         */
        CubismMotionJson.prototype.getEventValue = function (userDataIndex) {
            return new csmString(this._json
                .getRoot()
                .getValueByString(UserData)
                .getValueByIndex(userDataIndex)
                .getValueByString(Value)
                .getRawString());
        };
        return CubismMotionJson;
    }());
    Live2DCubismFramework.CubismMotionJson = CubismMotionJson;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));
//# sourceMappingURL=cubismmotionjson.js.map