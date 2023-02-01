import React from "react";
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
	return (
		<div className="relative mx-auto">
			<input
				type="text"
				className="block w-64 max-w-sm p-2 pr-10 mx-auto text-black rounded-full outline-none md:w-96"
				placeholder="search any character"
			/>
			<FcSearch className="absolute right-0 w-8 h-8 pr-4 -translate-y-1/2 top-1/2" />
		</div>
	);
};

export default SearchBar;
