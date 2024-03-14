// App.tsx
import { useModal } from './components/modal';
import './styles.css';

export default function App() {
  const { onOpen: openLoginModal } = useModal('LoginModal');
  const { onOpen: openTestModal } = useModal('TestModal');

  return (
    <div className="App">
      <h1>Hello Developer</h1>
      <h2>Here is our magnificent enterprise level modal ecosystem!</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button onClick={openLoginModal}>LOGIN</button>
        <button onClick={openTestModal}>TEST</button>
      </div>
    </div>
  );
}
