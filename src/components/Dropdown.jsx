/* eslint-disable react/prop-types */
function handleClick(e) {
    e.preventDefault();
    const dropdownContent = e.target.nextElementSibling;
    dropdownContent.classList.toggle('hidden');
}

function Dropdown(props) {
    return (
        <div className="dropdown">
            <button onClick={handleClick} className="dropbtn py-1 px-2 border-2 border-slate-300">{props.title}</button>
            <div className="dropdown-content w-fit hidden">
                {props.children.map((child, index) => {
                    return <div className="border-b border-slate-300 p-1" key={index}>{child}</div>;
                })}
            </div>
        </div>
    );    
}

export default Dropdown;