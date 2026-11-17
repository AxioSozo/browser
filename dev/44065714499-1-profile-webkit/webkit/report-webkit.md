# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## webkit (PASS)

CPU: AMD EPYC 7763 64-Core Processor; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | switch-to-engine | — | — | **67.4** (DOM Worker 21.1, main 12.7, glean.dispatche 8.4, Renderer 8.4, Socket Thread 4.2) | WPEWebProcess 71.8, WPENetworkProce 12.7, AxioWebKitHost 8.4 | — | 214.3 |
| plain | idle | — | — | **14.6** (main 9.7, TaskCon~ller # 3.9, Timer 0.5, DOM Worker 0.5) | Web Content 3.4 | — | — |
| plain | raf | 57.9 | 21.0 | **23.9** (main 11.0, DOM Worker 2.6, Renderer 2.3, TaskCon~ller # 1.3, WRRende~ckend# 1.3) | WPEWebProcess 62.2, AxioWebKitHost 6.4, WebExtensions 0.3, Web Content 0.3 | — | — |
| plain | raf-nosampler | — | — | **14.6** (main 4.0, DOM Worker 2.7, Renderer 2.0, Backgro~Pool # 1.3, glean.dispatche 1.0) | WPEWebProcess 60.4, AxioWebKitHost 6.3 | — | — |
| plain | scroll | 57.6 | 31.1 | **37.5** (main 18.5, DOM Worker 6.3, Renderer 2.4, Backgro~Pool # 2.4, WRRende~ckend# 1.9) | WPEWebProcess 65.3, AxioWebKitHost 9.8, Isolated Web Co 0.5 | — | — |
| plain | key | — | — | **17.0** (main 10.4, Renderer 1.4, DOM Worker 1.4, Timer 0.8, TaskCon~ller # 0.8) | WPEWebProcess 6.8, AxioWebKitHost 2.7, WebExtensions 0.6 | 17.9 | — |
| plain | switch-to-gecko | — | — | **16.9** (main 12.7, BgIOThr~Pool # 4.2) |  | — | 212.9 |
| trace | switch-to-engine | — | — | **48.8** (main 13.9, Renderer 13.9, glean.dispatche 3.5, Timer 3.5, Softwar~cThread 3.5) | WPEWebProcess 65.8, AxioWebKitHost 6.9, WPENetworkProce 6.9 | — | 268.2 |
| trace | idle | — | — | **13.0** (main 9.1, TaskCon~ller # 3.4, Timer 0.5) | Web Content 2.9 | — | — |
| trace | raf | 57.9 | 20.7 | **23.5** (main 10.1, DOM Worker 3.9, Renderer 2.3, WRRende~ckend# 1.3, Compositor 1.3) | WPEWebProcess 61.4, AxioWebKitHost 7.3, Isolated Web Co 0.3 | — | — |
| trace | raf-nosampler | — | — | **17.1** (main 4.6, DOM Worker 4.0, Renderer 2.3, Backgro~Pool # 1.3, SwComposite 1.3) | WPEWebProcess 61.5, AxioWebKitHost 6.2 | — | — |
| trace | scroll | 56.5 | 34.6 | **37.8** (main 18.1, DOM Worker 8.3, Renderer 2.9, Backgro~Pool # 2.0, WRRende~ckend# 1.5) | WPEWebProcess 64.0, AxioWebKitHost 10.2 | — | — |
| trace | key | — | — | **15.8** (main 9.9, DOM Worker 1.4, Renderer 1.1, Timer 0.8, WRRende~ckend# 0.8) | WPEWebProcess 7.1, AxioWebKitHost 1.1, WebExtensions 0.3 | 17.6 | — |
| trace | switch-to-gecko | — | — | **36.1** (main 12.1, BgIOThr~Pool # 8.0, Renderer 4.0, Compositor 4.0, sqldb:p~lite # 4.0) | Isolated Web Co 12.1 | — | 213.2 |
| profile | switch-to-engine | — | — | **46.0** (main 15.3, DOM Worker 12.3, SamplerThread 9.2, Compositor 6.1, Renderer 3.1) | WPEWebProcess 67.4, Web Content 30.7, AxioWebKitHost 9.2, WPENetworkProce 9.2 | — | 293.6 |
| profile | idle | — | — | **26.9** (SamplerThread 8.6, main 8.2, DOM Worker 8.2, Timer 1.4, TaskCon~ller # 0.5) | Web Content 6.7, WebExtensions 2.4, Privileged Cont 1.9, Socket Process 1.4 | — | — |
| profile | raf | 57.5 | 22.4 | **49.1** (main 15.1, DOM Worker 10.3, SamplerThread 10.3, Renderer 2.3, Timer 1.9) | WPEWebProcess 60.9, Web Content 7.4, AxioWebKitHost 6.7, Isolated Web Co 2.5 | — | — |
| profile | raf-nosampler | — | — | **35.2** (DOM Worker 10.6, SamplerThread 8.6, main 6.3, Renderer 2.3, WRRende~ckend# 1.7) | WPEWebProcess 60.6, Web Content 6.6, AxioWebKitHost 6.6, Privileged Cont 2.0 | — | — |
| profile | scroll | 56.4 | 33.9 | **64.3** (main 24.9, DOM Worker 14.9, SamplerThread 10.1, Renderer 2.4, Backgro~Pool # 2.4) | WPEWebProcess 63.8, AxioWebKitHost 9.1, Web Content 5.8, WebExtensions 1.9 | — | — |
| profile | key | — | — | **43.6** (main 15.6, SamplerThread 9.6, DOM Worker 9.3, TaskCon~ller # 2.2, Timer 1.6) | Web Content 7.9, WPEWebProcess 6.3, WebExtensions 2.2, Privileged Cont 1.9 | 19.8 | — |
| profile | switch-to-gecko | — | — | **40.0** (main 16.0, DOM Worker 8.0, SamplerThread 8.0, BgIOThr~Pool # 4.0, Backgro~Pool # 4.0) | Isolated Web Co 4.0 | — | 221.2 |

Frame path (median ms per frame; hooks). recv/paint fps = frames read / surface paints per s; header wait = idle until the next AXCF header; payload read = Subprocess read(size) call → resolve; assemble = damage payload → whole frame; native apply = NativeFrameSinks.apply call → resolve (AxioFrameRing queue + main-thread hop); native resolve→ack = presenter present + ack write; tick wait = accept → rAF paint start; paint = convert + putImageData of the damage union; main-thread share = (payload reads + assembly + paints) / window.

| pass | window | recv fps | paint fps | superseded | MB/s | payload KB | damage share | header wait | payload read | assemble | native apply | native resolve→ack | tick wait | paint | convert | put | paint→MozAfterPaint | main-thread share |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | switch-to-engine | 6.5 | 0.0 | 0 | 0.0 | — | — | 67.2 | 0.0 | — | 1.14 | 0.35 | — | — | — | — | — | 0.002 |
| trace | raf | 57.9 | 0.0 | 0 | 0.0 | — | — | 16.6 | 0.0 | — | 0.12 | 0.10 | — | — | — | — | — | 0.006 |
| trace | raf-nosampler | 58.0 | 0.0 | 0 | 0.0 | — | — | 16.4 | 0.0 | — | 0.12 | 0.10 | — | — | — | — | — | 0.006 |
| trace | scroll | 55.7 | 0.0 | 0 | 0.0 | — | — | 10.8 | 0.0 | — | 0.28 | 0.11 | — | — | — | — | — | 0.008 |
| trace | key | 5.5 | 0.0 | 0 | 0.0 | — | — | 6.8 | 0.0 | — | 0.08 | 0.09 | — | — | — | — | — | 0.001 |
| profile | switch-to-engine | 5.7 | 0.0 | 0 | 0.0 | — | — | 87.1 | 0.0 | — | 1.31 | 0.57 | — | — | — | — | — | 0.003 |
| profile | raf | 58.2 | 0.0 | 0 | 0.0 | — | — | 16.3 | 0.0 | — | 0.14 | 0.14 | — | — | — | — | — | 0.009 |
| profile | raf-nosampler | 57.9 | 0.0 | 0 | 0.0 | — | — | 16.2 | 0.0 | — | 0.14 | 0.14 | — | — | — | — | — | 0.009 |
| profile | scroll | 55.1 | 0.0 | 0 | 0.0 | — | — | 12.7 | 0.0 | — | 0.33 | 0.14 | — | — | — | — | — | 0.009 |
| profile | key | 5.4 | 0.0 | 0 | 0.0 | — | — | 6.3 | 0.0 | — | 0.15 | 0.15 | — | — | — | — | — | 0.001 |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | switch-to-engine | memfd | native | 2 | 2 | 0.825 | 1.546 | 0.0065 | 0.0122 |
| plain | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| plain | raf | memfd | native | 180 | 180 | 0.039 | 0.070 | 0.0023 | 0.0041 |
| plain | raf-nosampler | memfd | native | 177 | 177 | 0.051 | 0.096 | 0.0030 | 0.0056 |
| plain | scroll | memfd | native | 117 | 117 | 0.181 | 0.226 | 0.0102 | 0.0128 |
| plain | key | memfd | native | 20 | 20 | 0.000 | 0.068 | 0.0000 | 0.0004 |
| plain | switch-to-gecko | — | — | — | — | — | — | — | — |
| trace | switch-to-engine | memfd | native | 2 | 2 | 0.983 | 1.759 | 0.0064 | 0.0114 |
| trace | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| trace | raf | memfd | native | 179 | 179 | 0.043 | 0.072 | 0.0025 | 0.0042 |
| trace | raf-nosampler | memfd | native | 176 | 176 | 0.046 | 0.080 | 0.0027 | 0.0046 |
| trace | scroll | memfd | native | 115 | 114 | 0.175 | 0.227 | 0.0097 | 0.0125 |
| trace | key | memfd | native | 20 | 20 | 0.000 | 0.071 | 0.0000 | 0.0004 |
| trace | switch-to-gecko | — | — | — | — | — | — | — | — |
| profile | switch-to-engine | memfd | native | 2 | 2 | 1.081 | 1.874 | 0.0062 | 0.0107 |
| profile | idle | memfd | native | 0 | 0 | — | — | 0.0000 | 0.0000 |
| profile | raf | memfd | native | 181 | 181 | 0.043 | 0.077 | 0.0025 | 0.0045 |
| profile | raf-nosampler | memfd | native | 176 | 176 | 0.049 | 0.092 | 0.0028 | 0.0053 |
| profile | scroll | memfd | native | 116 | 116 | 0.212 | 0.267 | 0.0117 | 0.0147 |
| profile | key | memfd | native | 20 | 20 | 0.001 | 0.072 | 0.0000 | 0.0004 |
| profile | switch-to-gecko | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | 0.4 | 14.0 | 0.0 | — | 0.08 | 0.27 | — | — | 15.2 | 14.8 | 30.3 |
| profile | 0.6 | 16.2 | 0.0 | — | 0.15 | 0.47 | — | — | 21.3 | 17.3 | 36.0 |

Switch timeline (trace, switch-to-engine, ms after the window start): write create 23.3; first stdout read resolved 24.3; first frame applied (native receiver) 284.5; write frame_ack 285.0; write visibility 288.8; write focus 289.0

Switch timeline (trace, switch-to-gecko, ms after the window start): write shutdown 16.7; first stdout read resolved 21.9

Switch timeline (profile, switch-to-engine, ms after the window start): write create 30.1; first stdout read resolved 33.1; first frame applied (native receiver) 310.0; write frame_ack 310.9; write visibility 318.1; write focus 318.4

Switch timeline (profile, switch-to-gecko, ms after the window start): write shutdown 25.1; first stdout read resolved 35.3

### Profile: webkit / switch-to-engine

- **parent** CPU ms by thread group: main 45, DOM Worker 22, Renderer 11, BgPool 5, Compositor 5, WRRenderBackend 2, IPC I/O 2, WRSceneBuilder 2, Socket 1, SwComposite 1, WRWorker 1, ImageBridge 0, other 0, Canvas 0, ImageIO 0
  - main thread 45 ms (13.0% of span): JavaScript 18, Idle 10, Layout 7, DOM 5, Other 2, Graphics 2
  - JS leaf 0 / native under JS 29 / native 16; buckets: harness_diagnostics 13, poll_wait 11, paint_layout 6, engine_stream_read 5, webrender_render 1, subprocess_pipe_io 1, array_buffer_copy 1, json_metadata 1
  - top self: `[libxul.so]` 26; `__syscall_cancel_arch [libc.so.6]` 12; `[unknown]` 2; `mprotect [libc.so.6]` 2; `double_conversion::DoubleToStringConverter::CreateDecimalRep` 1; `[axiosozo-dev]` 1
  - top JS (total): `switchToWebKit (chrome://browser/content/axiosozo/WebKitPresenter.sys.` 10; `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 9
  - WebRender/compositor threads: Renderer 11 ms (top self: `[libxul.so]` 8, `__syscall_cancel_arch [libc.so.6]` 2, `[linux-vdso.so.1]` 0); WRRenderBackend#0 2 ms (top self: `syscall [libc.so.6]` 2, `sched_yield [libc.so.6]` 0); WRSceneBuilder#0 2 ms (top self: `[libxul.so]` 1, `sched_yield [libc.so.6]` 0, `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #3 5 ms (top self: `[libxul.so]` 3, `__memset_avx2_unaligned_erms [libc.so.6]` 1, `syscall [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 22 ms: buckets subprocess_pipe_io 22, poll_wait 20, memcpy_memset 0; top self: `__syscall_cancel_arch [libc.so.6]` 20; `getcontext [libc.so.6]` 1; `mozilla::detail::RWLockImpl::readUnlock() [axiosoz` 1; `[unknown]` 0; `[axiosozo-dev]` 0
- **tab:7861** CPU ms by thread group: main 51, IPC I/O 1, other 0, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 51 ms (17.8% of span): Other 40, DOM 6, Idle 2, Profiler 2, JavaScript 1, GC / CC 0
  - JS leaf 0 / native under JS 7 / native 44; buckets: poll_wait 2, gc_cc 1, memcpy_memset 1
  - top self: `[libxul.so]` 24; `[]` 7; `[libexpat.so.1]` 4; `__syscall_cancel_arch [libc.so.6]` 4; `__lll_lock_wake [libc.so.6]` 2; `__strcmp_avx2 [libc.so.6]` 1
  - GC/CC markers: GCMinor 1× 1 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7711** CPU ms by thread group: main 2, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 2 ms (0.4% of span): Idle 1, Profiler 0
  - JS leaf 0 / native under JS 0 / native 2; buckets: poll_wait 1, memcpy_memset 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `__memset_avx2_unaligned_erms [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7855** CPU ms by thread group: main 2, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 2 ms (0.4% of span): Other 1, GC / CC 1, Idle 0
  - JS leaf 0 / native under JS 0 / native 2; buckets: gc_cc 1, poll_wait 0, memcpy_memset 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `[libxul.so]` 0; `mmap64 [libc.so.6]` 0; `pthread_create@GLIBC_2.2.5 [libc.so.6]` 0
  - GC/CC markers: GCMinor 1× 3 ms, GC Interrupt 3× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / idle

- **parent** CPU ms by thread group: main 150, DOM Worker 110, other 20, Socket 1, IPC I/O 0, BgPool 0, Renderer 0, WRSceneBuilder 0, WRRenderBackend 0, WRWorker 0, Compositor 0, Canvas 0, ImageIO 0, ImageBridge 0, SwComposite 0
  - main thread 150 ms (7.1% of span): Idle 125, JavaScript 10, Other 9, DOM 5, Profiler 1
  - JS leaf 1 / native under JS 13 / native 135; buckets: poll_wait 131, harness_diagnostics 14, engine_stream_read 2, native_receiver 1, json_metadata 1, memcpy_memset 0, subprocess_pipe_io 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 129; `[libxul.so]` 11; `[unknown]` 2; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `__tls_get_addr [ld-linux-x86-64.so.2]` 1
  - top JS (total): `diagnostics (chrome://browser/content/axiosozo/WebKitEngineControls.sy` 10
  - WebRender/compositor threads: Renderer 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); WRSceneBuilder#0 0 ms (top self: `syscall [libc.so.6]` 0); WRRenderBackend#0 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #3 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 110 ms: buckets subprocess_pipe_io 110, poll_wait 110; top self: `__syscall_cancel_arch [libc.so.6]` 110
- **tab:7717** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Profiler 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7330** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `[]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7711** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Layout 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / raf

- **parent** CPU ms by thread group: main 437, DOM Worker 254, Renderer 71, WRRenderBackend 40, SwComposite 37, Compositor 35, other 30, BgPool 28, ImageBridge 15, WRSceneBuilder 7, IPC I/O 1, Socket 1, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 437 ms (14.0% of span): Idle 275, JavaScript 77, Other 35, GC / CC 29, DOM 15, Profiler 6
  - JS leaf 7 / native under JS 81 / native 349; buckets: poll_wait 295, engine_stream_read 45, harness_diagnostics 36, gc_cc 29, subprocess_pipe_io 21, array_buffer_copy 11, native_receiver 7, memcpy_memset 3
  - top self: `__syscall_cancel_arch [libc.so.6]` 293; `[libxul.so]` 102; `[unknown]` 13; `mprotect [libc.so.6]` 4; `[axiosozo-dev]` 4; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 2
  - GC/CC markers: GCMajor 1× 1048 ms, GCSlice 8× 31 ms, CCSlice 2× 7 ms, GCMinor 2× 2 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 71 ms (top self: `__syscall_cancel_arch [libc.so.6]` 59, `__memmove_avx_unaligned_erms [libc.so.6]` 7, `[libxul.so]` 2); WRRenderBackend#0 40 ms (top self: `syscall [libc.so.6]` 35, `[libxul.so]` 3, `sched_yield [libc.so.6]` 2); SwComposite 37 ms (top self: `syscall [libc.so.6]` 36, `__memmove_avx_unaligned_erms [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #3 28 ms (top self: `__syscall_cancel_arch [libc.so.6]` 26, `__memmove_avx_unaligned_erms [libc.so.6]` 1, `[libxul.so]` 0); ImageBridgeChld 15 ms (top self: `__syscall_cancel_arch [libc.so.6]` 15, `[linux-vdso.so.1]` 0, `[libxul.so]` 0); BgIOThreadPool #1 1 ms (top self: `__syscall_cancel_arch [libc.so.6]` 1)
  - busiest DOM Worker 254 ms: buckets subprocess_pipe_io 254, poll_wait 225, memcpy_memset 3; top self: `__syscall_cancel_arch [libc.so.6]` 226; `[libxul.so]` 14; `getcontext [libc.so.6]` 3; `__lll_lock_wake [libc.so.6]` 3; `__memset_avx2_unaligned_erms [libc.so.6]` 3
- **tab:7711** CPU ms by thread group: main 4, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 4 ms (0.1% of span): GC / CC 2, Idle 2, Other 0
  - JS leaf 0 / native under JS 0 / native 4; buckets: poll_wait 3, gc_cc 2
  - top self: `__syscall_cancel_arch [libc.so.6]` 3; `[libxul.so]` 1
  - GC/CC markers: GCMajor 1× 36 ms, GCSlice 4× 2 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7717** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7357** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / raf-nosampler

- **parent** CPU ms by thread group: DOM Worker 257, main 182, Renderer 69, WRRenderBackend 39, SwComposite 36, Compositor 34, BgPool 32, ImageBridge 14, WRSceneBuilder 7, other 2, IPC I/O 1, Socket 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 182 ms (6.0% of span): Idle 108, JavaScript 46, Other 13, DOM 9, GC / CC 3, Profiler 3
  - JS leaf 6 / native under JS 48 / native 128; buckets: poll_wait 116, engine_stream_read 40, subprocess_pipe_io 13, array_buffer_copy 6, native_receiver 6, worker_messaging 3, gc_cc 3, harness_diagnostics 3
  - top self: `__syscall_cancel_arch [libc.so.6]` 117; `[libxul.so]` 41; `[unknown]` 7; `[axiosozo-dev]` 2; `[linux-vdso.so.1]` 2; `getcontext [libc.so.6]` 1
  - top JS (total): `#read (chrome://browser/content/axiosozo/EngineStreamClient.sys.mjs:45` 31
  - GC/CC markers: GCMinor 1× 3 ms
  - WebRender/compositor threads: Renderer 69 ms (top self: `__syscall_cancel_arch [libc.so.6]` 58, `__memmove_avx_unaligned_erms [libc.so.6]` 5, `syscall [libc.so.6]` 3); WRRenderBackend#0 39 ms (top self: `syscall [libc.so.6]` 35, `[libxul.so]` 2, `sched_yield [libc.so.6]` 2); SwComposite 36 ms (top self: `syscall [libc.so.6]` 35, `__memmove_avx_unaligned_erms [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #3 31 ms (top self: `__syscall_cancel_arch [libc.so.6]` 29, `__memmove_avx_unaligned_erms [libc.so.6]` 1, `[libxul.so]` 0); ImageBridgeChld 14 ms (top self: `__syscall_cancel_arch [libc.so.6]` 14); BgIOThreadPool #1 1 ms (top self: `rename [libc.so.6]` 1, `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 244 ms: buckets subprocess_pipe_io 244, poll_wait 222, memcpy_memset 3; top self: `__syscall_cancel_arch [libc.so.6]` 223; `[libxul.so]` 13; `__memset_avx2_unaligned_erms [libc.so.6]` 2; `[axiosozo-dev]` 2; `[unknown]` 1
- **tab:7330** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7717** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wake [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7357** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / scroll

- **parent** CPU ms by thread group: main 487, DOM Worker 249, BgPool 55, Renderer 50, WRRenderBackend 30, Compositor 23, SwComposite 21, other 21, ImageBridge 10, WRSceneBuilder 5, Socket 1, IPC I/O 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 487 ms (23.2% of span): Idle 276, JavaScript 93, Other 53, DOM 25, GC / CC 15, Profiler 12
  - JS leaf 13 / native under JS 97 / native 377; buckets: poll_wait 324, engine_stream_read 55, harness_diagnostics 32, subprocess_pipe_io 18, gc_cc 15, array_buffer_copy 14, native_receiver 11, paint_layout 8
  - top self: `__syscall_cancel_arch [libc.so.6]` 306; `[libxul.so]` 119; `[unknown]` 12; `__memset_avx2_unaligned_erms [libc.so.6]` 4; `[axiosozo-dev]` 4; `mprotect [libc.so.6]` 4
  - GC/CC markers: GCSlice 4× 7 ms, CCSlice 2× 6 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 50 ms (top self: `__syscall_cancel_arch [libc.so.6]` 43, `__memmove_avx_unaligned_erms [libc.so.6]` 2, `syscall [libc.so.6]` 2); WRRenderBackend#0 30 ms (top self: `syscall [libc.so.6]` 25, `[libxul.so]` 2, `sched_yield [libc.so.6]` 2); SwComposite 21 ms (top self: `syscall [libc.so.6]` 21, `__memmove_avx_unaligned_erms [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #3 55 ms (top self: `__syscall_cancel_arch [libc.so.6]` 45, `__memmove_avx_unaligned_erms [libc.so.6]` 8, `__lll_lock_wake [libc.so.6]` 1); ImageBridgeChld 10 ms (top self: `__syscall_cancel_arch [libc.so.6]` 10, `__lll_lock_wait [libc.so.6]` 0, `__lll_lock_wake [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 249 ms: buckets subprocess_pipe_io 249, poll_wait 205, memcpy_memset 3; top self: `__syscall_cancel_arch [libc.so.6]` 207; `[libxul.so]` 21; `__lll_lock_wake [libc.so.6]` 7; `[axiosozo-dev]` 3; `__memset_avx2_unaligned_erms [libc.so.6]` 3
- **tab:7717** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7330** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7357** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / key

- **parent** CPU ms by thread group: main 538, DOM Worker 242, Renderer 56, other 34, SwComposite 17, WRRenderBackend 16, Compositor 16, WRWorker 12, WRSceneBuilder 9, BgPool 2, ImageBridge 2, IPC I/O 1, Socket 1, Canvas 0, ImageIO 0
  - main thread 538 ms (14.6% of span): Idle 227, JavaScript 84, GC / CC 67, Layout 50, Other 46, Graphics 33
  - JS leaf 10 / native under JS 144 / native 384; buckets: poll_wait 264, gc_cc 67, paint_layout 65, engine_stream_read 64, harness_diagnostics 33, subprocess_pipe_io 16, array_buffer_copy 9, memcpy_memset 8
  - top self: `__syscall_cancel_arch [libc.so.6]` 246; `[libxul.so]` 222; `[unknown]` 8; `mprotect [libc.so.6]` 7; `[axiosozo-dev]` 7; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 6
  - GC/CC markers: GCMajor 2× 1109 ms, GCSlice 16× 58 ms, CCSlice 3× 11 ms, GCMinor 2× 2 ms, CC 2× 0 ms
  - WebRender/compositor threads: Renderer 56 ms (top self: `__syscall_cancel_arch [libc.so.6]` 32, `[libxul.so]` 16, `syscall [libc.so.6]` 4); SwComposite 17 ms (top self: `syscall [libc.so.6]` 14, `__memmove_avx_unaligned_erms [libc.so.6]` 3, `[libxul.so]` 0); WRRenderBackend#0 16 ms (top self: `syscall [libc.so.6]` 12, `[libxul.so]` 2, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #3 2 ms (top self: `__syscall_cancel_arch [libc.so.6]` 2, `__memmove_avx_unaligned_erms [libc.so.6]` 0, `[linux-vdso.so.1]` 0); ImageBridgeChld 2 ms (top self: `__syscall_cancel_arch [libc.so.6]` 2); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 242 ms: buckets subprocess_pipe_io 242, poll_wait 229, memcpy_memset 0; top self: `__syscall_cancel_arch [libc.so.6]` 232; `[libxul.so]` 7; `[unknown]` 2; `__lll_lock_wait [libc.so.6]` 1; `PR_GetCurrentThread [libnspr4.so]` 1
- **tab:7247** CPU ms by thread group: main 7, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 7 ms (0.2% of span): Idle 6, JavaScript 0, Other 0
  - JS leaf 0 / native under JS 0 / native 7; buckets: poll_wait 6
  - top self: `__syscall_cancel_arch [libc.so.6]` 6; `[libxul.so]` 0
  - top JS (total): `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 0; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[0]` 0; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[0` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7717** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7330** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: webkit / switch-to-gecko

- **parent** CPU ms by thread group: main 73, Renderer 23, DOM Worker 13, BgPool 11, Compositor 3, WRRenderBackend 3, WRSceneBuilder 3, IPC I/O 2, Socket 1, SwComposite 1, other 0, ImageBridge 0, WRWorker 0, Canvas 0, ImageIO 0
  - main thread 73 ms (24.8% of span): JavaScript 34, Other 16, Layout 9, Graphics 5, DOM 4, Idle 3
  - JS leaf 7 / native under JS 36 / native 30; buckets: paint_layout 13, harness_diagnostics 11, engine_stream_read 7, poll_wait 6, memcpy_memset 1, gc_cc 1, mozafterpaint_events 1, json_metadata 0
  - top self: `[libxul.so]` 45; `__syscall_cancel_arch [libc.so.6]` 10; `get persistentBackground (resource://gre/modules/Extension.s` 6; `[unknown]` 4; `[axiosozo-dev]` 1; `g_private_get [libglib-2.0.so.0]` 1
  - top JS (total): `addListener/async/< (resource://gre/modules/ExtensionCommon.sys.mjs:27` 9; `switchToGecko (chrome://browser/content/axiosozo/WebKitPresenter.sys.m` 9
  - WebRender/compositor threads: Renderer 23 ms (top self: `[libxul.so]` 17, `__syscall_cancel_arch [libc.so.6]` 6); WRRenderBackend#0 3 ms (top self: `syscall [libc.so.6]` 3, `[libxul.so]` 0); WRSceneBuilder#0 3 ms (top self: `syscall [libc.so.6]` 2, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0, `[libxul.so]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 10 ms (top self: `unlink [libc.so.6]` 6, `__syscall_cancel_arch [libc.so.6]` 2, `fstatat64 [libc.so.6]` 1); BackgroundThreadPool #3 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 13 ms: buckets subprocess_pipe_io 13, poll_wait 13, worker_messaging 1; top self: `__syscall_cancel_arch [libc.so.6]` 13
- **tab:7711** CPU ms by thread group: main 28, IPC I/O 2, Socket 0, other 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 28 ms (9.5% of span): Other 11, JavaScript 9, Idle 4, DOM 2, Profiler 1, Layout 1
  - JS leaf 0 / native under JS 9 / native 18; buckets: poll_wait 4, paint_layout 0
  - top self: `[libxul.so]` 24; `__syscall_cancel_arch [libc.so.6]` 4; `__lll_lock_wait [libc.so.6]` 0; `[]` 0
  - top JS (total): `FormAutofillChild (resource://autofill/FormAutofillChild.sys.mjs:71:14` 5
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7247** CPU ms by thread group: main 4, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 4 ms (1.3% of span): Idle 3, Other 0, JavaScript 0
  - JS leaf 0 / native under JS 0 / native 4; buckets: poll_wait 3
  - top self: `__syscall_cancel_arch [libc.so.6]` 4; `applySafeWithoutClone (resource://gre/modules/ExtensionCommo` 0
  - top JS (total): `wrapPromise/</< (resource://gre/modules/ExtensionCommon.sys.mjs:920:11` 0; `applySafeWithoutClone (resource://gre/modules/ExtensionCommon.sys.mjs:` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:7717** CPU ms by thread group: main 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, other 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

