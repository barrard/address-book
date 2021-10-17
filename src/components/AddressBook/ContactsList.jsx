import React, { useContext } from "react";
import Context from "./Context";
import { ListContainer, Text } from "./styled";
import { Scrollable } from "webrix/components";

import Contact from "./Contact";

export default function ContactsList() {
	let { filterContacts } = useContext(Context);

	return (
		<ListContainer>
			<div style={{ height: "100%" }} className="scrollbar-shadow">
				<Scrollable.Shadow>
					<Scrollable>
						{Object.keys(filterContacts).length === 0 && (
							<Text style={{ paddingLeft: "2em" }}>
								No Contacts
							</Text>
						)}
						{Object.keys(filterContacts).length > 0 &&
							Object.keys(filterContacts).map((id) => (
								<Contact
									contact={filterContacts[id]}
									key={id}
								/>
							))}
					</Scrollable>
				</Scrollable.Shadow>
			</div>
		</ListContainer>
	);
}
