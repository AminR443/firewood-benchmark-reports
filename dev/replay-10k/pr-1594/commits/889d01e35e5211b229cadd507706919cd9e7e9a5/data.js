window.BENCHMARK_DATA = {
  "lastUpdate": 1774332858166,
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
          "id": "889d01e35e5211b229cadd507706919cd9e7e9a5",
          "message": "feat: better scripts",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/889d01e35e5211b229cadd507706919cd9e7e9a5"
        },
        "date": 1774332791589,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.106431689,
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
          "id": "889d01e35e5211b229cadd507706919cd9e7e9a5",
          "message": "feat: better scripts",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/889d01e35e5211b229cadd507706919cd9e7e9a5"
        },
        "date": 1774332857754,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog - s/op",
            "value": 0.063232609,
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
            "value": 0.005264467,
            "unit": "s/commit",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - s/propose-on-db",
            "value": 0.057703558,
            "unit": "s/propose-on-db",
            "extra": "3 times\n8 procs"
          }
        ]
      }
    ]
  }
}