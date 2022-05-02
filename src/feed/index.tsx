import CardList from "./CardList";
import { IItems } from "../interfaces";
import "./style.css";

const items: IItems[] = [
	{
		title: "first item",
		image: "http://via.placeholder.com/350x150",
	},
	{
		// comment out the title property to generate an error while rendering a Card component.
		title: "second item",
		image: "http://via.placeholder.com/350x150",
	},
	{
		title: "third item",
		image: "http://via.placeholder.com/350x150",
	},
];

const App = (): JSX.Element => {
	return <CardList list={items} />;
};

export default App;
