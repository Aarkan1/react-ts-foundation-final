import Card from "./Card";
import { IItems } from "../interfaces";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryWithRenderProps from "./ErrorBoundary.render-props";

interface CardListProps {
	list: IItems[];
}

const CardList = ({ list }: CardListProps): JSX.Element => {
	const size = "small";

	// Error boundary without renderProps
	return (
		<>
			{list.map((listItem, index) => (
				<ErrorBoundary key={index}>
					<Card {...listItem} size={size} />
				</ErrorBoundary>
			))}
		</>
	);

	// Error boundary with renderProps
	// return (
	// 	<>
	// 		{list.map((listItem, index) => (
	// 			<ErrorBoundaryWithRenderProps
	// 				key={index}
	// 				render={() => (
	// 					<Card
	// 						title="Oops, an error occurred"
	// 						image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
	// 						size={size}
	// 					/>
	// 				)}
	// 			>
	// 				<Card {...listItem} size={size} />
	// 			</ErrorBoundaryWithRenderProps>
	// 		))}
	// 	</>
	// );
};

export default CardList;
