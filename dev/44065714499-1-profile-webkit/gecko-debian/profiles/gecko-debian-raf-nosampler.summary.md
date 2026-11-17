### gecko-debian raf-nosampler (profile pass)

**parent pid 8175** — 529 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 309 | 10.2 | Graphics 208, Idle 99, Other 2 | 0 / 0 / 309 | webrender_render 208, poll_wait 97, memcpy_memset 4 |
| WRRenderBackend#0 | 58 | 1.9 | Other 58 | 0 / 0 / 58 | memcpy_memset 1, poll_wait 1 |
| GeckoMain | 47 | 1.6 | GC / CC 31, Idle 11, JavaScript 2, Other 2 | 0 / 3 / 45 | gc_cc 31, poll_wait 12, harness_diagnostics 3, memcpy_memset 1 |
| WRSceneBuilder#0 | 42 | 1.4 | Other 42 | 0 / 0 / 42 | poll_wait 0, memcpy_memset 0 |
| Compositor | 42 | 1.4 | Idle 40, Other 2, Profiler 0 | 0 / 0 / 42 | poll_wait 40, webrender_render 1, paint_layout 0, memcpy_memset 0 |
| SwComposite | 12 | 0.4 | Other 12 | 0 / 0 / 12 | memcpy_memset 0 |
| IPC I/O Parent | 10 | 0.3 | Idle 10, Other 0 | 0 / 0 / 10 | poll_wait 0 |
| WRSceneBuilderLP#0 | 6 | 0.2 | Other 6 | 0 / 0 / 6 |  |

Main thread, top self: `[libxul.so]` 31; `__syscall_cancel_arch [libc.so.6]` 12; `[axiosozo-dev]` 1; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `PR_Lock [libnspr4.so]` 1; `mprotect [libc.so.6]` 1; `g_type_check_instance_is_a [libgobject-2.0.so.0]` 0; `g_source_get_name [libglib-2.0.so.0]` 0

**tab pid 8427** — 152 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 136 | 4.5 | Idle 95, Graphics 16, Layout 10, Other 7 | 0 / 3 / 133 | poll_wait 94, paint_layout 24, memcpy_memset 2, webrender_render 0 |
| IPC I/O Child | 15 | 0.5 | Idle 15, Other 0 | 0 / 0 / 15 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 99; `[libxul.so]` 26; `[]` 5; `__memmove_avx_unaligned_erms [libc.so.6]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 1; `[linux-vdso.so.1]` 1; `getcontext [libc.so.6]` 1

**tab pid 8429** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0

**tab pid 8513** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0

