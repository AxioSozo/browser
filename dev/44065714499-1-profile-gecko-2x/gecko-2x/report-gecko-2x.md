# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

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

