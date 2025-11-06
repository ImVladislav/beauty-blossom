import React, {useState} from "react";
import {
	ContactInformForm,
	ContactInformInput,
	ContactInformInputBlock,
	ContactInformSubButton,
	RedStar,
} from "./UserPageStyled";
import {useSelector} from "react-redux";
import {
	_idSelector,
	userSelectorEmail,
	userSelectorNumber,
	userSelectorfirstName,
	userSelectorlastName,
} from "../../redux/auth/selectors";
import axios from "axios";
import {toast} from "react-toastify";

const UserData = () => {
	const firstName = useSelector(userSelectorfirstName);
	const lastName = useSelector(userSelectorlastName);
	const email = useSelector(userSelectorEmail);
	const number = useSelector(userSelectorNumber);
	const id = useSelector(_idSelector);

	const [formData, setFormData] = useState({
		firstName: firstName,
		lastName:  lastName,
		email:     email,
		number:    number,
	});

	const [activeTab, setActiveTab] = useState("контактна інформація");

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// eslint-disable-next-line no-unused-vars
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// eslint-disable-next-line
			const response = await axios.post(
				`https://beautyblossom-backend-production.onrender.com/api/auth/updateUserData/${id}`,
				formData
			);
			// console.log(response.data);
			toast.info("Данні зміненні успішно");
		} catch (error) {
			toast.error("Сталася помилка, спробуйте пізніше");
			console.error("Помилка при відправленні POST-запиту:", error);
			// Вивести повідомлення про помилку, якщо потрібно
		}
	};

	return (
		<div className="cabinet-page">
			<div className="cabinet-content">
				{activeTab === "контактна інформація" && (
					<div className="profile-form">
						<ContactInformForm onSubmit={handleSubmit}>
							<ContactInformInputBlock className="form-group">
								<label htmlFor="email">
									EMAIL<RedStar>*</RedStar>
								</label>
								<ContactInformInput
									type="email"
									id="email"
									name="email"
									value={formData.email || ""}
									onChange={handleChange}
								/>
							</ContactInformInputBlock>
							<ContactInformInputBlock className="form-group">
								<label htmlFor="firstName">
									ІМЯ<RedStar>*</RedStar>
								</label>
								<ContactInformInput
									type="text"
									id="firstName"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
								/>
							</ContactInformInputBlock>
							<ContactInformInputBlock className="form-group">
								<label htmlFor="lastName">
									ПРІЗВИЩЕ<RedStar>*</RedStar>
								</label>
								<ContactInformInput
									type="text"
									id="lastName"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
								/>
							</ContactInformInputBlock>
							<ContactInformInputBlock className="form-group">
								<label htmlFor="number">
									ТЕЛЕФОН<RedStar>*</RedStar>
								</label>
								<ContactInformInput
									type="tel"
									id="number"
									name="number"
									value={formData.number}
									onChange={handleChange}
								/>
							</ContactInformInputBlock>
							<ContactInformSubButton type="submit">
								ЗБЕРЕГТИ
							</ContactInformSubButton>
						</ContactInformForm>
					</div>
				)}
			</div>
		</div>
	);
};

export default UserData;
