### gecko idle (profile pass)

**parent pid 4049** — 54 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 47 | 2.3 | GC / CC 28, Idle 7, JavaScript 6, Other 5 | 0 / 5 / 41 | gc_cc 28, poll_wait 10, harness_diagnostics 4, memcpy_memset 3 |
| Compositor | 2 | 0.1 | Other 1, Idle 1, Profiler 0 | 0 / 0 / 2 | memcpy_memset 1, poll_wait 1 |
| DOM Worker | 2 | 0.1 | Other 1, Idle 0 | 0 / 0 / 2 | worker_messaging 0, poll_wait 0 |
| IPC I/O Parent | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Socket Thread | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 0 |
| Renderer | 1 | 0.0 | Graphics 0, Idle 0 | 0 / 0 / 1 | memcpy_memset 0, webrender_render 0, poll_wait 0 |
| SwComposite | 0 | 0.0 | Other 0 | 0 / 0 / 0 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 31; `poll [libc.so.6]` 7; `recvmsg [libc.so.6]` 2; `__memmove_evex_unaligned_erms [libc.so.6]` 1; `read [libc.so.6]` 1; `mmap64 [libc.so.6]` 1; `write [libc.so.6]` 1; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 1

**tab pid 4294** — 36 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 30 | 1.5 | Idle 20, JavaScript 5, GC / CC 4, Profiler 1 | 0 / 4 / 26 | poll_wait 20, gc_cc 4, harness_diagnostics 4, memcpy_memset 0 |
| IPC I/O Child | 6 | 0.3 | Idle 6, Other 0 | 0 / 0 / 6 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 20; `[libxul.so]` 8; `[]` 1; `[linux-vdso.so.1]` 0; `__memmove_evex_unaligned_erms [libc.so.6]` 0; `__lll_lock_wait [libc.so.6]` 0; `std::_Rb_tree_increment(std::_Rb_tree_node_base const*)@@GLIBCXX_3.4 [` 0

**tab pid 4380** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 0, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 0; `pthread_cond_signal@@GLIBC_2.3.2 [libc.so.6]` 0

**tab pid 4233** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1, Other 0 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `poll [libc.so.6]` 1; `write [libc.so.6]` 0

