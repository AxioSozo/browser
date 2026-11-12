### gecko-debian scroll (profile pass)

**parent pid 8188** — 966 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| Renderer | 609 | 30.2 | Graphics 554, Idle 53, Profiler 1, Other 0 | 0 / 0 / 609 | webrender_render 555, poll_wait 54, memcpy_memset 5 |
| GeckoMain | 149 | 7.4 | Idle 69, GC / CC 35, Other 22, Layout 8 | 0 / 7 / 142 | poll_wait 97, gc_cc 35, paint_layout 9, harness_diagnostics 5 |
| WRRenderBackend#0 | 79 | 3.9 | Other 79 | 0 / 0 / 79 | memcpy_memset 0, poll_wait 0 |
| SwComposite | 60 | 3.0 | Other 60 | 0 / 0 / 60 | memcpy_memset 5 |
| Compositor | 32 | 1.6 | Idle 32, Other 1, Profiler 0 | 0 / 0 / 32 | poll_wait 32, webrender_render 0 |
| WRSceneBuilder#0 | 24 | 1.2 | Other 24 | 0 / 0 / 24 | poll_wait 0, memcpy_memset 0, gc_cc 0 |
| IPC I/O Parent | 8 | 0.4 | Idle 7, Other 0 | 0 / 0 / 8 | memcpy_memset 0 |
| WRSceneBuilderLP#0 | 1 | 0.1 | Other 1 | 0 / 0 / 1 |  |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 77; `[libxul.so]` 59; `[unknown]` 2; `[axiosozo-dev]` 2; `[libglib-2.0.so.0]` 1; `std::_Rb_tree_rebalance_for_erase(std::_Rb_tree_node_base*, std::_Rb_t` 1; `mozilla::detail::MutexImpl::lock() [axiosozo-dev]` 1; `[libgobject-2.0.so.0]` 1

**tab pid 8457** — 130 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 114 | 5.7 | Idle 66, Graphics 15, Other 14, GC / CC 6 | 0 / 5 / 109 | poll_wait 67, paint_layout 17, gc_cc 6, harness_diagnostics 3 |
| IPC I/O Child | 14 | 0.7 | Idle 14, Other 0 | 0 / 0 / 14 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 69; `[libxul.so]` 36; `[]` 2; `[linux-vdso.so.1]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `getcontext [libc.so.6]` 1; `__strlen_evex [libc.so.6]` 1; `__memset_evex_unaligned [libc.so.6]` 1

**tab pid 8386** — 0 ms CPU in the window

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

**tab pid 8546** — 0 ms CPU in the window

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

