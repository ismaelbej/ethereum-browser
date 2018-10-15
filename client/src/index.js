import { app, h } from 'hyperapp';

const actions = {
  updateBlockchain: () => async ({block, gasPrice}, actions) => {
    setTimeout(actions.refreshStatus, 5000, {block, gasPrice: gasPrice + 1});
  },
  refreshStatus: ({block, gasPrice}) => (state, actions) => {
    return { block, gasPrice };
  }
};

const state = {
  block: {},
  gasPrice: 0,
};

const view = ({block, gasPrice}, {updateBlockchain}) => (
  <div
    oncreate={() => updateBlockchain()}
  >
    <section>
      <ul>
        <li>Block: {block.timestamp}</li>
        <li>Gas Price: {gasPrice}</li>
      </ul>
    </section>
  </div>
);

app(state, actions, view, document.getElementById('app'));

