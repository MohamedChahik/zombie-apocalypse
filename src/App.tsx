import "../src/styles/App.css";
import { AppRouter } from "./config/router/AppRouter";
import { Header } from "./utils/ui/Header";

const App = () => (
	<Header>
		<AppRouter />
	</Header>
);
export default App;
