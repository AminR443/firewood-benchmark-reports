window.BENCHMARK_DATA = {
  "lastUpdate": 1774332788455,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR": [
      {
        "commit": {
          "author": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "committer": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "id": "507f26018df2053782086e7047c258af29fe4c39",
          "message": "feat: update log file",
          "timestamp": "2026-03-20T20:06:49Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/507f26018df2053782086e7047c258af29fe4c39"
        },
        "date": 1774274980318,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.108021724,
            "unit": "s/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "committer": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "id": "507f26018df2053782086e7047c258af29fe4c39",
          "message": "feat: update log file",
          "timestamp": "2026-03-20T20:06:49Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/507f26018df2053782086e7047c258af29fe4c39"
        },
        "date": 1774275050588,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.06769037,
            "unit": "s/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/commit",
            "value": 0.005390718,
            "unit": "s/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/propose-on-db",
            "value": 0.062000077,
            "unit": "s/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "committer": {
            "name": "ava-labs",
            "username": "ava-labs"
          },
          "id": "889d01e35e5211b229cadd507706919cd9e7e9a5",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/889d01e35e5211b229cadd507706919cd9e7e9a5"
        },
        "date": 1774332788009,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 106431689,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 106431689,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}