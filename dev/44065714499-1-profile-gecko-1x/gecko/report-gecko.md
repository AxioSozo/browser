# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

## gecko (PASS)

CPU: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | idle | 59.2 | 17.2 | **12.3** (main 4.9, TaskCon~ller # 1.9, Renderer 1.5, IPDL Background 1.0, DOM Worker 1.0) | Web Content 2.9, Isolated Web Co 0.5 | — | — |
| plain | raf | 59.0 | 17.3 | **27.1** (Renderer 17.7, WRRende~ckend# 2.3, WRScene~ilder# 1.6, main 1.3, glean.dispatche 1.3) | Isolated Web Co 5.3, Privileged Cont 1.0, WebExtensions 0.6 | — | — |
| plain | raf-nosampler | — | — | **22.6** (Renderer 11.3, WRRende~ckend# 2.7, WRScene~ilder# 1.7, main 1.3, glean.dispatche 1.3) | Isolated Web Co 4.9, WebExtensions 0.3 | — | — |
| plain | scroll | 59.0 | 17.3 | **45.5** (Renderer 31.5, main 4.5, WRRende~ckend# 3.5, SwComposite 2.5, glean.dispatche 1.0) | Isolated Web Co 5.0 | — | — |
| plain | key | — | — | **9.1** (main 4.8, Renderer 1.1, TaskCon~ller # 0.5, Softwar~cThread 0.5, WRRende~ckend# 0.5) | Isolated Web Co 1.9 | 10.5 | — |
| trace | idle | 59.2 | 17.2 | **7.0** (main 2.0, glean.dispatche 1.0, IPDL Background 1.0, TaskCon~ller # 1.0, Timer 0.5) | Isolated Web Co 2.0 | — | — |
| trace | raf | 59.0 | 17.3 | **20.0** (Renderer 10.2, WRRende~ckend# 2.3, main 1.3, glean.dispatche 1.3, WRScene~ilder# 1.3) | Isolated Web Co 4.6 | — | — |
| trace | raf-nosampler | — | — | **19.3** (Renderer 10.6, WRRende~ckend# 2.3, WRScene~ilder# 1.7, Compositor 1.3, glean.dispatche 1.0) | Isolated Web Co 4.7 | — | — |
| trace | scroll | 59.0 | 17.2 | **48.9** (Renderer 30.9, main 5.5, WRRende~ckend# 3.5, SwComposite 3.0, glean.dispatche 1.5) | Isolated Web Co 5.5 | — | — |
| trace | key | — | — | **53.0** (main 18.7, DOM Worker 18.7, IPDL Background 5.9, TaskCon~ller # 2.7, StreamTrans # 1.9) | Isolated Web Co 1.1, WebExtensions 0.5, Privileged Cont 0.3 | 10.5 | — |
| profile | idle | 59.5 | 17.2 | **8.7** (SamplerThread 2.9, main 2.4, TaskCon~ller # 2.4, SwComposite 0.5, DOM Worker 0.5) | Web Content 6.3, Isolated Web Co 3.5, Socket Process 1.5, WebExtensions 1.5 | — | — |
| profile | raf | 59.0 | 17.1 | **29.2** (Renderer 11.8, SamplerThread 4.6, WRRende~ckend# 2.6, main 2.3, WRScene~ilder# 2.0) | Isolated Web Co 9.2, Web Content 5.5, Privileged Cont 1.3, Socket Process 1.0 | — | — |
| profile | raf-nosampler | — | — | **27.2** (Renderer 12.6, SamplerThread 4.6, WRRende~ckend# 2.7, WRScene~ilder# 2.0, glean.dispatche 1.3) | Isolated Web Co 8.7, Web Content 6.3, WebExtensions 1.3, Privileged Cont 1.3 | — | — |
| profile | scroll | 59.0 | 17.1 | **58.8** (Renderer 34.3, main 6.0, SamplerThread 6.0, WRRende~ckend# 4.5, SwComposite 3.5) | Isolated Web Co 9.0, Web Content 6.0, WebExtensions 1.5, Privileged Cont 1.5 | — | — |
| profile | key | — | — | **13.0** (main 5.3, SamplerThread 3.2, Renderer 1.1, glean.dispatche 0.5, IPC I/O Parent 0.5) | Web Content 5.9, Isolated Web Co 3.2, WebExtensions 1.1, Privileged Cont 1.1 | 9.5 | — |

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

- **parent** CPU ms by thread group: main 47, Compositor 2, DOM Worker 2, IPC I/O 1, Socket 1, Renderer 0, SwComposite 0, other 0, WRSceneBuilder 0, WRRenderBackend 0, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 47 ms (2.3% of span): GC / CC 28, Idle 7, JavaScript 6, Other 5, DOM 1, Graphics 0
  - JS leaf 0 / native under JS 5 / native 41; buckets: gc_cc 28, poll_wait 10, harness_diagnostics 4, memcpy_memset 3, array_buffer_copy 0, paint_layout 0
  - top self: `[libxul.so]` 31; `poll [libc.so.6]` 7; `recvmsg [libc.so.6]` 2; `__memmove_evex_unaligned_erms [libc.so.6]` 1; `read [libc.so.6]` 1; `mmap64 [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 71 ms, GCSlice 6× 22 ms, CCSlice 1× 7 ms, GCMinor 1× 2 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 1 ms (top self: `__memmove_evex_unaligned_erms [libc.so.6]` 0, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); SwComposite 0 ms (top self: `syscall [libc.so.6]` 0); WRSceneBuilder#0 0 ms (top self: `syscall [libc.so.6]` 0, `[libxul.so]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 2 ms: buckets worker_messaging 0, poll_wait 0; top self: `[libxul.so]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:4294** CPU ms by thread group: main 30, IPC I/O 6, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 30 ms (1.5% of span): Idle 20, JavaScript 5, GC / CC 4, Profiler 1, Layout 0, Other 0
  - JS leaf 0 / native under JS 4 / native 26; buckets: poll_wait 20, gc_cc 4, harness_diagnostics 4, memcpy_memset 0
  - top self: `poll [libc.so.6]` 20; `[libxul.so]` 8; `[]` 1; `[linux-vdso.so.1]` 0; `__memmove_evex_unaligned_erms [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 4; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 3; `sandbox.createMutable (chrome://remote/content/marionette/evaluate.sys` 2; `sandbox.create (chrome://remote/content/marionette/evaluate.sys.mjs:24` 2
  - GC/CC markers: GCMajor 1× 18 ms, GCSlice 4× 2 ms, CCSlice 1× 2 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4380** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 0; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4233** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1; `write [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / raf

- **parent** CPU ms by thread group: Renderer 354, WRRenderBackend 73, main 61, WRSceneBuilder 55, Compositor 45, SwComposite 27, IPC I/O 10, DOM Worker 4, other 2, Socket 1, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 61 ms (2.0% of span): GC / CC 27, Idle 22, Other 5, JavaScript 3, Layout 2, DOM 1
  - JS leaf 0 / native under JS 4 / native 56; buckets: gc_cc 27, poll_wait 25, harness_diagnostics 4, paint_layout 2, memcpy_memset 1, json_metadata 0
  - top self: `[libxul.so]` 32; `poll [libc.so.6]` 23; `__memmove_evex_unaligned_erms [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1; `g_mutex_lock [libglib-2.0.so.0]` 1; `mprotect [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 72 ms, GCSlice 6× 23 ms, CCSlice 1× 7 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 353 ms (top self: `[libxul.so]` 227, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 83, `__memmove_evex_unaligned_erms [libc.so.6]` 12); WRRenderBackend#0 73 ms (top self: `syscall [libc.so.6]` 58, `[libxul.so]` 10, `sched_yield [libc.so.6]` 2); WRSceneBuilder#0 50 ms (top self: `syscall [libc.so.6]` 39, `[libxul.so]` 5, `sched_yield [libc.so.6]` 2)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 3 ms: buckets memcpy_memset 1, worker_messaging 1, poll_wait 1; top self: `[libxul.so]` 1; `madvise [libc.so.6]` 1; `munmap [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1
- **tab:4294** CPU ms by thread group: main 185, IPC I/O 15, other 2, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 185 ms (6.0% of span): Idle 103, Layout 25, Graphics 24, Other 15, Profiler 11, JavaScript 4
  - JS leaf 0 / native under JS 9 / native 175; buckets: poll_wait 108, paint_layout 38, memcpy_memset 4, harness_diagnostics 2, mozafterpaint_events 0, webrender_render 0
  - top self: `poll [libc.so.6]` 104; `[libxul.so]` 58; `sendmsg [libc.so.6]` 4; `__lll_lock_wait [libc.so.6]` 3; `[]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 2
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4382** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4380** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Profiler 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / raf-nosampler

- **parent** CPU ms by thread group: Renderer 362, WRRenderBackend 69, WRSceneBuilder 52, Compositor 45, main 34, SwComposite 18, IPC I/O 9, other 1, DOM Worker 1, Socket 0, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 34 ms (1.1% of span): GC / CC 18, Idle 12, JavaScript 4, Profiler 1, Other 0
  - JS leaf 0 / native under JS 4 / native 31; buckets: gc_cc 18, poll_wait 13, harness_diagnostics 4, memcpy_memset 1
  - top self: `[libxul.so]` 19; `poll [libc.so.6]` 12; `mprotect [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `moz_arena_realloc [axiosozo-dev]` 1; `__lll_lock_wake [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 69 ms, GCSlice 5× 20 ms, GCMinor 1× 0 ms
  - WebRender/compositor threads: Renderer 362 ms (top self: `[libxul.so]` 238, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 88, `__memmove_evex_unaligned_erms [libc.so.6]` 10); WRRenderBackend#0 69 ms (top self: `syscall [libc.so.6]` 52, `[libxul.so]` 10, `sched_yield [libc.so.6]` 5); WRSceneBuilder#0 48 ms (top self: `syscall [libc.so.6]` 40, `[libxul.so]` 4, `sched_yield [libc.so.6]` 2)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets poll_wait 1, worker_messaging 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1
- **tab:4294** CPU ms by thread group: main 167, IPC I/O 15, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 167 ms (5.5% of span): Idle 97, Graphics 29, Layout 22, Profiler 8, Other 7, DOM 1
  - JS leaf 0 / native under JS 7 / native 160; buckets: poll_wait 98, paint_layout 37, memcpy_memset 4, gc_cc 1, webrender_render 0
  - top self: `poll [libc.so.6]` 98; `[libxul.so]` 52; `[]` 5; `__memmove_evex_unaligned_erms [libc.so.6]` 2; `__lll_lock_wait [libc.so.6]` 2; `sendmsg [libc.so.6]` 2
  - GC/CC markers: GCMinor 1× 1 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4215** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4380** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0; `read [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / scroll

- **parent** CPU ms by thread group: Renderer 674, main 105, WRRenderBackend 77, SwComposite 62, Compositor 31, WRSceneBuilder 23, IPC I/O 8, Socket 1, other 1, DOM Worker 1, BgPool 1, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 105 ms (5.2% of span): Idle 67, Other 18, Graphics 7, Layout 5, JavaScript 4, DOM 3
  - JS leaf 0 / native under JS 7 / native 97; buckets: poll_wait 88, paint_layout 9, harness_diagnostics 5, subprocess_pipe_io 1
  - top self: `poll [libc.so.6]` 68; `[libxul.so]` 21; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 2; `mprotect [libc.so.6]` 2; `[libgobject-2.0.so.0]` 1; `recvmsg [libc.so.6]` 1
  - WebRender/compositor threads: Renderer 674 ms (top self: `[libxul.so]` 547, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 58, `hypotf@@GLIBC_2.35 [libm.so.6]` 35); WRRenderBackend#0 77 ms (top self: `syscall [libc.so.6]` 51, `[libxul.so]` 21, `sched_yield [libc.so.6]` 2); SwComposite 62 ms (top self: `syscall [libc.so.6]` 53, `__memmove_evex_unaligned_erms [libc.so.6]` 8, `[libxul.so]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 1 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1, `open64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 1, poll_wait 1; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1
- **tab:4294** CPU ms by thread group: main 103, IPC I/O 14, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 103 ms (5.1% of span): Idle 64, Graphics 15, Other 11, GC / CC 4, JavaScript 4, Layout 3
  - JS leaf 0 / native under JS 4 / native 100; buckets: poll_wait 67, paint_layout 17, gc_cc 4, harness_diagnostics 3, webrender_render 0, mozafterpaint_events 0
  - top self: `poll [libc.so.6]` 65; `[libxul.so]` 28; `[]` 2; `sendmsg [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `read [libc.so.6]` 1
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3
  - GC/CC markers: GCMajor 1× 9 ms, CCSlice 1× 2 ms, GCSlice 4× 2 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4215** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4380** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko / key

- **parent** CPU ms by thread group: main 188, Renderer 40, WRRenderBackend 19, Compositor 18, WRSceneBuilder 14, IPC I/O 8, SwComposite 6, other 2, Socket 1, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, DOM Worker 0, ImageBridge 0
  - main thread 188 ms (5.0% of span): Idle 45, Layout 34, GC / CC 27, JavaScript 26, Graphics 24, Other 18
  - JS leaf 2 / native under JS 30 / native 156; buckets: poll_wait 63, paint_layout 51, gc_cc 27, memcpy_memset 8, harness_diagnostics 4, array_buffer_copy 2, mozafterpaint_events 1, subprocess_pipe_io 1
  - top self: `[libxul.so]` 107; `poll [libc.so.6]` 45; `[axiosozo-dev]` 4; `__memset_evex_unaligned_erms [libc.so.6]` 3; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 3; `mprotect [libc.so.6]` 3
  - GC/CC markers: GCMajor 1× 69 ms, GCSlice 5× 20 ms, CCSlice 1× 6 ms, GCMinor 1× 1 ms
  - WebRender/compositor threads: Renderer 40 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 21, `[libxul.so]` 12, `syscall [libc.so.6]` 4); WRRenderBackend#0 19 ms (top self: `syscall [libc.so.6]` 16, `[libxul.so]` 3, `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0); WRSceneBuilder#0 13 ms (top self: `syscall [libc.so.6]` 11, `sched_yield [libc.so.6]` 1, `[libxul.so]` 1)
  - background pools (native receiver queue): BgIOThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BackgroundThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:4294** CPU ms by thread group: main 53, IPC I/O 6, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 53 ms (1.4% of span): Idle 24, Other 10, Layout 6, Graphics 5, JavaScript 5, DOM 3
  - JS leaf 1 / native under JS 7 / native 45; buckets: poll_wait 25, paint_layout 9, harness_diagnostics 2, webrender_render 0
  - top self: `poll [libc.so.6]` 25; `[libxul.so]` 19; `sendmsg [libc.so.6]` 4; `[]` 1; `handleEvent (moz-src:///toolkit/actors/FindBarChild.sys.mjs:` 1; `write [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4139** CPU ms by thread group: main 6, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 6 ms (0.2% of span): Idle 5, JavaScript 1, Other 0
  - JS leaf 0 / native under JS 0 / native 5; buckets: poll_wait 5
  - top self: `poll [libc.so.6]` 5; `[libxul.so]` 1
  - top JS (total): `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[7]` 0; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 0; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[7` 0; `applySafeWithoutClone (resource://gre/modules/ExtensionCommon.sys.mjs:` 0; `applySafeWithoutClone/< (resource://gre/modules/ExtensionCommon.sys.mj` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4233** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

