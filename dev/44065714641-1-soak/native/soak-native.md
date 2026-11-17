# Pixel-path soak: PASS (native)

30 cycles over 10.0 min; test prefs: {"axiosozo.engines.linux.memfd_frames": true}; RSS growth (cycle 2 -> last): 79.0 MB; host fds: {"webkit": {"min": 38, "max": 38, "last": 38}, "chromium": {"min": 335, "max": 341, "last": 337}}

| Engine tab (median over cycles) | rAF fps | rAF p99 ms | rAF CPU % | parent CPU % | draw ms | scroll fps | scroll p99 ms | static nav->visible ms | key->frame ms | transport |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| webkit | 57.88 | 21.74 | 172.3 | 123.8 | 0.01 | 56.97 | 33.62 | 52.55 | 18.37 | memfd native |
| chromium | 59.97 | 23.42 | 151.0 | 136.05 | 0.01 | 59.98 | 22.97 | 27.2 | 11.54 | memfd native |
| gecko (in-page) | 58.98 | 17.14 | | | | | | | | |

Problems: none
