/* eslint-disable react/prop-types */
function handleClick(e) {
	e.preventDefault();
	const dropdownContent = document.querySelector(".dropdown-content");
	dropdownContent.classList.toggle("hidden");
}

function Dropdown(props) {
	return (
		<div className="dropdown">
			<div
				onMouseOver={handleClick}
				onMouseOut={handleClick}
				className="py-1 px-2 border-2 rounded-md border-slate-300 cursor-pointer"
			>
				{props.title}
				<div className="dropdown-content w-fit bg-slate-100 border-2 border-slate-500 rounded-lg px-1 py- hidden fixed h-96 overflow-auto">
					{props.children.map((child, index) => {
						return (
							<div
								className="border-b border-slate-300 py-1 px-2 hover:bg-slate-300"
								key={index}
							>
								{child}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Dropdown;
