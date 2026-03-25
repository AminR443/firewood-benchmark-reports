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
          "id": "3da98c89bbd5912b22538f7a5ff6dbc488913f0e",
          "message": "chore(ci): Pedantically check all golang errors (#1820)",
          "timestamp": "2026-03-24T21:47:08Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/1cd17982c3682e158d15a509d9dfd9cc0a248f22"
        },
        "date": 1774403597915,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.101351101,
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
          "id": "1cd17982c3682e158d15a509d9dfd9cc0a248f22",
          "message": "fix: base commit issue",
          "timestamp": "2026-03-24T21:47:08Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/1cd17982c3682e158d15a509d9dfd9cc0a248f22"
        },
        "date": 1774403641706,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.064249372,
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
            "value": 0.005120722,
            "unit": "s/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/propose-on-db",
            "value": 0.058849158,
            "unit": "s/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}