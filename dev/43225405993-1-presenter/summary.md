# Engine bench summary — run 43225405993

Component benchmark over the AXCF pipe (tools/engine-bench). Median over repetitions, [p95]. Never Zen E1/E2 evidence. GitHub-hosted runners have no GPU: every engine renders in software.


## Presenter pixel path — chromium Google Chrome 156.0.8078.79

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.22 [2.37] | 4.48 [5.29] |
| presenter_bgraToRGBA | 1.53 [2.63] | 5.31 [5.71] |
| candidate_u32_fast_path | 1.48 [3.02] | 6.04 [6.29] |
| putImageData_full | 0.10 [0.12] | 0.34 [0.45] |
| presenter_draw_full | 1.59 [1.99] | 5.96 [13.12] |
| surface_draw_full | 1.62 [1.97] | 6.82 [7.67] |
| surface_draw_damage10 | 0.18 [0.28] | 0.69 [1.25] |
| candidate_videoframe_full | 1.30 [1.79] | 7.16 [10.04] |
| candidate_videoframe_damage10 | 0.25 [0.41] | 1.08 [5.07] |
| surface_upload_draw_full | 1.51 [1.73] | 7.86 [16.17] |
| surface_upload_draw_damage10 | 0.27 [0.48] | 0.85 [12.09] |
| candidate_damage10_fast_put | 0.28 [0.42] | 0.86 [1.26] |
| candidate_createImageBitmap | 3.85 [9.29] | 15.60 [24.46] |
| candidate_webgl_full | 3.19 [5.82] | 16.11 [16.93] |
| candidate_webgl_damage10 | 6.00 [11.01] | 14.56 [19.77] |

## Presenter pixel path — firefox Mozilla Firefox 159.0

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs`; WebGL renderer: None

| Step | 900×650 | 1800×1300 |
| --- | --- | --- |
| alloc_copy | 1.08 [1.58] | 4.56 [8.10] |
| presenter_bgraToRGBA | 1.32 [2.54] | 5.34 [5.92] |
| candidate_u32_fast_path | 1.14 [1.64] | 3.86 [4.28] |
| putImageData_full | 0.14 [0.18] | 0.44 [0.50] |
| presenter_draw_full | 1.70 [2.42] | 6.20 [7.46] |
| surface_draw_full | 2.18 [2.70] | 6.04 [7.36] |
| surface_draw_damage10 | 0.24 [0.32] | 0.60 [1.08] |
| candidate_videoframe_full | 1.86 [4.08] | 5.62 [5.94] |
| candidate_videoframe_damage10 | 0.08 [0.10] | 0.12 [0.40] |
| surface_upload_draw_full | 1.52 [4.46] | 6.54 [8.14] |
| surface_upload_draw_damage10 | 0.08 [0.14] | 0.24 [0.40] |
| candidate_damage10_fast_put | 0.36 [0.48] | 1.14 [1.58] |
| candidate_createImageBitmap | 5.98 [8.34] | 24.64 [29.22] |

## Presenter pixel path — v8 v22.23.4

Status PASS; ms per frame, median [p95]; source `apps/browser/chrome/CEFPresenter.sys.mjs bgraToRGBA (imported)`

| Step | 900×650 | 900×650 (10% translucent) | 1800×1300 | 1800×1300 (10% translucent) |
| --- | --- | --- | --- | --- |
| copy | 0.25 [1.12] | 0.22 [1.04] | 1.39 [4.57] | 1.27 [4.59] |
| presenter_bgraToRGBA | 1.39 [1.46] | 1.40 [1.44] | 3.67 [3.74] | 5.71 [5.82] |
| candidate_u32_opaque_fast_path | 1.29 [1.32] | 1.27 [1.35] | 3.67 [3.83] | 5.20 [5.30] |
