window.BENCHMARK_DATA = {
  "lastUpdate": 1774403642120,
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
          "id": "1cd17982c3682e158d15a509d9dfd9cc0a248f22",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-24T21:47:08Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/1cd17982c3682e158d15a509d9dfd9cc0a248f22"
        },
        "date": 1774403597915,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 101351101,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 101351101,
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
          "id": "1cd17982c3682e158d15a509d9dfd9cc0a248f22",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-24T21:47:08Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/1cd17982c3682e158d15a509d9dfd9cc0a248f22"
        },
        "date": 1774403641706,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 64249372,
            "unit": "ns/op\t      1000 commits\t   5120722 ns/commit\t  58849158 ns/propose-on-db",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 64249372,
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
            "value": 5120722,
            "unit": "ns/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/propose-on-db",
            "value": 58849158,
            "unit": "ns/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}