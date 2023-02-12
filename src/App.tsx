import "../src/styles/App.css";
import { AppRouter } from "./config/router/AppRouter";
import { Layout } from "./utils/ui/Layout";

const App = () => (
	<Layout>
		<AppRouter />
	</Layout>
);
export default App;
