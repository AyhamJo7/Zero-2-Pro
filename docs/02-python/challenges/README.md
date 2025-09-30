# Python Level-3 Challenges

These stretch challenges extend the **py-03-project-cli** milestone with advanced Python concepts and real-world applications.

## Challenge 1: Async CLI Tool

Convert your CLI to async patterns:

- Async HTTP requests and file I/O
- Concurrent task execution
- Progress bars for long-running operations
- Graceful cancellation handling

**Skills developed:** asyncio, concurrent programming, user experience

## Challenge 2: Plugin Architecture

Add extensible plugin system:

- Dynamic plugin loading and discovery
- Plugin API design and documentation
- Configuration management for plugins
- Plugin lifecycle management

**Skills developed:** Dynamic imports, API design, extensibility patterns

## Challenge 3: Advanced Data Processing

Implement high-performance data handling:

- Stream processing for large datasets
- Memory-efficient algorithms
- Integration with pandas/numpy
- Data validation and transformation pipelines

**Skills developed:** Stream processing, data science libraries, algorithms

## Challenge 4: Distributed Processing

Add distributed computing capabilities:

- Message queue integration (Redis/RabbitMQ)
- Worker processes with task distribution
- Result aggregation and monitoring
- Fault tolerance and retry mechanisms

**Skills developed:** Message queues, distributed systems, fault tolerance

## Challenge 5: Production Deployment

Package for production distribution:

- Docker containerization with multi-stage builds
- PyPI package publication
- CI/CD with automated testing
- Cross-platform compatibility testing

**Skills developed:** Packaging, distribution, CI/CD, containerization

## Getting Started

1. Select 2-3 challenges aligned with your interests
2. Extend your existing py-03 CLI project
3. Document design decisions and trade-offs
4. Create comprehensive tests for new features

## Resources

- [asyncio Documentation](https://docs.python.org/3/library/asyncio.html)
- [Python Packaging Guide](https://packaging.python.org/)
- [Celery for Distributed Tasks](https://celery.readthedocs.io/)
- [Docker Best Practices](https://docs.docker.com/develop/best-practices/)

---

## Level-4 Challenge Variants — Advanced Async & Performance

These challenge variants extend the **py-04-advanced-async-performance** module with additional stretch goals that deepen your concurrency and profiling skills.

---

## Variant A — Multi-Strategy Concurrency Comparison
**Goal**: Compare throughput & latency across sync, asyncio, threading, and multiprocessing for a realistic workload.

**Deliverables**:
- Benchmark script that runs all four strategies
- Results table (throughput, p50/p95 latency, CPU/memory)
- Commentary on when each strategy shines

**Acceptance Criteria**:
- At least 4 strategies benchmarked
- Statistical significance (multiple runs)
- Clear recommendation for the workload tested

---

## Variant B — Production-Grade Async Pipeline
**Goal**: Implement structured concurrency with backpressure, retries, and observability.

**Deliverables**:
- Pipeline with bounded concurrency (semaphore or task groups)
- Retry logic with exponential backoff
- Logging/metrics (e.g., success rate, latency histogram)
- CI integration (tests pass, perf guard in place)

**Acceptance Criteria**:
- Pipeline handles failures gracefully (retry + circuit breaker optional)
- Observability demonstrates backpressure in action
- Tests cover cancellation and timeout paths

---

## Variant C — (Your own stretch)
**Goal**: Propose and execute a measurable stretch aligned with the module outcomes.

**Examples**:
- `uvloop` integration + benchmark vs standard asyncio
- Profiling with py-spy or scalene; flamegraph analysis
- Async database connection pooling with load testing
- Custom async context managers for resource cleanup

**Deliverables**:
- Short proposal (1–2 paragraphs)
- Implementation evidence (code, config, profiling output)
- Metrics or results (e.g., throughput improvement, memory reduction)

**Acceptance Criteria**:
- Measurable outcome
- Documented steps and results
- Ties back to L3/L4 learning outcomes