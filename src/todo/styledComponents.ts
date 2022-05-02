import styled from "styled-components";

interface ILabelProps {
	readonly completed: boolean;
}

export const Container = styled.div`
	padding: 8px 16px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
`;

export const Checkbox = styled.input`
	appearance: none;
`;

export const Label = styled.label<ILabelProps>`
	cursor: pointer;
	color: ${(props) => (props.completed ? "#d9d9d9" : "initial")};
	display: inline-block;
	padding: 15px 15px 15px 60px;
	text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
	user-select: none;
`;

export const Button = styled.button`
	font-size: 22px;
	color: #cc9a9a;

	&:hover {
		color: #af5b5e;
	}
`;
