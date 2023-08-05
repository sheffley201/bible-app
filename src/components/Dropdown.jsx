/* eslint-disable react/prop-types */
function handleClick(e) {
    e.preventDefault();
    const dropdownContent = e.target.nextElementSibling;
    dropdownContent.classList.toggle('hidden');
}

function Dropdown(props) {
    return (
        <div className="dropdown">
            <button onClick={handleClick} className="py-1 px-2 border-2 rounded-md border-slate-300">{props.title}</button>
            <div className="dropdown-content w-fit border-2 border-slate-500 rounded-lg px-1 py- hidden fixed h-96 overflow-auto">
                {props.children.map((child, index) => {
                    return <div className="border-b border-slate-300 py-1 px-2 hover:bg-slate-300" key={index}>{child}</div>;
                })}
            </div>
        </div>
    );    
}

export default Dropdown;