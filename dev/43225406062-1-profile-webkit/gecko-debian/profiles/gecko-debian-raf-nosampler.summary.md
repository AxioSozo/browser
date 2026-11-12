### gecko-debian raf-nosampler (profile pass)

**parent pid 8188** — 582 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 349 | 11.6 | Graphics 256, Idle 91, Profiler 1, Other 1 | 0 / 0 / 349 | webrender_render 257, poll_wait 92, memcpy_memset 13 |
| WRRenderBackend#0 | 76 | 2.5 | Other 76 | 0 / 0 / 76 | poll_wait 1, memcpy_memset 1 |
| WRSceneBuilder#0 | 56 | 1.8 | Other 56 | 0 / 0 / 56 | poll_wait 1, memcpy_memset 0 |
| Compositor | 50 | 1.6 | Idle 48, Other 2, Profiler 0 | 0 / 0 / 50 | poll_wait 48, paint_layout 0, webrender_render 0, memcpy_memset 0 |
| SwComposite | 19 | 0.6 | Other 19 | 0 / 0 / 19 | memcpy_memset 1 |
| GeckoMain | 16 | 0.5 | Idle 11, JavaScript 3, DOM 1, Other 0 | 0 / 4 / 12 | poll_wait 11, harness_diagnostics 4, mozafterpaint_events 0, memcpy_memset 0 |
| IPC I/O Parent | 10 | 0.3 | Idle 10, Other 0 | 0 / 0 / 10 |  |
| WRSceneBuilderLP#0 | 5 | 0.2 | Other 5 | 0 / 0 / 5 |  |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 11; `[libxul.so]` 4; `[libgdk-3.so.0]` 0; `g_main_context_iteration [libglib-2.0.so.0]` 0; `[libglib-2.0.so.0]` 0; `_XEnq [libX11.so.6]` 0; `g_object_unref [libgobject-2.0.so.0]` 0

**tab pid 8457** — 223 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 204 | 6.8 | Idle 101, Graphics 41, Layout 29, Other 13 | 0 / 5 / 199 | poll_wait 104, paint_layout 56, gc_cc 6, memcpy_memset 4 |
| IPC I/O Child | 17 | 0.6 | Idle 17, Other 0 | 0 / 0 / 17 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 108; `[libxul.so]` 78; `[]` 5; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 3; `__memset_evex_unaligned_erms [libc.so.6]` 2; `__pthread_mutex_unlock_usercnt [libc.so.6]` 1; `__sincos_fma [libm.so.6]` 1; `_Unwind_Find_FDE@@GCC_3.0 [libgcc_s.so.1]` 1

**tab pid 8367** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

**tab pid 8546** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 0

