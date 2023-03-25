"use client"

import{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthInputs from './AuthInputs';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({isLogin}: {isLogin: boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const  renderContent= (loginContent:string, signupContent:string)=>{
    return 	isLogin ? loginContent : signupContent
  };
  const handleChangeInput =(e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  const [inputs,setInputs] = useState({
    firstName:"",
    lastName:"",
    email:"",
    username:"",
    password:"",
    phoneNumber: ""
   })
  return (
    <div>
    	<button className={`${renderContent("bg-blue-400 text-white","")} inline-block rounded bg-green-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]`} onClick={handleOpen}>
		{renderContent("Log in", "Sign up")}
		</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <div className="p-2">
        <div className="uppercase font-bold text-center pb-2 border-b mb-2">
            <p className="text-sm">
                {renderContent("Log in", "Create Account")}
            </p>
        </div>
        <div className='m-auto'>
            <h2 className="text-2xl font-light text-center">
            {renderContent("Subtle", "Create Your Subtle Account")}
            </h2>
            <AuthInputs 
            inputs={inputs} 
            handleChangeInput={handleChangeInput} 
            isLogin = {isLogin}
            />
            <button className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'>
            {renderContent("Log In ", "Create Account")}
            </button>
        </div>
       </div>
        </Box>
      </Modal>
    </div>
  );
}