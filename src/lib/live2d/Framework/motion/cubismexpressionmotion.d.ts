/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Live2DCubismFramework as acubismmotion } from './acubismmotion';
import { Live2DCubismFramework as cubismid } from '../id/cubismid';
import { Live2DCubismFramework as cubismmodel } from '../model/cubismmodel';
import { Live2DCubismFramework as cubismmotionqueueentry } from './cubismmotionqueueentry';
import { Live2DCubismFramework as csmvector } from '../type/csmvector';
import csmVector = csmvector.csmVector;
import CubismMotionQueueEntry = cubismmotionqueueentry.CubismMotionQueueEntry;
import CubismModel = cubismmodel.CubismModel;
import CubismIdHandle = cubismid.CubismIdHandle;
import ACubismMotion = acubismmotion.ACubismMotion;
export declare namespace Live2DCubismFramework {
    /**
     * 表情のモーション
     *
     * 表情のモーションクラス。
     */
    class CubismExpressionMotion extends ACubismMotion {
        /**
         * インスタンスを作成する。
         * @param buffer expファイルが読み込まれているバッファ
         * @param size バッファのサイズ
         * @return 作成されたインスタンス
         */
        static create(buffer: ArrayBuffer, size: number): CubismExpressionMotion;
        /**
         * モデルのパラメータの更新の実行
         * @param model 対象のモデル
         * @param userTimeSeconds デルタ時間の積算値[秒]
         * @param weight モーションの重み
         * @param motionQueueEntry CubismMotionQueueManagerで管理されているモーション
         */
        doUpdateParameters(model: CubismModel, userTimeSeconds: number, weight: number, motionQueueEntry: CubismMotionQueueEntry): void;
        /**
         * コンストラクタ
         */
        constructor();
        _parameters: csmVector<ExpressionParameter>;
    }
    /**
     * 表情パラメータ値の計算方式
     */
    enum ExpressionBlendType {
        ExpressionBlendType_Add = 0,
        ExpressionBlendType_Multiply = 1,
        ExpressionBlendType_Overwrite = 2
    }
    /**
     * 表情のパラメータ情報
     */
    class ExpressionParameter {
        parameterId: CubismIdHandle;
        blendType: ExpressionBlendType;
        value: number;
    }
}
//# sourceMappingURL=cubismexpressionmotion.d.ts.map