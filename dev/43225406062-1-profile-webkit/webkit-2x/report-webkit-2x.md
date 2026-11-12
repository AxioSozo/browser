# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## webkit-2x (PASS)

CPU: INTEL(R) XEON(R) PLATINUM 8573C; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | switch-to-engine | — | — | **68.0** (Renderer 36.0, main 16.0, Backgro~Pool # 4.0, WRScene~ilder# 4.0, Compositor 4.0) | WPEWebProcess 76.0, AxioWebKitHost 12.0, WPENetworkProce 12.0 | — | 217.7 |
| plain | idle | — | — | **5.4** (main 4.9, TaskCon~ller # 0.5) | Web Content 3.4 | — | — |
| plain | raf | 58.1 | 24.8 | **36.5** (main 10.7, Renderer 7.2, Backgro~Pool # 5.2, SwComposite 4.2, DOM Worker 3.3) | WPEWebProcess 191.6, AxioWebKitHost 26.5, Privileged Cont 0.3 | — | — |
| plain | raf-nosampler | — | — | **44.6** (main 10.6, Renderer 7.0, Backgro~Pool # 4.3, SwComposite 4.3, Socket Thread 3.7) | WPEWebProcess 191.1, AxioWebKitHost 25.6, Web Content 0.3, Privileged Cont 0.3 | — | — |
| plain | scroll | 54.9 | 34.8 | **59.3** (main 20.5, Backgro~Pool # 12.9, DOM Worker 9.5, Renderer 6.7, SwComposite 3.8) | WPEWebProcess 196.2, AxioWebKitHost 28.6 | — | — |
| plain | key | — | — | **43.1** (main 15.5, DOM Worker 8.5, IndexedDB IO # 5.2, IPDL Background 3.0, Renderer 3.0) | WPEWebProcess 19.9, AxioWebKitHost 3.0 | 28.3 | — |
| plain | switch-to-gecko | — | — | **128.0** (IndexedDB IO # 46.9, DOM Worker 25.6, main 21.3, IPDL Background 17.1, Renderer 8.5) | Isolated Web Co 4.3 | — | 215.8 |
| trace | switch-to-engine | — | — | **121.6** (main 38.2, Renderer 31.3, IPDL Background 10.4, DOM Worker 6.9, IndexedDB IO # 6.9) | WPEWebProcess 66.0, AxioWebKitHost 10.4, WPENetworkProce 10.4, WebExtensions 3.5 | — | 254.9 |
| trace | idle | — | — | **7.3** (main 3.4, DOM Worker 2.4, glean.dispatche 0.5, Timer 0.5, TaskCon~ller # 0.5) | Web Content 2.9, forkserver 0.5, AxioWebKitHost 0.5 | — | — |
| trace | raf | 58.0 | 25.9 | **37.7** (main 11.7, Renderer 6.2, Backgro~Pool # 5.5, SwComposite 4.6, DOM Worker 3.6) | WPEWebProcess 189.6, AxioWebKitHost 25.5 | — | — |
| trace | raf-nosampler | — | — | **28.5** (Renderer 6.6, main 5.3, Backgro~Pool # 4.3, SwComposite 4.3, DOM Worker 3.3) | WPEWebProcess 188.4, AxioWebKitHost 24.5 | — | — |
| trace | scroll | 53.5 | 37.7 | **56.4** (main 20.4, Backgro~Pool # 11.6, DOM Worker 9.2, Renderer 6.3, SwComposite 3.4) | WPEWebProcess 194.4, AxioWebKitHost 27.7 | — | — |
| trace | key | — | — | **18.6** (main 9.0, Renderer 3.0, SwComposite 1.9, DOM Worker 1.4, Timer 0.8) | WPEWebProcess 18.0, AxioWebKitHost 3.3, Web Content 0.3 | 29.1 | — |
| trace | switch-to-gecko | — | — | **30.6** (main 8.7, Renderer 8.7, Compositor 4.4, sqldb:p~lite # 4.4, DOM Worker 4.4) | Isolated Web Co 4.4 | — | 212.8 |
| profile | switch-to-engine | — | — | **44.8** (main 14.9, Backgro~Pool # 7.5, DOM Worker 7.5, SamplerThread 7.5, Renderer 3.7) | WPEWebProcess 70.8, AxioWebKitHost 11.2, WPENetworkProce 11.2, Web Content 7.5 | — | 244.3 |
| profile | idle | — | — | **24.4** (main 8.3, DOM Worker 6.8, SamplerThread 6.8, Timer 1.5, TaskCon~ller # 1.0) | Web Content 6.9, Privileged Cont 1.5, Socket Process 1.0, WebExtensions 1.0 | — | — |
| profile | raf | 57.9 | 28.8 | **54.1** (main 14.6, DOM Worker 9.8, Renderer 7.2, SamplerThread 7.2, Backgro~Pool # 4.9) | WPEWebProcess 192.3, AxioWebKitHost 25.4, Web Content 6.8, WebExtensions 1.3 | — | — |
| profile | raf-nosampler | — | — | **45.1** (DOM Worker 9.6, Renderer 7.3, main 7.0, SamplerThread 6.3, Backgro~Pool # 5.3) | WPEWebProcess 192.1, AxioWebKitHost 24.2, Web Content 6.3, WebExtensions 1.3 | — | — |
| profile | scroll | 50.6 | 35.1 | **71.8** (main 25.3, DOM Worker 14.3, Backgro~Pool # 11.0, Renderer 6.2, SamplerThread 5.7) | WPEWebProcess 187.0, AxioWebKitHost 26.4, Web Content 5.7, Privileged Cont 1.4 | — | — |
| profile | key | — | — | **43.6** (main 16.1, DOM Worker 8.7, SamplerThread 8.2, Renderer 3.3, SwComposite 2.5) | WPEWebProcess 19.1, Web Content 7.9, AxioWebKitHost 3.3, Privileged Cont 1.9 | 31.4 | — |
| profile | switch-to-gecko | — | — | **65.9** (main 16.5, Renderer 12.4, DOM Worker 8.3, glean.dispatche 4.1, Socket Thread 4.1) | Isolated Web Co 4.1 | — | 219.5 |

Frame path (median ms per frame; hooks). recv/paint fps = frames read / surface paints per s; header wait = idle until the next AXCF header; payload read = Subprocess read(size) call → resolve; assemble = damage payload → whole frame; native apply = NativeFrameSinks.apply call → resolve (AxioFrameRing queue + main-thread hop); native resolve→ack = presenter present + ack write; tick wait = accept → rAF paint start; paint = convert + putImageData of the damage union; main-thread share = (payload reads + assembly + paints) / window.

| pass | window | recv fps | paint fps | superseded | MB/s | payload KB | damage share | header wait | payload read | assemble | native apply | native resolve→ack | tick wait | paint | convert | put | paint→MozAfterPaint | main-thread share |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | switch-to-engine | 6.6 | 0.0 | 0 | 0.0 | — | — | 82.7 | 0.0 | — | 5.02 | 0.51 | — | — | — | — | — | 0.003 |
| trace | raf | 58.0 | 0.0 | 0 | 0.0 | — | — | 16.1 | 0.0 | — | 0.45 | 0.12 | — | — | — | — | — | 0.009 |
| trace | raf-nosampler | 57.8 | 0.0 | 0 | 0.0 | — | — | 16.2 | 0.0 | — | 0.40 | 0.12 | — | — | — | — | — | 0.008 |
| trace | scroll | 52.1 | 0.0 | 0 | 0.0 | — | — | 8.0 | 0.0 | — | 1.35 | 0.14 | — | — | — | — | — | 0.010 |
| trace | key | 5.4 | 0.0 | 0 | 0.0 | — | — | 16.9 | 0.0 | — | 0.10 | 0.12 | — | — | — | — | — | 0.001 |
| profile | switch-to-engine | 7.0 | 0.0 | 0 | 0.0 | — | — | 74.1 | 0.0 | — | 3.77 | 0.70 | — | — | — | — | — | 0.005 |
| profile | raf | 58.0 | 0.0 | 0 | 0.0 | — | — | 15.7 | 0.0 | — | 0.50 | 0.16 | — | — | — | — | — | 0.011 |
| profile | raf-nosampler | 57.6 | 0.0 | 0 | 0.0 | — | — | 15.7 | 0.0 | — | 0.54 | 0.18 | — | — | — | — | — | 0.015 |
| profile | scroll | 48.9 | 0.0 | 0 | 0.0 | — | — | 8.7 | 0.0 | — | 1.97 | 0.15 | — | — | — | — | — | 0.015 |
| profile | key | 5.4 | 0.0 | 0 | 0.0 | — | — | 15.2 | 0.0 | — | 0.23 | 0.16 | — | — | — | — | — | 0.001 |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | switch-to-engine | memfd | native | 2 | 2 | 3.095 | 7.252 | 0.0235 | 0.0551 |
| plain | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| plain | raf | memfd | native | 179 | 179 | 0.354 | 0.546 | 0.0205 | 0.0316 |
| plain | raf-nosampler | memfd | native | 172 | 172 | 0.338 | 0.506 | 0.0192 | 0.0287 |
| plain | scroll | memfd | native | 112 | 112 | 1.271 | 1.438 | 0.0673 | 0.0762 |
| plain | key | memfd | native | 20 | 20 | 0.003 | 0.261 | 0.0000 | 0.0014 |
| plain | switch-to-gecko | — | — | — | — | — | — | — | — |
| trace | switch-to-engine | memfd | native | 2 | 2 | 3.800 | 6.405 | 0.0249 | 0.0420 |
| trace | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| trace | raf | memfd | native | 179 | 179 | 0.353 | 0.523 | 0.0205 | 0.0304 |
| trace | raf-nosampler | memfd | native | 176 | 176 | 0.304 | 0.427 | 0.0177 | 0.0248 |
| trace | scroll | memfd | native | 108 | 108 | 1.197 | 1.456 | 0.0623 | 0.0758 |
| trace | key | memfd | native | 20 | 20 | 0.003 | 0.316 | 0.0000 | 0.0017 |
| trace | switch-to-gecko | — | — | — | — | — | — | — | — |
| profile | switch-to-engine | memfd | native | 2 | 2 | 3.583 | 5.897 | 0.0249 | 0.0410 |
| profile | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| profile | raf | memfd | native | 179 | 179 | 0.368 | 0.656 | 0.0212 | 0.0379 |
| profile | raf-nosampler | memfd | native | 175 | 175 | 0.377 | 0.696 | 0.0217 | 0.0401 |
| profile | scroll | memfd | native | 103 | 103 | 1.366 | 2.030 | 0.0668 | 0.0992 |
| profile | key | memfd | native | 20 | 20 | 0.003 | 0.314 | 0.0000 | 0.0017 |
| profile | switch-to-gecko | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | 0.6 | 25.6 | 0.0 | — | 0.10 | 0.35 | — | — | 12.0 | 26.8 | 37.9 |
| profile | 0.7 | 26.7 | 0.1 | — | 0.23 | 0.63 | — | — | 11.0 | 28.9 | 36.9 |

Switch timeline (trace, switch-to-engine, ms after the window start): write create 29.3; first stdout read resolved 35.1; first frame applied (native receiver) 274.8; write frame_ack 275.5; write visibility 279.9; write focus 280.4

Switch timeline (trace, switch-to-gecko, ms after the window start): write shutdown 13.6; first stdout read resolved 20.5

Switch timeline (profile, switch-to-engine, ms after the window start): write create 26.3; first stdout read resolved 31.5; first frame applied (native receiver) 255.3; write frame_ack 256.5; write visibility 265.2; write focus 265.5

Switch timeline (profile, switch-to-gecko, ms after the window start): first stdout read resolved 2.3; write shutdown 21.7

### Profile: webkit-2x / switch-to-engine

- **parent** CPU ms by thread group: main 38, DOM Worker 21, BgPool 17, Renderer 11, Compositor 3, SwComposite 2, WRRenderBackend 2, WRSceneBuilder 2, Socket 1, IPC I/O 0, WRWorker 0, ImageBridge 0, other 0, ImageIO 0, Canvas 0
  - main thread 38 ms (13.3% of span): JavaScript 18, Idle 8, Layout 5, Other 3, Graphics 2, DOM 2
  - JS leaf 2 / native under JS 22 / native 14; buckets: harness_diagnostics 9, poll_wait 9, paint_layout 5, engine_stream_read 1, memcpy_memset 1, native_receiver 1, webrender_render 1, subprocess_pipe_io 0
  - top self: `[libxul.so]` 18; `__syscall_cancel_arch [libc.so.6]` 9; `mprotect [libc.so.6]` 4; `[unknown]` 3; `engineAvailability (chrome://browser/content/axiosozo/Engine` 1; `__memmove_evex_unaligned_erms [libc.so.6]` 1
  - top JS (total): `switchToWebKit (chrome://browser/content/axiosozo/WebKitPresenter.sys.` 11
  - WebRender/compositor threads: Renderer 11 ms (top self: `__syscall_cancel_arch [libc.so.6]` 7, `hypotf@@GLIBC_2.35 [libm.so.6]` 3, `__memmove_evex_unaligned_erms [libc.so.6]` 0); SwComposite 2 ms (top self: `syscall [libc.so.6]` 2); WRRenderBackend#0 2 ms (top self: `syscall [libc.so.6]` 2, `[libxul.so]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #1 17 ms (top self: `[libxul.so]` 8, `__memmove_evex_unaligned_erms [libc.so.6]` 4, `__memset_evex_unaligned_erms [libc.so.6]` 3); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 21 ms: buckets subprocess_pipe_io 21, poll_wait 18, memcpy_memset 0; top self: `__syscall_cancel_arch [libc.so.6]` 18; `[libxul.so]` 3; `mprotect [libc.so.6]` 0
- **tab:9534** CPU ms by thread group: main 10, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 10 ms (3.3% of span): DOM 3, JavaScript 3, Other 2, Idle 2, GC / CC 0
  - JS leaf 0 / native under JS 6 / native 4; buckets: poll_wait 2, gc_cc 1, memcpy_memset 0
  - top self: `[libxul.so]` 5; `__syscall_cancel_arch [libc.so.6]` 2; `[libmozsandbox.so]` 1; `syscall [libc.so.6]` 1; `_Unwind_Find_FDE@@GCC_3.0 [libgcc_s.so.1]` 1; `mmap64 [libc.so.6]` 0
  - top JS (total): `init (resource://gre/modules/ExtensionProcessScript.sys.mjs:57:7)[3]` 5; `initExtension (resource://gre/modules/ExtensionProcessScript.sys.mjs:2` 5; `initExtensionPolicy (resource://gre/modules/ExtensionProcessScript.sys` 5
  - GC/CC markers: GCMinor 1× 1 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9388** CPU ms by thread group: main 2, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 2 ms (0.6% of span): Idle 1, Other 1
  - JS leaf 0 / native under JS 0 / native 2; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9528** CPU ms by thread group: other 0, main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / idle

- **parent** CPU ms by thread group: main 162, DOM Worker 88, other 17, Socket 1, IPC I/O 1, BgPool 0, ImageIO 0, Renderer 0, WRWorker 0, WRSceneBuilder 0, WRRenderBackend 0, Compositor 0, Canvas 0, ImageBridge 0, SwComposite 0
  - main thread 162 ms (7.8% of span): Idle 125, JavaScript 15, Other 8, GC / CC 6, DOM 6, Profiler 2
  - JS leaf 2 / native under JS 19 / native 141; buckets: poll_wait 130, harness_diagnostics 20, gc_cc 6, engine_stream_read 4, json_metadata 2, native_receiver 1, subprocess_pipe_io 1, memcpy_memset 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 129; `[libxul.so]` 21; `[unknown]` 3; `[axiosozo-dev]` 2; `diagnostics (chrome://browser/content/axiosozo/WebKitPresent` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1
  - top JS (total): `diagnostics (chrome://browser/content/axiosozo/WebKitEngineControls.sy` 14
  - GC/CC markers: CCSlice 1× 3 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); WRWorker#1 0 ms (top self: `syscall [libc.so.6]` 0); WRSceneBuilder#0 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 88 ms: buckets subprocess_pipe_io 88, poll_wait 88; top self: `__syscall_cancel_arch [libc.so.6]` 88
- **tab:8994** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9528** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9013** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / raf

- **parent** CPU ms by thread group: main 418, DOM Worker 250, Renderer 207, BgPool 153, SwComposite 114, WRRenderBackend 52, Compositor 37, other 24, ImageBridge 15, WRSceneBuilder 8, IPC I/O 1, Socket 1, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 418 ms (13.5% of span): Idle 286, JavaScript 72, Other 27, DOM 20, Profiler 11, GC / CC 1
  - JS leaf 11 / native under JS 76 / native 331; buckets: poll_wait 299, engine_stream_read 51, harness_diagnostics 28, native_receiver 16, subprocess_pipe_io 15, array_buffer_copy 11, json_metadata 6, memcpy_memset 4
  - top self: `__syscall_cancel_arch [libc.so.6]` 297; `[libxul.so]` 60; `[unknown]` 12; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 7; `[axiosozo-dev]` 4; `__lll_lock_wait [libc.so.6]` 3
  - top JS (total): `#read (chrome://browser/content/axiosozo/EngineStreamClient.sys.mjs:45` 35
  - GC/CC markers: GCMinor 1× 2 ms
  - WebRender/compositor threads: Renderer 207 ms (top self: `__syscall_cancel_arch [libc.so.6]` 127, `__memmove_evex_unaligned_erms [libc.so.6]` 43, `syscall [libc.so.6]` 25); SwComposite 114 ms (top self: `syscall [libc.so.6]` 101, `__memmove_evex_unaligned_erms [libc.so.6]` 9, `[libxul.so]` 3); WRRenderBackend#0 52 ms (top self: `syscall [libc.so.6]` 38, `sched_yield [libc.so.6]` 10, `[libxul.so]` 2)
  - background pools (native receiver queue): BackgroundThreadPool #1 152 ms (top self: `__syscall_cancel_arch [libc.so.6]` 104, `__memmove_evex_unaligned_erms [libc.so.6]` 41, `__lll_lock_wake [libc.so.6]` 3); ImageBridgeChld 15 ms (top self: `__syscall_cancel_arch [libc.so.6]` 15, `[libxul.so]` 0, `[linux-vdso.so.1]` 0); BgIOThreadPool #2 1 ms (top self: `rename [libc.so.6]` 1, `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 250 ms: buckets subprocess_pipe_io 250, poll_wait 214, memcpy_memset 1; top self: `__syscall_cancel_arch [libc.so.6]` 216; `[libxul.so]` 18; `[axiosozo-dev]` 6; `__lll_lock_wake [libc.so.6]` 2; `[unknown]` 2
- **tab:8994** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8972** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9013** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / raf-nosampler

- **parent** CPU ms by thread group: DOM Worker 231, main 196, Renderer 195, BgPool 144, SwComposite 112, WRRenderBackend 49, Compositor 36, ImageBridge 14, WRSceneBuilder 7, other 1, Socket 1, IPC I/O 0, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 196 ms (6.5% of span): Idle 125, JavaScript 43, Other 14, DOM 10, Profiler 4, GC / CC 0
  - JS leaf 7 / native under JS 47 / native 142; buckets: poll_wait 133, engine_stream_read 40, native_receiver 13, subprocess_pipe_io 12, array_buffer_copy 5, damage_payload_assemble 5, harness_diagnostics 4, json_metadata 2
  - top self: `__syscall_cancel_arch [libc.so.6]` 133; `[libxul.so]` 39; `[unknown]` 10; `__lll_lock_wake [libc.so.6]` 2; `read (resource://gre/modules/subprocess/subprocess_common.sy` 1; `[axiosozo-dev]` 1
  - top JS (total): `#read (chrome://browser/content/axiosozo/EngineStreamClient.sys.mjs:45` 31
  - WebRender/compositor threads: Renderer 195 ms (top self: `__syscall_cancel_arch [libc.so.6]` 115, `__memmove_evex_unaligned_erms [libc.so.6]` 38, `syscall [libc.so.6]` 32); SwComposite 112 ms (top self: `syscall [libc.so.6]` 103, `__memmove_evex_unaligned_erms [libc.so.6]` 6, `[libxul.so]` 4); WRRenderBackend#0 49 ms (top self: `syscall [libc.so.6]` 35, `sched_yield [libc.so.6]` 10, `[libxul.so]` 4)
  - background pools (native receiver queue): BackgroundThreadPool #1 144 ms (top self: `__syscall_cancel_arch [libc.so.6]` 92, `__memmove_evex_unaligned_erms [libc.so.6]` 44, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 3); ImageBridgeChld 14 ms (top self: `__syscall_cancel_arch [libc.so.6]` 14, `[libxul.so]` 0, `__lll_lock_wait [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 231 ms: buckets subprocess_pipe_io 231, poll_wait 196, memcpy_memset 4; top self: `__syscall_cancel_arch [libc.so.6]` 197; `[libxul.so]` 16; `getcontext [libc.so.6]` 4; `[unknown]` 3; `[axiosozo-dev]` 2
- **tab:9013** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9392** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8994** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / scroll

- **parent** CPU ms by thread group: main 493, DOM Worker 259, BgPool 216, Renderer 118, SwComposite 56, WRRenderBackend 30, Compositor 21, other 16, ImageBridge 8, WRSceneBuilder 5, Socket 1, IPC I/O 1, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 493 ms (23.5% of span): Idle 292, JavaScript 83, Other 57, DOM 28, Graphics 19, Profiler 6
  - JS leaf 5 / native under JS 103 / native 385; buckets: poll_wait 361, engine_stream_read 45, harness_diagnostics 41, paint_layout 19, subprocess_pipe_io 17, native_receiver 17, array_buffer_copy 13, json_metadata 5
  - top self: `__syscall_cancel_arch [libc.so.6]` 321; `[libxul.so]` 96; `[unknown]` 16; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 7; `__lll_lock_wake [libc.so.6]` 7; `__lll_lock_wait [libc.so.6]` 7
  - WebRender/compositor threads: Renderer 118 ms (top self: `__syscall_cancel_arch [libc.so.6]` 85, `syscall [libc.so.6]` 15, `__memmove_evex_unaligned_erms [libc.so.6]` 11); SwComposite 56 ms (top self: `syscall [libc.so.6]` 52, `__memmove_evex_unaligned_erms [libc.so.6]` 4); WRRenderBackend#0 30 ms (top self: `syscall [libc.so.6]` 20, `sched_yield [libc.so.6]` 7, `[libxul.so]` 2)
  - background pools (native receiver queue): BackgroundThreadPool #1 216 ms (top self: `__syscall_cancel_arch [libc.so.6]` 147, `__memmove_evex_unaligned_erms [libc.so.6]` 58, `__lll_lock_wait [libc.so.6]` 4); ImageBridgeChld 9 ms (top self: `__syscall_cancel_arch [libc.so.6]` 8, `[linux-vdso.so.1]` 0, `__lll_lock_wait [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 259 ms: buckets subprocess_pipe_io 259, poll_wait 204, memcpy_memset 7; top self: `__syscall_cancel_arch [libc.so.6]` 205; `[libxul.so]` 19; `__lll_lock_wake [libc.so.6]` 9; `getcontext [libc.so.6]` 6; `__memset_evex_unaligned_erms [libc.so.6]` 5
- **tab:8972** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wake [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9392** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9013** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / key

- **parent** CPU ms by thread group: main 539, DOM Worker 226, Renderer 112, SwComposite 76, other 31, WRRenderBackend 19, Compositor 18, WRWorker 10, WRSceneBuilder 10, BgPool 7, ImageBridge 2, IPC I/O 2, Socket 1, ImageIO 0, Canvas 0
  - main thread 539 ms (14.7% of span): Idle 248, JavaScript 104, Other 55, Graphics 43, Layout 42, DOM 24
  - JS leaf 21 / native under JS 145 / native 374; buckets: poll_wait 296, engine_stream_read 73, paint_layout 69, harness_diagnostics 39, subprocess_pipe_io 11, array_buffer_copy 10, memcpy_memset 7, gc_cc 4
  - top self: `__syscall_cancel_arch [libc.so.6]` 270; `[libxul.so]` 184; `[unknown]` 16; `[axiosozo-dev]` 11; `readStreamPacket (chrome://browser/content/axiosozo/EngineSt` 6; `get formattingEnabled (moz-src:///browser/components/urlbar/` 5
  - GC/CC markers: CCSlice 2× 4 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 112 ms (top self: `[libxul.so]` 69, `__syscall_cancel_arch [libc.so.6]` 27, `syscall [libc.so.6]` 6); SwComposite 76 ms (top self: `__memmove_evex_unaligned_erms [libc.so.6]` 46, `syscall [libc.so.6]` 30, `[libxul.so]` 1); WRRenderBackend#0 19 ms (top self: `syscall [libc.so.6]` 15, `[libxul.so]` 2, `[axiosozo-dev]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #1 7 ms (top self: `__syscall_cancel_arch [libc.so.6]` 4, `__memmove_evex_unaligned_erms [libc.so.6]` 3); ImageBridgeChld 2 ms (top self: `__syscall_cancel_arch [libc.so.6]` 2); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 226 ms: buckets subprocess_pipe_io 226, poll_wait 210, memcpy_memset 3; top self: `__syscall_cancel_arch [libc.so.6]` 210; `[libxul.so]` 8; `[axiosozo-dev]` 3; `[unknown]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1
- **tab:8919** CPU ms by thread group: main 6, IPC I/O 1, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 7 ms (0.2% of span): Idle 6, DOM 1, Other 0, JavaScript 0
  - JS leaf 0 / native under JS 1 / native 6; buckets: poll_wait 6, array_buffer_copy 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 1
  - top JS (total): `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[7` 1; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[7]` 1; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8994** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9392** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / switch-to-gecko

- **parent** CPU ms by thread group: main 75, Renderer 36, DOM Worker 13, SwComposite 4, Compositor 3, WRRenderBackend 3, BgPool 3, WRSceneBuilder 3, IPC I/O 2, Socket 1, other 0, ImageBridge 0, ImageIO 0, WRWorker 0, Canvas 0
  - main thread 75 ms (25.7% of span): JavaScript 35, Layout 11, Other 7, DOM 6, Idle 6, Graphics 6
  - JS leaf 9 / native under JS 36 / native 30; buckets: paint_layout 11, harness_diagnostics 10, poll_wait 6, engine_stream_read 3, memcpy_memset 2, json_metadata 0, gc_cc 0, subprocess_pipe_io 0
  - top self: `[libxul.so]` 52; `get _isBrokenConnection (chrome://browser/content/browser-si` 8; `__syscall_cancel_arch [libc.so.6]` 6; `mprotect [libc.so.6]` 2; `__lll_lock_wait [libc.so.6]` 2; `[unknown]` 1
  - top JS (total): `_callProgressListeners (moz-src:///browser/components/tabbrowser/Tabbr` 9; `callListeners (moz-src:///browser/components/tabbrowser/Tabbrowser.sys` 9; `_callProgressListeners (moz-src:///browser/components/tabbrowser/Tabbr` 9; `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 8; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 8
  - WebRender/compositor threads: Renderer 36 ms (top self: `[libxul.so]` 29, `__syscall_cancel_arch [libc.so.6]` 3, `__memmove_evex_unaligned_erms [libc.so.6]` 2); SwComposite 4 ms (top self: `syscall [libc.so.6]` 4, `__memmove_evex_unaligned_erms [libc.so.6]` 0); WRRenderBackend#0 3 ms (top self: `syscall [libc.so.6]` 3, `[libxul.so]` 0)
  - background pools (native receiver queue): BgIOThreadPool #2 3 ms (top self: `unlink [libc.so.6]` 2, `__syscall_cancel_arch [libc.so.6]` 1); BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 13 ms: buckets subprocess_pipe_io 13, poll_wait 12, worker_messaging 1; top self: `__syscall_cancel_arch [libc.so.6]` 12; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `[libxul.so]` 0
- **tab:9388** CPU ms by thread group: main 27, IPC I/O 1, Socket 0, other 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 27 ms (9.3% of span): Other 8, JavaScript 7, Profiler 3, Idle 3, DOM 3, Layout 1
  - JS leaf 0 / native under JS 7 / native 20; buckets: poll_wait 3, memcpy_memset 2, paint_layout 0
  - top self: `[libxul.so]` 17; `__syscall_cancel_arch [libc.so.6]` 5; `__memset_evex_unaligned_erms [libc.so.6]` 2; `__pthread_mutex_unlock_usercnt [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1; `PL_strncasecmp [libplc4.so]` 1
  - top JS (total): `FormAutofillChild (resource://autofill/FormAutofillChild.sys.mjs:71:14` 5
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8919** CPU ms by thread group: main 4, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 5 ms (1.5% of span): Idle 3, JavaScript 2
  - JS leaf 0 / native under JS 2 / native 3; buckets: poll_wait 3
  - top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1
  - top JS (total): `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[9` 2; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[9]` 2; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 2; `applySafeWithoutClone (resource://gre/modules/ExtensionCommon.sys.mjs:` 2
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9013** CPU ms by thread group: main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

