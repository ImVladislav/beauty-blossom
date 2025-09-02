const Button = ({type, text, classes = '', textClasses = '', isDisabled, onClick}) => {
	let typeClasses = "";
	if (type === "primary") {
		typeClasses = "bg-[#000E55] text-white hover:bg-[#E667A4] transition-colors duration-500 ease-in-out";
	} else if (type === "secondary") {
		typeClasses = "bg-white text-[#000E55] border border-[#000E55]";
	}
	return (
		<div
			onClick={onClick}
			className={`flex justify-center items-center text-center w-[306px] h-[51px] rounded-[30px] ${isDisabled ? 'opacity-50' : 'cursor-pointer'} ${typeClasses} ${classes}`}
		>
			<div className={`text-md font-normal  ${textClasses ?? ''}`}>
				{text}
			</div>
		</div>
	)
}

export default Button