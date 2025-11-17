import cluster from 'node:cluster'
import os from 'node:os'
import process from 'node:process'

if (cluster.isPrimary) {
    const cpu = os.availableParallelism()

    console.log(`Primary ${process.pid} is running`)
    console.log(`Forking for ${cpu} CPUs...\n`)

    for (let i = 0; i < cpu; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died. Spawning a new one...`)
        cluster.fork()
    })
} else {
    await import('./server')
    console.log(`Worker ${process.pid} started`)
}
