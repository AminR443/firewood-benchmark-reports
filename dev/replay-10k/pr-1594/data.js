window.BENCHMARK_DATA = {
  "lastUpdate": 1772743781937,
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
          "id": "4db6b706d20b9ed3984297ebc4b23e803309452e",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-04T00:09:14Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/4db6b706d20b9ed3984297ebc4b23e803309452e"
        },
        "date": 1772649457020,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 6251467206,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 6251467206,
            "unit": "ns/op",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayLog - commits",
            "value": 1000,
            "unit": "commits",
            "extra": "3 times\n4 procs"
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
          "id": "48d64635d7f7a89b97e263da8a39b706751ee721",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-04T00:09:14Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/48d64635d7f7a89b97e263da8a39b706751ee721"
        },
        "date": 1772652300306,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 5498953219,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 5498953219,
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
          "id": "58c098d5abee89d6167c46824325eaf848f0ad0a",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-05T19:15:38Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/58c098d5abee89d6167c46824325eaf848f0ad0a"
        },
        "date": 1772743781584,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 160502660,
            "unit": "ns/op\t      1000 commits\t    385293 ns/\t  32929035 ns/commit\t 125787092 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 160502660,
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
            "name": "BenchmarkReplayLog - ns/",
            "value": 385293,
            "unit": "ns/",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/commit",
            "value": 32929035,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 125787092,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}