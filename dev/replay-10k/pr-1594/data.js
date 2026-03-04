window.BENCHMARK_DATA = {
  "lastUpdate": 1772648571824,
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
          "id": "8867402cec70569ce0c6e148119f17801fd73587",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-04T00:09:14Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/8867402cec70569ce0c6e148119f17801fd73587"
        },
        "date": 1772648570735,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 6085917100,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n4 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 6085917100,
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
      }
    ]
  }
}