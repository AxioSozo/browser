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

## gecko-2x (PASS)

CPU: Intel(R) Xeon(R) 6975P-C; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | idle | 59.0 | 17.3 | **5.0** (main 2.0, Renderer 1.5, IPDL Background 0.5, TaskCon~ller # 0.5, DOM Worker 0.5) | Web Content 2.0, Isolated Web Co 1.0, Privileged Cont 0.5 | — | — |
| plain | raf | 59.0 | 17.2 | **27.6** (Renderer 15.5, SwComposite 2.6, main 2.0, WRRende~ckend# 2.0, TaskCon~ller # 1.6) | Isolated Web Co 3.9, WebExtensions 0.3, Web Content 0.3 | — | — |
| plain | raf-nosampler | — | — | **18.0** (Renderer 9.0, SwComposite 2.0, main 1.0, glean.dispatche 1.0, TaskCon~ller # 1.0) | Isolated Web Co 3.6, WebExtensions 0.3 | — | — |
| plain | scroll | 59.0 | 17.2 | **62.3** (Renderer 46.3, SwComposite 6.0, main 3.5, WRRende~ckend# 3.0, glean.dispatche 1.0) | Isolated Web Co 3.5, Privileged Cont 0.5 | — | — |
| plain | key | — | — | **8.2** (main 4.0, Renderer 1.3, Compositor 0.5, glean.dispatche 0.3, IPC I/O Parent 0.3) | Isolated Web Co 1.6, WebExtensions 0.3 | 10.0 | — |
| trace | idle | 59.0 | 17.2 | **5.5** (main 2.0, TaskCon~ller # 1.0, Renderer 1.0, glean.dispatche 0.5, Softwar~cThread 0.5) | Isolated Web Co 0.5 | — | — |
| trace | raf | 59.0 | 17.2 | **15.1** (Renderer 6.3, SwComposite 2.0, main 1.6, WRRende~ckend# 1.6, WRScene~ilder# 1.3) | Isolated Web Co 2.9 | — | — |
| trace | raf-nosampler | — | — | **13.9** (Renderer 7.3, SwComposite 1.3, glean.dispatche 1.0, WRRende~ckend# 1.0, Compositor 1.0) | Isolated Web Co 3.7 | — | — |
| trace | scroll | 59.0 | 17.1 | **64.8** (Renderer 46.3, SwComposite 5.5, main 5.0, WRRende~ckend# 2.5, TaskCon~ller # 1.5) | Isolated Web Co 2.5 | — | — |
| trace | key | — | — | **50.4** (DOM Worker 14.0, main 13.4, Indexed~ IO # 9.4, IPDL Background 4.8, TaskCon~ller # 2.4) | Isolated Web Co 1.6 | 8.0 | — |
| profile | idle | 59.5 | 17.1 | **7.5** (SamplerThread 2.5, main 2.0, DOM Worker 1.5, TaskCon~ller # 1.0, IPDL Background 0.5) | Web Content 4.9, Isolated Web Co 2.5, Privileged Cont 1.5, WebExtensions 1.0 | — | — |
| profile | raf | 59.0 | 17.1 | **22.3** (Renderer 7.9, SamplerThread 3.6, SwComposite 2.0, main 1.6, WRRende~ckend# 1.6) | Isolated Web Co 6.5, Web Content 4.9, WebExtensions 1.0, RDD Process 1.0 | — | — |
| profile | raf-nosampler | — | — | **19.0** (Renderer 8.3, SamplerThread 3.7, WRRende~ckend# 1.7, Compositor 1.3, SwComposite 1.3) | Isolated Web Co 7.0, Web Content 4.7, WebExtensions 1.0, Privileged Cont 1.0 | — | — |
| profile | scroll | 59.0 | 17.1 | **73.7** (Renderer 48.2, SwComposite 6.0, SamplerThread 6.0, main 5.5, WRRende~ckend# 2.5) | Isolated Web Co 6.5, Web Content 5.0, Socket Process 1.0, WebExtensions 1.0 | — | — |
| profile | key | — | — | **11.4** (main 4.6, SamplerThread 2.7, Renderer 1.1, TaskCon~ller # 0.5, WRRende~ckend# 0.5) | Web Content 4.8, Isolated Web Co 2.5, WebExtensions 1.4, Privileged Cont 1.1 | 10.0 | — |

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

- **parent** CPU ms by thread group: main 38, DOM Worker 17, IPC I/O 1, Socket 1, other 0, BgPool 0, Renderer 0, WRWorker 0, WRSceneBuilder 0, WRRenderBackend 0, Compositor 0, Canvas 0, ImageIO 0, ImageBridge 0, SwComposite 0
  - main thread 38 ms (1.8% of span): GC / CC 25, Idle 6, JavaScript 5, Other 2, Profiler 1
  - JS leaf 0 / native under JS 5 / native 33; buckets: gc_cc 25, poll_wait 8, harness_diagnostics 3, subprocess_pipe_io 1, json_metadata 1
  - top self: `[libxul.so]` 28; `poll [libc.so.6]` 6; `recvmsg [libc.so.6]` 2; `write [libc.so.6]` 1; `[axiosozo-dev]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
  - GC/CC markers: GCMajor 1× 69 ms, GCSlice 5× 20 ms, CCSlice 1× 4 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); WRWorker#3 0 ms (top self: `syscall [libc.so.6]` 0); WRSceneBuilder#0 0 ms (top self: `syscall [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 14 ms: buckets memcpy_memset 5, poll_wait 1, gc_cc 1, worker_messaging 1; top self: `[libxul.so]` 7; `madvise [libc.so.6]` 3; `munmap [libc.so.6]` 2; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `[axiosozo-dev]` 1
- **tab:4150** CPU ms by thread group: main 17, IPC I/O 4, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 17 ms (0.8% of span): Idle 13, JavaScript 3, Profiler 0, Other 0, Layout 0
  - JS leaf 0 / native under JS 3 / native 14; buckets: poll_wait 13, harness_diagnostics 3, memcpy_memset 0
  - top self: `poll [libc.so.6]` 13; `[libxul.so]` 4; `[]` 0; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 0; `__memset_avx512_unaligned_erms [libc.so.6]` 0; `PR_Now [libnspr4.so]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3; `sandbox.create (chrome://remote/content/marionette/evaluate.sys.mjs:24` 1; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 1; `cloneJSON (chrome://remote/content/marionette/json.sys.mjs:121:21)[0]` 1; `cloneObject (chrome://remote/content/marionette/json.sys.mjs:43:21)[0]` 1; `json.clone (chrome://remote/content/marionette/json.sys.mjs:117:23)[0]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4236** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4079** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / raf

- **parent** CPU ms by thread group: Renderer 238, SwComposite 58, main 50, WRRenderBackend 45, WRSceneBuilder 38, Compositor 33, IPC I/O 8, other 1, Socket 1, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, DOM Worker 0, ImageBridge 0
  - main thread 50 ms (1.6% of span): GC / CC 24, Idle 18, JavaScript 5, Layout 1, Graphics 1, Other 1
  - JS leaf 0 / native under JS 3 / native 47; buckets: gc_cc 24, poll_wait 19, paint_layout 2, harness_diagnostics 1, memcpy_memset 0, mozafterpaint_events 0, array_buffer_copy 0
  - top self: `[libxul.so]` 29; `poll [libc.so.6]` 18; `[axiosozo-dev]` 1; `[unknown]` 1; `write [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 0
  - GC/CC markers: GCMajor 1× 53 ms, GCSlice 5× 20 ms, CCSlice 1× 4 ms, GCMinor 1× 0 ms
  - WebRender/compositor threads: Renderer 238 ms (top self: `[libxul.so]` 135, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 84, `__memmove_avx512_unaligned_erms [libc.so.6]` 8); SwComposite 58 ms (top self: `syscall [libc.so.6]` 52, `__memmove_avx512_unaligned_erms [libc.so.6]` 5, `[libxul.so]` 1); WRRenderBackend#0 45 ms (top self: `syscall [libc.so.6]` 40, `[libxul.so]` 4, `sched_yield [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:4150** CPU ms by thread group: main 129, IPC I/O 10, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 129 ms (4.2% of span): Idle 87, Layout 10, Graphics 10, Other 9, Profiler 4, GC / CC 4
  - JS leaf 0 / native under JS 6 / native 122; buckets: poll_wait 87, paint_layout 18, gc_cc 5, harness_diagnostics 3, memcpy_memset 2, mozafterpaint_events 0
  - top self: `poll [libc.so.6]` 87; `[libxul.so]` 31; `[]` 2; `sendmsg [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 13 ms, CCSlice 1× 3 ms, GCSlice 4× 2 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4079** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4037** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / raf-nosampler

- **parent** CPU ms by thread group: Renderer 239, SwComposite 46, WRRenderBackend 41, WRSceneBuilder 34, Compositor 32, main 10, IPC I/O 7, other 1, DOM Worker 1, Socket 0, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 10 ms (0.3% of span): Idle 8, JavaScript 2, Other 0
  - JS leaf 1 / native under JS 1 / native 8; buckets: poll_wait 8, harness_diagnostics 2, mozafterpaint_events 0
  - top self: `poll [libc.so.6]` 8; `[libxul.so]` 1; `sandbox.cloneInto (chrome://remote/content/marionette/evalua` 1; `mprotect [libc.so.6]` 1; `[libX11.so.6]` 0; `recvmsg [libc.so.6]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 2; `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 2; `sandbox.cloneInto (chrome://remote/content/marionette/evaluate.sys.mjs` 1; `evaluate.sandbox (chrome://remote/content/marionette/evaluate.sys.mjs:` 1; `evaluate.sandbox/promise< (chrome://remote/content/marionette/evaluate` 1
  - WebRender/compositor threads: Renderer 239 ms (top self: `[libxul.so]` 133, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 88, `hypotf@@GLIBC_2.35 [libm.so.6]` 5); SwComposite 46 ms (top self: `syscall [libc.so.6]` 42, `__memmove_avx512_unaligned_erms [libc.so.6]` 3, `[libxul.so]` 0); WRRenderBackend#0 41 ms (top self: `syscall [libc.so.6]` 36, `[libxul.so]` 3, `[axiosozo-dev]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 1, poll_wait 1; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `[libxul.so]` 0
- **tab:4150** CPU ms by thread group: main 115, IPC I/O 10, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 115 ms (3.8% of span): Idle 84, Graphics 11, Layout 8, Other 4, Profiler 4, GC / CC 3
  - JS leaf 0 / native under JS 2 / native 113; buckets: poll_wait 85, paint_layout 16, gc_cc 3, memcpy_memset 1, webrender_render 1, mozafterpaint_events 0
  - top self: `poll [libc.so.6]` 84; `[libxul.so]` 23; `[]` 2; `sendmsg [libc.so.6]` 1; `__strlen_evex [libc.so.6]` 1; `[linux-vdso.so.1]` 1
  - GC/CC markers: GCMajor 1× 18 ms, GCSlice 4× 2 ms, CCSlice 1× 1 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4079** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4060** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / scroll

- **parent** CPU ms by thread group: Renderer 950, SwComposite 115, main 102, WRRenderBackend 55, Compositor 25, WRSceneBuilder 17, IPC I/O 5, other 1, DOM Worker 1, Socket 1, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 102 ms (5.1% of span): Idle 55, GC / CC 28, Other 7, Layout 3, Graphics 3, DOM 3
  - JS leaf 1 / native under JS 3 / native 98; buckets: poll_wait 67, gc_cc 28, paint_layout 4, harness_diagnostics 4, memcpy_memset 1, subprocess_pipe_io 0
  - top self: `poll [libc.so.6]` 55; `[libxul.so]` 37; `g_type_check_instance_is_a [libgobject-2.0.so.0]` 1; `[axiosozo-dev]` 1; `dispatch (chrome://remote/content/marionette/server.sys.mjs:` 1; `[unknown]` 1
  - GC/CC markers: GCMajor 1× 89 ms, GCSlice 8× 24 ms, CCSlice 1× 7 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 950 ms (top self: `[libxul.so]` 822, `__futex_abstimed_wait_cancelable64 [libc.so.6]` 60, `hypotf@@GLIBC_2.35 [libm.so.6]` 38); SwComposite 115 ms (top self: `syscall [libc.so.6]` 104, `__memmove_avx512_unaligned_erms [libc.so.6]` 11, `[libxul.so]` 1); WRRenderBackend#0 55 ms (top self: `syscall [libc.so.6]` 44, `[libxul.so]` 8, `__memmove_avx512_unaligned_erms [libc.so.6]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); BgIOThreadPool #2 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 1, poll_wait 1; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `[libxul.so]` 0
- **tab:4150** CPU ms by thread group: main 78, IPC I/O 10, other 1, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 78 ms (3.9% of span): Idle 55, GC / CC 6, Graphics 5, Other 5, JavaScript 4, Layout 1
  - JS leaf 0 / native under JS 4 / native 74; buckets: poll_wait 56, gc_cc 6, paint_layout 6, harness_diagnostics 3, memcpy_memset 0, mozafterpaint_events 0, webrender_render 0
  - top self: `poll [libc.so.6]` 55; `[libxul.so]` 20; `[libglib-2.0.so.0]` 1; `pthread_mutex_unlock@@GLIBC_2.2.5 [libc.so.6]` 0; `__lll_lock_wake [libc.so.6]` 0; `read [libc.so.6]` 0
  - top JS (total): `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 3
  - GC/CC markers: GCMajor 1× 17 ms, CCSlice 1× 3 ms, GCSlice 6× 3 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4060** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4037** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `poll [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

### Profile: gecko-2x / key

- **parent** CPU ms by thread group: main 166, Renderer 42, Compositor 16, WRRenderBackend 15, SwComposite 13, WRSceneBuilder 11, IPC I/O 6, other 2, Socket 1, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, DOM Worker 0, ImageBridge 0
  - main thread 166 ms (4.4% of span): Idle 38, Layout 30, GC / CC 27, Other 24, JavaScript 21, Graphics 16
  - JS leaf 3 / native under JS 24 / native 140; buckets: poll_wait 52, paint_layout 38, gc_cc 27, harness_diagnostics 5, memcpy_memset 2, mozafterpaint_events 0, subprocess_pipe_io 0
  - top self: `[libxul.so]` 101; `poll [libc.so.6]` 39; `mprotect [libc.so.6]` 4; `[unknown]` 3; `[axiosozo-dev]` 3; `XkbKeysymToModifiers [libX11.so.6]` 2
  - GC/CC markers: GCMajor 1× 72 ms, GCSlice 6× 23 ms, CCSlice 1× 4 ms, GCMinor 1× 1 ms
  - WebRender/compositor threads: Renderer 42 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 23, `[libxul.so]` 10, `__memmove_avx512_unaligned_erms [libc.so.6]` 8); WRRenderBackend#0 15 ms (top self: `syscall [libc.so.6]` 13, `[libxul.so]` 2, `__memmove_avx512_unaligned_erms [libc.so.6]` 0); SwComposite 13 ms (top self: `syscall [libc.so.6]` 9, `__memmove_avx512_unaligned_erms [libc.so.6]` 4)
  - background pools (native receiver queue): BgIOThreadPool #2 1 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0, `open64 [libc.so.6]` 0); BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0
- **tab:4150** CPU ms by thread group: main 48, IPC I/O 5, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 48 ms (1.3% of span): Idle 23, Other 7, Layout 7, Graphics 4, Profiler 3, JavaScript 3
  - JS leaf 0 / native under JS 3 / native 45; buckets: poll_wait 23, paint_layout 6, harness_diagnostics 2, memcpy_memset 0
  - top self: `poll [libc.so.6]` 23; `[libxul.so]` 19; `sendmsg [libc.so.6]` 3; `[]` 2; `__lll_lock_wake [libc.so.6]` 1; `__memmove_avx512_unaligned_erms [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:3981** CPU ms by thread group: main 6, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 6 ms (0.2% of span): Idle 5, JavaScript 1, DOM 0, Profiler 0
  - JS leaf 0 / native under JS 0 / native 6; buckets: poll_wait 5, array_buffer_copy 0
  - top self: `poll [libc.so.6]` 5; `[libxul.so]` 1; `[unknown]` 0
  - top JS (total): `_recv (resource://gre/modules/ConduitsChild.sys.mjs:84:14)[5]` 0; `receiveMessage (resource://gre/modules/ConduitsChild.sys.mjs:192:17)[5` 0; `recvRunListener (resource://gre/modules/ExtensionChild.sys.mjs:860:18)` 0; `get (resource://gre/modules/ExtensionCommon.sys.mjs:598:12)[2]` 0
  - GC/CC markers: GCMinor 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)
- **tab:4037** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Other 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `poll [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__futex_abstimed_wait_cancelable64 [libc.so.6]` 0)

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

## gecko-debian (PASS)

CPU: AMD EPYC 7763 64-Core Processor; passes: plain PASS, trace PASS, profile PASS

| pass | window | fps | p99 ms | Zen parent CPU % (top threads) | other processes CPU % | key→frame ms | switch ms |
| --- | --- | ---: | ---: | --- | --- | ---: | ---: |
| plain | idle | 59.2 | 17.2 | **11.8** (main 4.9, TaskCon~ller # 2.9, DOM Worker 1.5, Compositor 1.0, glean.dispatche 0.5) | Web Content 4.4, Isolated Web Co 0.5 | — | — |
| plain | raf | 59.0 | 17.1 | **23.8** (Renderer 14.7, WRRende~ckend# 2.3, WRScene~ilder# 1.6, glean.dispatche 1.3, main 1.0) | Isolated Web Co 3.9, Privileged Cont 0.6, WebExtensions 0.3, Web Content 0.3 | — | — |
| plain | raf-nosampler | — | — | **17.7** (Renderer 9.3, glean.dispatche 1.7, WRRende~ckend# 1.7, main 1.0, WRScene~ilder# 1.0) | Isolated Web Co 3.3, WebExtensions 0.6, Web Content 0.6 | — | — |
| plain | scroll | 59.0 | 17.1 | **45.8** (Renderer 28.0, main 5.9, WRRende~ckend# 3.4, glean.dispatche 1.5, Compositor 1.5) | Isolated Web Co 3.9 | — | — |
| plain | key | — | — | **8.8** (main 4.3, Renderer 1.1, TaskCon~ller # 0.8, glean.dispatche 0.5, WRScene~ilder# 0.5) | Isolated Web Co 1.9, WebExtensions 0.3, Privileged Cont 0.3 | 9.5 | — |
| trace | idle | 59.1 | 17.1 | **2.5** (main 0.5, glean.dispatche 0.5, Timer 0.5, WRScene~ilder# 0.5, SwComposite 0.5) | Isolated Web Co 1.0 | — | — |
| trace | raf | 59.0 | 17.1 | **18.7** (Renderer 9.2, WRRende~ckend# 2.0, main 1.6, glean.dispatche 1.6, Compositor 1.3) | Isolated Web Co 3.9 | — | — |
| trace | raf-nosampler | — | — | **18.8** (Renderer 9.6, WRRende~ckend# 2.3, main 1.3, glean.dispatche 1.3, WRScene~ilder# 1.3) | Isolated Web Co 5.0 | — | — |
| trace | scroll | 59.0 | 17.1 | **43.2** (Renderer 28.2, main 4.5, WRRende~ckend# 3.0, glean.dispatche 1.5, Compositor 1.5) | Isolated Web Co 4.5 | — | — |
| trace | key | — | — | **69.0** (main 19.0, DOM Worker 17.1, IndexedDB IO # 15.8, IPDL Background 6.4, TaskCon~ller # 2.7) | Isolated Web Co 2.1, Utility Process 0.3 | 9.5 | — |
| profile | idle | 59.5 | 17.1 | **5.4** (SamplerThread 4.4, main 0.5, Softwar~cThread 0.5) | Web Content 8.7, Isolated Web Co 3.8, Socket Process 1.9, WebExtensions 1.9 | — | — |
| profile | raf | 59.0 | 17.1 | **29.4** (Renderer 10.4, SamplerThread 5.9, main 2.3, WRRende~ckend# 2.3, Compositor 2.0) | Isolated Web Co 8.8, Web Content 8.5, WebExtensions 1.6, Privileged Cont 1.6 | — | — |
| profile | raf-nosampler | — | — | **28.0** (Renderer 10.9, SamplerThread 5.6, WRRende~ckend# 2.3, Compositor 2.0, main 1.7) | Web Content 8.6, Isolated Web Co 8.3, WebExtensions 2.0, Socket Process 1.3 | — | — |
| profile | scroll | 59.0 | 17.2 | **55.5** (Renderer 31.4, SamplerThread 7.3, main 5.9, WRRende~ckend# 3.4, Compositor 2.0) | Isolated Web Co 9.8, Web Content 8.3, Socket Process 1.5, WebExtensions 1.5 | — | — |
| profile | key | — | — | **13.8** (main 5.3, SamplerThread 4.3, Renderer 1.1, glean.dispatche 0.5, TaskCon~ller # 0.5) | Web Content 8.8, Isolated Web Co 4.3, Socket Process 1.6, WebExtensions 1.6 | 10.0 | — |

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

- **parent** CPU ms by thread group: main 12, Compositor 2, DOM Worker 1, IPC I/O 1, Socket 1, Renderer 0, other 0, WRSceneBuilder 0, WRRenderBackend 0, SwComposite 0, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 12 ms (0.6% of span): JavaScript 5, Idle 5, DOM 1, Graphics 1, Other 0
  - JS leaf 0 / native under JS 6 / native 5; buckets: poll_wait 5, harness_diagnostics 4, subprocess_pipe_io 1, paint_layout 1
  - top self: `[libxul.so]` 6; `__syscall_cancel_arch [libc.so.6]` 5; `mprotect [libc.so.6]` 0
  - top JS (total): `executeScript (chrome://remote/content/marionette/actors/MarionetteCom` 2; `receiveMessage (chrome://remote/content/marionette/actors/MarionetteCo` 2
  - WebRender/compositor threads: Renderer 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0, `__memmove_avx_unaligned_erms [libc.so.6]` 0); WRSceneBuilder#0 0 ms (top self: `syscall [libc.so.6]` 0, `sched_yield [libc.so.6]` 0); WRRenderBackend#0 0 ms (top self: `syscall [libc.so.6]` 0, `sched_yield [libc.so.6]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 1, poll_wait 1; top self: `[libxul.so]` 1; `__syscall_cancel_arch [libc.so.6]` 1
- **tab:8427** CPU ms by thread group: main 25, IPC I/O 4, other 0, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 25 ms (1.2% of span): Idle 15, GC / CC 4, Other 3, JavaScript 2, Layout 1, Profiler 0
  - JS leaf 0 / native under JS 2 / native 24; buckets: poll_wait 16, gc_cc 4, harness_diagnostics 2, memcpy_memset 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 16; `[libxul.so]` 8; `__tls_get_addr [ld-linux-x86-64.so.2]` 1; `__memmove_avx_unaligned_erms [libc.so.6]` 0; `[unknown]` 0; `[]` 0
  - GC/CC markers: GCMajor 1× 20 ms, GCSlice 4× 3 ms, CCSlice 1× 3 ms, GCMinor 1× 0 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8342** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Profiler 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8320** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / raf

- **parent** CPU ms by thread group: Renderer 306, main 69, WRRenderBackend 60, WRSceneBuilder 50, Compositor 42, SwComposite 17, IPC I/O 10, DOM Worker 4, other 2, Socket 1, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 69 ms (2.2% of span): GC / CC 31, Idle 19, Other 8, JavaScript 4, Graphics 3, Layout 2
  - JS leaf 0 / native under JS 4 / native 64; buckets: gc_cc 31, poll_wait 24, paint_layout 4, harness_diagnostics 3, memcpy_memset 1
  - top self: `[libxul.so]` 41; `__syscall_cancel_arch [libc.so.6]` 22; `[axiosozo-dev]` 2; `[libgobject-2.0.so.0]` 1; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 1; `[libgdk-3.so.0]` 1
  - GC/CC markers: GCMajor 1× 59 ms, GCSlice 6× 26 ms, CCSlice 1× 7 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 306 ms (top self: `[libxul.so]` 179, `__syscall_cancel_arch [libc.so.6]` 93, `hypotf@@GLIBC_2.35 [libm.so.6]` 14); WRRenderBackend#0 59 ms (top self: `syscall [libc.so.6]` 49, `sched_yield [libc.so.6]` 5, `[libxul.so]` 4); WRSceneBuilder#0 44 ms (top self: `syscall [libc.so.6]` 42, `sched_yield [libc.so.6]` 1, `[libxul.so]` 1)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 3 ms: buckets memcpy_memset 1, worker_messaging 0, poll_wait 0; top self: `[libxul.so]` 1; `getrusage [libc.so.6]` 1; `madvise [libc.so.6]` 1; `__syscall_cancel_arch [libc.so.6]` 0
- **tab:8427** CPU ms by thread group: main 148, IPC I/O 16, other 2, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 148 ms (4.8% of span): Idle 91, Graphics 22, Other 13, Layout 10, Profiler 7, JavaScript 3
  - JS leaf 0 / native under JS 5 / native 142; buckets: poll_wait 92, paint_layout 32, memcpy_memset 2, harness_diagnostics 2, webrender_render 0, gc_cc 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 97; `[libxul.so]` 36; `[]` 4; `[linux-vdso.so.1]` 2; `syscall [libc.so.6]` 2; `__lll_lock_wait [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8342** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8516** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1, Profiler 0
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / raf-nosampler

- **parent** CPU ms by thread group: Renderer 309, WRRenderBackend 58, WRSceneBuilder 48, main 48, Compositor 42, SwComposite 12, IPC I/O 10, other 2, DOM Worker 1, Socket 0, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 47 ms (1.6% of span): GC / CC 31, Idle 11, JavaScript 2, Other 2, Profiler 1, DOM 1
  - JS leaf 0 / native under JS 3 / native 45; buckets: gc_cc 31, poll_wait 12, harness_diagnostics 3, memcpy_memset 1
  - top self: `[libxul.so]` 31; `__syscall_cancel_arch [libc.so.6]` 12; `[axiosozo-dev]` 1; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `PR_Lock [libnspr4.so]` 1; `mprotect [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 59 ms, GCSlice 6× 26 ms, CCSlice 1× 5 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - WebRender/compositor threads: Renderer 309 ms (top self: `[libxul.so]` 190, `__syscall_cancel_arch [libc.so.6]` 102, `hypotf@@GLIBC_2.35 [libm.so.6]` 9); WRRenderBackend#0 58 ms (top self: `syscall [libc.so.6]` 46, `[libxul.so]` 5, `sched_yield [libc.so.6]` 5); WRSceneBuilder#0 42 ms (top self: `syscall [libc.so.6]` 40, `sched_yield [libc.so.6]` 1, `[libxul.so]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets worker_messaging 1, poll_wait 1; top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0
- **tab:8427** CPU ms by thread group: main 136, IPC I/O 15, other 1, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 136 ms (4.5% of span): Idle 95, Graphics 16, Layout 10, Other 7, Profiler 6, JavaScript 1
  - JS leaf 0 / native under JS 3 / native 133; buckets: poll_wait 94, paint_layout 24, memcpy_memset 2, webrender_render 0, gc_cc 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 99; `[libxul.so]` 26; `[]` 5; `__memmove_avx_unaligned_erms [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8429** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8513** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0, Other 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / scroll

- **parent** CPU ms by thread group: Renderer 630, main 101, WRRenderBackend 70, SwComposite 34, Compositor 30, WRSceneBuilder 23, IPC I/O 9, BgPool 1, Socket 1, other 1, DOM Worker 1, WRWorker 0, Canvas 0, ImageIO 0, ImageBridge 0
  - main thread 101 ms (4.9% of span): Idle 71, JavaScript 8, Other 8, Graphics 7, Layout 5, DOM 1
  - JS leaf 0 / native under JS 9 / native 91; buckets: poll_wait 85, paint_layout 10, harness_diagnostics 7, memcpy_memset 1, subprocess_pipe_io 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 75; `[libxul.so]` 20; `[unknown]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `PresShell::DoFlushPendingNotifications Layout` 1
  - WebRender/compositor threads: Renderer 630 ms (top self: `[libxul.so]` 505, `__syscall_cancel_arch [libc.so.6]` 56, `hypotf@@GLIBC_2.35 [libm.so.6]` 49); WRRenderBackend#0 70 ms (top self: `syscall [libc.so.6]` 50, `[libxul.so]` 16, `sched_yield [libc.so.6]` 2); SwComposite 34 ms (top self: `syscall [libc.so.6]` 31, `__memmove_avx_unaligned_erms [libc.so.6]` 2, `[libxul.so]` 0)
  - background pools (native receiver queue): BgIOThreadPool #1 1 ms (top self: `fstatat64 [libc.so.6]` 1, `rename [libc.so.6]` 0, `__syscall_cancel_arch [libc.so.6]` 0); BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 1 ms: buckets poll_wait 1, worker_messaging 0; top self: `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0; `__syscall_cancel_arch [libc.so.6]` 0
- **tab:8427** CPU ms by thread group: main 100, IPC I/O 15, other 1, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 100 ms (4.9% of span): Idle 63, Graphics 17, GC / CC 8, Other 5, JavaScript 4, Layout 2
  - JS leaf 0 / native under JS 3 / native 97; buckets: poll_wait 63, paint_layout 19, gc_cc 8, harness_diagnostics 2, memcpy_memset 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 64; `[libxul.so]` 32; `__pthread_mutex_unlock_usercnt [libc.so.6]` 2; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `[]` 1; `std::__detail::_Prime_rehash_policy::_M_need_rehash(unsigned` 0
  - GC/CC markers: GCMajor 1× 21 ms, CCSlice 1× 4 ms, GCSlice 4× 4 ms, GCMinor 1× 1 ms, CC 1× 0 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8429** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8516** CPU ms by thread group: main 0, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 0 ms (0.0% of span): Idle 0
  - JS leaf 0 / native under JS 0 / native 0; buckets: poll_wait 0
  - top self: `__syscall_cancel_arch [libc.so.6]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

### Profile: gecko-debian / key

- **parent** CPU ms by thread group: main 196, Renderer 34, WRRenderBackend 18, Compositor 17, WRSceneBuilder 13, IPC I/O 9, SwComposite 4, other 2, Socket 1, BgPool 0, WRWorker 0, Canvas 0, ImageIO 0, DOM Worker 0, ImageBridge 0
  - main thread 196 ms (5.2% of span): Layout 45, Idle 43, GC / CC 29, Graphics 29, Other 23, JavaScript 16
  - JS leaf 4 / native under JS 17 / native 175; buckets: paint_layout 63, poll_wait 59, gc_cc 29, harness_diagnostics 4, memcpy_memset 3, mozafterpaint_events 1, subprocess_pipe_io 1
  - top self: `[libxul.so]` 124; `__syscall_cancel_arch [libc.so.6]` 49; `[axiosozo-dev]` 7; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 2; `[linux-vdso.so.1]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2
  - GC/CC markers: GCMajor 1× 31 ms, GCSlice 7× 23 ms, CCSlice 1× 7 ms, GCMinor 1× 1 ms
  - WebRender/compositor threads: Renderer 34 ms (top self: `__syscall_cancel_arch [libc.so.6]` 19, `[libxul.so]` 11, `syscall [libc.so.6]` 2); WRRenderBackend#0 18 ms (top self: `syscall [libc.so.6]` 14, `[libxul.so]` 3, `sched_yield [libc.so.6]` 1); WRSceneBuilder#0 13 ms (top self: `syscall [libc.so.6]` 12, `sched_yield [libc.so.6]` 0, `[libxul.so]` 0)
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); BgIOThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
  - busiest DOM Worker 0 ms: buckets worker_messaging 0, poll_wait 0; top self: `__syscall_cancel_arch [libc.so.6]` 0
- **tab:8427** CPU ms by thread group: main 64, IPC I/O 6, other 1, BgPool 0, Socket 0, ImageIO 0, ImageBridge 0
  - main thread 64 ms (1.7% of span): Idle 24, Other 13, Layout 8, Graphics 7, GC / CC 6, JavaScript 2
  - JS leaf 0 / native under JS 5 / native 60; buckets: poll_wait 26, paint_layout 11, gc_cc 6, harness_diagnostics 2, memcpy_memset 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 30; `[libxul.so]` 29; `[]` 3; `__tls_get_addr [ld-linux-x86-64.so.2]` 1; `[linux-vdso.so.1]` 1; `__memmove_avx_unaligned_erms [libc.so.6]` 1
  - GC/CC markers: GCMajor 1× 36 ms, CCSlice 1× 3 ms, GCSlice 4× 3 ms, GCMinor 1× 1 ms
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8261** CPU ms by thread group: main 7, IPC I/O 1, other 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 7 ms (0.2% of span): Idle 6, Other 0, JavaScript 0
  - JS leaf 0 / native under JS 0 / native 7; buckets: poll_wait 6
  - top self: `__syscall_cancel_arch [libc.so.6]` 6; `[linux-vdso.so.1]` 0; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 0; `[libxul.so]` 0
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)
- **tab:8361** CPU ms by thread group: main 1, other 0, IPC I/O 0, Socket 0, BgPool 0, ImageIO 0, ImageBridge 0
  - main thread 1 ms (0.0% of span): Idle 1
  - JS leaf 0 / native under JS 0 / native 1; buckets: poll_wait 1
  - top self: `__syscall_cancel_arch [libc.so.6]` 1
  - background pools (native receiver queue): BackgroundThreadPool #1 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0); ImageBridgeChld 0 ms (top self: `__syscall_cancel_arch [libc.so.6]` 0)

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

