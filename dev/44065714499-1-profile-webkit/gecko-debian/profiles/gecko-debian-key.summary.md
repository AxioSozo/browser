### gecko-debian key (profile pass)

**parent pid 8175** — 294 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 196 | 5.2 | Layout 45, Idle 43, GC / CC 29, Graphics 29 | 4 / 17 / 175 | paint_layout 63, poll_wait 59, gc_cc 29, harness_diagnostics 4 |
| Renderer | 34 | 0.9 | Idle 19, Graphics 14 | 0 / 0 / 34 | poll_wait 18, webrender_render 14, memcpy_memset 0 |
| WRRenderBackend#0 | 18 | 0.5 | Other 18 | 0 / 0 / 18 |  |
| Compositor | 17 | 0.4 | Idle 16, Other 1 | 0 / 0 / 17 | poll_wait 16, memcpy_memset 1, paint_layout 0 |
| WRSceneBuilder#0 | 13 | 0.3 | Other 13 | 0 / 0 / 13 |  |
| IPC I/O Parent | 9 | 0.2 | Idle 9, Other 1 | 0 / 0 / 9 |  |
| SwComposite | 4 | 0.1 | Other 4 | 0 / 0 / 4 |  |
| Timer | 2 | 0.0 | Other 2 | 0 / 0 / 2 | poll_wait 2 |

Main thread, top self: `[libxul.so]` 124; `__syscall_cancel_arch [libc.so.6]` 49; `[axiosozo-dev]` 7; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 2; `[linux-vdso.so.1]` 2; `pthread_mutex_lock@@GLIBC_2.2.5 [libc.so.6]` 2; `__lll_lock_wait [libc.so.6]` 1; `[unknown]` 1

**tab pid 8427** — 71 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 64 | 1.7 | Idle 24, Other 13, Layout 8, Graphics 7 | 0 / 5 / 60 | poll_wait 26, paint_layout 11, gc_cc 6, harness_diagnostics 2 |
| IPC I/O Child | 6 | 0.2 | Idle 6, Other 0 | 0 / 0 / 6 |  |
| Timer | 1 | 0.0 | Other 1 | 0 / 0 / 1 | poll_wait 1 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 30; `[libxul.so]` 29; `[]` 3; `__tls_get_addr [ld-linux-x86-64.so.2]` 1; `[linux-vdso.so.1]` 1; `__memmove_avx_unaligned_erms [libc.so.6]` 1; `std::__detail::_Prime_rehash_policy::_M_next_bkt(unsigned long) const@` 0

**tab pid 8261** — 8 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 7 | 0.2 | Idle 6, Other 0, JavaScript 0 | 0 / 0 / 7 | poll_wait 6 |
| IPC I/O Child | 1 | 0.0 | Idle 1 | 0 / 0 / 1 |  |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 6; `[linux-vdso.so.1]` 0; `clock_gettime@GLIBC_2.2.5 [libc.so.6]` 0; `[libxul.so]` 0

**tab pid 8361** — 1 ms CPU in the window

| Thread | CPU ms | % of span | top categories | JS leaf / native under JS / native | top buckets |
| --- | ---: | ---: | --- | --- | --- |
| GeckoMain | 1 | 0.0 | Idle 1 | 0 / 0 / 1 | poll_wait 1 |
| Timer | 0 | 0.0 | Other 0 | 0 / 0 / 0 | poll_wait 0 |
| IPC I/O Child | 0 | 0.0 | Idle 0, Other 0 | 0 / 0 / 0 |  |
| Socket Thread | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| BackgroundThreadPool #1 | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageIO | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |
| ImageBridgeChld | 0 | 0.0 | Idle 0 | 0 / 0 / 0 | poll_wait 0 |

Main thread, top self: `__syscall_cancel_arch [libc.so.6]` 1

