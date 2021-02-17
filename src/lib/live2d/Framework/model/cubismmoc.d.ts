/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Live2DCubismFramework as cubismmodel } from './cubismmodel';
import CubismModel = cubismmodel.CubismModel;
export declare namespace Live2DCubismFramework {
    /**
     * Mocデータの管理
     *
     * Mocデータの管理を行うクラス。
     */
    class CubismMoc {
        /**
         * Mocデータの作成
         */
        static create(mocBytes: ArrayBuffer): CubismMoc;
        /**
         * Mocデータを削除
         *
         * Mocデータを削除する
         */
        static delete(moc: CubismMoc): void;
        /**
         * モデルを作成する
         *
         * @return Mocデータから作成されたモデル
         */
        createModel(): CubismModel;
        /**
         * モデルを削除する
         */
        deleteModel(model: CubismModel): void;
        /**
         * コンストラクタ
         */
        private constructor();
        /**
         * デストラクタ相当の処理
         */
        release(): void;
        _moc: Live2DCubismCore.Moc;
        _modelCount: number;
    }
}
//# sourceMappingURL=cubismmoc.d.ts.map