### gecko-2x raf-nosampler (profile pass)

**parent pid 2825** — 543 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 299 | 9.9 | Graphics 201, Idle 95, Other 2, Profiler 1 | 0 / 0 / 299 | webrender_render 202, poll_wait 98, memcpy_memset 8 |
| SwComposite | 60 | 2.0 | Other 60 | 0 / 0 / 60 | memcpy_memset 6 |
| WRRenderBackend#0 | 56 | 1.9 | Other 56 | 0 / 0 / 56 | memcpy_memset 0 |
| WRSceneBuilder#0 | 42 | 1.4 | Other 42 | 0 / 0 / 42 | poll_wait 1, memcpy_memset 0 |
| Compositor | 36 | 1.2 | Idle 34, Other 1, Profiler 0 | 0 / 0 / 36 | poll_wait 34, paint_layout 0, memcpy_memset 0, webrender_render 0 |
| GeckoMain | 35 | 1.2 | GC / CC 19, Idle 11, JavaScript 4, Graphics 0 | 0 / 4 / 31 | gc_cc 20, poll_wait 12, harness_diagnostics 4, paint_layout 0 |
| IPC I/O Parent | 8 | 0.3 | Idle 8, Other 0 | 0 / 0 / 8 | poll_wait 0 |
| WRSceneBuilderLP#0 | 5 | 0.2 | Other 5 | 0 / 0 / 5 |  |

Main thread, top self: `[libxul.so]` 22; `poll [libc.so.6]` 11; `mprotect [libc.so.6]` 1; `__futex_abstimed_wait_cancelable64 [libc.so.6]` 1; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0; `[linux-vdso.so.1]` 0; `sendmsg [libc.so.6]` 0; `recvmsg [libc.so.6]` 0

**tab pid 3088** — 157 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 143 | 4.7 | Idle 93, Graphics 19, Layout 14, Other 9 | 0 / 4 / 139 | poll_wait 95, paint_layout 28, memcpy_memset 2, webrender_render 1 |
| IPC I/O Child | 13 | 0.4 | Idle 13, Other 0 | 0 / 0 / 13 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 93; `[libxul.so]` 36; `sendmsg [libc.so.6]` 3; `write [libc.so.6]` 2; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `[]` 1; `[libglib-2.0.so.0]` 1; `__memcmp_evex_movbe [libc.so.6]` 1

**tab pid 2998** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

**tab pid 3165** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0

