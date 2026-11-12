# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## webkit (PASS)

CPU: INTEL(R) XEON(R) PLATINUM 8573C; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | switch-to-engine | — | — | **41.7** (main 18.6, Renderer 13.9, WRRende~ckend# 4.6, DOM Worker 4.6) | WPEWebProcess 74.3, WPENetworkProce 13.9, AxioWebKitHost 4.6 | — | 193.0 |
| plain | idle | — | — | **8.3** (main 6.8, TaskCon~ller # 1.5) | Web Content 2.9, AxioWebKitHost 0.5 | — | — |
| plain | raf | 58.0 | 22.5 | **26.7** (main 11.2, Renderer 3.3, DOM Worker 3.0, SwComposite 1.6, TaskCon~ller # 1.3) | WPEWebProcess 64.0, AxioWebKitHost 7.8, WebExtensions 0.3, Web Content 0.3 | — | — |
| plain | raf-nosampler | — | — | **17.4** (main 4.7, Renderer 2.7, DOM Worker 2.7, Backgro~Pool # 1.7, SwComposite 1.7) | WPEWebProcess 63.4, AxioWebKitHost 9.0, Privileged Cont 0.3, Web Content 0.3 | — | — |
| plain | scroll | 57.8 | 28.1 | **42.8** (main 20.4, DOM Worker 7.4, Backgro~Pool # 4.0, Renderer 2.5, TaskCon~ller # 2.0) | WPEWebProcess 66.1, AxioWebKitHost 11.4 | — | — |
| plain | key | — | — | **17.2** (main 9.9, Renderer 1.4, TaskCon~ller # 1.1, SwComposite 0.8, DOM Worker 0.8) | WPEWebProcess 6.5, AxioWebKitHost 1.4, WebExtensions 0.3 | 18.3 | — |
| plain | switch-to-gecko | — | — | **26.5** (main 8.9, Softwar~cThread 4.4, Renderer 4.4, WRScene~ilder# 4.4, DOM Worker 4.4) | Isolated Web Co 4.4 | — | 210.6 |
| trace | switch-to-engine | — | — | **36.0** (main 14.4, Renderer 14.4, glean.dispatche 3.6, WRRende~ckend# 3.6) | WPEWebProcess 61.4, WPENetworkProce 10.8, AxioWebKitHost 7.2 | — | 253.8 |
| trace | idle | — | — | **7.9** (main 5.4, Timer 1.0, TaskCon~ller # 1.0, DOM Worker 0.5) | Web Content 2.9, forkserver 0.5 | — | — |
| trace | raf | 58.0 | 27.5 | **44.9** (main 20.0, DOM Worker 6.2, TaskCon~ller # 2.9, Renderer 2.9, IPDL Background 2.6) | WPEWebProcess 63.0, AxioWebKitHost 8.5, Utility Process 0.3, Isolated Web Co 0.3 | — | — |
| trace | raf-nosampler | — | — | **18.9** (main 5.3, DOM Worker 4.0, Renderer 2.3, WRRende~ckend# 1.7, SwComposite 1.3) | WPEWebProcess 63.8, AxioWebKitHost 9.0 | — | — |
| trace | scroll | 56.7 | 33.9 | **45.4** (main 21.4, DOM Worker 7.5, Backgro~Pool # 4.0, TaskCon~ller # 2.5, Renderer 2.5) | WPEWebProcess 67.8, AxioWebKitHost 11.5 | — | — |
| trace | key | — | — | **15.7** (main 9.4, Renderer 1.4, DOM Worker 1.1, SwComposite 0.8, glean.dispatche 0.6) | WPEWebProcess 7.2, AxioWebKitHost 1.7, WebExtensions 0.6 | 18.2 | — |
| trace | switch-to-gecko | — | — | **30.2** (main 17.3, TaskCon~ller # 4.3, Renderer 4.3, sqldb:p~lite # 4.3) | Isolated Web Co 4.3 | — | 212.8 |
| profile | switch-to-engine | — | — | **39.3** (main 9.8, DOM Worker 9.8, SamplerThread 9.8, WRRende~ckend# 3.3, Compositor 3.3) | WPEWebProcess 59.0, Web Content 45.9, WPENetworkProce 13.1, AxioWebKitHost 6.6 | — | 278.9 |
| profile | idle | — | — | **24.9** (main 8.3, SamplerThread 7.3, DOM Worker 6.8, Timer 1.5, Socket Thread 0.5) | Web Content 6.8, Privileged Cont 1.5, Utility Process 1.5, Socket Process 1.0 | — | — |
| profile | raf | 58.2 | 22.5 | **50.7** (main 15.7, DOM Worker 11.1, SamplerThread 9.5, Renderer 3.6, WRRende~ckend# 2.0) | WPEWebProcess 66.3, AxioWebKitHost 9.2, Web Content 7.5, Isolated Web Co 1.6 | — | — |
| profile | raf-nosampler | — | — | **40.9** (DOM Worker 11.0, SamplerThread 7.6, main 7.3, Renderer 3.7, Compositor 2.0) | WPEWebProcess 66.3, AxioWebKitHost 9.7, Web Content 6.6, WebExtensions 1.3 | — | — |
| profile | scroll | 56.1 | 33.8 | **73.8** (main 29.5, DOM Worker 14.3, SamplerThread 9.3, Backgro~Pool # 4.4, TaskCon~ller # 3.9) | WPEWebProcess 69.2, AxioWebKitHost 12.3, Web Content 5.9, WebExtensions 1.5 | — | — |
| profile | key | — | — | **41.7** (main 16.2, DOM Worker 9.1, SamplerThread 8.0, Timer 1.4, Renderer 1.4) | Web Content 7.4, WPEWebProcess 7.1, WebExtensions 1.7, Privileged Cont 1.6 | 19.8 | — |
| profile | switch-to-gecko | — | — | **37.4** (main 16.6, Renderer 8.3, SamplerThread 8.3, DOM Worker 4.2) | Isolated Web Co 4.2 | — | 217.6 |

Frame path (median ms per frame; hooks). recv/paint fps = frames read / surface paints per s; header wait = idle until the next AXCF header; payload read = Subprocess read(size) call → resolve; assemble = damage payload → whole frame; native apply = NativeFrameSinks.apply call → resolve (AxioFrameRing queue + main-thread hop); native resolve→ack = presenter present + ack write; tick wait = accept → rAF paint start; paint = convert + putImageData of the damage union; main-thread share = (payload reads + assembly + paints) / window.

| pass | window | recv fps | paint fps | superseded | MB/s | payload KB | damage share | header wait | payload read | assemble | native apply | native resolve→ack | tick wait | paint | convert | put | paint→MozAfterPaint | main-thread share |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | switch-to-engine | 6.7 | 0.0 | 0 | 0.0 | — | — | 76.4 | 0.0 | — | 1.17 | 0.56 | — | — | — | — | — | 0.004 |
| trace | raf | 58.0 | 0.0 | 0 | 0.0 | — | — | 16.3 | 0.0 | — | 0.15 | 0.12 | — | — | — | — | — | 0.008 |
| trace | raf-nosampler | 57.6 | 0.0 | 0 | 0.0 | — | — | 16.5 | 0.0 | — | 0.18 | 0.13 | — | — | — | — | — | 0.008 |
| trace | scroll | 55.5 | 0.0 | 0 | 0.0 | — | — | 12.0 | 0.0 | — | 0.39 | 0.11 | — | — | — | — | — | 0.007 |
| trace | key | 5.5 | 0.0 | 0 | 0.0 | — | — | 6.3 | 0.0 | — | 0.10 | 0.11 | — | — | — | — | — | 0.001 |
| profile | switch-to-engine | 6.2 | 0.0 | 0 | 0.0 | — | — | 67.1 | 0.0 | — | 2.06 | 0.66 | — | — | — | — | — | 0.004 |
| profile | raf | 58.1 | 0.0 | 0 | 0.0 | — | — | 16.0 | 0.0 | — | 0.17 | 0.15 | — | — | — | — | — | 0.009 |
| profile | raf-nosampler | 58.1 | 0.0 | 0 | 0.0 | — | — | 16.0 | 0.0 | — | 0.21 | 0.16 | — | — | — | — | — | 0.010 |
| profile | scroll | 54.7 | 0.0 | 0 | 0.0 | — | — | 12.7 | 0.0 | — | 0.49 | 0.15 | — | — | — | — | — | 0.010 |
| profile | key | 5.5 | 0.0 | 0 | 0.0 | — | — | 7.2 | 0.0 | — | 0.15 | 0.17 | — | — | — | — | — | 0.001 |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | switch-to-engine | memfd | native | 2 | 2 | 0.944 | 1.504 | 0.0083 | 0.0133 |
| plain | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| plain | raf | memfd | native | 177 | 177 | 0.066 | 0.110 | 0.0038 | 0.0064 |
| plain | raf-nosampler | memfd | native | 175 | 174 | 0.096 | 0.156 | 0.0055 | 0.0090 |
| plain | scroll | memfd | native | 115 | 115 | 0.289 | 0.359 | 0.0164 | 0.0204 |
| plain | key | memfd | native | 20 | 20 | 0.001 | 0.099 | 0.0000 | 0.0005 |
| plain | switch-to-gecko | — | — | — | — | — | — | — | — |
| trace | switch-to-engine | memfd | native | 2 | 2 | 1.005 | 1.851 | 0.0067 | 0.0124 |
| trace | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| trace | raf | memfd | native | 178 | 178 | 0.071 | 0.118 | 0.0041 | 0.0068 |
| trace | raf-nosampler | memfd | native | 175 | 175 | 0.095 | 0.141 | 0.0055 | 0.0082 |
| trace | scroll | memfd | native | 112 | 112 | 0.324 | 0.375 | 0.0180 | 0.0208 |
| trace | key | memfd | native | 20 | 20 | 0.001 | 0.100 | 0.0000 | 0.0006 |
| trace | switch-to-gecko | — | — | — | — | — | — | — | — |
| profile | switch-to-engine | memfd | native | 2 | 2 | 1.205 | 1.885 | 0.0075 | 0.0117 |
| profile | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| profile | raf | memfd | native | 180 | 180 | 0.074 | 0.127 | 0.0043 | 0.0074 |
| profile | raf-nosampler | memfd | native | 177 | 177 | 0.099 | 0.156 | 0.0058 | 0.0091 |
| profile | scroll | memfd | native | 112 | 112 | 0.346 | 0.424 | 0.0189 | 0.0232 |
| profile | key | memfd | native | 20 | 20 | 0.001 | 0.118 | 0.0000 | 0.0006 |
| profile | switch-to-gecko | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | 0.6 | 14.0 | 0.0 | — | 0.10 | 0.30 | — | — | 13.1 | 14.9 | 28.9 |
| profile | 0.7 | 16.4 | 0.0 | — | 0.15 | 0.49 | — | — | 15.0 | 18.7 | 34.0 |

Switch timeline (trace, switch-to-engine, ms after the window start): write create 32.0; first stdout read resolved 40.1; first frame applied (native receiver) 277.8; write frame_ack 278.7; write visibility 282.5; write focus 282.6

Switch timeline (trace, switch-to-gecko, ms after the window start): write shutdown 16.8; first stdout read resolved 23.4

Switch timeline (profile, switch-to-engine, ms after the window start): write create 26.4; first stdout read resolved 31.6; first frame applied (native receiver) 289.3; write frame_ack 290.4; write visibility 297.8; write focus 298.1

Switch timeline (profile, switch-to-gecko, ms after the window start): write shutdown 23.7; first stdout read resolved 32.5

### Profile: webkit / switch-to-engine

- **parent** CPU ms by thread group: main 42, DOM Worker 21, BgPool 6, Renderer 5, WRRenderBackend 3, Compositor 2, IPC I/O 2, WRSceneBuilder 2, WRWorker 1, Socket 1, SwComposite 0, ImageBridge 0, other 0, Canvas 0, ImageIO 0
  - main thread 42 ms (13.0% of span): JavaScript 16, Idle 8, Layout 7, DOM 5, Other 2, Graphics 2
  - JS leaf 1 / native under JS 26 / native 15; buckets: poll_wait 10, harness_diagnostics 10, paint_layout 7, engine_stream_read 6, native_receiver 3, damage_payload_assemble 2, subprocess_pipe_io 1, webrender_render 1
  - top self: `[libxul.so]` 24; `__syscall_cancel_arch [libc.so.6]` 9; `[axiosozo-dev]` 2; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 2; `mprotect [libc.so.6]` 1; `untrackRequest (chrome://browser/content/axiosozo/EngineStre` 1
  - top JS (total): `switchToWebKit (chrome://browser/content/axiosozo/WebKitPresenter.sys.` 11; `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 9; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 9
  - WebRender/compositor threads: Renderer 5 ms (top self: `__syscall_cancel_arch [libc.so.6]` 5, `[libxul.so]` 0); WRRenderBackend#0 3 ms (top self: `syscall [libc.so.6]` 1, `sched_yield [libc.so.6]` 1); WRSceneBuilder#0 2 ms (top self: `syscall [libc.so.6]` 1, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #2 6 ms (top self: `__syscall_cancel_arch [libc.so.6]` 2, `[libxul.so]` 2, `__memset_evex_unaligned_erms [libc.so.6]` 1); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 21 ms: buckets subprocess_pipe_io 21, poll_wait 21; top self: `__syscall_cancel_arch [libc.so.6]` 21; `[libxul.so]` 0; `__lll_lock_wake [libc.so.6]` 0
- **tab:7855** CPU ms by thread group: main 50, IPC I/O 1, BgPool 0, other 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 50 ms (19.7% of span): Other 39, DOM 4, JavaScript 3, Profiler 3, Idle 1, GC / CC 0
  - JS leaf 0 / native under JS 5 / native 45; buckets: gc_cc 4, poll_wait 1, memcpy_memset 1
  - top self: `[libxul.so]` 25; `_Unwind_Find_FDE@@GCC_3.0 [libgcc_s.so.1]` 4; `__syscall_cancel_arch [libc.so.6]` 3; `[]` 3; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 3; `__lll_lock_wake [libc.so.6]` 3
  - GC/CC markers: GCMinor 1× 8 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7859** CPU ms by thread group: main 47, IPC I/O 1, other 0, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 47 ms (15.4% of span): Other 39, DOM 4, JavaScript 2, Profiler 1, Idle 1, GC / CC 0
  - JS leaf 0 / native under JS 4 / native 43; buckets: memcpy_memset 1, gc_cc 1, poll_wait 1
  - top self: `[libxul.so]` 19; `[]` 7; `[libfontconfig.so.1]` 3; `__syscall_cancel_arch [libc.so.6]` 3; `[libexpat.so.1]` 2; `__strlen_evex [libc.so.6]` 2
  - GC/CC markers: GCMinor 1× 1 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0, `__lll_lock_wait [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7716** CPU ms by thread group: main 2, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 2 ms (0.7% of span): Idle 2, Profiler 0
  - JS leaf 0 / native under JS 0 / native 2; buckets: poll_wait 2
  - top self: `__syscall_cancel_arch [libc.so.6]` 2; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / idle

- **parent** CPU ms by thread group: main 154, DOM Worker 91, other 17, Socket 1, IPC I/O 1, BgPool 0, Renderer 0, WRWorker 0, WRSceneBuilder 0, WRRenderBackend 0, Canvas 0, Compositor 0, ImageIO 0, ImageBridge 0, SwComposite 0
  - main thread 154 ms (7.5% of span): Idle 125, JavaScript 15, Other 10, Profiler 2, DOM 2
  - JS leaf 2 / native under JS 13 / native 139; buckets: poll_wait 127, harness_diagnostics 14, engine_stream_read 2, native_receiver 0, memcpy_memset 0, json_metadata 0, array_buffer_copy 0, subprocess_pipe_io 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 126; `[libxul.so]` 16; `__lll_lock_wait [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `[unknown]` 1; `[linux-vdso.so.1]` 1
  - top JS (total): `diagnostics (chrome://browser/content/axiosozo/WebKitEngineControls.sy` 10
  - WebRender/compositor threads: Renderer 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); WRWorker#0 0 ms (top self: `syscall [libc.so.6]` 0); WRWorker#1 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 91 ms: buckets subprocess_pipe_io 91, poll_wait 91; top self: `__syscall_cancel_arch [libc.so.6]` 91
- **tab:7716** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7355** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7336** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / raf

- **parent** CPU ms by thread group: main 448, DOM Worker 255, Renderer 95, SwComposite 51, WRRenderBackend 47, BgPool 43, Compositor 39, other 27, ImageBridge 16, WRSceneBuilder 8, IPC I/O 1, Socket 1, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 448 ms (14.6% of span): Idle 292, JavaScript 78, Other 34, DOM 23, GC / CC 12, Profiler 8
  - JS leaf 14 / native under JS 84 / native 351; buckets: poll_wait 308, engine_stream_read 46, harness_diagnostics 41, subprocess_pipe_io 15, native_receiver 14, gc_cc 12, array_buffer_copy 7, json_metadata 4
  - top self: `__syscall_cancel_arch [libc.so.6]` 303; `[libxul.so]` 86; `[unknown]` 15; `[axiosozo-dev]` 5; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5; `emit (resource://gre/modules/EventEmitter.sys.mjs:131:7)[29]` 3
  - top JS (total): `#read (chrome://browser/content/axiosozo/EngineStreamClient.sys.mjs:45` 33; `diagnostics (chrome://browser/content/axiosozo/WebKitEngineControls.sy` 32
  - GC/CC markers: GCMajor 1× 329 ms, GCSlice 4× 14 ms, GCMinor 1× 3 ms
  - WebRender/compositor threads: Renderer 95 ms (top self: `__syscall_cancel_arch [libc.so.6]` 70, `__memmove_evex_unaligned_erms [libc.so.6]` 12, `[libxul.so]` 6); SwComposite 51 ms (top self: `syscall [libc.so.6]` 48, `__memmove_evex_unaligned_erms [libc.so.6]` 2, `[libxul.so]` 1); WRRenderBackend#0 47 ms (top self: `syscall [libc.so.6]` 42, `[libxul.so]` 3, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 42 ms (top self: `__syscall_cancel_arch [libc.so.6]` 40, `__memmove_evex_unaligned_erms [libc.so.6]` 1, `__lll_lock_wake [libc.so.6]` 0); ImageBridgeChld 16 ms (top self: `__syscall_cancel_arch [libc.so.6]` 16, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0, `[libxul.so]` 0); BgIOThreadPool #2 1 ms (top self: `fstatat64 [libc.so.6]` 1, `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 255 ms: buckets subprocess_pipe_io 255, poll_wait 225, memcpy_memset 2; top self: `__syscall_cancel_arch [libc.so.6]` 225; `[libxul.so]` 18; `[unknown]` 3; `[axiosozo-dev]` 3; `__memmove_evex_unaligned_erms [libc.so.6]` 1
- **tab:7314** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7716** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7336** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / raf-nosampler

- **parent** CPU ms by thread group: DOM Worker 243, main 207, Renderer 96, BgPool 52, SwComposite 52, WRRenderBackend 48, Compositor 40, ImageBridge 16, WRSceneBuilder 8, other 1, IPC I/O 1, Socket 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 207 ms (6.9% of span): Idle 107, JavaScript 60, Other 26, DOM 12, Profiler 2
  - JS leaf 8 / native under JS 64 / native 135; buckets: poll_wait 120, engine_stream_read 51, subprocess_pipe_io 16, native_receiver 10, json_metadata 10, array_buffer_copy 7, harness_diagnostics 5, worker_messaging 2
  - top self: `__syscall_cancel_arch [libc.so.6]` 119; `[libxul.so]` 54; `[unknown]` 15; `[axiosozo-dev]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1
  - top JS (total): `#read (chrome://browser/content/axiosozo/EngineStreamClient.sys.mjs:45` 36
  - WebRender/compositor threads: Renderer 96 ms (top self: `__syscall_cancel_arch [libc.so.6]` 68, `__memmove_evex_unaligned_erms [libc.so.6]` 15, `syscall [libc.so.6]` 6); SwComposite 52 ms (top self: `syscall [libc.so.6]` 51, `__memmove_evex_unaligned_erms [libc.so.6]` 1); WRRenderBackend#0 48 ms (top self: `syscall [libc.so.6]` 42, `[libxul.so]` 4, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 51 ms (top self: `__syscall_cancel_arch [libc.so.6]` 47, `__memmove_evex_unaligned_erms [libc.so.6]` 3, `[libxul.so]` 1); ImageBridgeChld 16 ms (top self: `__syscall_cancel_arch [libc.so.6]` 16, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0, `__lll_lock_wait [libc.so.6]` 0); BgIOThreadPool #2 1 ms (top self: `fstatat64 [libc.so.6]` 1, `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 243 ms: buckets subprocess_pipe_io 243, poll_wait 220, memcpy_memset 2; top self: `__syscall_cancel_arch [libc.so.6]` 222; `[libxul.so]` 13; `[axiosozo-dev]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 1; `[unknown]` 1
- **tab:7716** CPU ms by thread group: main 5, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 5 ms (0.2% of span): Idle 3, GC / CC 2, Other 0
  - JS leaf 0 / native under JS 0 / native 5; buckets: poll_wait 3, gc_cc 2
  - top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 1; `__lll_lock_wake [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 35 ms, GCSlice 4× 2 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7355** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7734** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / scroll

- **parent** CPU ms by thread group: main 580, DOM Worker 251, BgPool 83, Renderer 60, WRRenderBackend 32, SwComposite 31, Compositor 24, other 18, ImageBridge 10, WRSceneBuilder 5, Socket 1, IPC I/O 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 580 ms (28.3% of span): Idle 270, JavaScript 98, GC / CC 74, Other 67, DOM 36, Profiler 13
  - JS leaf 8 / native under JS 119 / native 453; buckets: poll_wait 338, gc_cc 75, engine_stream_read 67, harness_diagnostics 41, subprocess_pipe_io 30, array_buffer_copy 15, paint_layout 11, native_receiver 10
  - top self: `__syscall_cancel_arch [libc.so.6]` 300; `[libxul.so]` 194; `[unknown]` 21; `[axiosozo-dev]` 7; `[linux-vdso.so.1]` 6; `syscall [libc.so.6]` 4
  - GC/CC markers: GCSlice 15× 71 ms, GCMajor 1× 60 ms, CCSlice 4× 12 ms, GCMinor 2× 6 ms, CC 2× 0 ms
  - WebRender/compositor threads: Renderer 60 ms (top self: `__syscall_cancel_arch [libc.so.6]` 45, `syscall [libc.so.6]` 6, `__memmove_evex_unaligned_erms [libc.so.6]` 5); WRRenderBackend#0 32 ms (top self: `syscall [libc.so.6]` 26, `sched_yield [libc.so.6]` 4, `[libxul.so]` 2); SwComposite 31 ms (top self: `syscall [libc.so.6]` 31, `__memmove_evex_unaligned_erms [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 83 ms (top self: `__syscall_cancel_arch [libc.so.6]` 65, `__memmove_evex_unaligned_erms [libc.so.6]` 15, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 2); ImageBridgeChld 10 ms (top self: `__syscall_cancel_arch [libc.so.6]` 10, `[linux-vdso.so.1]` 0, `[libxul.so]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 247 ms: buckets subprocess_pipe_io 247, poll_wait 199, memcpy_memset 5; top self: `__syscall_cancel_arch [libc.so.6]` 200; `[libxul.so]` 26; `[axiosozo-dev]` 6; `[unknown]` 5; `__memset_evex_unaligned_erms [libc.so.6]` 2
- **tab:7355** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7314** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7734** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / key

- **parent** CPU ms by thread group: main 544, DOM Worker 224, Renderer 55, other 30, SwComposite 28, Compositor 18, WRRenderBackend 17, WRWorker 10, WRSceneBuilder 10, BgPool 3, ImageBridge 2, IPC I/O 1, Socket 1, Canvas 0, ImageIO 0
  - main thread 544 ms (14.9% of span): Idle 250, JavaScript 91, Graphics 43, Other 42, Layout 39, DOM 37
  - JS leaf 17 / native under JS 144 / native 383; buckets: poll_wait 295, engine_stream_read 71, paint_layout 65, harness_diagnostics 38, gc_cc 24, subprocess_pipe_io 11, native_receiver 9, memcpy_memset 9
  - top self: `__syscall_cancel_arch [libc.so.6]` 262; `[libxul.so]` 195; `[unknown]` 17; `[axiosozo-dev]` 10; `getcontext [libc.so.6]` 5; `mozilla::PrintfTarget::vprint(char const*, __va_list_tag*) [` 5
  - GC/CC markers: GCSlice 5× 25 ms, GCMinor 2× 4 ms
  - WebRender/compositor threads: Renderer 55 ms (top self: `[libxul.so]` 26, `__syscall_cancel_arch [libc.so.6]` 21, `syscall [libc.so.6]` 3); SwComposite 27 ms (top self: `syscall [libc.so.6]` 17, `__memmove_evex_unaligned_erms [libc.so.6]` 11, `[libxul.so]` 0); WRRenderBackend#0 17 ms (top self: `syscall [libc.so.6]` 13, `[libxul.so]` 3, `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 3 ms (top self: `__syscall_cancel_arch [libc.so.6]` 3, `__memmove_evex_unaligned_erms [libc.so.6]` 0, `[libxul.so]` 0); ImageBridgeChld 2 ms (top self: `__syscall_cancel_arch [libc.so.6]` 2, `[libxul.so]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 224 ms: buckets subprocess_pipe_io 224, poll_wait 204, memcpy_memset 1; top self: `__syscall_cancel_arch [libc.so.6]` 205; `[libxul.so]` 15; `[unknown]` 1; `[axiosozo-dev]` 1; `__memmove_evex_unaligned_erms [libc.so.6]` 1
- **tab:7261** CPU ms by thread group: main 7, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 7 ms (0.2% of span): Idle 6, Other 1, GC / CC 0, JavaScript 0
  - JS leaf 0 / native under JS 0 / native 7; buckets: poll_wait 6, gc_cc 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 1; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[5` 0; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs` 0; `[libstdc++.so.6]` 0; `pthread_getspecific@GLIBC_2.2.5 [libc.so.6]` 0
  - top JS (total): `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[5` 0; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[5]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7336** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7716** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / switch-to-gecko

- **parent** CPU ms by thread group: main 79, Renderer 18, DOM Worker 12, BgPool 5, Compositor 3, WRRenderBackend 2, WRSceneBuilder 2, IPC I/O 2, SwComposite 1, Socket 1, other 0, ImageBridge 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 79 ms (28.1% of span): JavaScript 32, GC / CC 11, Layout 8, Profiler 6, Idle 6, Graphics 6
  - JS leaf 2 / native under JS 47 / native 30; buckets: gc_cc 11, harness_diagnostics 11, paint_layout 9, engine_stream_read 7, poll_wait 5, array_buffer_copy 1, memcpy_memset 1, subprocess_pipe_io 0
  - top self: `[libxul.so]` 51; `__syscall_cancel_arch [libc.so.6]` 7; `[linux-vdso.so.1]` 4; `[axiosozo-dev]` 4; `[unknown]` 4; `mprotect [libc.so.6]` 3
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 9; `switchToGecko (chrome://browser/content/axiosozo/WebKitPresenter.sys.m` 8
  - GC/CC markers: CCSlice 1× 9 ms
  - WebRender/compositor threads: Renderer 18 ms (top self: `[libxul.so]` 16, `__syscall_cancel_arch [libc.so.6]` 2); WRRenderBackend#0 3 ms (top self: `syscall [libc.so.6]` 2, `[libxul.so]` 0); WRSceneBuilder#0 2 ms (top self: `syscall [libc.so.6]` 2, `[libxul.so]` 0, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #2 5 ms (top self: `unlink [libc.so.6]` 3, `__close_nocancel [libc.so.6]` 1, `getdents64 [libc.so.6]` 1); BackgroundThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 12 ms: buckets subprocess_pipe_io 12, poll_wait 11, worker_messaging 0; top self: `__syscall_cancel_arch [libc.so.6]` 11; `[libxul.so]` 1; `[unknown]` 0
- **tab:7716** CPU ms by thread group: main 28, IPC I/O 1, Socket 0, other 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 28 ms (9.8% of span): Other 9, JavaScript 6, DOM 4, Idle 4, Profiler 2, Layout 2
  - JS leaf 0 / native under JS 9 / native 18; buckets: poll_wait 4, gc_cc 1
  - top self: `[libxul.so]` 19; `__syscall_cancel_arch [libc.so.6]` 5; `[]` 2; `__lll_lock_wait [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `PR_GetCurrentThread [libnspr4.so]` 0
  - top JS (total): `FormAutofillChild (resource://autofill/FormAutofillChild.sys.mjs:71:14` 5
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7261** CPU ms by thread group: main 4, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 4 ms (1.3% of span): Idle 3, JavaScript 0, DOM 0
  - JS leaf 0 / native under JS 0 / native 3; buckets: poll_wait 3, array_buffer_copy 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 0; `get (resource://gre/modules/ExtensionCommon.sys.mjs:603:12)[` 0
  - top JS (total): `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[5` 1; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[5]` 0; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 0; `get cloneScope (resource://gre/modules/ExtensionPageChild.sys.mjs:173:` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7859** CPU ms by thread group: main 0, IPC I/O 0, Socket 0, BgPool 0, other 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.1% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

