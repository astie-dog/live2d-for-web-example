/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Live2DCubismFramework as cubismid } from '../id/cubismid';
import { Live2DCubismFramework as csmstring } from '../type/csmstring';
import { Live2DCubismFramework as csmvector } from '../type/csmvector';
import csmVector = csmvector.csmVector;
import csmString = csmstring.csmString;
import CubismIdHandle = cubismid.CubismIdHandle;
export declare namespace Live2DCubismFramework {
    /**
     * @brief モーションカーブの種類
     *
     * モーションカーブの種類。
     */
    enum CubismMotionCurveTarget {
        CubismMotionCurveTarget_Model = 0,
        CubismMotionCurveTarget_Parameter = 1,
        CubismMotionCurveTarget_PartOpacity = 2
    }
    /**
     * @brief モーションカーブのセグメントの種類
     *
     * モーションカーブのセグメントの種類。
     */
    enum CubismMotionSegmentType {
        CubismMotionSegmentType_Linear = 0,
        CubismMotionSegmentType_Bezier = 1,
        CubismMotionSegmentType_Stepped = 2,
        CubismMotionSegmentType_InverseStepped = 3
    }
    /**
     * @brief モーションカーブの制御点
     *
     * モーションカーブの制御点。
     */
    class CubismMotionPoint {
        time: number;
        value: number;
    }
    /**
     * モーションカーブのセグメントの評価関数
     *
     * @param   points      モーションカーブの制御点リスト
     * @param   time        評価する時間[秒]
     */
    interface csmMotionSegmentEvaluationFunction {
        (points: CubismMotionPoint[], time: number): number;
    }
    /**
     * @brief モーションカーブのセグメント
     *
     * モーションカーブのセグメント。
     */
    class CubismMotionSegment {
        /**
         * @brief コンストラクタ
         *
         * コンストラクタ。
         */
        constructor();
        evaluate: csmMotionSegmentEvaluationFunction;
        basePointIndex: number;
        segmentType: number;
    }
    /**
     * @brief モーションカーブ
     *
     * モーションカーブ。
     */
    class CubismMotionCurve {
        constructor();
        type: CubismMotionCurveTarget;
        id: CubismIdHandle;
        segmentCount: number;
        baseSegmentIndex: number;
        fadeInTime: number;
        fadeOutTime: number;
    }
    /**
     * イベント。
     */
    class CubismMotionEvent {
        fireTime: number;
        value: csmString;
    }
    /**
     * @brief モーションデータ
     *
     * モーションデータ。
     */
    class CubismMotionData {
        constructor();
        duration: number;
        loop: boolean;
        curveCount: number;
        eventCount: number;
        fps: number;
        curves: csmVector<CubismMotionCurve>;
        segments: csmVector<CubismMotionSegment>;
        points: csmVector<CubismMotionPoint>;
        events: csmVector<CubismMotionEvent>;
    }
}
//# sourceMappingURL=cubismmotioninternal.d.ts.map