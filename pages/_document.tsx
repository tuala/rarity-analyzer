import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="shortcut icon" href="/favicon.ico" />
					<title>{process.env.NEXT_PUBLIC_SITENAME} - Rarity</title>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_SITE_ID}`}
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@400;700&family=Varela+Round&display=swap" rel="stylesheet" />
				</Head>
				<body className="dark:bg-gray-900 bg-white dark:text-gray-200 text-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
