### webkit switch-to-engine (profile pass)

**parent pid 7161** — 96 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 45 | 13.0 | JavaScript 18, Idle 10, Layout 7, DOM 5 | 0 / 29 / 16 | harness_diagnostics 13, poll_wait 11, paint_layout 6, engine_stream_read 5 |
| DOM Worker | 22 | 6.4 | JavaScript 22, Profiler 1 | 0 / 0 / 22 | subprocess_pipe_io 22, poll_wait 20, memcpy_memset 0 |
| Renderer | 11 | 3.1 | Graphics 8, Idle 2, Profiler 0 | 0 / 0 / 11 | webrender_render 9, poll_wait 2 |
| BackgroundThreadPool #3 | 5 | 1.5 | Other 5, Idle 0 | 0 / 0 / 5 | memcpy_memset 2, poll_wait 0 |
| Compositor | 5 | 1.3 | Idle 3, Other 2 | 0 / 0 / 5 | poll_wait 3, memcpy_memset 2 |
| WRRenderBackend#0 | 2 | 0.6 | Other 2 | 0 / 0 / 2 |  |
| IPC I/O Parent | 2 | 0.5 | Idle 1, Other 0 | 0 / 0 / 2 | poll_wait 0 |
| WRSceneBuilder#0 | 2 | 0.5 | Other 2 | 0 / 0 / 2 |  |

Main thread, top self: `[libxul.so]` 26; `__syscall_cancel_arch [libc.so.6]` 12; `[unknown]` 2; `mprotect [libc.so.6]` 2; `double_conversion::DoubleToStringConverter::CreateDecimalRepresentatio` 1; `[axiosozo-dev]` 1; `__strncpy_avx2 [libc.so.6]` 1; `__lll_lock_wait [libc.so.6]` 0

**tab pid 7861** — 51 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 51 | 17.8 | Other 40, DOM 6, Idle 2, Profiler 2 | 0 / 7 / 44 | poll_wait 2, gc_cc 1, memcpy_memset 1 |
| IPC I/O Child | 1 | 0.2 | Idle 1, Other 0 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `[libxul.so]` 24; `[]` 7; `[libexpat.so.1]` 4; `__syscall_cancel_arch [libc.so.6]` 4; `__lll_lock_wake [libc.so.6]` 2; `__strcmp_avx2 [libc.so.6]` 1; `_Unwind_Find_FDE@@GCC_3.0 [libgcc_s.so.1]` 1; `__read_nocancel [libc.so.6]` 1

**tab pid 7711** — 2 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 2 | 0.4 | Idle 1, Profiler 0 | 0 / 0 / 2 | poll_wait 1, memcpy_memset 0 |
| IPC I/O Child | 0 | 0.1 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `__memset_avx2_unaligned_erms [libc.so.6]` 0

**tab pid 7855** — 2 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 2 | 0.4 | Other 1, GC / CC 1, Idle 0 | 0 / 0 / 2 | gc_cc 1, poll_wait 0, memcpy_memset 0 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1; `mprotect [libc.so.6]` 1; `[libxul.so]` 0; `mmap64 [libc.so.6]` 0; `pthread_create@GLIBC_2.2.5 [libc.so.6]` 0

