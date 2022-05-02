import { IIndexable } from "../interfaces";

interface CardProps {
	title: string;
	image: string;
	size?: string;
}

const Card = ({ title, image, size }: CardProps): JSX.Element => {
	/**
	 * To handle the different cardSize, one approach is to create
	 * an array of strings containing the classes. Fist only the 'Card'
	 * class is added. Then depending on the size-prop we can
	 * manipulate this array. Remember to use join() on the array
	 * in the JSX to create a string from the array.
	 * */
	const classes = ["card"];

	/** cardSize alternative 1 */
	// if (size === "small") {
	// 	classes.push("card-small");
	// } else if (size === "large") {
	// 	classes.push("card-large");
	// } else {
	// 	classes.push("card-medium");
	// }

	/** cardsize alternative 2
	 * If you want to use the array-like syntax to get values from an
	 * object the object must be of type [key: string]: any, or an object
	 * that extends that type. My interface IIndexable is an example of that.
	 */
	const cardSize: IIndexable = {
		small: "card-small",
		medium: "card-medium",
		large: "card-large",
	};

	if (size) {
		cardSize[size]
			? classes.push(cardSize[size])
			: classes.push(cardSize.medium);
	} else {
		classes.push(cardSize.medium);
	}

	return (
		<div className={classes.join(" ")}>
			<p className="card-title">{title.toUpperCase()}</p>
			<div className={classes.join(" ").replace("card", "")}>
				<img className="card-image" src={image} alt="" />
			</div>
		</div>
	);
};

export default Card;
