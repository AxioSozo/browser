# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## webkit-2x (PASS)

CPU: AMD EPYC 7763 64-Core Processor; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | switch-to-engine | — | — | **85.5** (Renderer 32.0, DOM Worker 24.9, main 17.8, IPDL Background 3.6, WRRende~ckend# 3.6) | WPEWebProcess 78.2, WPENetworkProce 14.2, AxioWebKitHost 7.1 | — | 245.2 |
| plain | idle | — | — | **13.1** (main 8.7, TaskCon~ller # 3.4, glean.dispatche 0.5, Timer 0.5) | Web Content 3.9, AxioWebKitHost 0.5 | — | — |
| plain | raf | 56.8 | 33.0 | **42.4** (main 15.1, Renderer 5.2, BgIOThr~Pool # 3.5, DOM Worker 3.2, SwComposite 2.9) | WPEWebProcess 180.3, AxioWebKitHost 18.4 | — | — |
| plain | raf-nosampler | — | — | **23.7** (Renderer 5.6, main 4.6, SwComposite 3.3, DOM Worker 3.3, Backgro~Pool # 2.7) | WPEWebProcess 178.7, AxioWebKitHost 19.3 | — | — |
| plain | scroll | 54.2 | 36.5 | **47.3** (main 19.5, DOM Worker 8.1, Backgro~Pool # 7.6, Renderer 4.3, SwComposite 2.4) | WPEWebProcess 181.2, AxioWebKitHost 20.5 | — | — |
| plain | key | — | — | **88.4** (main 25.9, DOM Worker 22.1, Indexed~ IO # 13.8, IPDL Background 6.5, IndexedDB IO # 4.1) | WPEWebProcess 17.4, AxioWebKitHost 3.1, Privileged Cont 0.3 | 25.8 | — |
| plain | switch-to-gecko | — | — | **27.9** (Renderer 11.9, main 8.0, BgIOThr~Pool # 4.0, Backgro~Pool # 4.0) | WebExtensions 4.0, Isolated Web Co 4.0 | — | 216.6 |
| trace | switch-to-engine | — | — | **60.7** (Renderer 26.0, main 20.2, glean.dispatche 2.9, WRRende~ckend# 2.9, Compositor 2.9) | WPEWebProcess 80.9, AxioWebKitHost 8.7, WPENetworkProce 8.7 | — | 318.2 |
| trace | idle | — | — | **17.3** (main 11.1, TaskCon~ller # 4.3, DOM Worker 1.4, Timer 0.5) | AxioWebKitHost 0.5 | — | — |
| trace | raf | 57.4 | 25.8 | **29.6** (main 11.3, Renderer 4.8, DOM Worker 3.5, SwComposite 2.9, Backgro~Pool # 2.3) | WPEWebProcess 180.0, AxioWebKitHost 17.7 | — | — |
| trace | raf-nosampler | — | — | **23.7** (Renderer 5.6, main 5.3, DOM Worker 3.6, SwComposite 3.0, Backgro~Pool # 2.6) | WPEWebProcess 181.2, AxioWebKitHost 18.2 | — | — |
| trace | scroll | 55.4 | 34.5 | **47.8** (main 20.0, Backgro~Pool # 7.6, DOM Worker 7.6, Renderer 4.3, SwComposite 2.4) | WPEWebProcess 184.0, AxioWebKitHost 20.9 | — | — |
| trace | key | — | — | **18.6** (main 10.4, Renderer 2.7, SwComposite 1.1, DOM Worker 1.1, Timer 0.8) | WPEWebProcess 18.0, AxioWebKitHost 2.9, Privileged Cont 0.3 | 27.0 | — |
| trace | switch-to-gecko | — | — | **20.5** (main 8.2, Renderer 8.2, BgIOThr~Pool # 4.1) | Isolated Web Co 4.1 | — | 216.1 |
| profile | switch-to-engine | — | — | **42.9** (main 13.2, DOM Worker 9.9, SamplerThread 9.9, Backgro~Pool # 6.6, Renderer 3.3) | WPEWebProcess 76.0, Web Content 13.2, WPENetworkProce 9.9, AxioWebKitHost 6.6 | — | 269.0 |
| profile | idle | — | — | **25.8** (DOM Worker 8.1, SamplerThread 8.1, main 7.7, Timer 1.4, TaskCon~ller # 0.5) | Web Content 6.2, WebExtensions 1.9, Socket Process 1.4, RDD Process 1.4 | — | — |
| profile | raf | 57.9 | 23.9 | **53.4** (main 14.9, DOM Worker 9.2, SamplerThread 8.6, Renderer 6.0, SwComposite 3.2) | WPEWebProcess 185.1, AxioWebKitHost 19.7, Web Content 6.7, Privileged Cont 1.6 | — | — |
| profile | raf-nosampler | — | — | **43.6** (DOM Worker 10.6, SamplerThread 7.9, main 6.9, Renderer 5.9, Backgro~Pool # 3.0) | WPEWebProcess 185.7, AxioWebKitHost 20.2, Web Content 6.2, Socket Process 1.3 | — | — |
| profile | scroll | 54.6 | 37.0 | **71.7** (main 26.7, DOM Worker 14.1, Backgro~Pool # 8.4, SamplerThread 7.5, Renderer 5.2) | WPEWebProcess 185.9, AxioWebKitHost 22.0, Web Content 5.6, Socket Process 1.4 | — | — |
| profile | key | — | — | **54.4** (main 14.7, BgIOThr~Pool # 10.6, DOM Worker 9.8, SamplerThread 9.5, Renderer 2.7) | WPEWebProcess 17.7, Web Content 7.6, AxioWebKitHost 3.0, Privileged Cont 2.2 | 27.6 | — |
| profile | switch-to-gecko | — | — | **50.9** (main 15.7, Renderer 15.7, BgIOThr~Pool # 7.8, DOM Worker 7.8, SamplerThread 3.9) |  | — | 224.6 |

Frame path (median ms per frame; hooks). recv/paint fps = frames read / surface paints per s; header wait = idle until the next AXCF header; payload read = Subprocess read(size) call → resolve; assemble = damage payload → whole frame; native apply = NativeFrameSinks.apply call → resolve (AxioFrameRing queue + main-thread hop); native resolve→ack = presenter present + ack write; tick wait = accept → rAF paint start; paint = convert + putImageData of the damage union; main-thread share = (payload reads + assembly + paints) / window.

| pass | window | recv fps | paint fps | superseded | MB/s | payload KB | damage share | header wait | payload read | assemble | native apply | native resolve→ack | tick wait | paint | convert | put | paint→MozAfterPaint | main-thread share |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | switch-to-engine | 5.2 | 0.0 | 0 | 0.0 | — | — | 54.0 | 0.0 | — | 3.61 | 0.42 | — | — | — | — | — | 0.002 |
| trace | raf | 57.8 | 0.0 | 0 | 0.0 | — | — | 16.3 | 0.0 | — | 0.29 | 0.11 | — | — | — | — | — | 0.007 |
| trace | raf-nosampler | 57.9 | 0.0 | 0 | 0.0 | — | — | 16.4 | 0.0 | — | 0.28 | 0.11 | — | — | — | — | — | 0.007 |
| trace | scroll | 54.3 | 0.0 | 0 | 0.0 | — | — | 12.0 | 0.0 | — | 0.85 | 0.12 | — | — | — | — | — | 0.007 |
| trace | key | 5.5 | 0.0 | 0 | 0.0 | — | — | 16.3 | 0.0 | — | 0.09 | 0.10 | — | — | — | — | — | 0.001 |
| profile | switch-to-engine | 6.1 | 0.0 | 0 | 0.0 | — | — | 86.0 | 0.0 | — | 3.32 | 0.72 | — | — | — | — | — | 0.004 |
| profile | raf | 57.9 | 0.0 | 0 | 0.0 | — | — | 16.0 | 0.0 | — | 0.34 | 0.15 | — | — | — | — | — | 0.011 |
| profile | raf-nosampler | 58.3 | 0.0 | 0 | 0.0 | — | — | 16.0 | 0.0 | — | 0.32 | 0.17 | — | — | — | — | — | 0.011 |
| profile | scroll | 53.3 | 0.0 | 0 | 0.0 | — | — | 11.2 | 0.0 | — | 1.17 | 0.16 | — | — | — | — | — | 0.014 |
| profile | key | 5.4 | 0.0 | 0 | 0.0 | — | — | 14.8 | 0.0 | — | 0.12 | 0.15 | — | — | — | — | — | 0.001 |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | switch-to-engine | memfd | native | 2 | 2 | 2.908 | 5.141 | 0.0194 | 0.0343 |
| plain | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| plain | raf | memfd | native | 179 | 179 | 0.177 | 0.310 | 0.0101 | 0.0177 |
| plain | raf-nosampler | memfd | native | 176 | 176 | 0.181 | 0.241 | 0.0105 | 0.0139 |
| plain | scroll | memfd | native | 112 | 112 | 0.684 | 0.797 | 0.0362 | 0.0421 |
| plain | key | memfd | native | 20 | 20 | 0.002 | 0.180 | 0.0000 | 0.0010 |
| plain | switch-to-gecko | — | — | — | — | — | — | — | — |
| trace | switch-to-engine | memfd | native | 2 | 2 | 2.927 | 5.188 | 0.0153 | 0.0271 |
| trace | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| trace | raf | memfd | native | 182 | 182 | 0.159 | 0.222 | 0.0092 | 0.0129 |
| trace | raf-nosampler | memfd | native | 177 | 177 | 0.180 | 0.253 | 0.0105 | 0.0147 |
| trace | scroll | memfd | native | 115 | 115 | 0.703 | 0.730 | 0.0381 | 0.0396 |
| trace | key | memfd | native | 20 | 20 | 0.002 | 0.170 | 0.0000 | 0.0009 |
| trace | switch-to-gecko | — | — | — | — | — | — | — | — |
| profile | switch-to-engine | memfd | native | 2 | 2 | 3.134 | 6.296 | 0.0192 | 0.0386 |
| profile | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| profile | raf | memfd | native | 184 | 184 | 0.190 | 0.282 | 0.0110 | 0.0163 |
| profile | raf-nosampler | memfd | native | 177 | 177 | 0.192 | 0.267 | 0.0111 | 0.0155 |
| profile | scroll | memfd | native | 115 | 115 | 0.895 | 1.012 | 0.0477 | 0.0540 |
| profile | key | memfd | native | 20 | 20 | 0.002 | 0.237 | 0.0000 | 0.0013 |
| profile | switch-to-gecko | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | 0.4 | 24.2 | 0.0 | — | 0.09 | 0.31 | — | — | 10.3 | 25.1 | 36.5 |
| profile | 0.6 | 25.4 | 0.1 | — | 0.12 | 0.50 | — | — | 7.9 | 26.7 | 33.6 |

Switch timeline (trace, switch-to-engine, ms after the window start): write create 43.0; first stdout read resolved 45.2; first frame applied (native receiver) 351.3; write frame_ack 352.0; write visibility 357.5; write focus 357.8

Switch timeline (trace, switch-to-gecko, ms after the window start): write shutdown 16.7; first stdout read resolved 22.5

Switch timeline (profile, switch-to-engine, ms after the window start): write create 30.8; first stdout read resolved 33.6; first frame applied (native receiver) 283.2; write frame_ack 284.3; write visibility 295.0; write focus 295.2

Switch timeline (profile, switch-to-gecko, ms after the window start): first stdout read resolved 0.4; write shutdown 25.7

### Profile: webkit-2x / switch-to-engine

- **parent** CPU ms by thread group: main 42, DOM Worker 21, Renderer 21, BgPool 16, Compositor 4, WRRenderBackend 2, SwComposite 2, WRSceneBuilder 2, Socket 1, WRWorker 1, IPC I/O 1, ImageBridge 0, other 0, Canvas 0, ImageIO 0
  - main thread 42 ms (13.0% of span): JavaScript 23, Layout 6, Idle 4, Graphics 4, DOM 3, Other 2
  - JS leaf 1 / native under JS 26 / native 16; buckets: harness_diagnostics 8, paint_layout 7, poll_wait 6, engine_stream_read 6, webrender_render 1, subprocess_pipe_io 0, array_buffer_copy 0, native_receiver 0
  - top self: `[libxul.so]` 26; `__syscall_cancel_arch [libc.so.6]` 6; `mprotect [libc.so.6]` 4; `[unknown]` 1; `__strlen_avx2 [libc.so.6]` 1; `[axiosozo-dev]` 1
  - top JS (total): `switchToWebKit (chrome://browser/content/axiosozo/WebKitPresenter.sys.` 12; `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 8; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 8
  - WebRender/compositor threads: Renderer 21 ms (top self: `[libxul.so]` 14, `__memmove_avx_unaligned_erms [libc.so.6]` 3, `__syscall_cancel_arch [libc.so.6]` 2); WRRenderBackend#0 2 ms (top self: `syscall [libc.so.6]` 2, `sched_yield [libc.so.6]` 0); SwComposite 2 ms (top self: `syscall [libc.so.6]` 2)
  - background pools (native receiver queue): BackgroundThreadPool #2 16 ms (top self: `[libxul.so]` 9, `__syscall_cancel_arch [libc.so.6]` 3, `__memset_avx2_unaligned_erms [libc.so.6]` 3); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 21 ms: buckets subprocess_pipe_io 21, poll_wait 17; top self: `__syscall_cancel_arch [libc.so.6]` 17; `[libxul.so]` 2; `__lll_lock_wake [libc.so.6]` 1; `mozilla::detail::RWLockImpl::readUnlock() [axiosoz` 1
- **tab:9488** CPU ms by thread group: main 19, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 19 ms (5.9% of span): Other 12, JavaScript 3, DOM 3, Idle 2
  - JS leaf 0 / native under JS 4 / native 15; buckets: memcpy_memset 3, poll_wait 2, json_metadata 2
  - top self: `[libxul.so]` 11; `__syscall_cancel_arch [libc.so.6]` 3; `memset [ld-linux-x86-64.so.2]` 2; `[]` 2; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1
  - top JS (total): `init (resource://gre/modules/ExtensionProcessScript.sys.mjs:57:7)[10]` 4; `initExtension (resource://gre/modules/ExtensionProcessScript.sys.mjs:2` 4; `initExtensionPolicy (resource://gre/modules/ExtensionProcessScript.sys` 4
  - GC/CC markers: GCMinor 1× 2 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9344** CPU ms by thread group: main 2, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 2 ms (0.5% of span): Idle 1, Graphics 0, Profiler 0
  - JS leaf 0 / native under JS 0 / native 2; buckets: poll_wait 1, paint_layout 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0; `__lll_lock_wake [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9482** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.4% of span): Idle 1, GC / CC 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1, gc_cc 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `mprotect [libc.so.6]` 1
  - GC/CC markers: GCMinor 1× 1 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / idle

- **parent** CPU ms by thread group: main 156, DOM Worker 110, other 19, Socket 1, IPC I/O 1, BgPool 0, Renderer 0, WRWorker 0, WRSceneBuilder 0, WRRenderBackend 0, Canvas 0, Compositor 0, ImageIO 0, ImageBridge 0, SwComposite 0
  - main thread 156 ms (7.4% of span): Idle 126, JavaScript 12, Other 7, GC / CC 6, DOM 3, Profiler 1
  - JS leaf 2 / native under JS 13 / native 141; buckets: poll_wait 131, harness_diagnostics 14, gc_cc 6, engine_stream_read 2, memcpy_memset 1, json_metadata 1, native_receiver 0, subprocess_pipe_io 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 130; `[libxul.so]` 18; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `[unknown]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `send (chrome://remote/content/marionette/server.sys.mjs:416:` 1
  - top JS (total): `diagnostics (chrome://browser/content/axiosozo/WebKitEngineControls.sy` 8
  - GC/CC markers: CCSlice 1× 4 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); WRWorker#0 0 ms (top self: `syscall [libc.so.6]` 0); WRWorker#2 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 110 ms: buckets subprocess_pipe_io 110, poll_wait 109, memcpy_memset 1; top self: `__syscall_cancel_arch [libc.so.6]` 109; `syscall [libc.so.6]` 0; `prctl [libc.so.6]` 0
- **tab:9488** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8955** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9482** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / raf

- **parent** CPU ms by thread group: main 453, DOM Worker 238, Renderer 165, SwComposite 94, BgPool 84, WRRenderBackend 52, Compositor 41, other 28, ImageBridge 18, WRSceneBuilder 8, Socket 2, IPC I/O 1, Canvas 0, WRWorker 0, ImageIO 0
  - main thread 453 ms (14.3% of span): Idle 289, JavaScript 96, Other 41, DOM 19, Profiler 6, GC / CC 2
  - JS leaf 13 / native under JS 97 / native 343; buckets: poll_wait 313, engine_stream_read 55, harness_diagnostics 32, subprocess_pipe_io 28, native_receiver 19, array_buffer_copy 6, json_metadata 6, damage_payload_assemble 5
  - top self: `__syscall_cancel_arch [libc.so.6]` 307; `[libxul.so]` 76; `[unknown]` 28; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5; `[axiosozo-dev]` 4; `[libglib-2.0.so.0]` 3
  - GC/CC markers: GCMinor 1× 2 ms
  - WebRender/compositor threads: Renderer 165 ms (top self: `__syscall_cancel_arch [libc.so.6]` 119, `__memmove_avx_unaligned_erms [libc.so.6]` 25, `syscall [libc.so.6]` 14); SwComposite 94 ms (top self: `syscall [libc.so.6]` 86, `__memmove_avx_unaligned_erms [libc.so.6]` 6, `[libxul.so]` 2); WRRenderBackend#0 52 ms (top self: `syscall [libc.so.6]` 40, `sched_yield [libc.so.6]` 7, `[libxul.so]` 4)
  - background pools (native receiver queue): BackgroundThreadPool #2 83 ms (top self: `__syscall_cancel_arch [libc.so.6]` 72, `__memmove_avx_unaligned_erms [libc.so.6]` 10, `[libxul.so]` 0); ImageBridgeChld 18 ms (top self: `__syscall_cancel_arch [libc.so.6]` 18, `[libxul.so]` 0, `[linux-vdso.so.1]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 238 ms: buckets subprocess_pipe_io 238, poll_wait 213, memcpy_memset 1; top self: `__syscall_cancel_arch [libc.so.6]` 216; `[libxul.so]` 15; `__lll_lock_wake [libc.so.6]` 1; `[unknown]` 1; `pthread_rwlock_rdlock@GLIBC_2.2.5 [libc.so.6]` 1
- **tab:9482** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9348** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[]` 0; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9488** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / raf-nosampler

- **parent** CPU ms by thread group: DOM Worker 246, main 203, Renderer 167, BgPool 84, SwComposite 78, WRRenderBackend 50, Compositor 39, ImageBridge 17, WRSceneBuilder 8, other 2, IPC I/O 1, Socket 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 203 ms (6.6% of span): Idle 117, JavaScript 49, Other 18, DOM 15, Profiler 2, GC / CC 1
  - JS leaf 5 / native under JS 55 / native 143; buckets: poll_wait 130, engine_stream_read 44, native_receiver 14, subprocess_pipe_io 13, array_buffer_copy 7, damage_payload_assemble 5, harness_diagnostics 3, json_metadata 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 129; `[libxul.so]` 43; `[unknown]` 10; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5; `[axiosozo-dev]` 4; `__lll_lock_wake [libc.so.6]` 1
  - top JS (total): `#read (chrome://browser/content/axiosozo/EngineStreamClient.sys.mjs:45` 31
  - WebRender/compositor threads: Renderer 167 ms (top self: `__syscall_cancel_arch [libc.so.6]` 115, `__memmove_avx_unaligned_erms [libc.so.6]` 28, `syscall [libc.so.6]` 17); SwComposite 78 ms (top self: `syscall [libc.so.6]` 69, `__memmove_avx_unaligned_erms [libc.so.6]` 8, `[libxul.so]` 1); WRRenderBackend#0 50 ms (top self: `syscall [libc.so.6]` 33, `sched_yield [libc.so.6]` 13, `[libxul.so]` 3)
  - background pools (native receiver queue): BackgroundThreadPool #2 84 ms (top self: `__syscall_cancel_arch [libc.so.6]` 66, `__memmove_avx_unaligned_erms [libc.so.6]` 14, `[libxul.so]` 2); ImageBridgeChld 17 ms (top self: `__syscall_cancel_arch [libc.so.6]` 17, `__lll_lock_wake [libc.so.6]` 0, `[libxul.so]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 246 ms: buckets subprocess_pipe_io 246, poll_wait 215, memcpy_memset 1; top self: `__syscall_cancel_arch [libc.so.6]` 218; `[libxul.so]` 21; `[axiosozo-dev]` 2; `getcontext [libc.so.6]` 2; `__memset_avx2_unaligned_erms [libc.so.6]` 1
- **tab:9482** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9348** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libglib-2.0.so.0]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8955** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / scroll

- **parent** CPU ms by thread group: main 530, DOM Worker 266, BgPool 172, Renderer 102, SwComposite 56, WRRenderBackend 34, Compositor 25, other 17, ImageBridge 11, WRSceneBuilder 5, Socket 2, IPC I/O 1, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 530 ms (24.6% of span): Idle 284, JavaScript 130, Other 61, DOM 23, Graphics 14, Profiler 8
  - JS leaf 23 / native under JS 126 / native 381; buckets: poll_wait 345, harness_diagnostics 58, engine_stream_read 57, subprocess_pipe_io 27, array_buffer_copy 19, paint_layout 14, native_receiver 11, damage_payload_assemble 7
  - top self: `__syscall_cancel_arch [libc.so.6]` 321; `[libxul.so]` 114; `[unknown]` 32; `__lll_lock_wait [libc.so.6]` 6; `mprotect [libc.so.6]` 6; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 6
  - GC/CC markers: GCMinor 1× 4 ms
  - WebRender/compositor threads: Renderer 102 ms (top self: `__syscall_cancel_arch [libc.so.6]` 68, `__memmove_avx_unaligned_erms [libc.so.6]` 14, `syscall [libc.so.6]` 13); SwComposite 56 ms (top self: `syscall [libc.so.6]` 54, `__memmove_avx_unaligned_erms [libc.so.6]` 2); WRRenderBackend#0 34 ms (top self: `syscall [libc.so.6]` 27, `sched_yield [libc.so.6]` 5, `[libxul.so]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #2 172 ms (top self: `__syscall_cancel_arch [libc.so.6]` 116, `__memmove_avx_unaligned_erms [libc.so.6]` 46, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5); ImageBridgeChld 11 ms (top self: `__syscall_cancel_arch [libc.so.6]` 11, `[linux-vdso.so.1]` 0, `__lll_lock_wait [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 266 ms: buckets subprocess_pipe_io 266, poll_wait 224, memcpy_memset 5; top self: `__syscall_cancel_arch [libc.so.6]` 227; `[libxul.so]` 25; `[axiosozo-dev]` 5; `__memset_avx2_unaligned_erms [libc.so.6]` 5; `getcontext [libc.so.6]` 1
- **tab:8955** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9482** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8983** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / key

- **parent** CPU ms by thread group: main 504, BgPool 377, DOM Worker 260, Renderer 109, SwComposite 48, other 35, WRRenderBackend 17, Compositor 15, WRWorker 11, WRSceneBuilder 9, IPC I/O 2, ImageBridge 2, Socket 1, Canvas 0, ImageIO 0
  - main thread 504 ms (13.6% of span): Idle 248, JavaScript 88, Other 50, Graphics 35, Layout 33, DOM 33
  - JS leaf 11 / native under JS 140 / native 352; buckets: poll_wait 294, engine_stream_read 65, paint_layout 55, harness_diagnostics 30, subprocess_pipe_io 20, array_buffer_copy 16, gc_cc 7, native_receiver 7
  - top self: `__syscall_cancel_arch [libc.so.6]` 274; `[libxul.so]` 158; `[unknown]` 12; `[axiosozo-dev]` 8; `mprotect [libc.so.6]` 5; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 5
  - GC/CC markers: CCSlice 2× 5 ms, GCMinor 1× 2 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 109 ms (top self: `[libxul.so]` 79, `__syscall_cancel_arch [libc.so.6]` 21, `__memmove_avx_unaligned_erms [libc.so.6]` 4); SwComposite 48 ms (top self: `syscall [libc.so.6]` 34, `__memmove_avx_unaligned_erms [libc.so.6]` 12, `[libxul.so]` 1); WRRenderBackend#0 17 ms (top self: `syscall [libc.so.6]` 14, `[libxul.so]` 2, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): BgIOThreadPool #2 373 ms (top self: `[libxul.so]` 361, `__syscall_cancel_arch [libc.so.6]` 11, `access [libc.so.6]` 1); BackgroundThreadPool #2 5 ms (top self: `__syscall_cancel_arch [libc.so.6]` 3, `__memmove_avx_unaligned_erms [libc.so.6]` 1); ImageBridgeChld 2 ms (top self: `__syscall_cancel_arch [libc.so.6]` 2)
  - busiest DOM Worker 260 ms: buckets subprocess_pipe_io 260, poll_wait 240, memcpy_memset 0; top self: `__syscall_cancel_arch [libc.so.6]` 241; `[libxul.so]` 10; `__lll_lock_wake [libc.so.6]` 5; `[axiosozo-dev]` 2; `__strlen_avx2 [libc.so.6]` 1
- **tab:8882** CPU ms by thread group: main 6, IPC I/O 1, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 6 ms (0.2% of span): Idle 6, DOM 0, JavaScript 0, Other 0
  - JS leaf 0 / native under JS 0 / native 6; buckets: poll_wait 6
  - top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 0; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[4` 0
  - top JS (total): `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[4]` 1; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[4` 1; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 0; `get (resource://gre/modules/ExtensionCommon.sys.mjs:603:12)[1]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8983** CPU ms by thread group: main 5, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 5 ms (0.1% of span): Idle 2, Other 1, DOM 1, JavaScript 1
  - JS leaf 0 / native under JS 2 / native 3; buckets: poll_wait 3
  - top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 2; `__tls_get_addr [ld-linux-x86-64.so.2]` 0
  - top JS (total): `loadLedger (chrome://browser/content/axiosozo/overview/about-axiosozo.` 2; `renderUsage/< (chrome://browser/content/axiosozo/overview/about-axioso` 1; `renderUsage (chrome://browser/content/axiosozo/overview/about-axiosozo` 1; `h (chrome://browser/content/axiosozo/overview/about-axiosozo.mjs:95:11` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9482** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit-2x / switch-to-gecko

- **parent** CPU ms by thread group: main 74, Renderer 56, DOM Worker 17, BgPool 15, SwComposite 4, WRRenderBackend 4, Compositor 3, IPC I/O 3, WRSceneBuilder 2, Socket 1, other 0, ImageBridge 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 74 ms (24.4% of span): JavaScript 35, Other 12, Layout 10, Graphics 5, DOM 5, Idle 4
  - JS leaf 2 / native under JS 43 / native 28; buckets: harness_diagnostics 12, poll_wait 12, paint_layout 9, engine_stream_read 4, subprocess_pipe_io 3, array_buffer_copy 3, memcpy_memset 1
  - top self: `[libxul.so]` 42; `__syscall_cancel_arch [libc.so.6]` 14; `[unknown]` 10; `__pthread_mutex_unlock_usercnt [libc.so.6]` 2; `engineAvailability (chrome://browser/content/axiosozo/Engine` 1; `[libglib-2.0.so.0]` 1
  - WebRender/compositor threads: Renderer 56 ms (top self: `[libxul.so]` 44, `__syscall_cancel_arch [libc.so.6]` 4, `hypotf@@GLIBC_2.35 [libm.so.6]` 4); SwComposite 4 ms (top self: `syscall [libc.so.6]` 4, `__memmove_avx_unaligned_erms [libc.so.6]` 0); WRRenderBackend#0 4 ms (top self: `syscall [libc.so.6]` 4, `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #2 15 ms (top self: `unlink [libc.so.6]` 10, `__syscall_cancel_arch [libc.so.6]` 2, `fstatat64 [libc.so.6]` 1); BackgroundThreadPool #2 0 ms (top self: `syscall [libc.so.6]` 0, `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 17 ms: buckets subprocess_pipe_io 17, poll_wait 14, worker_messaging 0; top self: `__syscall_cancel_arch [libc.so.6]` 15; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `[libxul.so]` 1
- **tab:9344** CPU ms by thread group: main 26, IPC I/O 2, Socket 0, other 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 26 ms (8.4% of span): Other 9, JavaScript 6, Idle 3, Profiler 2, Layout 2, DOM 2
  - JS leaf 0 / native under JS 9 / native 17; buckets: poll_wait 3, gc_cc 1, paint_layout 1, harness_diagnostics 0
  - top self: `[libxul.so]` 19; `__syscall_cancel_arch [libc.so.6]` 6
  - top JS (total): `FormAutofillChild (resource://autofill/FormAutofillChild.sys.mjs:71:14` 5
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8882** CPU ms by thread group: main 4, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 4 ms (1.5% of span): Idle 3, JavaScript 1, DOM 0
  - JS leaf 0 / native under JS 2 / native 3; buckets: poll_wait 3, array_buffer_copy 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 2
  - top JS (total): `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 2; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[6]` 2; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[6` 2; `applySafeWithoutClone/< (resource://gre/modules/ExtensionCommon.sys.mj` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:9488** CPU ms by thread group: main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

