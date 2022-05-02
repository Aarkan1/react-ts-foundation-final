import { Component, ReactNode } from "react";
import Card from "./Card";

interface IProps {
	children: ReactNode;
}

interface IState {
	hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
	state: IState = { hasError: false };

	static getDerivedStateFromError(_: Error): IState {
		return { hasError: true };
	}

	render() {
		// TODO: Check if error has been caught, and render a fallback UI.
		if (this.state.hasError) {
			return (
				<Card
					title="Oops, an error occurred"
					image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
				/>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
