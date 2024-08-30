import { Provider } from 'react-redux';
import Body from './components/Body';
import './index.css';
import store from './utility/store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Body />
    </div>
    </Provider>
  );
}

export default App;
