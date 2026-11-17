# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## chromium (PASS)

CPU: Intel(R) Xeon(R) 6975P-C; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | switch-to-engine | — | — | **8.4** (main 3.8, Renderer 2.3, DOM Worker 1.5, TaskCon~ller # 0.4, WRRende~ckend# 0.4) | AxioCEFProbe 5.3, cef:gpu-process 1.9, Web Content 1.9, cef:renderer 1.1 | — | 2599.8 |
| plain | idle | — | — | **3.9** (main 3.4, Timer 0.5) | Privileged Cont 1.0, AxioCEFProbe 0.5, WebExtensions 0.5 | — | — |
| plain | raf | 60.0 | 21.0 | **14.5** (main 5.9, Renderer 1.6, DOM Worker 1.6, SwComposite 1.3, glean.dispatche 1.0) | cef:renderer 5.6, AxioCEFProbe 4.0, cef:gpu-process 2.9, WebExtensions 0.3 | — | — |
| plain | raf-nosampler | — | — | **13.7** (main 4.0, Renderer 2.0, DOM Worker 2.0, WRRende~ckend# 1.0, Backgro~Pool # 1.0) | cef:renderer 5.4, AxioCEFProbe 4.4, cef:gpu-process 4.0, Isolated Web Co 0.3 | — | — |
| plain | scroll | 60.0 | 22.1 | **30.5** (main 14.5, DOM Worker 5.5, Backgro~Pool # 2.5, TaskCon~ller # 1.5, Timer 1.0) | cef:gpu-process 14.5, AxioCEFProbe 6.5, cef:renderer 6.0, Privileged Cont 0.5 | — | — |
| plain | key | — | — | **12.7** (main 7.5, Renderer 1.1, DOM Worker 1.1, Timer 0.6, TaskCon~ller # 0.6) | cef:renderer 2.2, AxioCEFProbe 2.0, cef:gpu-process 0.6 | 11.5 | — |
| plain | switch-to-gecko | — | — | **12.4** (DOM Worker 3.5, main 3.1, Indexed~ IO # 2.6, IPDL Background 1.2, TaskCon~ller # 0.9) |  | — | 15384.8 |
| trace | switch-to-engine | — | — | **93.8** (main 44.5, Renderer 19.8, TaskCon~ller # 9.9, glean.dispatche 4.9, WRRende~ckend# 4.9) | AxioCEFProbe 49.4, cef:gpu-process 29.7, cef:renderer 9.9, cef:utility 9.8 | — | 170.8 |
| trace | idle | — | — | **4.4** (main 3.4, IPC I/O Parent 0.5, Timer 0.5) | Web Content 1.5, forkserver 0.5, AxioCEFProbe 0.5 | — | — |
| trace | raf | 60.0 | 21.2 | **15.8** (main 6.2, Renderer 2.0, DOM Worker 2.0, WRRende~ckend# 1.0, Compositor 1.0) | cef:renderer 5.6, cef:gpu-process 3.3, AxioCEFProbe 3.2 | — | — |
| trace | raf-nosampler | — | — | **14.2** (main 4.7, Renderer 2.0, DOM Worker 2.0, Backgro~Pool # 1.3, SwComposite 1.3) | cef:renderer 5.3, AxioCEFProbe 4.4, cef:gpu-process 4.0 | — | — |
| trace | scroll | 60.2 | 25.5 | **31.0** (main 14.5, DOM Worker 6.0, TaskCon~ller # 2.5, Backgro~Pool # 2.5, Renderer 1.5) | cef:gpu-process 16.0, AxioCEFProbe 6.5, cef:renderer 6.0, Web Content 0.5 | — | — |
| trace | key | — | — | **13.7** (main 7.7, Renderer 1.1, DOM Worker 1.1, Timer 0.8, TaskCon~ller # 0.6) | AxioCEFProbe 1.7, cef:renderer 1.7, cef:gpu-process 0.6, WebExtensions 0.3 | 11.6 | — |
| trace | switch-to-gecko | — | — | **1.3** (main 0.7, TaskCon~ller # 0.3, DOM Worker 0.1, IPC I/O Parent 0.1, Renderer 0.1) | WebExtensions 0.1, Web Content 0.1, Privileged Cont 0.1, Isolated Web Co 0.1 | — | 15016.5 |
| profile | switch-to-engine | — | — | **75.6** (main 42.0, Renderer 25.2, DOM Worker 8.4) | cef:renderer 25.2, AxioCEFProbe 25.2, cef:utility 16.8 | — | 82.2 |
| profile | idle | — | — | **15.7** (SamplerThread 5.9, DOM Worker 4.4, main 3.9, Timer 1.5) | Web Content 4.9, WebExtensions 1.0, Privileged Cont 1.0, Isolated Web Co 1.0 | — | — |
| profile | raf | 60.0 | 21.4 | **35.0** (main 8.5, DOM Worker 8.5, SamplerThread 7.5, Renderer 2.0, Timer 1.3) | cef:renderer 6.2, Web Content 5.2, AxioCEFProbe 3.9, cef:gpu-process 3.6 | — | — |
| profile | raf-nosampler | — | — | **26.2** (DOM Worker 8.0, SamplerThread 6.3, main 4.3, Renderer 2.0, Backgro~Pool # 1.3) | cef:renderer 5.6, Web Content 4.9, cef:gpu-process 4.0, AxioCEFProbe 4.0 | — | — |
| profile | scroll | 60.3 | 20.8 | **50.0** (main 18.0, DOM Worker 12.0, SamplerThread 8.0, Backgro~Pool # 3.0, Renderer 2.0) | cef:gpu-process 17.0, AxioCEFProbe 8.0, cef:renderer 7.5, Web Content 5.5 | — | — |
| profile | key | — | — | **27.4** (main 8.8, DOM Worker 6.4, SamplerThread 6.4, Renderer 1.7, Timer 0.8) | Web Content 6.4, cef:renderer 2.5, AxioCEFProbe 1.7, WebExtensions 1.7 | 13.4 | — |
| profile | switch-to-gecko | — | — | **63.0** (main 21.0, DOM Worker 14.0, IPDL Background 7.0, WRRende~ckend# 7.0, Compositor 7.0) | Isolated Web Co 7.0 | — | 124.5 |

Frame path (median ms per frame; hooks). recv/paint fps = frames read / surface paints per s; header wait = idle until the next AXCF header; payload read = Subprocess read(size) call → resolve; assemble = damage payload → whole frame; native apply = NativeFrameSinks.apply call → resolve (AxioFrameRing queue + main-thread hop); native resolve→ack = presenter present + ack write; tick wait = accept → rAF paint start; paint = convert + putImageData of the damage union; main-thread share = (payload reads + assembly + paints) / window.

| pass | window | recv fps | paint fps | superseded | MB/s | payload KB | damage share | header wait | payload read | assemble | native apply | native resolve→ack | tick wait | paint | convert | put | paint→MozAfterPaint | main-thread share |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | switch-to-engine | 9.2 | 0.0 | 0 | 0.0 | — | — | 4.1 | 0.0 | — | 3.56 | 1.01 | — | — | — | — | — | 0.009 |
| trace | raf | 59.8 | 0.0 | 0 | 0.0 | — | — | 16.1 | 0.0 | — | 0.10 | 0.07 | — | — | — | — | — | 0.004 |
| trace | raf-nosampler | 59.5 | 0.0 | 0 | 0.0 | — | — | 16.2 | 0.0 | — | 0.12 | 0.07 | — | — | — | — | — | 0.005 |
| trace | scroll | 59.3 | 0.0 | 0 | 0.0 | — | — | 5.5 | 0.0 | — | 0.25 | 0.06 | — | — | — | — | — | 0.004 |
| trace | key | 5.8 | 0.0 | 0 | 0.0 | — | — | 3.8 | 0.0 | — | 0.19 | 0.10 | — | — | — | — | — | 0.001 |
| profile | switch-to-engine | 15.0 | 0.0 | 0 | 0.0 | — | — | 1.9 | 0.0 | — | 2.32 | 0.81 | — | — | — | — | — | 0.012 |
| profile | raf | 60.0 | 0.0 | 0 | 0.0 | — | — | 15.9 | 0.0 | — | 0.10 | 0.08 | — | — | — | — | — | 0.006 |
| profile | raf-nosampler | 59.8 | 0.0 | 0 | 0.0 | — | — | 16.0 | 0.0 | — | 0.12 | 0.10 | — | — | — | — | — | 0.006 |
| profile | scroll | 59.5 | 0.0 | 0 | 0.0 | — | — | 7.8 | 0.0 | — | 0.28 | 0.10 | — | — | — | — | — | 0.007 |
| profile | key | 5.8 | 0.0 | 0 | 0.0 | — | — | 4.4 | 0.0 | — | 0.36 | 0.12 | — | — | — | — | — | 0.001 |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | switch-to-engine | memfd | native | 2 | 2 | 1.201 | 1.324 | 0.0009 | 0.0010 |
| plain | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| plain | raf | memfd | native | 184 | 184 | 0.038 | 0.066 | 0.0023 | 0.0040 |
| plain | raf-nosampler | memfd | native | 181 | 181 | 0.058 | 0.080 | 0.0035 | 0.0048 |
| plain | scroll | memfd | native | 118 | 118 | 0.198 | 0.257 | 0.0116 | 0.0151 |
| plain | key | memfd | native | 21 | 21 | 0.021 | 0.088 | 0.0001 | 0.0005 |
| plain | switch-to-gecko | — | — | — | — | — | — | — | — |
| trace | switch-to-engine | memfd | native | 2 | 2 | 2.427 | 2.076 | 0.0224 | 0.0191 |
| trace | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| trace | raf | memfd | native | 183 | 183 | 0.046 | 0.076 | 0.0027 | 0.0045 |
| trace | raf-nosampler | memfd | native | 181 | 181 | 0.057 | 0.083 | 0.0034 | 0.0050 |
| trace | scroll | memfd | native | 119 | 119 | 0.187 | 0.262 | 0.0111 | 0.0155 |
| trace | key | memfd | native | 21 | 21 | 0.026 | 0.110 | 0.0001 | 0.0006 |
| trace | switch-to-gecko | — | — | — | — | — | — | — | — |
| profile | switch-to-engine | memfd | native | 2 | 2 | 1.643 | 1.420 | 0.0246 | 0.0213 |
| profile | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| profile | raf | memfd | native | 184 | 184 | 0.041 | 0.079 | 0.0024 | 0.0047 |
| profile | raf-nosampler | memfd | native | 182 | 182 | 0.056 | 0.096 | 0.0033 | 0.0058 |
| profile | scroll | memfd | native | 120 | 120 | 0.199 | 0.288 | 0.0118 | 0.0171 |
| profile | key | memfd | native | 21 | 21 | 0.025 | 0.089 | 0.0001 | 0.0005 |
| profile | switch-to-gecko | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | 0.5 | 7.1 | 0.0 | — | 0.18 | 0.36 | — | — | 6.7 | 8.0 | 14.4 |
| profile | 0.6 | 8.5 | 0.0 | — | 0.36 | 0.62 | — | — | 5.5 | 9.8 | 15.3 |

Switch timeline (trace, switch-to-engine, ms after the window start): first stdout read resolved 80.6; write create 84.8; first frame applied (native receiver) 175.7; write frame_ack 177.6; write focus 186.1

Switch timeline (trace, switch-to-gecko, ms after the window start): write close 15.9; first stdout read resolved 20.9; write shutdown 25.6

Switch timeline (profile, switch-to-engine, ms after the window start): write create 19.8; first stdout read resolved 27.4; first frame applied (native receiver) 85.3; write frame_ack 86.7; write focus 95.5

Switch timeline (profile, switch-to-gecko, ms after the window start): write close 18.3; first stdout read resolved 26.0; write shutdown 28.1

### Profile: chromium / switch-to-engine

- **parent** CPU ms by thread group: main 49, Renderer 21, DOM Worker 14, BgPool 4, WRRenderBackend 3, SwComposite 2, Compositor 2, WRSceneBuilder 2, Socket 1, WRWorker 0, IPC I/O 0, ImageBridge 0, other 0, Canvas 0, ImageIO 0
  - main thread 49 ms (37.2% of span): JavaScript 26, Layout 10, Idle 7, Other 2, DOM 2, Graphics 2
  - JS leaf 2 / native under JS 30 / native 16; buckets: poll_wait 8, harness_diagnostics 8, subprocess_pipe_io 6, array_buffer_copy 6, paint_layout 5, engine_stream_read 3, json_metadata 1
  - top self: `[libxul.so]` 30; `poll [libc.so.6]` 7; `write [libc.so.6]` 6; `[unknown]` 2; `receiveMessage (chrome://remote/content/marionette/actors/Ma` 1; `[axiosozo-dev]` 1
  - top JS (total): `switchToChromium (chrome://browser/content/axiosozo/CEFPresenter.sys.m` 11
  - WebRender/compositor threads: Renderer 21 ms (top self: `[libxul.so]` 13, `__lll_lock_wake [libc.so.6]` 2, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 2); WRRenderBackend#0 3 ms (top self: `syscall [libc.so.6]` 2, `sched_yield [libc.so.6]` 1); SwComposite 2 ms (top self: `syscall [libc.so.6]` 2)
  - background pools (native receiver queue): BackgroundThreadPool #2 4 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 2, `[libxul.so]` 1, `__memset_avx512_unaligned_erms [libc.so.6]` 1); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 14 ms: buckets subprocess_pipe_io 14, poll_wait 10, memcpy_memset 2; top self: `poll [libc.so.6]` 10; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `__memmove_avx512_unaligned_erms [libc.so.6]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `[axiosozo-dev]` 1
- **tab:4873** CPU ms by thread group: main 2, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 2 ms (1.9% of span): Idle 2, Other 1, Layout 0
  - JS leaf 0 / native under JS 0 / native 2; buckets: poll_wait 2
  - top self: `poll [libc.so.6]` 2; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:5069** CPU ms by thread group: other 0, main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:5064** CPU ms by thread group: other 0, main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium / idle

- **parent** CPU ms by thread group: main 70, DOM Worker 63, other 12, IPC I/O 0, Socket 0, Renderer 0, WRWorker 0, WRSceneBuilder 0, WRRenderBackend 0, Canvas 0, Compositor 0, ImageIO 0, BgPool 0, ImageBridge 0, SwComposite 0
  - main thread 70 ms (3.4% of span): Idle 60, DOM 3, JavaScript 3, Other 2, Profiler 1
  - JS leaf 0 / native under JS 6 / native 63; buckets: poll_wait 60, harness_diagnostics 6, json_metadata 1, native_receiver 0, memcpy_memset 0
  - top self: `poll [libc.so.6]` 60; `[libxul.so]` 5; `[libnspr4.so]` 2; `[axiosozo-dev]` 0; `sendmsg [libc.so.6]` 0; `write [libc.so.6]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3; `sendMessage (chrome://remote/content/marionette/server.sys.mjs:443:14)` 2; `send (chrome://remote/content/marionette/transport.sys.mjs:129:7)[121]` 2
  - WebRender/compositor threads: Renderer 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); WRWorker#0 0 ms (top self: `syscall [libc.so.6]` 0); WRWorker#2 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 63 ms: buckets subprocess_pipe_io 63, poll_wait 63; top self: `poll [libc.so.6]` 63
- **tab:5069** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0; `sendmsg [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:5064** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4873** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium / raf

- **parent** CPU ms by thread group: main 240, DOM Worker 206, Renderer 57, SwComposite 33, BgPool 28, WRRenderBackend 27, Compositor 26, other 22, ImageBridge 12, WRSceneBuilder 6, IPC I/O 1, Socket 1, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 240 ms (7.8% of span): Idle 177, JavaScript 35, Other 16, DOM 7, Profiler 4, GC / CC 1
  - JS leaf 6 / native under JS 35 / native 200; buckets: poll_wait 183, engine_stream_read 21, json_metadata 14, subprocess_pipe_io 9, harness_diagnostics 8, array_buffer_copy 4, native_receiver 2, memcpy_memset 2
  - top self: `poll [libc.so.6]` 178; `[libxul.so]` 38; `[unknown]` 5; `write [libc.so.6]` 3; `[linux-vdso.so.1]` 2; `__memset_avx512_unaligned_erms [libc.so.6]` 1
  - top JS (total): `#read (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:680:` 21; `readAXCF (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:2` 14; `request (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:61` 9
  - GC/CC markers: GCMinor 1× 2 ms
  - WebRender/compositor threads: Renderer 57 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 49, `__memmove_avx512_unaligned_erms [libc.so.6]` 4, `[libxul.so]` 2); SwComposite 33 ms (top self: `syscall [libc.so.6]` 31, `__memmove_avx512_unaligned_erms [libc.so.6]` 1, `[libxul.so]` 0); WRRenderBackend#0 27 ms (top self: `syscall [libc.so.6]` 25, `[libxul.so]` 1, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 28 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 27, `__memmove_avx512_unaligned_erms [libc.so.6]` 1, `[libxul.so]` 0); ImageBridgeChld 12 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 12, `[linux-vdso.so.1]` 0, `__lll_lock_wait [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 206 ms: buckets subprocess_pipe_io 206, poll_wait 191, memcpy_memset 0; top self: `poll [libc.so.6]` 191; `[libxul.so]` 12; `[axiosozo-dev]` 1; `[unknown]` 1; `__tls_get_addr [ld-linux-x86-64.so.2]` 0
- **tab:4873** CPU ms by thread group: main 6, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 6 ms (0.2% of span): GC / CC 3, Idle 3, Other 0
  - JS leaf 0 / native under JS 0 / native 6; buckets: poll_wait 3, gc_cc 3
  - top self: `poll [libc.so.6]` 3; `[libxul.so]` 2; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0
  - GC/CC markers: GCMajor 1× 35 ms, GCSlice 4× 2 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4321** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4343** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium / raf-nosampler

- **parent** CPU ms by thread group: DOM Worker 185, main 130, Renderer 57, BgPool 34, SwComposite 34, Compositor 27, WRRenderBackend 26, ImageBridge 11, WRSceneBuilder 5, other 1, IPC I/O 1, Socket 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 130 ms (4.3% of span): Idle 86, JavaScript 26, Other 9, DOM 4, GC / CC 4, Profiler 1
  - JS leaf 3 / native under JS 27 / native 100; buckets: poll_wait 91, engine_stream_read 19, subprocess_pipe_io 10, json_metadata 7, array_buffer_copy 6, native_receiver 4, gc_cc 4, damage_payload_assemble 2
  - top self: `poll [libc.so.6]` 86; `[libxul.so]` 25; `[unknown]` 5; `recvmsg [libc.so.6]` 3; `mprotect [libc.so.6]` 2; `[linux-vdso.so.1]` 2
  - top JS (total): `#read (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:680:` 19; `request (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:61` 9; `#write (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:609` 9
  - GC/CC markers: GCMinor 1× 3 ms
  - WebRender/compositor threads: Renderer 57 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 47, `__memmove_avx512_unaligned_erms [libc.so.6]` 4, `[libxul.so]` 2); SwComposite 34 ms (top self: `syscall [libc.so.6]` 32, `__memmove_avx512_unaligned_erms [libc.so.6]` 2, `[libxul.so]` 0); WRRenderBackend#0 26 ms (top self: `syscall [libc.so.6]` 24, `[libxul.so]` 1, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #2 34 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 32, `__memmove_avx512_unaligned_erms [libc.so.6]` 1, `[libxul.so]` 0); ImageBridgeChld 11 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 11, `[libxul.so]` 0, `__lll_lock_wake [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 185 ms: buckets subprocess_pipe_io 185, poll_wait 164, memcpy_memset 3; top self: `poll [libc.so.6]` 164; `[libxul.so]` 14; `write [libc.so.6]` 2; `__memmove_avx512_unaligned_erms [libc.so.6]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1
- **tab:4873** CPU ms by thread group: main 4, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 3 ms (0.1% of span): Idle 1, Profiler 1, GC / CC 1, Other 0
  - JS leaf 0 / native under JS 0 / native 3; buckets: poll_wait 2, gc_cc 2
  - top self: `poll [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `sendmsg [libc.so.6]` 0
  - GC/CC markers: GCMajor 1× 34 ms, GCSlice 4× 1 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4343** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4321** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium / scroll

- **parent** CPU ms by thread group: main 334, DOM Worker 209, BgPool 62, Renderer 37, SwComposite 20, WRRenderBackend 18, Compositor 17, other 17, ImageBridge 7, WRSceneBuilder 3, Socket 1, IPC I/O 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 334 ms (16.6% of span): Idle 207, JavaScript 58, Other 36, DOM 16, Profiler 10, Graphics 5
  - JS leaf 6 / native under JS 63 / native 266; buckets: poll_wait 246, subprocess_pipe_io 19, engine_stream_read 13, array_buffer_copy 12, harness_diagnostics 10, json_metadata 10, paint_layout 5, native_receiver 4
  - top self: `poll [libc.so.6]` 208; `[libxul.so]` 71; `[unknown]` 11; `[axiosozo-dev]` 5; `__lll_lock_wait [libc.so.6]` 4; `write [libc.so.6]` 4
  - WebRender/compositor threads: Renderer 37 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 31, `__memmove_avx512_unaligned_erms [libc.so.6]` 2, `syscall [libc.so.6]` 1); SwComposite 20 ms (top self: `syscall [libc.so.6]` 20, `__memmove_avx512_unaligned_erms [libc.so.6]` 0); WRRenderBackend#0 18 ms (top self: `syscall [libc.so.6]` 17, `[libxul.so]` 1, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #2 62 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 49, `__memmove_avx512_unaligned_erms [libc.so.6]` 12, `[axiosozo-dev]` 1); ImageBridgeChld 7 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 7, `[libxul.so]` 0, `__lll_lock_wait [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 209 ms: buckets subprocess_pipe_io 209, poll_wait 168, memcpy_memset 2; top self: `poll [libc.so.6]` 168; `[libxul.so]` 25; `[axiosozo-dev]` 7; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1
- **tab:4369** CPU ms by thread group: main 4, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 4 ms (0.2% of span): Idle 1, JavaScript 1, DOM 1
  - JS leaf 0 / native under JS 3 / native 2; buckets: poll_wait 1
  - top self: `[libxul.so]` 2; `poll [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0; `[]` 0
  - top JS (total): `loadLedger (chrome://browser/content/axiosozo/overview/about-axiosozo.` 3; `renderUsage (chrome://browser/content/axiosozo/overview/about-axiosozo` 2; `h (chrome://browser/content/axiosozo/overview/about-axiosozo.mjs:95:11` 1; `renderUsage/< (chrome://browser/content/axiosozo/overview/about-axioso` 1; `siteUsageRows/< (chrome://browser/content/axiosozo/overview/overview-m` 1; `siteUsageRows (chrome://browser/content/axiosozo/overview/overview-mod` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4873** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:5069** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium / key

- **parent** CPU ms by thread group: main 302, DOM Worker 165, Renderer 44, other 23, SwComposite 19, WRRenderBackend 12, Compositor 12, WRWorker 8, WRSceneBuilder 7, BgPool 3, IPC I/O 2, ImageBridge 2, Socket 0, Canvas 0, ImageIO 0
  - main thread 302 ms (8.3% of span): Idle 127, JavaScript 72, Layout 35, Other 26, Graphics 20, DOM 17
  - JS leaf 13 / native under JS 109 / native 180; buckets: poll_wait 164, paint_layout 48, engine_stream_read 37, subprocess_pipe_io 13, json_metadata 11, array_buffer_copy 6, harness_diagnostics 6, memcpy_memset 5
  - top self: `poll [libc.so.6]` 128; `[libxul.so]` 116; `[unknown]` 15; `write [libc.so.6]` 5; `[axiosozo-dev]` 4; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 2
  - top JS (total): `update/< (moz-src:///browser/components/urlbar/UrlbarValueFormatter.sy` 37
  - WebRender/compositor threads: Renderer 44 ms (top self: `[libxul.so]` 20, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 19, `hypotf@@GLIBC_2.35 [libm.so.6]` 4); SwComposite 19 ms (top self: `syscall [libc.so.6]` 17, `__memmove_avx512_unaligned_erms [libc.so.6]` 3); WRRenderBackend#0 12 ms (top self: `syscall [libc.so.6]` 10, `sched_yield [libc.so.6]` 1, `[libxul.so]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 3 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 3, `__memmove_avx512_unaligned_erms [libc.so.6]` 0); ImageBridgeChld 2 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 2); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 165 ms: buckets subprocess_pipe_io 165, poll_wait 149, memcpy_memset 1; top self: `poll [libc.so.6]` 149; `[libxul.so]` 12; `[axiosozo-dev]` 2; `[unknown]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1
- **tab:4258** CPU ms by thread group: main 6, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 6 ms (0.2% of span): Idle 5, JavaScript 1, DOM 1, Profiler 0, GC / CC 0, Other 0
  - JS leaf 0 / native under JS 1 / native 5; buckets: poll_wait 5, array_buffer_copy 0, gc_cc 0
  - top self: `poll [libc.so.6]` 5; `[libxul.so]` 1; `[]` 0
  - top JS (total): `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[0` 1; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[0]` 1; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 1
  - GC/CC markers: GCMinor 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4878** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4369** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium / switch-to-gecko

- **parent** CPU ms by thread group: main 34, Renderer 10, DOM Worker 6, BgPool 3, WRRenderBackend 2, WRSceneBuilder 2, Compositor 1, SwComposite 1, IPC I/O 0, Socket 0, ImageBridge 0, other 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 34 ms (21.5% of span): Layout 13, JavaScript 9, Other 5, Idle 3, Graphics 2, DOM 2
  - JS leaf 2 / native under JS 19 / native 14; buckets: harness_diagnostics 7, poll_wait 4, paint_layout 3, json_metadata 0
  - top self: `[libxul.so]` 22; `poll [libc.so.6]` 3; `[axiosozo-dev]` 3; `mozilla::TimeStamp::Now(bool) [axiosozo-dev]` 2; `assert.open (chrome://remote/content/shared/webdriver/Assert` 1; `onTabLabelChanged (chrome://browser/content/zen-components/Z` 1
  - top JS (total): `_formatURL (moz-src:///browser/components/urlbar/UrlbarValueFormatter.` 7; `#ensureFormattedHostVisible (moz-src:///browser/components/urlbar/Urlb` 7; `update/< (moz-src:///browser/components/urlbar/UrlbarValueFormatter.sy` 7
  - WebRender/compositor threads: Renderer 10 ms (top self: `[libxul.so]` 8, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1, `syscall [libc.so.6]` 1); WRRenderBackend#0 2 ms (top self: `syscall [libc.so.6]` 1, `sched_yield [libc.so.6]` 0, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0); WRSceneBuilder#0 1 ms (top self: `sched_yield [libc.so.6]` 1, `syscall [libc.so.6]` 1)
  - background pools (native receiver queue): BgIOThreadPool #2 3 ms (top self: `unlink [libc.so.6]` 2, `getdents64 [libc.so.6]` 1, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 6 ms: buckets subprocess_pipe_io 6, poll_wait 6, worker_messaging 1; top self: `poll [libc.so.6]` 5; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `[libxul.so]` 0
- **tab:4873** CPU ms by thread group: main 4, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 3 ms (2.2% of span): Idle 3, Other 1, Layout 0, DOM 0
  - JS leaf 0 / native under JS 0 / native 3; buckets: poll_wait 3
  - top self: `poll [libc.so.6]` 3; `sendmsg [libc.so.6]` 0; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4258** CPU ms by thread group: main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 0 ms (0.3% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4343** CPU ms by thread group: other 0, main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

