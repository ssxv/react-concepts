const loopFor = 10000000000;
onmessage = (messageEvent) => {
  console.log('Recevied message from main thread');
  console.log(messageEvent);

  for (let i = 0; i < loopFor; i++) {
    continue;
  }

  postMessage(`Ran a loop for ${loopFor}`);
};
