import React, { useContext } from "react";

import sc from "../styles-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Context from "../Context";
import FormInput from "./FormInput";
export default function SearchInput() {
	let { search, setSearch } = useContext(Context);
	return (
		<FormInput
			value={search}
			onChange={(e) => setSearch(e.target.value)}
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
