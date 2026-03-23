window.BENCHMARK_DATA = {
  "lastUpdate": 1774275053772,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR Compare": [
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
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-20T20:06:49Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/507f26018df2053782086e7047c258af29fe4c39"
        },
        "date": 1774274982488,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 108021724,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 108021724,
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
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-20T20:06:49Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/507f26018df2053782086e7047c258af29fe4c39"
        },
        "date": 1774275052704,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 67690370,
            "unit": "ns/op\t      1000 commits\t   5390718 ns/commit\t  62000077 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 67690370,
            "unit": "ns/op",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 5390718,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 62000077,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}