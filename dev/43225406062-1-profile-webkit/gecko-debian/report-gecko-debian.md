# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

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

