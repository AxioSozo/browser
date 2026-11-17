# Engine bench summary — run 44065714644

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.


## Presenter pixel path — chromium Google Chrome 157.0.8103.50

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.02 [1.25] | 3.67 [4.83] |
| presenter_bgraToRGBA | 1.00 [1.21] | 4.75 [5.15] |
| candidate_u32_fast_path | 0.98 [1.14] | 4.76 [5.37] |
| putImageData_full | 0.17 [0.20] | 0.65 [0.68] |
| presenter_draw_full | 1.18 [1.28] | 5.52 [6.01] |
| surface_draw_full | 1.15 [1.27] | 4.68 [5.38] |
| surface_draw_damage10 | 0.12 [0.16] | 0.59 [0.66] |
| candidate_videoframe_full | 1.34 [1.54] | 4.34 [5.29] |
| candidate_videoframe_damage10 | 0.17 [0.21] | 0.61 [1.65] |
| surface_upload_draw_full | 1.33 [1.48] | 4.53 [5.30] |
| surface_upload_draw_damage10 | 0.19 [0.23] | 0.64 [1.33] |
| candidate_damage10_fast_put | 0.18 [0.20] | 0.68 [0.99] |
| candidate_createImageBitmap | 2.66 [3.45] | 12.38 [13.32] |
| candidate_webgl_full | 2.61 [3.46] | 11.91 [13.42] |
| candidate_webgl_damage10 | 2.23 [2.83] | 10.82 [14.65] |

## Presenter pixel path — firefox Mozilla Firefox 160.0

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: None

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.06 [1.28] | 3.68 [4.74] |
| presenter_bgraToRGBA | 1.28 [1.74] | 5.24 [6.12] |
| candidate_u32_fast_path | 1.42 [1.70] | 4.72 [5.36] |
| putImageData_full | 0.16 [0.22] | 0.64 [0.66] |
| presenter_draw_full | 1.90 [2.06] | 6.20 [6.88] |
| surface_draw_full | 2.20 [2.52] | 5.30 [5.56] |
| surface_draw_damage10 | 0.20 [0.24] | 0.58 [0.72] |
| candidate_videoframe_full | 1.32 [1.56] | 4.26 [4.98] |
| candidate_videoframe_damage10 | 0.08 [0.12] | 0.16 [0.26] |
| surface_upload_draw_full | 1.28 [1.50] | 4.30 [4.82] |
| surface_upload_draw_damage10 | 0.10 [0.12] | 0.22 [0.32] |
| candidate_damage10_fast_put | 0.28 [0.36] | 0.80 [0.88] |
| candidate_createImageBitmap | 3.32 [4.94] | 13.44 [16.72] |

## Presenter pixel path — v8 v22.23.4

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs bgraToRGBA (imported)`

| Step | 900×650 | 900×650 (10% translucent) | 1800×1300 | 1800×1300 (10% translucent) |
| --- | --- | --- | --- | --- |
| copy | 0.88 [1.65] | 0.23 [0.71] | 1.01 [3.39] | 0.96 [1.03] |
| presenter_bgraToRGBA | 1.01 [1.09] | 1.00 [1.01] | 2.49 [2.52] | 3.99 [4.02] |
| candidate_u32_opaque_fast_path | 1.08 [1.16] | 0.94 [0.97] | 2.47 [2.49] | 3.78 [3.79] |
