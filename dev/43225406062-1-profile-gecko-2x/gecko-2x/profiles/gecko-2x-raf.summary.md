### gecko-2x raf (profile pass)

**parent pid 2825** — 494 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 211 | 6.8 | Graphics 121, Idle 88, Profiler 1, Other 0 | 0 / 0 / 211 | webrender_render 122, poll_wait 89, memcpy_memset 14 |
| SwComposite | 70 | 2.3 | Other 70 | 0 / 0 / 70 | memcpy_memset 9 |
| GeckoMain | 58 | 1.9 | GC / CC 27, Idle 19, Other 7, Layout 2 | 0 / 2 / 56 | gc_cc 27, poll_wait 25, paint_layout 2, harness_diagnostics 1 |
| WRRenderBackend#0 | 57 | 1.8 | Other 57 | 0 / 0 / 57 | poll_wait 0, memcpy_memset 0 |
| WRSceneBuilder#0 | 41 | 1.3 | Other 41 | 0 / 0 / 41 | memcpy_memset 1, poll_wait 0 |
| Compositor | 35 | 1.1 | Idle 34, Other 1, Profiler 0 | 0 / 0 / 35 | poll_wait 34, paint_layout 1, webrender_render 0 |
| IPC I/O Parent | 8 | 0.3 | Idle 8, Other 0 | 0 / 0 / 8 | poll_wait 0 |
| WRSceneBuilderLP#0 | 5 | 0.2 | Other 5 | 0 / 0 / 5 |  |

Main thread, top self: `[libxul.so]` 29; `poll [libc.so.6]` 18; `pthread_cond_broadcast@@GLIBC_2.3.2 [libc.so.6]` 3; `write [libc.so.6]` 3; `[linux-vdso.so.1]` 1; `recvmsg [libc.so.6]` 1; `read [libc.so.6]` 1; `pthread_rwlock_rdlock@GLIBC_2.2.5 [libc.so.6]` 1

**tab pid 3088** — 153 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 139 | 4.5 | Idle 96, Graphics 14, Layout 14, Other 8 | 0 / 4 / 135 | poll_wait 97, paint_layout 22, harness_diagnostics 1, memcpy_memset 1 |
| IPC I/O Child | 13 | 0.4 | Idle 13, Other 0, Profiler 0 | 0 / 0 / 13 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 95; `[libxul.so]` 32; `[]` 4; `write [libc.so.6]` 1; `[linux-vdso.so.1]` 1; `sendmsg [libc.so.6]` 1; `__memset_avx512_unaligned_erms [libc.so.6]` 1; `[libglib-2.0.so.0]` 1

**tab pid 3111** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1

**tab pid 2998** — 1 ms CPU in the window

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

