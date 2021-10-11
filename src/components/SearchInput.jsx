import React from "react";

import sc from "../styles-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faMinus } from "@fortawesome/free-solid-svg-icons";

import FormInput from "./FormInput";
export default function SearchInput() {
	return (
		<FormInput
			placeholder={"search"}
			icon={
				<FontAwesomeIcon
					color={sc["dark-3"]}
					size="lg"
					icon={faSearch}
				/>
			}
		/>
	);
}
