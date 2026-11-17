### gecko-debian raf (profile pass)

**parent pid 8175** — 560 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 306 | 9.9 | Graphics 213, Idle 91, Other 1, Profiler 1 | 0 / 0 / 306 | webrender_render 214, poll_wait 94, memcpy_memset 5 |
| GeckoMain | 69 | 2.2 | GC / CC 31, Idle 19, Other 8, JavaScript 4 | 0 / 4 / 64 | gc_cc 31, poll_wait 24, paint_layout 4, harness_diagnostics 3 |
| WRRenderBackend#0 | 59 | 1.9 | Other 59 | 0 / 0 / 59 | poll_wait 1 |
| WRSceneBuilder#0 | 44 | 1.4 | Other 44 | 0 / 0 / 44 | memcpy_memset 0 |
| Compositor | 42 | 1.4 | Idle 41, Other 1, Profiler 0 | 0 / 0 / 42 | poll_wait 41, paint_layout 1, webrender_render 0, memcpy_memset 0 |
| SwComposite | 17 | 0.6 | Other 17 | 0 / 0 / 17 | memcpy_memset 1 |
| IPC I/O Parent | 10 | 0.3 | Idle 10, Other 0 | 0 / 0 / 10 | poll_wait 0 |
| WRSceneBuilderLP#0 | 6 | 0.2 | Other 6 | 0 / 0 / 6 |  |

Main thread, top self: `[libxul.so]` 41; `__syscall_cancel_arch [libc.so.6]` 22; `[axiosozo-dev]` 2; `[libgobject-2.0.so.0]` 1; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 1; `[libgdk-3.so.0]` 1; `__strlen_avx2 [libc.so.6]` 1; `syscall [libc.so.6]` 0

**tab pid 8427** — 165 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 148 | 4.8 | Idle 91, Graphics 22, Other 13, Layout 10 | 0 / 5 / 142 | poll_wait 92, paint_layout 32, memcpy_memset 2, harness_diagnostics 2 |
| IPC I/O Child | 16 | 0.5 | Idle 16, Other 0 | 0 / 0 / 16 | memcpy_memset 0 |
| Timer | 2 | 0.1 | Other 2 | 0 / 0 / 2 | poll_wait 2 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 97; `[libxul.so]` 36; `[]` 4; `[linux-vdso.so.1]` 2; `syscall [libc.so.6]` 2; `__lll_lock_wait [libc.so.6]` 1; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `madvise [libc.so.6]` 1

**tab pid 8342** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

**tab pid 8516** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Profiler 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `[libxul.so]` 0

