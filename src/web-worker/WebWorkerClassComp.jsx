import React from 'react';

/**
 * create worker - new Worker('path-to-js-file')
 * get MessageEvent from worker by setting worker.onmessage = (messageEvent) => {}
 * send MessageEvent to worker by calling worker.postMessage(data)
 *
 * in worker file
 * get messageEvent from main thread by setting onmessage(messageEvent) => {}
 * send messageEvent to main thread by calling postMessage(data)
 */

class WebWorkerClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worker: new Worker(new URL('./worker.js', import.meta.url)),
      workerMessage: null,
      count: 0,
    };
    this.state.worker.onmessage = this.onMessageFromWorker;
  }

  onMessageFromWorker = (messageEvent) => {
    console.log('Message received from worker');
    this.setState({
      workerMessage: messageEvent.data,
    });
  };

  sendMessageToWorker = () => {
    const { worker } = this.state;
    if (worker) {
      worker.postMessage('Hi from main');
    } else {
      alert('Worker not initialized');
    }
  };

  doThingsInComponent = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    const { workerMessage, count } = this.state;
    return (
      <>
        <h3>Class Component</h3>
        <div>
          {workerMessage}
          <button onClick={this.sendMessageToWorker}>
            Send message to worker
          </button>
        </div>
        <div>
          {count}
          <button onClick={this.doThingsInComponent}>
            Do things in component
          </button>
        </div>
      </>
    );
  }
}

export default WebWorkerClassComp;
