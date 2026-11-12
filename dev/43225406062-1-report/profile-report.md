# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## gecko (PASS)

CPU: AMD EPYC 9V45 96-Core Processor; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | idle | 59.0 | 17.1 | **6.3** (main 1.9, Renderer 1.9, DOM Worker 1.0, glean.dispatche 0.5, IPC I/O Parent 0.5) | Web Content 2.9, Isolated Web Co 0.5 | — | — |
| plain | raf | 59.0 | 17.1 | **16.0** (Renderer 8.8, main 1.3, TaskCon~ller # 1.3, WRScene~ilder# 1.0, WRRende~ckend# 1.0) | Isolated Web Co 2.3, WebExtensions 0.3 | — | — |
| plain | raf-nosampler | — | — | **9.8** (Renderer 4.7, main 1.3, glean.dispatche 1.0, WRRende~ckend# 1.0, Socket Thread 0.3) | Isolated Web Co 2.3, Web Content 0.7, WebExtensions 0.3 | — | — |
| plain | scroll | 59.0 | 17.1 | **24.0** (Renderer 16.0, main 2.0, WRRende~ckend# 1.5, glean.dispatche 1.0, WRScene~ilder# 1.0) | Isolated Web Co 2.5, Privileged Cont 0.5 | — | — |
| plain | key | — | — | **4.3** (main 2.7, TaskCon~ller # 0.5, Renderer 0.5, glean.dispatche 0.3, Compositor 0.3) | Isolated Web Co 1.3 | 10.5 | — |
| trace | idle | 59.0 | 17.1 | **4.4** (main 1.9, TaskCon~ller # 1.0, WRRende~ckend# 1.0, Renderer 0.5) | Isolated Web Co 0.5 | — | — |
| trace | raf | 59.0 | 17.1 | **10.4** (Renderer 5.2, glean.dispatche 1.0, WRScene~ilder# 1.0, WRRende~ckend# 1.0, Compositor 0.7) | Isolated Web Co 2.3 | — | — |
| trace | raf-nosampler | — | — | **9.0** (Renderer 5.0, main 0.7, glean.dispatche 0.7, WRScene~ilder# 0.7, WRRende~ckend# 0.7) | Isolated Web Co 2.3 | — | — |
| trace | scroll | 59.0 | 17.1 | **26.0** (Renderer 16.5, main 3.5, glean.dispatche 1.5, WRRende~ckend# 1.5, TaskCon~ller # 1.0) | Isolated Web Co 3.5 | — | — |
| trace | key | — | — | **30.1** (main 11.3, DOM Worker 9.1, IPDL Background 3.5, TaskCon~ller # 1.9, StreamTrans # 0.8) | Isolated Web Co 1.1, WebExtensions 0.3, Privileged Cont 0.3 | 10.0 | — |
| profile | idle | 59.5 | 17.1 | **6.3** (SamplerThread 2.4, TaskCon~ller # 1.9, main 1.5, IPDL Background 0.5) | Web Content 4.9, Isolated Web Co 2.0, Socket Process 1.0, WebExtensions 1.0 | — | — |
| profile | raf | 59.0 | 17.1 | **20.0** (Renderer 7.5, SamplerThread 3.6, main 1.6, WRRende~ckend# 1.6, glean.dispatche 1.0) | Isolated Web Co 5.9, Web Content 4.9, Socket Process 0.7, WebExtensions 0.7 | — | — |
| profile | raf-nosampler | — | — | **16.5** (Renderer 6.3, SamplerThread 3.7, WRRende~ckend# 1.7, WRScene~ilder# 1.3, Compositor 1.3) | Isolated Web Co 6.0, Web Content 4.7, Privileged Cont 1.0, Socket Process 0.7 | — | — |
| profile | scroll | 59.0 | 17.3 | **33.3** (Renderer 17.8, main 4.5, SamplerThread 4.0, WRRende~ckend# 2.0, Compositor 1.5) | Isolated Web Co 5.5, Web Content 5.0, Socket Process 1.0, WebExtensions 1.0 | — | — |
| profile | key | — | — | **8.3** (main 3.5, SamplerThread 2.7, TaskCon~ller # 0.5, Renderer 0.5, Compositor 0.5) | Web Content 4.6, Isolated Web Co 2.2, WebExtensions 1.1, Privileged Cont 0.8 | 9.0 | — |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | idle | — | — | — | — | — | — | — | — |
| plain | raf | — | — | — | — | — | — | — | — |
| plain | raf-nosampler | — | — | — | — | — | — | — | — |
| plain | scroll | — | — | — | — | — | — | — | — |
| plain | key | — | — | — | — | — | — | — | — |
| trace | idle | — | — | — | — | — | — | — | — |
| trace | raf | — | — | — | — | — | — | — | — |
| trace | raf-nosampler | — | — | — | — | — | — | — | — |
| trace | scroll | — | — | — | — | — | — | — | — |
| trace | key | — | — | — | — | — | — | — | — |
| profile | idle | — | — | — | — | — | — | — | — |
| profile | raf | — | — | — | — | — | — | — | — |
| profile | raf-nosampler | — | — | — | — | — | — | — | — |
| profile | scroll | — | — | — | — | — | — | — | — |
| profile | key | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | — | — | — | — | — | — | — | — | — | — | — |
| profile | — | — | — | — | — | — | — | — | — | — | — |

### Profile: gecko / idle

- **parent** CPU ms by thread group: main 42, DOM Worker 1, IPC I/O 1, Socket 0, other 0, Renderer 0, WRWorker 0, WRSceneBuilder 0, WRRenderBackend 0, Canvas 0, Compositor 0, ImageIO 0, BgPool 0, ImageBridge 0, SwComposite 0
  - main thread 42 ms (2.1% of span): GC / CC 29, Idle 5, Other 4, JavaScript 4, DOM 0
  - JS leaf 0 / native under JS 4 / native 38; buckets: gc_cc 29, poll_wait 6, harness_diagnostics 3, subprocess_pipe_io 0
  - top self: `[libxul.so]` 33; `poll [libc.so.6]` 5; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 2; `write [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0; `[axiosozo-dev]` 0
  - GC/CC markers: GCMajor 1× 73 ms, GCSlice 6× 23 ms, CCSlice 1× 4 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); WRWorker#0 0 ms (top self: `syscall [libc.so.6]` 0); WRWorker#2 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets gc_cc 1, worker_messaging 0, poll_wait 0; top self: `[libxul.so]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:3115** CPU ms by thread group: main 16, IPC I/O 3, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 16 ms (0.8% of span): Idle 11, GC / CC 3, JavaScript 2, DOM 1, Other 0
  - JS leaf 0 / native under JS 2 / native 15; buckets: poll_wait 11, gc_cc 3, harness_diagnostics 1
  - top self: `poll [libc.so.6]` 11; `[libxul.so]` 5; `[linux-vdso.so.1]` 0; `PR_IntervalNow [libnspr4.so]` 0; `tick (http://127.0.0.1:41857/engine.html?page=2:4:14)[2]` 0; `__tls_get_addr [ld-linux-x86-64.so.2]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 1
  - GC/CC markers: GCMajor 1× 18 ms, GCSlice 4× 2 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:2950** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3051** CPU ms by thread group: main 0, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / raf

- **parent** CPU ms by thread group: Renderer 220, main 46, WRRenderBackend 43, WRSceneBuilder 35, Compositor 27, SwComposite 10, IPC I/O 7, DOM Worker 4, other 1, Socket 1, WRWorker 0, Canvas 0, ImageIO 0, BgPool 0, ImageBridge 0
  - main thread 46 ms (1.5% of span): GC / CC 25, Idle 16, Graphics 2, JavaScript 2, Other 1, Layout 1
  - JS leaf 0 / native under JS 3 / native 43; buckets: gc_cc 25, poll_wait 16, harness_diagnostics 2, paint_layout 2, mozafterpaint_events 0
  - top self: `[libxul.so]` 28; `poll [libc.so.6]` 16; `syscall [libc.so.6]` 1; `sendmsg [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `recvmsg [libc.so.6]` 0
  - GC/CC markers: GCMajor 1× 69 ms, GCSlice 5× 20 ms, CCSlice 1× 4 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 220 ms (top self: `[libxul.so]` 111, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 90, `hypotf@@GLIBC_2.35 [libm.so.6]` 8); WRRenderBackend#0 43 ms (top self: `syscall [libc.so.6]` 38, `[libxul.so]` 2, `sched_yield [libc.so.6]` 2); WRSceneBuilder#0 31 ms (top self: `syscall [libc.so.6]` 27, `sched_yield [libc.so.6]` 2, `[libxul.so]` 1)
  - background pools (native receiver queue): BgIOThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 2 ms: buckets memcpy_memset 1, worker_messaging 0, poll_wait 0; top self: `madvise [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `[libxul.so]` 0; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:3115** CPU ms by thread group: main 107, IPC I/O 10, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 107 ms (3.5% of span): Idle 80, Graphics 8, Other 8, Layout 7, Profiler 2, JavaScript 2
  - JS leaf 0 / native under JS 4 / native 103; buckets: poll_wait 81, paint_layout 15, harness_diagnostics 2, gc_cc 1, webrender_render 1, memcpy_memset 0
  - top self: `poll [libc.so.6]` 81; `[libxul.so]` 17; `sendmsg [libc.so.6]` 3; `[]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3012** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0; `[linux-vdso.so.1]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3051** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / raf-nosampler

- **parent** CPU ms by thread group: Renderer 185, WRRenderBackend 42, WRSceneBuilder 35, Compositor 28, main 9, IPC I/O 6, SwComposite 6, other 1, Socket 0, WRWorker 0, Canvas 0, ImageIO 0, BgPool 0, DOM Worker 0, ImageBridge 0
  - main thread 9 ms (0.3% of span): Idle 6, JavaScript 3, Other 0, Profiler 0
  - JS leaf 0 / native under JS 3 / native 7; buckets: poll_wait 7, harness_diagnostics 3, memcpy_memset 0
  - top self: `poll [libc.so.6]` 6; `[libxul.so]` 3; `[linux-vdso.so.1]` 0; `recvmsg [libc.so.6]` 0; `gdk_window_get_display [libgdk-3.so.0]` 0; `[libgdk-3.so.0]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 3; `evaluate.sandbox/promise< (chrome://remote/content/marionette/evaluate` 2; `evaluate.sandbox (chrome://remote/content/marionette/evaluate.sys.mjs:` 2
  - WebRender/compositor threads: Renderer 185 ms (top self: `[libxul.so]` 87, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 85, `__memmove_avx512_unaligned_erms [libc.so.6]` 4); WRRenderBackend#0 42 ms (top self: `syscall [libc.so.6]` 38, `[libxul.so]` 3, `sched_yield [libc.so.6]` 2); WRSceneBuilder#0 32 ms (top self: `syscall [libc.so.6]` 29, `sched_yield [libc.so.6]` 1, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1)
  - background pools (native receiver queue): BgIOThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:3115** CPU ms by thread group: main 104, IPC I/O 10, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 104 ms (3.4% of span): Idle 75, Graphics 12, Layout 9, Other 7, Profiler 2, DOM 0
  - JS leaf 0 / native under JS 1 / native 103; buckets: poll_wait 75, paint_layout 16, mozafterpaint_events 1, memcpy_memset 1, webrender_render 1
  - top self: `poll [libc.so.6]` 75; `[libxul.so]` 22; `[]` 2; `sendmsg [libc.so.6]` 2; `getcontext [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1
  - GC/CC markers: GCMinor 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3051** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3012** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / scroll

- **parent** CPU ms by thread group: Renderer 349, main 89, WRRenderBackend 42, Compositor 18, WRSceneBuilder 15, SwComposite 14, IPC I/O 5, other 1, BgPool 1, DOM Worker 1, Socket 1, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 89 ms (4.4% of span): Idle 45, GC / CC 26, Other 6, JavaScript 5, Graphics 3, Layout 2
  - JS leaf 0 / native under JS 5 / native 83; buckets: poll_wait 52, gc_cc 26, paint_layout 3, harness_diagnostics 2, mozafterpaint_events 1, subprocess_pipe_io 0, memcpy_memset 0
  - top self: `poll [libc.so.6]` 46; `[libxul.so]` 34; `write [libc.so.6]` 1; `[axiosozo-dev]` 1; `__strlen_evex [libc.so.6]` 1; `read [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 71 ms, GCSlice 8× 22 ms, CCSlice 1× 4 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 349 ms (top self: `[libxul.so]` 260, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 59, `hypotf@@GLIBC_2.35 [libm.so.6]` 11); WRRenderBackend#0 42 ms (top self: `syscall [libc.so.6]` 35, `[libxul.so]` 4, `sched_yield [libc.so.6]` 1); WRSceneBuilder#0 14 ms (top self: `syscall [libc.so.6]` 12, `[libxul.so]` 1, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): BgIOThreadPool #3 1 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0, `rename [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0; `[libxul.so]` 0
- **tab:3115** CPU ms by thread group: main 61, IPC I/O 9, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 61 ms (3.0% of span): Idle 46, Graphics 6, Other 3, GC / CC 2, Profiler 1, Layout 1
  - JS leaf 0 / native under JS 2 / native 59; buckets: poll_wait 46, paint_layout 7, gc_cc 2, harness_diagnostics 2, memcpy_memset 0
  - top self: `poll [libc.so.6]` 46; `[libxul.so]` 11; `[]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `[linux-vdso.so.1]` 1; `sendmsg [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 17 ms, GCSlice 6× 2 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3012** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3051** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / key

- **parent** CPU ms by thread group: main 116, Renderer 19, WRRenderBackend 10, Compositor 10, WRSceneBuilder 8, IPC I/O 4, SwComposite 2, other 1, Socket 1, WRWorker 0, Canvas 0, ImageIO 0, BgPool 0, DOM Worker 0, ImageBridge 0
  - main thread 116 ms (3.1% of span): Idle 34, GC / CC 22, Layout 18, Other 13, JavaScript 13, Graphics 12
  - JS leaf 1 / native under JS 13 / native 102; buckets: poll_wait 41, paint_layout 27, gc_cc 23, harness_diagnostics 3, memcpy_memset 0
  - top self: `[libxul.so]` 61; `poll [libc.so.6]` 35; `sendmsg [libc.so.6]` 3; `g_value_set_string [libgobject-2.0.so.0]` 2; `[axiosozo-dev]` 2; `syscall [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 51 ms, GCSlice 5× 18 ms, CCSlice 1× 3 ms, GCMinor 1× 0 ms
  - WebRender/compositor threads: Renderer 19 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 13, `[libxul.so]` 4, `hypotf@@GLIBC_2.35 [libm.so.6]` 1); WRRenderBackend#0 10 ms (top self: `syscall [libc.so.6]` 9, `[libxul.so]` 1, `sched_yield [libc.so.6]` 0); WRSceneBuilder#0 7 ms (top self: `syscall [libc.so.6]` 7, `[libxul.so]` 0)
  - background pools (native receiver queue): BgIOThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:3115** CPU ms by thread group: main 31, IPC I/O 4, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 31 ms (0.8% of span): Idle 17, JavaScript 3, Other 3, Graphics 3, Layout 2, DOM 2
  - JS leaf 0 / native under JS 3 / native 28; buckets: poll_wait 17, paint_layout 3, harness_diagnostics 2, webrender_render 0
  - top self: `poll [libc.so.6]` 17; `[libxul.so]` 11; `[]` 1; `[unknown]` 1; `__lll_lock_wait [libc.so.6]` 0; `sendmsg [libc.so.6]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 2
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:2950** CPU ms by thread group: main 4, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 4 ms (0.1% of span): Idle 4, JavaScript 0
  - JS leaf 0 / native under JS 0 / native 4; buckets: poll_wait 4
  - top self: `poll [libc.so.6]` 4; `[libxul.so]` 0
  - top JS (total): `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[3]` 0; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[3` 0; `applySafeWithoutClone/< (resource://gre/modules/ExtensionCommon.sys.mj` 0; `fire (resource://gre/modules/ExtensionChild.sys.mjs:873:18)[7]` 0; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 0; `applySafeWithoutClone (resource://gre/modules/ExtensionCommon.sys.mjs:` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3211** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

## gecko-2x (PASS)

CPU: AMD EPYC 9V74 80-Core Processor; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | idle | 59.2 | 17.1 | **14.2** (main 4.4, TaskCon~ller # 2.9, Renderer 2.4, DOM Worker 1.5, glean.dispatche 1.0) | Web Content 2.9, Isolated Web Co 0.5 | — | — |
| plain | raf | 59.0 | 17.1 | **24.8** (Renderer 15.7, SwComposite 2.9, WRRende~ckend# 1.6, main 1.0, glean.dispatche 1.0) | Isolated Web Co 3.2, Privileged Cont 0.6, WebExtensions 0.3 | — | — |
| plain | raf-nosampler | — | — | **19.2** (Renderer 9.6, SwComposite 2.0, WRRende~ckend# 1.7, main 1.3, WRScene~ilder# 1.3) | Isolated Web Co 3.6, Web Content 0.3 | — | — |
| plain | scroll | 59.0 | 17.1 | **75.0** (Renderer 55.2, SwComposite 6.4, main 5.4, WRRende~ckend# 3.0, WRScene~ilder# 1.5) | Isolated Web Co 4.5, Privileged Cont 0.5 | — | — |
| plain | key | — | — | **6.6** (main 2.9, Renderer 1.1, WRRende~ckend# 0.5, glean.dispatche 0.3, IPC I/O Parent 0.3) | Isolated Web Co 1.3 | 10.0 | — |
| trace | idle | 59.0 | 17.1 | **4.5** (main 1.5, TaskCon~ller # 1.5, glean.dispatche 0.5, Renderer 0.5, Compositor 0.5) | Isolated Web Co 0.5 | — | — |
| trace | raf | 59.0 | 17.1 | **15.7** (Renderer 6.2, SwComposite 2.3, main 1.6, WRRende~ckend# 1.6, glean.dispatche 1.0) | Isolated Web Co 3.6 | — | — |
| trace | raf-nosampler | — | — | **16.9** (Renderer 9.0, WRRende~ckend# 1.7, SwComposite 1.7, WRScene~ilder# 1.3, glean.dispatche 1.0) | Isolated Web Co 3.6 | — | — |
| trace | scroll | 59.0 | 17.1 | **75.7** (Renderer 54.9, SwComposite 5.9, main 5.4, WRRende~ckend# 3.0, glean.dispatche 1.5) | Isolated Web Co 3.5, Web Content 0.5 | — | — |
| trace | key | — | — | **44.2** (main 12.3, DOM Worker 11.2, Indexed~ IO # 9.4, IPDL Background 3.7, TaskCon~ller # 1.9) | Isolated Web Co 1.1, WebExtensions 0.3 | 9.0 | — |
| profile | idle | 59.5 | 17.1 | **12.2** (main 3.9, SamplerThread 3.4, TaskCon~ller # 1.9, IPDL Background 1.0, IPC I/O Parent 0.5) | Web Content 5.3, Isolated Web Co 2.5, RDD Process 1.5, WebExtensions 1.4 | — | — |
| profile | raf | 59.0 | 17.2 | **24.5** (Renderer 7.2, SamplerThread 4.6, SwComposite 2.6, main 2.0, WRRende~ckend# 2.0) | Isolated Web Co 7.3, Web Content 5.9, WebExtensions 1.3, Privileged Cont 1.3 | — | — |
| profile | raf-nosampler | — | — | **26.6** (Renderer 10.0, SamplerThread 4.6, SwComposite 2.3, WRRende~ckend# 2.0, WRScene~ilder# 1.7) | Isolated Web Co 8.0, Web Content 6.7, Privileged Cont 1.3, Socket Process 1.0 | — | — |
| profile | scroll | 59.0 | 17.1 | **86.2** (Renderer 58.1, SamplerThread 7.4, SwComposite 6.9, main 4.9, WRRende~ckend# 3.4) | Isolated Web Co 7.9, Web Content 7.4, Privileged Cont 1.5, Socket Process 1.0 | — | — |
| profile | key | — | — | **11.8** (main 4.5, SamplerThread 3.5, Renderer 1.3, TaskCon~ller # 0.5, WRRende~ckend# 0.5) | Web Content 6.7, Isolated Web Co 2.7, WebExtensions 1.6, Privileged Cont 1.1 | 9.5 | — |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | idle | — | — | — | — | — | — | — | — |
| plain | raf | — | — | — | — | — | — | — | — |
| plain | raf-nosampler | — | — | — | — | — | — | — | — |
| plain | scroll | — | — | — | — | — | — | — | — |
| plain | key | — | — | — | — | — | — | — | — |
| trace | idle | — | — | — | — | — | — | — | — |
| trace | raf | — | — | — | — | — | — | — | — |
| trace | raf-nosampler | — | — | — | — | — | — | — | — |
| trace | scroll | — | — | — | — | — | — | — | — |
| trace | key | — | — | — | — | — | — | — | — |
| profile | idle | — | — | — | — | — | — | — | — |
| profile | raf | — | — | — | — | — | — | — | — |
| profile | raf-nosampler | — | — | — | — | — | — | — | — |
| profile | scroll | — | — | — | — | — | — | — | — |
| profile | key | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | — | — | — | — | — | — | — | — | — | — | — |
| profile | — | — | — | — | — | — | — | — | — | — | — |

### Profile: gecko-2x / idle

- **parent** CPU ms by thread group: main 84, DOM Worker 7, Socket 2, IPC I/O 1, Renderer 1, BgPool 1, SwComposite 1, other 0, Compositor 0, WRRenderBackend 0, WRSceneBuilder 0, ImageIO 0, WRWorker 0, Canvas 0, ImageBridge 0
  - main thread 84 ms (4.0% of span): GC / CC 37, Idle 17, Other 12, JavaScript 10, DOM 5, Profiler 1
  - JS leaf 1 / native under JS 14 / native 68; buckets: gc_cc 37, poll_wait 23, harness_diagnostics 4, memcpy_memset 2, subprocess_pipe_io 1, paint_layout 1, json_metadata 0, mozafterpaint_events 0
  - top self: `[libxul.so]` 52; `poll [libc.so.6]` 21; `mprotect [libc.so.6]` 2; `read [libc.so.6]` 1; `sendmsg [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 74 ms, GCSlice 6× 25 ms, CCSlice 1× 9 ms, GCMinor 1× 4 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 1 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1); SwComposite 1 ms (top self: `__memmove_avx512_unaligned_erms [libc.so.6]` 0, `syscall [libc.so.6]` 0); WRRenderBackend#0 0 ms (top self: `syscall [libc.so.6]` 0, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BgIOThreadPool #3 0 ms (top self: `rename [libc.so.6]` 0, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0, `__lll_lock_wait [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 7 ms: buckets worker_messaging 5, poll_wait 5; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 5; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 1; `[libxul.so]` 1; `mprotect [libc.so.6]` 0; `__lll_lock_wake [libc.so.6]` 0
- **tab:3088** CPU ms by thread group: main 24, IPC I/O 4, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 24 ms (1.1% of span): Idle 16, GC / CC 3, JavaScript 2, Other 1, DOM 1, Profiler 0
  - JS leaf 0 / native under JS 3 / native 20; buckets: poll_wait 17, gc_cc 3, harness_diagnostics 3, memcpy_memset 1
  - top self: `poll [libc.so.6]` 16; `[libxul.so]` 6; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 1; `mmap64 [libc.so.6]` 1; `write [libc.so.6]` 0; `[]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3; `evaluate.sandbox (chrome://remote/content/marionette/evaluate.sys.mjs:` 2; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 2
  - GC/CC markers: GCMajor 1× 18 ms, GCSlice 4× 2 ms, CCSlice 1× 2 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3016** CPU ms by thread group: main 1, IPC I/O 0, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3163** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / raf

- **parent** CPU ms by thread group: Renderer 211, SwComposite 70, main 58, WRRenderBackend 57, WRSceneBuilder 46, Compositor 35, IPC I/O 8, DOM Worker 6, other 2, Socket 1, ImageIO 0, WRWorker 0, Canvas 0, ImageBridge 0, BgPool 0
  - main thread 58 ms (1.9% of span): GC / CC 27, Idle 19, Other 7, Layout 2, JavaScript 2, Graphics 1
  - JS leaf 0 / native under JS 2 / native 56; buckets: gc_cc 27, poll_wait 25, paint_layout 2, harness_diagnostics 1
  - top self: `[libxul.so]` 29; `poll [libc.so.6]` 18; `pthread_cond_broadcast@@GLIBC_2.3.2 [libc.so.6]` 3; `write [libc.so.6]` 3; `[linux-vdso.so.1]` 1; `recvmsg [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 70 ms, GCSlice 6× 21 ms, CCSlice 1× 5 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 211 ms (top self: `[libxul.so]` 97, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 88, `__memmove_avx512_unaligned_erms [libc.so.6]` 13); SwComposite 70 ms (top self: `syscall [libc.so.6]` 61, `__memmove_avx512_unaligned_erms [libc.so.6]` 9, `[libxul.so]` 0); WRRenderBackend#0 57 ms (top self: `syscall [libc.so.6]` 49, `[libxul.so]` 5, `sched_yield [libc.so.6]` 2)
  - background pools (native receiver queue): ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 4 ms: buckets gc_cc 3, memcpy_memset 1, worker_messaging 1, poll_wait 1; top self: `[libxul.so]` 2; `madvise [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 1
- **tab:3088** CPU ms by thread group: main 139, IPC I/O 13, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 139 ms (4.5% of span): Idle 96, Graphics 14, Layout 14, Other 8, Profiler 3, JavaScript 3
  - JS leaf 0 / native under JS 4 / native 135; buckets: poll_wait 97, paint_layout 22, harness_diagnostics 1, memcpy_memset 1, gc_cc 1
  - top self: `poll [libc.so.6]` 95; `[libxul.so]` 32; `[]` 4; `write [libc.so.6]` 1; `[linux-vdso.so.1]` 1; `sendmsg [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3111** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:2998** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / raf-nosampler

- **parent** CPU ms by thread group: Renderer 299, SwComposite 60, WRRenderBackend 56, WRSceneBuilder 46, Compositor 36, main 35, IPC I/O 8, other 1, Socket 0, ImageIO 0, WRWorker 0, Canvas 0, DOM Worker 0, ImageBridge 0, BgPool 0
  - main thread 35 ms (1.2% of span): GC / CC 19, Idle 11, JavaScript 4, Graphics 0, Other 0
  - JS leaf 0 / native under JS 4 / native 31; buckets: gc_cc 20, poll_wait 12, harness_diagnostics 4, paint_layout 0
  - top self: `[libxul.so]` 22; `poll [libc.so.6]` 11; `mprotect [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0; `[linux-vdso.so.1]` 0
  - top JS (total): `sandbox.createMutable (chrome://remote/content/marionette/evaluate.sys` 2; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 2
  - GC/CC markers: GCMajor 1× 70 ms, GCSlice 6× 21 ms, GCMinor 1× 0 ms
  - WebRender/compositor threads: Renderer 299 ms (top self: `[libxul.so]` 178, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 95, `__memmove_avx512_unaligned_erms [libc.so.6]` 8); SwComposite 60 ms (top self: `syscall [libc.so.6]` 54, `__memmove_avx512_unaligned_erms [libc.so.6]` 6, `[libxul.so]` 0); WRRenderBackend#0 56 ms (top self: `syscall [libc.so.6]` 49, `[libxul.so]` 5, `sched_yield [libc.so.6]` 2)
  - background pools (native receiver queue): ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:3088** CPU ms by thread group: main 143, IPC I/O 13, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 143 ms (4.7% of span): Idle 93, Graphics 19, Layout 14, Other 9, Profiler 4, DOM 3
  - JS leaf 0 / native under JS 4 / native 139; buckets: poll_wait 95, paint_layout 28, memcpy_memset 2, webrender_render 1
  - top self: `poll [libc.so.6]` 93; `[libxul.so]` 36; `sendmsg [libc.so.6]` 3; `write [libc.so.6]` 2; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `[]` 1
  - GC/CC markers: GCMinor 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:2998** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3165** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / scroll

- **parent** CPU ms by thread group: Renderer 1172, SwComposite 138, main 94, WRRenderBackend 73, Compositor 25, WRSceneBuilder 21, IPC I/O 7, DOM Worker 1, other 1, Socket 1, BgPool 1, ImageIO 0, WRWorker 0, Canvas 0, ImageBridge 0
  - main thread 94 ms (4.6% of span): Idle 62, Other 12, Graphics 9, JavaScript 7, Layout 2, DOM 2
  - JS leaf 0 / native under JS 7 / native 87; buckets: poll_wait 81, paint_layout 9, harness_diagnostics 4, memcpy_memset 0
  - top self: `poll [libc.so.6]` 65; `[libxul.so]` 21; `recvmsg [libc.so.6]` 2; `[libgobject-2.0.so.0]` 1; `[unknown]` 1; `read [libc.so.6]` 1
  - WebRender/compositor threads: Renderer 1172 ms (top self: `[libxul.so]` 1011, `hypotf@@GLIBC_2.35 [libm.so.6]` 82, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 54); SwComposite 137 ms (top self: `syscall [libc.so.6]` 124, `__memmove_avx512_unaligned_erms [libc.so.6]` 13, `[libxul.so]` 0); WRRenderBackend#0 73 ms (top self: `syscall [libc.so.6]` 50, `[libxul.so]` 17, `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 2)
  - background pools (native receiver queue): BgIOThreadPool #3 1 ms (top self: `rename [libc.so.6]` 0, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets gc_cc 1, worker_messaging 0, poll_wait 0; top self: `[libxul.so]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:3088** CPU ms by thread group: main 88, IPC I/O 12, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 88 ms (4.3% of span): Idle 58, Graphics 11, Other 6, GC / CC 5, Layout 3, JavaScript 3
  - JS leaf 0 / native under JS 3 / native 85; buckets: poll_wait 60, paint_layout 12, gc_cc 5, harness_diagnostics 2, memcpy_memset 1, mozafterpaint_events 0, webrender_render 0
  - top self: `poll [libc.so.6]` 60; `[libxul.so]` 22; `[]` 2; `[unknown]` 1; `sendmsg [libc.so.6]` 1; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 25 ms, GCSlice 4× 2 ms, CCSlice 1× 2 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3163** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3165** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / key

- **parent** CPU ms by thread group: main 166, Renderer 40, WRRenderBackend 16, Compositor 14, WRSceneBuilder 12, SwComposite 11, IPC I/O 7, other 2, Socket 1, ImageIO 0, WRWorker 0, Canvas 0, DOM Worker 0, ImageBridge 0, BgPool 0
  - main thread 166 ms (4.4% of span): Idle 38, Layout 30, JavaScript 30, GC / CC 27, Other 17, Graphics 17
  - JS leaf 4 / native under JS 31 / native 131; buckets: poll_wait 52, paint_layout 39, gc_cc 27, harness_diagnostics 7, subprocess_pipe_io 2, memcpy_memset 1, mozafterpaint_events 0
  - top self: `[libxul.so]` 98; `poll [libc.so.6]` 39; `[axiosozo-dev]` 6; `[unknown]` 3; `sendmsg [libc.so.6]` 2; `mprotect [libc.so.6]` 2
  - GC/CC markers: GCMajor 1× 70 ms, GCSlice 5× 21 ms, CCSlice 1× 5 ms, GCMinor 1× 1 ms
  - WebRender/compositor threads: Renderer 40 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 22, `[libxul.so]` 13, `__memmove_avx512_unaligned_erms [libc.so.6]` 4); WRRenderBackend#0 16 ms (top self: `syscall [libc.so.6]` 13, `sched_yield [libc.so.6]` 1, `[libxul.so]` 1); WRSceneBuilder#0 11 ms (top self: `syscall [libc.so.6]` 8, `[libxul.so]` 1, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #3 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:3088** CPU ms by thread group: main 44, IPC I/O 5, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 44 ms (1.2% of span): Idle 24, Layout 5, JavaScript 4, Other 4, DOM 3, Profiler 3
  - JS leaf 1 / native under JS 4 / native 40; buckets: poll_wait 24, paint_layout 4, harness_diagnostics 2
  - top self: `poll [libc.so.6]` 24; `[libxul.so]` 15; `[]` 1; `getcontext [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `sendmsg [libc.so.6]` 1
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 2
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:2923** CPU ms by thread group: main 6, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 6 ms (0.2% of span): Idle 6, JavaScript 0, GC / CC 0, Other 0
  - JS leaf 0 / native under JS 0 / native 6; buckets: poll_wait 6, gc_cc 0
  - top self: `poll [libc.so.6]` 6; `[libxul.so]` 0
  - GC/CC markers: GCMinor 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:2977** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

## gecko-debian (PASS)

CPU: INTEL(R) XEON(R) PLATINUM 8573C; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | idle | 59.0 | 17.3 | **7.5** (main 2.5, DOM Worker 1.5, Renderer 1.0, IPDL Background 0.5, TaskCon~ller # 0.5) | Web Content 3.9, Isolated Web Co 1.0, forkserver 0.5 | — | — |
| plain | raf | 59.0 | 17.3 | **27.2** (Renderer 14.8, main 2.3, TaskCon~ller # 2.0, WRRende~ckend# 2.0, glean.dispatche 1.3) | Isolated Web Co 5.2, WebExtensions 1.0, Web Content 0.3, Privileged Cont 0.3 | — | — |
| plain | raf-nosampler | — | — | **20.5** (Renderer 10.3, WRRende~ckend# 2.7, WRScene~ilder# 1.7, main 1.3, glean.dispatche 1.3) | Isolated Web Co 5.0, Web Content 0.7, WebExtensions 0.3 | — | — |
| plain | scroll | 59.0 | 17.1 | **41.6** (Renderer 27.6, main 4.5, WRRende~ckend# 3.0, SwComposite 2.5, glean.dispatche 1.0) | Isolated Web Co 4.5, Privileged Cont 0.5 | — | — |
| plain | key | — | — | **9.7** (main 4.8, Renderer 1.1, TaskCon~ller # 0.8, glean.dispatche 0.5, WRRende~ckend# 0.5) | Isolated Web Co 1.9 | 11.0 | — |
| trace | idle | 59.2 | 17.2 | **5.5** (main 2.0, IPDL Background 1.0, TaskCon~ller # 1.0, Softwar~cThread 0.5, Renderer 0.5) | Isolated Web Co 1.5 | — | — |
| trace | raf | 59.0 | 17.2 | **20.4** (Renderer 9.6, WRRende~ckend# 2.3, WRScene~ilder# 2.0, main 1.6, Compositor 1.6) | Isolated Web Co 5.2 | — | — |
| trace | raf-nosampler | — | — | **18.3** (Renderer 10.0, WRRende~ckend# 2.0, glean.dispatche 1.3, WRScene~ilder# 1.3, Compositor 1.0) | Isolated Web Co 4.6 | — | — |
| trace | scroll | 59.0 | 17.2 | **44.6** (Renderer 28.1, main 5.5, WRRende~ckend# 3.5, SwComposite 3.0, Compositor 1.5) | Isolated Web Co 5.0 | — | — |
| trace | key | — | — | **54.3** (main 18.5, DOM Worker 15.5, IPDL Background 6.4, Indexed~ IO # 3.5, TaskCon~ller # 2.9) | Isolated Web Co 1.3, WebExtensions 0.3 | 8.5 | — |
| profile | idle | 59.5 | 17.1 | **10.8** (DOM Worker 2.9, SamplerThread 2.9, main 2.5, TaskCon~ller # 2.0, IPDL Background 0.5) | Web Content 4.9, Isolated Web Co 3.0, Privileged Cont 1.5, Socket Process 1.0 | — | — |
| profile | raf | 59.0 | 17.1 | **31.3** (Renderer 11.8, SamplerThread 5.6, WRRende~ckend# 3.0, main 2.3, WRScene~ilder# 2.0) | Isolated Web Co 11.5, Web Content 6.5, WebExtensions 1.3, Privileged Cont 1.3 | — | — |
| profile | raf-nosampler | — | — | **27.9** (Renderer 12.0, SamplerThread 5.3, WRRende~ckend# 3.0, WRScene~ilder# 2.0, Compositor 2.0) | Isolated Web Co 10.6, Web Content 6.7, WebExtensions 1.3, Privileged Cont 1.3 | — | — |
| profile | scroll | 59.0 | 17.1 | **62.9** (Renderer 31.9, main 8.0, SamplerThread 6.5, WRRende~ckend# 4.5, SwComposite 3.5) | Isolated Web Co 10.0, Web Content 7.0, Privileged Cont 2.0, WebExtensions 1.0 | — | — |
| profile | key | — | — | **14.9** (main 5.9, SamplerThread 3.7, Renderer 1.1, TaskCon~ller # 0.8, WRRende~ckend# 0.8) | Web Content 5.6, Isolated Web Co 3.4, WebExtensions 1.6, Privileged Cont 1.1 | 9.0 | — |

Presenter frame path (diagnostics at the window end; native receiver = nsIAxioFrameSink.statsJSON deltas: apply on the AxioFrameRing task queue, present on the main thread):

| pass | window | transport | upload | applied | presented | apply ms/frame | present ms/frame | apply core share | present core share |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| plain | idle | — | — | — | — | — | — | — | — |
| plain | raf | — | — | — | — | — | — | — | — |
| plain | raf-nosampler | — | — | — | — | — | — | — | — |
| plain | scroll | — | — | — | — | — | — | — | — |
| plain | key | — | — | — | — | — | — | — | — |
| trace | idle | — | — | — | — | — | — | — | — |
| trace | raf | — | — | — | — | — | — | — | — |
| trace | raf-nosampler | — | — | — | — | — | — | — | — |
| trace | scroll | — | — | — | — | — | — | — | — |
| trace | key | — | — | — | — | — | — | — | — |
| profile | idle | — | — | — | — | — | — | — | — |
| profile | raf | — | — | — | — | — | — | — | — |
| profile | raf-nosampler | — | — | — | — | — | — | — | — |
| profile | scroll | — | — | — | — | — | — | — | — |
| profile | key | — | — | — | — | — | — | — | — |

Key → paint breakdown (median ms; hooks):

| pass | keydown→send | send→frame header (host) | payload transport | received→accept | native apply | received→ack (native present) | tick wait | surface paint | paint→MozAfterPaint | keydown→surface paint end | keydown→MozAfterPaint |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| trace | — | — | — | — | — | — | — | — | — | — | — |
| profile | — | — | — | — | — | — | — | — | — | — | — |

### Profile: gecko-debian / idle

- **parent** CPU ms by thread group: main 58, DOM Worker 52, Compositor 2, IPC I/O 1, Socket 1, Renderer 1, other 0, SwComposite 0, WRSceneBuilder 0, WRRenderBackend 0, BgPool 0, ImageIO 0, WRWorker 0, Canvas 0, ImageBridge 0
  - main thread 58 ms (2.8% of span): GC / CC 38, JavaScript 7, Idle 6, Other 5, Profiler 1, DOM 1
  - JS leaf 0 / native under JS 8 / native 50; buckets: gc_cc 38, poll_wait 7, harness_diagnostics 4, json_metadata 1, paint_layout 1, memcpy_memset 0
  - top self: `[libxul.so]` 43; `__syscall_cancel_arch [libc.so.6]` 7; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 3; `prctl [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `[axiosozo-dev]` 1
  - GC/CC markers: GCMajor 1× 61 ms, GCSlice 6× 27 ms, CCSlice 1× 9 ms, GCMinor 1× 2 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 1 ms (top self: `[libxul.so]` 0, `__syscall_cancel_arch [libc.so.6]` 0); SwComposite 0 ms (top self: `syscall [libc.so.6]` 0); WRSceneBuilder#0 0 ms (top self: `syscall [libc.so.6]` 0, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #3 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 48 ms: buckets memcpy_memset 17, gc_cc 4, poll_wait 2, worker_messaging 1; top self: `[libxul.so]` 25; `madvise [libc.so.6]` 13; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 4; `__syscall_cancel_arch [libc.so.6]` 2; `munmap [libc.so.6]` 2
- **tab:8457** CPU ms by thread group: main 23, IPC I/O 5, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 23 ms (1.1% of span): Idle 17, JavaScript 3, Other 1, DOM 1, Layout 1, Profiler 0
  - JS leaf 0 / native under JS 4 / native 19; buckets: poll_wait 17, harness_diagnostics 3, memcpy_memset 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 18; `[libxul.so]` 4; `__memset_evex_unaligned_erms [libc.so.6]` 1
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 3; `evaluate.sandbox (chrome://remote/content/marionette/evaluate.sys.mjs:` 2
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8549** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8546** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `[linux-vdso.so.1]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / raf

- **parent** CPU ms by thread group: Renderer 337, WRRenderBackend 79, main 69, WRSceneBuilder 61, Compositor 49, SwComposite 29, IPC I/O 11, DOM Worker 4, other 2, Socket 1, BgPool 0, ImageIO 0, WRWorker 0, Canvas 0, ImageBridge 0
  - main thread 69 ms (2.3% of span): GC / CC 33, Idle 21, Other 7, JavaScript 5, Layout 2, Graphics 1
  - JS leaf 0 / native under JS 5 / native 64; buckets: gc_cc 33, poll_wait 26, harness_diagnostics 4, paint_layout 2, memcpy_memset 0, subprocess_pipe_io 0
  - top self: `[libxul.so]` 37; `__syscall_cancel_arch [libc.so.6]` 26; `__tls_get_addr [ld-linux-x86-64.so.2]` 2; `mprotect [libc.so.6]` 1; `[libgdk-3.so.0]` 1; `[axiosozo-dev]` 1
  - GC/CC markers: GCMajor 1× 77 ms, GCSlice 6× 27 ms, CCSlice 1× 5 ms, GCMinor 1× 0 ms
  - WebRender/compositor threads: Renderer 337 ms (top self: `[libxul.so]` 212, `__syscall_cancel_arch [libc.so.6]` 93, `__memmove_evex_unaligned_erms [libc.so.6]` 12); WRRenderBackend#0 79 ms (top self: `syscall [libc.so.6]` 65, `[libxul.so]` 10, `sched_yield [libc.so.6]` 2); WRSceneBuilder#0 55 ms (top self: `syscall [libc.so.6]` 46, `[libxul.so]` 4, `sched_yield [libc.so.6]` 2)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #3 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 3 ms: buckets memcpy_memset 2, worker_messaging 1, poll_wait 1; top self: `madvise [libc.so.6]` 2; `[libxul.so]` 1; `__syscall_cancel_arch [libc.so.6]` 1
- **tab:8457** CPU ms by thread group: main 220, IPC I/O 17, other 5, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 220 ms (7.2% of span): Idle 106, Graphics 39, Layout 33, Other 14, Profiler 11, GC / CC 7
  - JS leaf 0 / native under JS 12 / native 208; buckets: poll_wait 106, paint_layout 55, gc_cc 7, memcpy_memset 3, harness_diagnostics 2
  - top self: `__syscall_cancel_arch [libc.so.6]` 111; `[libxul.so]` 82; `[]` 6; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 5; `__lll_lock_wait [libc.so.6]` 4; `__pthread_mutex_unlock_usercnt [libc.so.6]` 2
  - GC/CC markers: GCMajor 1× 12 ms, CCSlice 1× 4 ms, GCSlice 4× 3 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8345** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8463** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / raf-nosampler

- **parent** CPU ms by thread group: Renderer 349, WRRenderBackend 76, WRSceneBuilder 61, Compositor 50, SwComposite 19, main 16, IPC I/O 10, other 1, DOM Worker 1, Socket 0, BgPool 0, ImageIO 0, WRWorker 0, Canvas 0, ImageBridge 0
  - main thread 16 ms (0.5% of span): Idle 11, JavaScript 3, DOM 1, Other 0, Layout 0
  - JS leaf 0 / native under JS 4 / native 12; buckets: poll_wait 11, harness_diagnostics 4, mozafterpaint_events 0, memcpy_memset 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 11; `[libxul.so]` 4; `[libgdk-3.so.0]` 0; `g_main_context_iteration [libglib-2.0.so.0]` 0; `[libglib-2.0.so.0]` 0; `_XEnq [libX11.so.6]` 0
  - top JS (total): `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 3; `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3
  - WebRender/compositor threads: Renderer 349 ms (top self: `[libxul.so]` 215, `__syscall_cancel_arch [libc.so.6]` 91, `__memmove_evex_unaligned_erms [libc.so.6]` 12); WRRenderBackend#0 76 ms (top self: `syscall [libc.so.6]` 60, `[libxul.so]` 11, `sched_yield [libc.so.6]` 2); WRSceneBuilder#0 56 ms (top self: `syscall [libc.so.6]` 47, `[libxul.so]` 4, `sched_yield [libc.so.6]` 3)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #4 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 0, poll_wait 0; top self: `[libxul.so]` 1; `__syscall_cancel_arch [libc.so.6]` 0
- **tab:8457** CPU ms by thread group: main 204, IPC I/O 17, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 204 ms (6.8% of span): Idle 101, Graphics 41, Layout 29, Other 13, Profiler 10, DOM 5
  - JS leaf 0 / native under JS 5 / native 199; buckets: poll_wait 104, paint_layout 56, gc_cc 6, memcpy_memset 4, webrender_render 0, mozafterpaint_events 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 108; `[libxul.so]` 78; `[]` 5; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 2; `__pthread_mutex_unlock_usercnt [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 19 ms, GCSlice 6× 3 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8367** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8546** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / scroll

- **parent** CPU ms by thread group: Renderer 609, main 149, WRRenderBackend 79, SwComposite 60, Compositor 32, WRSceneBuilder 25, IPC I/O 8, other 1, BgPool 1, Socket 1, DOM Worker 1, ImageIO 0, WRWorker 0, Canvas 0, ImageBridge 0
  - main thread 149 ms (7.4% of span): Idle 69, GC / CC 35, Other 22, Layout 8, Graphics 7, JavaScript 7
  - JS leaf 0 / native under JS 7 / native 142; buckets: poll_wait 97, gc_cc 35, paint_layout 9, harness_diagnostics 5, subprocess_pipe_io 1, memcpy_memset 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 77; `[libxul.so]` 59; `[unknown]` 2; `[axiosozo-dev]` 2; `[libglib-2.0.so.0]` 1; `std::_Rb_tree_rebalance_for_erase(std::_Rb_tree_node_base*, ` 1
  - GC/CC markers: GCMajor 1× 79 ms, GCSlice 8× 28 ms, CCSlice 1× 9 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 609 ms (top self: `[libxul.so]` 511, `__syscall_cancel_arch [libc.so.6]` 56, `hypotf@@GLIBC_2.35 [libm.so.6]` 20); WRRenderBackend#0 79 ms (top self: `syscall [libc.so.6]` 52, `[libxul.so]` 23, `[axiosozo-dev]` 2); SwComposite 60 ms (top self: `syscall [libc.so.6]` 55, `__memmove_evex_unaligned_erms [libc.so.6]` 5, `[libxul.so]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 1 ms (top self: `rename [libc.so.6]` 1, `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #4 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 1, poll_wait 1; top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
- **tab:8457** CPU ms by thread group: main 114, IPC I/O 14, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 114 ms (5.7% of span): Idle 66, Graphics 15, Other 14, GC / CC 6, JavaScript 5, Layout 4
  - JS leaf 0 / native under JS 5 / native 109; buckets: poll_wait 67, paint_layout 17, gc_cc 6, harness_diagnostics 3, memcpy_memset 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 69; `[libxul.so]` 36; `[]` 2; `[linux-vdso.so.1]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `getcontext [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 16 ms, GCSlice 5× 4 ms, CCSlice 1× 3 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8386** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8546** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / key

- **parent** CPU ms by thread group: main 212, Renderer 41, WRRenderBackend 20, Compositor 19, WRSceneBuilder 16, IPC I/O 8, SwComposite 5, other 2, Socket 1, BgPool 0, ImageIO 0, WRWorker 0, Canvas 0, DOM Worker 0, ImageBridge 0
  - main thread 212 ms (5.7% of span): Layout 42, Idle 42, JavaScript 32, Other 32, GC / CC 31, Graphics 23
  - JS leaf 5 / native under JS 32 / native 175; buckets: poll_wait 67, paint_layout 56, gc_cc 31, harness_diagnostics 6, memcpy_memset 5, array_buffer_copy 1, mozafterpaint_events 0, webrender_render 0
  - top self: `[libxul.so]` 122; `__syscall_cancel_arch [libc.so.6]` 49; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 5; `mprotect [libc.so.6]` 4; `[axiosozo-dev]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 3
  - GC/CC markers: GCMajor 1× 61 ms, GCSlice 6× 27 ms, CCSlice 2× 6 ms, GCMinor 1× 1 ms
  - WebRender/compositor threads: Renderer 41 ms (top self: `__syscall_cancel_arch [libc.so.6]` 19, `[libxul.so]` 15, `__memmove_evex_unaligned_erms [libc.so.6]` 3); WRRenderBackend#0 20 ms (top self: `syscall [libc.so.6]` 17, `[libxul.so]` 3, `__memmove_evex_unaligned_erms [libc.so.6]` 0); WRSceneBuilder#0 15 ms (top self: `syscall [libc.so.6]` 11, `sched_yield [libc.so.6]` 2, `[libxul.so]` 1)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #4 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__syscall_cancel_arch [libc.so.6]` 0
- **tab:8457** CPU ms by thread group: main 70, IPC I/O 6, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 70 ms (1.9% of span): Idle 25, Other 11, GC / CC 11, JavaScript 8, Graphics 5, DOM 4
  - JS leaf 2 / native under JS 6 / native 62; buckets: poll_wait 25, gc_cc 11, paint_layout 6, harness_diagnostics 4
  - top self: `[libxul.so]` 39; `__syscall_cancel_arch [libc.so.6]` 27; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `[]` 1; `handleEvent (moz-src:///toolkit/actors/FindBarChild.sys.mjs:` 1; `evaluate.sandbox/promise< (chrome://remote/content/marionett` 1
  - GC/CC markers: GCMajor 1× 30 ms, GCSlice 4× 3 ms, CCSlice 1× 3 ms, GCMinor 1× 1 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8280** CPU ms by thread group: main 7, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 7 ms (0.2% of span): Idle 7, Other 0, DOM 0, JavaScript 0
  - JS leaf 0 / native under JS 0 / native 7; buckets: poll_wait 7
  - top self: `__syscall_cancel_arch [libc.so.6]` 7; `[libxul.so]` 0; `get (resource://gre/modules/ExtensionUtils.sys.mjs:102:6)[9]` 0
  - top JS (total): `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 0; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[2` 0; `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[2]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8386** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

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

