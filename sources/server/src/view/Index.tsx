import * as React from 'react';

export interface ILayoutProps {
}

export default class Layout extends React.Component<ILayoutProps, any>
{
	public constructor(props?: ILayoutProps, context?: any)
	{
		super(props, context);
	}

	public render(): React.ReactElement<any>
	{
		return (
			<html>
				<head>
					<meta charSet="utf-8" />
					<title>React Typescript Example</title>
					<link rel="stylesheet" href="/public/js/common.css" media="all" />
					<link rel="stylesheet" href="/public/js/index.css" media="all" />
					<script type="text/javascript" src="/public/js/common.js" />
					<script type="text/javascript" src="/public/js/index.js" />
				</head>
				<body>
					<header />
					<main>
						<div id="app" />
					</main>
					<footer />
				</body>
			</html>
		);
	}
}
