import { useEffect, useState } from 'react';

const WebWorkerComp = () => {
  const [worker, setWorker] = useState(null);
  const [workerMessage, setWorkerMessage] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect called');
    // Initialize the Web Worker
    const newWorker = new Worker(new URL('./worker.js', import.meta.url));

    // Set up an event listener for messages from the worker
    newWorker.onmessage = onMessageFromWorker;

    setWorker(newWorker);

    // Cleanup on component unmount
    return () => {
      newWorker.terminate();
    };
  }, []);

  const onMessageFromWorker = (messageEvent) => {
    console.log('Message received from worker');
    setWorkerMessage(messageEvent.data);
  };

  const sendMessageToWorker = () => {
    if (worker) {
      worker.postMessage('Hi from main');
    } else {
      alert('Worker not initialized');
    }
  };

  const doThingsInComponent = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>
        {workerMessage}
        <button onClick={sendMessageToWorker}>Send message to worker</button>
      </div>
      <div>
        {count}
        <button onClick={doThingsInComponent}>Do things in component</button>
      </div>
    </>
  );
};

export default WebWorkerComp;
