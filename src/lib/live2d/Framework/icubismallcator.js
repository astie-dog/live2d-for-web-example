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
     * メモリアロケーションを抽象化したクラス
     *
     * メモリ確保・解放処理をプラットフォーム側で実装して
     * フレームワークから呼び出すためのインターフェース
     */
    var ICubismAllocator = /** @class */ (function () {
        function ICubismAllocator() {
        }
        return ICubismAllocator;
    }());
    Live2DCubismFramework.ICubismAllocator = ICubismAllocator;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));
//# sourceMappingURL=icubismallcator.js.map