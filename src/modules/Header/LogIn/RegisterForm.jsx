import React, { useState } from 'react'

const RegisterForm = () => {
      const [showPassword, setShowPassword] = useState(false);
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [onlineShop, setOnlineShop] = useState(false);
  const [offlineShop, setOfflineShop] = useState(false); // Поправлено назву змінної
  const [socialMedia, setSocialMedia] = useState(false);
  const [link, setLink] = useState("myshop.com");


  return (
    <div>
        {/* const dispatch = useDispatch();
  
  const registerDispatch = () => {
    dispatch(register({ email, password, firstName, lastName, city, number, onlineShop, offlineShop, socialMedia, link }))
      .then(response => {
        console.log(response);

        if (response.type === "auth/register/fulfilled") {
          
          setIsRegistered(true);
        } else {
          setIsRegistered(false);
        }
      })
      .catch(error => {
        setIsRegistered(false);
      });
  }; */}
    </div>
  )
}

export default RegisterForm
