import Home from './Components/Home/Home';
import Ui from './Components/UI/Ui';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="Ui" element={<Ui />} />
		</Routes>
	);
}

export default App;
