import React from "react";

import {LinkLogo, TextLogo, TextLogoSecondWord} from "./logo.styled";

const Logo = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top:      0,
			behavior: "smooth",
		});
	};
	return (
		<>
			<LinkLogo to="/" onClick={scrollToTop}>
				<img src={"../../../images/logo.png"} alt="logo"/>
			</LinkLogo>
		</>
	);
};

export default Logo;
