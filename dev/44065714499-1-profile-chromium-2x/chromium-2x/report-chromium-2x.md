# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## chromium-2x (PASS)

CPU: AMD EPYC 9V74 80-Core Processor; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | switch-to-engine | — | — | **50.0** (main 21.0, Renderer 12.9, DOM Worker 6.5, StyleThread# 3.2, WrGlyph~terizer 1.6) | AxioCEFProbe 33.8, cef:gpu-process 14.5, cef:utility 8.1, cef:renderer 6.5 | — | 563.2 |
| plain | idle | — | — | **2.9** (main 2.9) | AxioCEFProbe 1.5 | — | — |
| plain | raf | 59.9 | 23.0 | **29.1** (main 9.1, Renderer 4.9, SwComposite 3.9, Backgro~Pool # 3.2, DOM Worker 2.6) | cef:gpu-process 12.6, cef:renderer 10.4, AxioCEFProbe 7.7, Web Content 0.6 | — | — |
| plain | raf-nosampler | — | — | **24.8** (main 5.3, Renderer 4.6, SwComposite 3.6, DOM Worker 3.0, Backgro~Pool # 2.3) | cef:gpu-process 11.6, cef:renderer 10.2, AxioCEFProbe 8.3 | — | — |
| plain | scroll | 59.8 | 22.9 | **44.9** (main 19.5, DOM Worker 6.8, Backgro~Pool # 6.3, Renderer 4.4, SwComposite 2.9) | cef:gpu-process 51.1, cef:renderer 12.1, AxioCEFProbe 11.7 | — | — |
| plain | key | — | — | **14.5** (main 7.7, Renderer 2.2, SwComposite 1.1, DOM Worker 1.1, Timer 0.6) | AxioCEFProbe 2.0, cef:renderer 1.7, cef:gpu-process 0.6, Web Content 0.3 | 11.7 | — |
| plain | switch-to-gecko | — | — | **35.1** (Renderer 15.6, main 11.7, SwComposite 3.9, DOM Worker 3.9) | WebExtensions 3.9 | — | 230.0 |
| trace | switch-to-engine | — | — | **203.4** (Renderer 80.6, main 76.4, TaskCon~ller # 12.7, DOM Worker 8.5, glean.dispatche 4.2) | AxioCEFProbe 38.1, cef:renderer 21.2, cef:gpu-process 21.2, cef:utility 8.5 | — | 191.4 |
| trace | idle | — | — | **49.7** (main 14.9, Indexed~ IO # 12.5, DOM Worker 11.1, IPDL Background 5.3, StreamTrans # 1.9) | Web Content 2.4, AxioCEFProbe 2.4, cef:utility 0.5 | — | — |
| trace | raf | 60.0 | 21.2 | **29.0** (main 9.1, Renderer 4.5, SwComposite 3.6, Backgro~Pool # 3.2, DOM Worker 2.6) | cef:gpu-process 12.3, cef:renderer 11.0, AxioCEFProbe 8.0, Isolated Web Co 0.3 | — | — |
| trace | raf-nosampler | — | — | **20.9** (main 5.0, Renderer 4.3, SwComposite 3.3, Backgro~Pool # 2.7, DOM Worker 2.3) | cef:gpu-process 11.6, cef:renderer 9.6, AxioCEFProbe 8.0 | — | — |
| trace | scroll | 60.0 | 24.4 | **49.3** (main 20.0, DOM Worker 7.3, Backgro~Pool # 6.3, Renderer 5.4, SwComposite 3.4) | cef:gpu-process 53.6, cef:renderer 12.2, AxioCEFProbe 11.2 | — | — |
| trace | key | — | — | **14.8** (main 7.2, Renderer 2.5, SwComposite 1.1, DOM Worker 1.1, Timer 0.8) | cef:renderer 2.3, AxioCEFProbe 2.0, cef:gpu-process 0.9, WebExtensions 0.3 | 11.7 | — |
| trace | switch-to-gecko | — | — | **57.4** (main 25.5, Renderer 19.1, Backgro~Pool # 6.4, SwComposite 6.4) |  | — | 134.6 |
| profile | switch-to-engine | — | — | **89.6** (Renderer 36.9, main 31.6, Backgro~Pool # 10.5, DOM Worker 5.3, SamplerThread 5.3) | AxioCEFProbe 37.0, cef:renderer 26.3, cef:gpu-process 5.3 | — | 140.3 |
| profile | idle | — | — | **16.8** (SamplerThread 6.2, DOM Worker 5.3, main 4.3, Timer 1.0) | Web Content 5.8, AxioCEFProbe 2.9, WebExtensions 1.4, Privileged Cont 1.4 | — | — |
| profile | raf | 59.3 | 26.6 | **52.1** (main 12.2, DOM Worker 11.2, SamplerThread 9.3, Renderer 5.1, Backgro~Pool # 3.5) | cef:gpu-process 12.2, cef:renderer 11.3, AxioCEFProbe 8.0, Web Content 7.1 | — | — |
| profile | raf-nosampler | — | — | **41.1** (DOM Worker 9.6, SamplerThread 8.3, main 6.3, Renderer 5.0, SwComposite 4.0) | cef:gpu-process 12.6, cef:renderer 11.3, AxioCEFProbe 8.6, Web Content 7.3 | — | — |
| profile | scroll | 60.0 | 30.8 | **72.4** (main 25.1, DOM Worker 14.0, SamplerThread 9.7, Backgro~Pool # 7.2, Renderer 5.3) | cef:gpu-process 58.0, cef:renderer 12.6, AxioCEFProbe 12.0, Web Content 6.8 | — | — |
| profile | key | — | — | **36.8** (main 12.4, SamplerThread 7.4, DOM Worker 7.1, Renderer 3.0, TaskCon~ller # 1.6) | Web Content 6.9, AxioCEFProbe 2.2, cef:renderer 2.2, WebExtensions 2.0 | 14.1 | — |
| profile | switch-to-gecko | — | — | **6.0** (SamplerThread 2.9, BgIOThr~Pool # 1.8, main 0.4, DOM Worker 0.4, IPC I/O Parent 0.1) | Web Content 6.7, Privileged Cont 1.4, Isolated Web Co 1.3, WebExtensions 1.2 | — | 15654.5 |

Frame path (median ms per frame; hooks). recv/paint fps = frames read / surface paints per s; header wait = idle until the next AXCF header; payload read = Subprocess read(size) call → resolve; assemble = damage payload → whole frame; native apply = NativeFrameSinks.apply call → resolve (AxioFrameRing queue + main-thread hop); native resolve→ack = presenter present + ack write; tick wait = accept → rAF paint start; paint = convert + putImageData of the damage union; main-thread share = (payload reads + assembly + paints) / window.

| pass | window | recv fps | paint fps | superseded | MB/s | payload KB | damage share | header wait | payload read | assemble | native apply | native resolve→ack | tick wait | paint | convert | put | paint→MozAfterPaint | main-thread share |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | switch-to-engine | 7.2 | 0.0 | 0 | 0.0 | — | — | 1.8 | 0.0 | — | 8.44 | 0.85 | — | — | — | — | — | 0.006 |
| trace | raf | 59.8 | 0.0 | 0 | 0.0 | — | — | 15.8 | 0.0 | — | 0.27 | 0.11 | — | — | — | — | — | 0.007 |
| trace | raf-nosampler | 59.9 | 0.0 | 0 | 0.0 | — | — | 15.9 | 0.0 | — | 0.26 | 0.11 | — | — | — | — | — | 0.007 |
| trace | scroll | 58.9 | 0.0 | 0 | 0.0 | — | — | 9.4 | 0.0 | — | 0.56 | 0.12 | — | — | — | — | — | 0.008 |
| trace | key | 5.8 | 0.0 | 0 | 0.0 | — | — | 4.1 | 0.0 | — | 0.21 | 0.09 | — | — | — | — | — | 0.001 |
| profile | switch-to-engine | 9.0 | 0.0 | 0 | 0.0 | — | — | 9.8 | 0.0 | — | 5.01 | 0.80 | — | — | — | — | — | 0.007 |
| profile | raf | 59.4 | 0.0 | 0 | 0.0 | — | — | 15.6 | 0.0 | — | 0.31 | 0.15 | — | — | — | — | — | 0.010 |
| profile | raf-nosampler | 59.8 | 0.0 | 0 | 0.0 | — | — | 15.6 | 0.0 | — | 0.29 | 0.14 | — | — | — | — | — | 0.009 |
| profile | scroll | 58.8 | 0.0 | 0 | 0.0 | — | — | 11.2 | 0.0 | — | 0.67 | 0.15 | — | — | — | — | — | 0.010 |
| profile | key | 5.7 | 0.0 | 0 | 0.0 | — | — | 5.0 | 0.0 | — | 0.43 | 0.12 | — | — | — | — | — | 0.001 |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | switch-to-engine | memfd | native | 2 | 2 | 3.353 | 8.428 | 0.0105 | 0.0263 |
| plain | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| plain | raf | memfd | native | 187 | 187 | 0.204 | 0.272 | 0.0123 | 0.0164 |
| plain | raf-nosampler | memfd | native | 182 | 182 | 0.174 | 0.252 | 0.0104 | 0.0151 |
| plain | scroll | memfd | native | 119 | 119 | 0.482 | 0.545 | 0.0276 | 0.0313 |
| plain | key | memfd | native | 21 | 21 | 0.047 | 0.146 | 0.0003 | 0.0008 |
| plain | switch-to-gecko | — | — | — | — | — | — | — | — |
| trace | switch-to-engine | memfd | native | 2 | 2 | 7.928 | 6.841 | 0.0570 | 0.0491 |
| trace | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| trace | raf | memfd | native | 187 | 187 | 0.200 | 0.264 | 0.0120 | 0.0158 |
| trace | raf-nosampler | memfd | native | 182 | 182 | 0.172 | 0.251 | 0.0103 | 0.0150 |
| trace | scroll | memfd | native | 122 | 122 | 0.493 | 0.561 | 0.0290 | 0.0330 |
| trace | key | memfd | native | 21 | 21 | 0.044 | 0.162 | 0.0003 | 0.0009 |
| trace | switch-to-gecko | — | — | — | — | — | — | — | — |
| profile | switch-to-engine | memfd | native | 2 | 2 | 3.895 | 8.196 | 0.0351 | 0.0738 |
| profile | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| profile | raf | memfd | native | 186 | 186 | 0.215 | 0.289 | 0.0127 | 0.0172 |
| profile | raf-nosampler | memfd | native | 182 | 182 | 0.196 | 0.272 | 0.0117 | 0.0163 |
| profile | scroll | memfd | native | 123 | 123 | 0.559 | 0.652 | 0.0329 | 0.0383 |
| profile | key | memfd | native | 21 | 21 | 0.051 | 0.163 | 0.0003 | 0.0009 |
| profile | switch-to-gecko | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | 0.5 | 7.0 | 0.0 | — | 0.21 | 0.37 | — | — | 7.4 | 7.9 | 15.1 |
| profile | 0.7 | 9.2 | 0.0 | — | 0.42 | 0.67 | — | — | 9.1 | 10.6 | 19.7 |

Switch timeline (trace, switch-to-engine, ms after the window start): first stdout read resolved 17.6; write create 54.7; first frame applied (native receiver) 224.4; write frame_ack 226.0; write focus 233.6

Switch timeline (trace, switch-to-gecko, ms after the window start): write close 23.3; first stdout read resolved 29.0; write shutdown 39.7

Switch timeline (profile, switch-to-engine, ms after the window start): write create 39.9; first stdout read resolved 46.4; first frame applied (native receiver) 161.3; write frame_ack 162.7; write focus 172.8

Switch timeline (profile, switch-to-gecko, ms after the window start): write close 25.3; first stdout read resolved 46.2; write shutdown 49.3

### Profile: chromium-2x / switch-to-engine

- **parent** CPU ms by thread group: Renderer 83, main 73, BgPool 17, DOM Worker 10, SwComposite 7, WRRenderBackend 4, Compositor 4, WRSceneBuilder 3, IPC I/O 1, Socket 1, WRWorker 0, ImageBridge 0, other 0, ImageIO 0, Canvas 0
  - main thread 73 ms (33.0% of span): Layout 16, JavaScript 15, Idle 13, DOM 10, GC / CC 8, Graphics 5
  - JS leaf 0 / native under JS 31 / native 42; buckets: poll_wait 17, harness_diagnostics 12, paint_layout 9, gc_cc 8, engine_stream_read 3, webrender_render 3, json_metadata 1
  - top self: `[libxul.so]` 43; `poll [libc.so.6]` 13; `[axiosozo-dev]` 8; `mprotect [libc.so.6]` 4; `g_source_ref [libglib-2.0.so.0]` 3; `getcontext [libc.so.6]` 1
  - top JS (total): `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 12
  - GC/CC markers: CCSlice 1× 8 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 83 ms (top self: `[libxul.so]` 64, `syscall [libc.so.6]` 5, `hypotf@@GLIBC_2.35 [libm.so.6]` 4); SwComposite 7 ms (top self: `syscall [libc.so.6]` 6, `__memmove_avx512_unaligned_erms [libc.so.6]` 0); WRRenderBackend#0 5 ms (top self: `syscall [libc.so.6]` 2, `sched_yield [libc.so.6]` 2)
  - background pools (native receiver queue): BackgroundThreadPool #2 17 ms (top self: `[libxul.so]` 7, `__memset_avx512_unaligned_erms [libc.so.6]` 4, `__memmove_avx512_unaligned_erms [libc.so.6]` 3); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 10 ms: buckets subprocess_pipe_io 10, poll_wait 9; top self: `poll [libc.so.6]` 9; `__lll_lock_wake [libc.so.6]` 0; `[libxul.so]` 0; `[unknown]` 0
- **tab:4970** CPU ms by thread group: main 26, IPC I/O 0, other 0, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 26 ms (11.8% of span): Other 22, JavaScript 3, Idle 1, DOM 1
  - JS leaf 0 / native under JS 2 / native 24; buckets: poll_wait 1
  - top self: `[libxul.so]` 17; `[libexpat.so.1]` 2; `[]` 1; `poll [libc.so.6]` 1; `FcNameParse [libfontconfig.so.1]` 1; `__fcntl64_nocancel_adjusted [libc.so.6]` 1
  - GC/CC markers: GCMinor 1× 1 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4777** CPU ms by thread group: main 3, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 3 ms (1.3% of span): Idle 2, Graphics 1, Profiler 0, Other 0
  - JS leaf 0 / native under JS 0 / native 3; buckets: poll_wait 2, paint_layout 1
  - top self: `poll [libc.so.6]` 2; `[libxul.so]` 1; `__lll_lock_wait [libc.so.6]` 0; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4974** CPU ms by thread group: other 0, main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: 
  - top self: `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium-2x / idle

- **parent** CPU ms by thread group: main 84, DOM Worker 70, other 15, Socket 1, IPC I/O 1, BgPool 0, ImageIO 0, Renderer 0, WRWorker 0, WRSceneBuilder 0, WRRenderBackend 0, Canvas 0, Compositor 0, ImageBridge 0, SwComposite 0
  - main thread 84 ms (4.0% of span): Idle 72, JavaScript 6, Other 4, DOM 2, Profiler 0
  - JS leaf 0 / native under JS 7 / native 76; buckets: poll_wait 74, harness_diagnostics 6, memcpy_memset 0, json_metadata 0, subprocess_pipe_io 0, native_receiver 0
  - top self: `poll [libc.so.6]` 72; `[libxul.so]` 8; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `recvmsg [libc.so.6]` 1; `[unknown]` 0; `__memmove_avx512_unaligned_erms [libc.so.6]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 4; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 3; `evaluate.sandbox/promise< (chrome://remote/content/marionette/evaluate` 2; `evaluate.sandbox (chrome://remote/content/marionette/evaluate.sys.mjs:` 2
  - WebRender/compositor threads: Renderer 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); WRWorker#3 0 ms (top self: `syscall [libc.so.6]` 0); WRWorker#2 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 70 ms: buckets subprocess_pipe_io 70, poll_wait 70; top self: `poll [libc.so.6]` 70; `[libxul.so]` 0
- **tab:4970** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Profiler 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4974** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4782** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium-2x / raf

- **parent** CPU ms by thread group: main 361, DOM Worker 281, Renderer 143, SwComposite 106, BgPool 98, WRRenderBackend 47, Compositor 35, other 25, ImageBridge 15, WRSceneBuilder 8, IPC I/O 1, Socket 1, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 361 ms (11.5% of span): Idle 219, JavaScript 63, Other 30, GC / CC 27, DOM 18, Profiler 4
  - JS leaf 7 / native under JS 69 / native 285; buckets: poll_wait 238, engine_stream_read 39, gc_cc 27, subprocess_pipe_io 19, json_metadata 19, harness_diagnostics 13, array_buffer_copy 13, native_receiver 12
  - top self: `poll [libc.so.6]` 219; `[libxul.so]` 87; `[unknown]` 11; `recvmsg [libc.so.6]` 7; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 6; `[axiosozo-dev]` 4
  - top JS (total): `#read (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:680:` 39
  - GC/CC markers: GCMajor 1× 883 ms, GCSlice 8× 35 ms, GCMinor 1× 2 ms
  - WebRender/compositor threads: Renderer 143 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 87, `__memmove_avx512_unaligned_erms [libc.so.6]` 39, `[libxul.so]` 7); SwComposite 106 ms (top self: `syscall [libc.so.6]` 84, `__memmove_avx512_unaligned_erms [libc.so.6]` 21, `[libxul.so]` 1); WRRenderBackend#0 47 ms (top self: `syscall [libc.so.6]` 42, `[libxul.so]` 3, `sched_yield [libc.so.6]` 3)
  - background pools (native receiver queue): BackgroundThreadPool #2 98 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 82, `__memmove_avx512_unaligned_erms [libc.so.6]` 15, `[libxul.so]` 1); ImageBridgeChld 15 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 15, `__lll_lock_wait [libc.so.6]` 0, `__lll_lock_wake [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 281 ms: buckets subprocess_pipe_io 281, poll_wait 202, gc_cc 31, memcpy_memset 13; top self: `poll [libc.so.6]` 202; `[libxul.so]` 50; `madvise [libc.so.6]` 7; `__memset_avx512_unaligned_erms [libc.so.6]` 6; `[axiosozo-dev]` 5
- **tab:4974** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4782** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 0; `read [libc.so.6]` 0; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4970** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium-2x / raf-nosampler

- **parent** CPU ms by thread group: DOM Worker 220, main 183, Renderer 140, SwComposite 106, BgPool 90, WRRenderBackend 46, Compositor 36, ImageBridge 14, WRSceneBuilder 8, IPC I/O 2, other 1, Socket 0, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 183 ms (6.0% of span): Idle 111, JavaScript 44, Other 16, DOM 11, Profiler 1
  - JS leaf 7 / native under JS 44 / native 132; buckets: poll_wait 118, engine_stream_read 27, json_metadata 17, subprocess_pipe_io 11, array_buffer_copy 6, native_receiver 5, damage_payload_assemble 3, harness_diagnostics 2
  - top self: `poll [libc.so.6]` 111; `[libxul.so]` 39; `[unknown]` 10; `recvmsg [libc.so.6]` 2; `write [libc.so.6]` 2; `[linux-vdso.so.1]` 2
  - top JS (total): `#read (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:680:` 27; `readAXCF (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:2` 17; `request (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:61` 12; `#write (chrome://browser/content/axiosozo/CEFEngineAdapter.sys.mjs:609` 12
  - WebRender/compositor threads: Renderer 139 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 82, `__memmove_avx512_unaligned_erms [libc.so.6]` 41, `syscall [libc.so.6]` 7); SwComposite 106 ms (top self: `syscall [libc.so.6]` 89, `__memmove_avx512_unaligned_erms [libc.so.6]` 16, `[libxul.so]` 1); WRRenderBackend#0 46 ms (top self: `syscall [libc.so.6]` 41, `[libxul.so]` 4, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 90 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 74, `__memmove_avx512_unaligned_erms [libc.so.6]` 15, `__lll_lock_wake [libc.so.6]` 0); ImageBridgeChld 14 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 14, `[libxul.so]` 0, `__lll_lock_wait [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 220 ms: buckets subprocess_pipe_io 220, poll_wait 202, memcpy_memset 1; top self: `poll [libc.so.6]` 202; `[libxul.so]` 11; `write [libc.so.6]` 2; `getcontext [libc.so.6]` 1; `[linux-vdso.so.1]` 1
- **tab:4262** CPU ms by thread group: main 9, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 9 ms (0.3% of span): GC / CC 7, Idle 2
  - JS leaf 0 / native under JS 0 / native 9; buckets: gc_cc 7, poll_wait 2
  - top self: `[libxul.so]` 6; `poll [libc.so.6]` 2; `prctl [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 7 ms, GCSlice 3× 7 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4158** CPU ms by thread group: main 9, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 9 ms (0.3% of span): GC / CC 7, Idle 1
  - JS leaf 0 / native under JS 0 / native 9; buckets: gc_cc 7, poll_wait 1, memcpy_memset 1
  - top self: `[libxul.so]` 6; `poll [libc.so.6]` 1; `mmap64 [libc.so.6]` 1; `write [libc.so.6]` 0
  - GC/CC markers: GCMajor 1× 40 ms, GCSlice 4× 8 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4223** CPU ms by thread group: main 4, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 4 ms (0.1% of span): Idle 3, GC / CC 1, Other 0
  - JS leaf 0 / native under JS 0 / native 4; buckets: poll_wait 3, gc_cc 1
  - top self: `poll [libc.so.6]` 3; `[libxul.so]` 1; `sendmsg [libc.so.6]` 0
  - GC/CC markers: GCMajor 1× 34 ms, GCSlice 4× 1 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium-2x / scroll

- **parent** CPU ms by thread group: main 500, DOM Worker 240, BgPool 144, Renderer 98, SwComposite 67, WRRenderBackend 33, Compositor 24, other 18, ImageBridge 10, WRSceneBuilder 5, Socket 1, IPC I/O 1, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 500 ms (23.9% of span): Idle 254, JavaScript 88, Other 50, GC / CC 33, DOM 29, Graphics 22
  - JS leaf 11 / native under JS 104 / native 385; buckets: poll_wait 334, gc_cc 33, engine_stream_read 28, json_metadata 26, subprocess_pipe_io 24, paint_layout 22, array_buffer_copy 16, harness_diagnostics 15
  - top self: `poll [libc.so.6]` 258; `[libxul.so]` 159; `[unknown]` 18; `recvmsg [libc.so.6]` 8; `__lll_lock_wake [libc.so.6]` 6; `mprotect [libc.so.6]` 6
  - GC/CC markers: GCSlice 6× 27 ms, CCSlice 3× 7 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 98 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 52, `__memmove_avx512_unaligned_erms [libc.so.6]` 23, `syscall [libc.so.6]` 12); SwComposite 67 ms (top self: `syscall [libc.so.6]` 65, `__memmove_avx512_unaligned_erms [libc.so.6]` 3); WRRenderBackend#0 33 ms (top self: `syscall [libc.so.6]` 29, `sched_yield [libc.so.6]` 2, `[libxul.so]` 2)
  - background pools (native receiver queue): BackgroundThreadPool #2 143 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 87, `__memmove_avx512_unaligned_erms [libc.so.6]` 52, `write [libc.so.6]` 1); ImageBridgeChld 10 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 10, `[libxul.so]` 0, `__lll_lock_wake [libc.so.6]` 0); BgIOThreadPool #1 1 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1)
  - busiest DOM Worker 240 ms: buckets subprocess_pipe_io 240, poll_wait 213, memcpy_memset 2; top self: `poll [libc.so.6]` 213; `[libxul.so]` 15; `[axiosozo-dev]` 3; `[unknown]` 2; `pthread_mutex_init@@GLIBC_2.2.5 [libc.so.6]` 2
- **tab:4782** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4223** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4970** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium-2x / key

- **parent** CPU ms by thread group: main 410, DOM Worker 176, Renderer 99, SwComposite 44, other 27, Compositor 15, WRRenderBackend 15, WRWorker 10, WRSceneBuilder 8, BgPool 5, ImageBridge 2, IPC I/O 1, Socket 1, ImageIO 0, Canvas 0
  - main thread 410 ms (11.2% of span): Idle 157, GC / CC 72, JavaScript 69, Layout 36, Other 27, Graphics 25
  - JS leaf 10 / native under JS 118 / native 283; buckets: poll_wait 201, gc_cc 72, paint_layout 56, engine_stream_read 27, harness_diagnostics 14, json_metadata 11, subprocess_pipe_io 9, array_buffer_copy 8
  - top self: `[libxul.so]` 191; `poll [libc.so.6]` 160; `[unknown]` 8; `[axiosozo-dev]` 8; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 8; `write [libc.so.6]` 6
  - GC/CC markers: GCMajor 2× 860 ms, GCSlice 15× 54 ms, CCSlice 3× 10 ms, GCMinor 3× 7 ms, CC 2× 0 ms
  - WebRender/compositor threads: Renderer 99 ms (top self: `[libxul.so]` 61, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 21, `hypotf@@GLIBC_2.35 [libm.so.6]` 11); SwComposite 44 ms (top self: `__memmove_avx512_unaligned_erms [libc.so.6]` 22, `syscall [libc.so.6]` 19, `[libxul.so]` 2); WRRenderBackend#0 15 ms (top self: `syscall [libc.so.6]` 10, `[libxul.so]` 2, `sched_yield [libc.so.6]` 2)
  - background pools (native receiver queue): BackgroundThreadPool #2 5 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 4, `__memmove_avx512_unaligned_erms [libc.so.6]` 1); ImageBridgeChld 2 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 2, `__lll_lock_wait [libc.so.6]` 0, `[libxul.so]` 0); BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 176 ms: buckets subprocess_pipe_io 176, poll_wait 166, memcpy_memset 1; top self: `poll [libc.so.6]` 166; `[libxul.so]` 6; `__memmove_avx512_unaligned_erms [libc.so.6]` 1; `[axiosozo-dev]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 0
- **tab:4158** CPU ms by thread group: main 6, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 6 ms (0.2% of span): Idle 5, JavaScript 1, Other 0
  - JS leaf 0 / native under JS 0 / native 5; buckets: poll_wait 5
  - top self: `poll [libc.so.6]` 4; `[libxul.so]` 1; `[linux-vdso.so.1]` 0; `[]` 0
  - top JS (total): `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[6` 0; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4223** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4262** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: chromium-2x / switch-to-gecko

- **parent** CPU ms by thread group: BgPool 275, main 58, DOM Worker 56, Renderer 29, IPC I/O 6, Compositor 4, SwComposite 4, WRRenderBackend 2, other 2, WRSceneBuilder 2, Socket 1, ImageBridge 0, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 58 ms (0.4% of span): JavaScript 17, Idle 17, Layout 11, Graphics 6, DOM 4, Other 3
  - JS leaf 2 / native under JS 25 / native 31; buckets: poll_wait 17, paint_layout 9, harness_diagnostics 7, subprocess_pipe_io 3, memcpy_memset 1, engine_stream_read 0, gc_cc 0
  - top self: `[libxul.so]` 30; `poll [libc.so.6]` 17; `[unknown]` 3; `[axiosozo-dev]` 2; `mprotect [libc.so.6]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1
  - GC/CC markers: GCMinor 3× 1 ms
  - WebRender/compositor threads: Renderer 29 ms (top self: `[libxul.so]` 23, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 2, `hypotf@@GLIBC_2.35 [libm.so.6]` 2); SwComposite 4 ms (top self: `syscall [libc.so.6]` 3, `__memmove_avx512_unaligned_erms [libc.so.6]` 1); WRRenderBackend#0 2 ms (top self: `syscall [libc.so.6]` 2, `[libxul.so]` 0, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 275 ms (top self: `[libxul.so]` 248, `write [libc.so.6]` 15, `unlink [libc.so.6]` 6); BackgroundThreadPool #2 1 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 56 ms: buckets subprocess_pipe_io 56, gc_cc 22, poll_wait 16, memcpy_memset 5, worker_messaging 1; top self: `[libxul.so]` 25; `poll [libc.so.6]` 14; `[axiosozo-dev]` 5; `madvise [libc.so.6]` 4; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 3
- **tab:4262** CPU ms by thread group: main 6, other 1, IPC I/O 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 6 ms (0.0% of span): Idle 4, DOM 2, Other 0
  - JS leaf 0 / native under JS 2 / native 4; buckets: poll_wait 4
  - top self: `poll [libc.so.6]` 4; `[libxul.so]` 2; `[]` 0; `__strlen_evex [libc.so.6]` 0; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0
  - top JS (total): `loadLedger (chrome://browser/content/axiosozo/overview/about-axiosozo.` 1; `renderUsage/< (chrome://browser/content/axiosozo/overview/about-axioso` 1; `renderUsage (chrome://browser/content/axiosozo/overview/about-axiosozo` 1; `toPage (chrome://browser/content/axiosozo/AboutAxioSozoChild.sys.mjs:1` 1; `receiveMessage (chrome://browser/content/axiosozo/AboutAxioSozoChild.s` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4223** CPU ms by thread group: main 3, other 2, IPC I/O 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 3 ms (0.0% of span): Idle 3, Other 0, Profiler 0
  - JS leaf 0 / native under JS 0 / native 3; buckets: poll_wait 3
  - top self: `poll [libc.so.6]` 3; `sendmsg [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4777** CPU ms by thread group: main 4, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 4 ms (0.0% of span): Idle 3, Layout 0, Other 0
  - JS leaf 0 / native under JS 0 / native 4; buckets: poll_wait 3
  - top self: `poll [libc.so.6]` 3; `[libxul.so]` 0; `sendmsg [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

