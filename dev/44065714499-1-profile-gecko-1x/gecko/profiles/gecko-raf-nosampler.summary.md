### gecko raf-nosampler (profile pass)

**parent pid 4049** — 593 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 362 | 12.0 | Graphics 273, Idle 88, Profiler 1 | 0 / 0 / 362 | webrender_render 274, poll_wait 91, memcpy_memset 10 |
| WRRenderBackend#0 | 69 | 2.3 | Other 69 | 0 / 0 / 69 | poll_wait 0, memcpy_memset 0 |
| WRSceneBuilder#0 | 48 | 1.6 | Other 47, Profiler 0 | 0 / 0 / 48 | poll_wait 1, memcpy_memset 0, gc_cc 0 |
| Compositor | 45 | 1.5 | Idle 44, Other 1, Profiler 0 | 0 / 0 / 45 | poll_wait 44, paint_layout 1, webrender_render 0, memcpy_memset 0 |
| GeckoMain | 34 | 1.1 | GC / CC 18, Idle 12, JavaScript 4, Profiler 1 | 0 / 4 / 31 | gc_cc 18, poll_wait 13, harness_diagnostics 4, memcpy_memset 1 |
| SwComposite | 18 | 0.6 | Other 18 | 0 / 0 / 18 | memcpy_memset 0 |
| IPC I/O Parent | 9 | 0.3 | Idle 9, Other 0 | 0 / 0 / 9 |  |
| WRSceneBuilderLP#0 | 5 | 0.2 | Other 5 | 0 / 0 / 5 |  |

Main thread, top self: `[libxul.so]` 19; `poll [libc.so.6]` 12; `mprotect [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `moz_arena_realloc [axiosozo-dev]` 1; `__lll_lock_wake [libc.so.6]` 1; `[linux-vdso.so.1]` 0; `g_object_ref [libgobject-2.0.so.0]` 0

**tab pid 4294** — 183 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 167 | 5.5 | Idle 97, Graphics 29, Layout 22, Profiler 8 | 0 / 7 / 160 | poll_wait 98, paint_layout 37, memcpy_memset 4, gc_cc 1 |
| IPC I/O Child | 15 | 0.5 | Idle 15, Other 0 | 0 / 0 / 15 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 98; `[libxul.so]` 52; `[]` 5; `__memmove_evex_unaligned_erms [libc.so.6]` 2; `__lll_lock_wait [libc.so.6]` 2; `sendmsg [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `__memset_evex_unaligned_erms [libc.so.6]` 2

**tab pid 4215** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1

**tab pid 4380** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0; `read [libc.so.6]` 0

