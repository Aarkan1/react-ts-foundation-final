import { Component, ReactNode } from "react";

interface IProps {
	children: ReactNode;
	render: () => JSX.Element;
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
			return this.props.render();
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
