import React from "react";
import { DetailsContainer } from "./styled";

import SaveDetails from "./SaveDetails";
import ContactDetails from "./ContactDetails";

export default function Details() {
	return (
		<DetailsContainer>
			{/* contact details  */}
			<ContactDetails />

			{/* Contact edit buttons */}
			<SaveDetails />
		</DetailsContainer>
	);
}
