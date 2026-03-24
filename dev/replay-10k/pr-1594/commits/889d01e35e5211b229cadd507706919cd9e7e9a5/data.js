window.BENCHMARK_DATA = {
  "lastUpdate": 1774332792012,
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
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-24T00:03:40Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/889d01e35e5211b229cadd507706919cd9e7e9a5"
        },
        "date": 1774332791589,
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