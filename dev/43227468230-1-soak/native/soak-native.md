# Pixel-path soak: PASS (native)

30 cycles over 10.0 min; test prefs: {"axiosozo.engines.linux.memfd_frames": true}; RSS growth (cycle 2 -> last): 135.4 MB; host fds: {"webkit": {"min": 38, "max": 38, "last": 38}, "chromium": {"min": 335, "max": 342, "last": 338}}

| Engine tab (median over cycles) | rAF fps | rAF p99 ms | rAF CPU % | parent CPU % | draw ms | scroll fps | scroll p99 ms | static nav->visible ms | key->frame ms | transport |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| webkit | 57.19 | 25.11 | 186.95 | 113.65 | 0.02 | 55.79 | 35.4 | 60.8 | 20.04 | memfd native |
| chromium | 59.66 | 25.49 | 152.95 | 128.65 | 0.01 | 59.09 | 27.08 | 34.4 | 13.29 | memfd native |
| gecko (in-page) | 58.99 | 17.16 | | | | | | | | |

Problems: none
