# Engine bench summary — run 43227468200

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.


## Presenter pixel path — chromium Google Chrome 156.0.8078.79

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.68 [6.73] | 4.52 [8.37] |
| presenter_bgraToRGBA | 1.51 [2.83] | 5.19 [5.34] |
| candidate_u32_fast_path | 1.50 [3.06] | 5.95 [6.24] |
| putImageData_full | 0.09 [0.12] | 0.47 [0.55] |
| presenter_draw_full | 1.60 [2.02] | 5.96 [12.61] |
| surface_draw_full | 1.63 [1.86] | 6.76 [7.01] |
| surface_draw_damage10 | 0.18 [0.32] | 0.71 [0.86] |
| candidate_videoframe_full | 1.57 [1.80] | 5.48 [8.12] |
| candidate_videoframe_damage10 | 0.25 [0.40] | 0.90 [3.45] |
| surface_upload_draw_full | 1.60 [1.84] | 6.20 [8.09] |
| surface_upload_draw_damage10 | 0.28 [0.54] | 1.02 [12.52] |
| candidate_damage10_fast_put | 0.28 [0.46] | 1.08 [1.32] |
| candidate_createImageBitmap | 3.92 [5.45] | 16.84 [31.69] |
| candidate_webgl_full | 3.23 [5.36] | 16.63 [23.53] |
| candidate_webgl_damage10 | 2.98 [7.03] | 14.78 [18.68] |

## Presenter pixel path — firefox Mozilla Firefox 159.0

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: None

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.30 [1.94] | 4.60 [11.98] |
| presenter_bgraToRGBA | 1.54 [2.48] | 5.18 [8.40] |
| candidate_u32_fast_path | 1.24 [1.84] | 3.90 [4.64] |
| putImageData_full | 0.14 [0.18] | 0.44 [0.58] |
| presenter_draw_full | 2.48 [3.12] | 6.02 [6.36] |
| surface_draw_full | 2.12 [2.92] | 6.10 [7.24] |
| surface_draw_damage10 | 0.32 [0.52] | 0.64 [0.80] |
| candidate_videoframe_full | 1.58 [2.10] | 6.00 [6.88] |
| candidate_videoframe_damage10 | 0.10 [0.24] | 0.18 [0.40] |
| surface_upload_draw_full | 1.66 [2.12] | 5.92 [6.36] |
| surface_upload_draw_damage10 | 0.10 [0.18] | 0.20 [0.42] |
| candidate_damage10_fast_put | 0.38 [0.48] | 1.08 [1.24] |
| candidate_createImageBitmap | 6.56 [10.30] | 21.50 [28.42] |

## Presenter pixel path — v8 v22.23.4

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs bgraToRGBA (imported)`

| Step | 900×650 | 900×650 (10% translucent) | 1800×1300 | 1800×1300 (10% translucent) |
| --- | --- | --- | --- | --- |
| copy | 1.02 [3.88] | 0.22 [1.09] | 1.01 [4.52] | 1.19 [4.29] |
| presenter_bgraToRGBA | 1.38 [1.42] | 1.40 [1.44] | 3.70 [3.78] | 5.69 [5.81] |
| candidate_u32_opaque_fast_path | 1.28 [1.31] | 1.27 [1.33] | 3.66 [4.22] | 5.21 [5.70] |
