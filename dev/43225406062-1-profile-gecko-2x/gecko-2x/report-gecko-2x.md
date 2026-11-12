# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

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

