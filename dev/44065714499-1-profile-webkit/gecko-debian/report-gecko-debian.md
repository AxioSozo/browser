# Zen parent-process profile report (tools/engine-bench/profile)

Software rendering on GitHub runners (no GPU); TEST-ONLY harness pieces are labelled in each result. Passes: plain = no instrumentation, trace = chrome timing hooks, profile = hooks + Gecko profiler.

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

