"use strict";
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var cubismmodeluserdatajson_1 = require("./cubismmodeluserdatajson");
var csmstring_1 = require("../type/csmstring");
var csmvector_1 = require("../type/csmvector");
var live2dcubismframework_1 = require("../live2dcubismframework");
var CubismFramework = live2dcubismframework_1.Live2DCubismFramework.CubismFramework;
var csmVector = csmvector_1.Live2DCubismFramework.csmVector;
var csmString = csmstring_1.Live2DCubismFramework.csmString;
var CubismModelUserDataJson = cubismmodeluserdatajson_1.Live2DCubismFramework.CubismModelUserDataJson;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    var ArtMesh = 'ArtMesh';
    /**
     * ユーザーデータインターフェース
     *
     * Jsonから読み込んだユーザーデータを記録しておくための構造体
     */
    var CubismModelUserDataNode = /** @class */ (function () {
        function CubismModelUserDataNode() {
        }
        return CubismModelUserDataNode;
    }());
    Live2DCubismFramework.CubismModelUserDataNode = CubismModelUserDataNode;
    /**
     * ユーザデータの管理クラス
     *
     * ユーザデータをロード、管理、検索インターフェイス、解放までを行う。
     */
    var CubismModelUserData = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismModelUserData() {
            this._userDataNodes = new csmVector();
            this._artMeshUserDataNode = new csmVector();
        }
        /**
         * インスタンスの作成
         *
         * @param buffer    userdata3.jsonが読み込まれているバッファ
         * @param size      バッファのサイズ
         * @return 作成されたインスタンス
         */
        CubismModelUserData.create = function (buffer, size) {
            var ret = new CubismModelUserData();
            ret.parseUserData(buffer, size);
            return ret;
        };
        /**
         * インスタンスを破棄する
         *
         * @param modelUserData 破棄するインスタンス
         */
        CubismModelUserData.delete = function (modelUserData) {
            if (modelUserData != null) {
                modelUserData.release();
                modelUserData = null;
            }
        };
        /**
         * ArtMeshのユーザーデータのリストの取得
         *
         * @return ユーザーデータリスト
         */
        CubismModelUserData.prototype.getArtMeshUserDatas = function () {
            return this._artMeshUserDataNode;
        };
        /**
         * userdata3.jsonのパース
         *
         * @param buffer    userdata3.jsonが読み込まれているバッファ
         * @param size      バッファのサイズ
         */
        CubismModelUserData.prototype.parseUserData = function (buffer, size) {
            var json = new CubismModelUserDataJson(buffer, size);
            var typeOfArtMesh = CubismFramework.getIdManager().getId(ArtMesh);
            var nodeCount = json.getUserDataCount();
            for (var i = 0; i < nodeCount; i++) {
                var addNode = new CubismModelUserDataNode();
                addNode.targetId = json.getUserDataId(i);
                addNode.targetType = CubismFramework.getIdManager().getId(json.getUserDataTargetType(i));
                addNode.value = new csmString(json.getUserDataValue(i));
                this._userDataNodes.pushBack(addNode);
                if (addNode.targetType == typeOfArtMesh) {
                    this._artMeshUserDataNode.pushBack(addNode);
                }
            }
            json.release();
            json = void 0;
        };
        /**
         * デストラクタ相当の処理
         *
         * ユーザーデータ構造体配列を解放する
         */
        CubismModelUserData.prototype.release = function () {
            for (var i = 0; i < this._userDataNodes.getSize(); ++i) {
                this._userDataNodes.set(i, null);
            }
            this._userDataNodes = null;
        };
        return CubismModelUserData;
    }());
    Live2DCubismFramework.CubismModelUserData = CubismModelUserData;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));
//# sourceMappingURL=cubismmodeluserdata.js.map