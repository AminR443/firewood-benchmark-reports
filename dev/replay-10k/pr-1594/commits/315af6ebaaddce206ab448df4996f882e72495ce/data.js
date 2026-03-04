window.BENCHMARK_DATA = {
  "lastUpdate": 1772653088576,
  "repoUrl": "https://github.com/ava-labs/firewood",
  "entries": {
    "Replay 10K PR Commit": [
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
          "id": "315af6ebaaddce206ab448df4996f882e72495ce",
          "message": "feat(replay): performance action (5/5) ",
          "timestamp": "2026-03-04T00:09:14Z",
          "url": "https://github.com/ava-labs/firewood/pull/1594/commits/315af6ebaaddce206ab448df4996f882e72495ce"
        },
        "date": 1772653088255,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkReplayLog",
            "value": 5573372133,
            "unit": "ns/op\t      1000 commits",
            "extra": "3 times\n8 procs"
          },
          {
            "name": "BenchmarkReplayLog - ns/op",
            "value": 5573372133,
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