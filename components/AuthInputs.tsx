import React from "react";

interface Props {
    inputs: {
        firstName:string,
        lastName:string,
        email:string,
        username:string,
        password:string,
        phoneNumber: string
       };
       handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
       isLogin: boolean;
}
export default function AuthInputs({inputs, handleChangeInput, isLogin}: Props) {
    return(
        <div>
          {  isLogin ? null: (<div className="my-3 flex justify-between text-sm">
                <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder="First Name"
                value={inputs.firstName}
                onChange={handleChangeInput}
                name="firstName"
                />
                 <input 
                type="text" 
                className="border rounded p-2 py-3 w-[49%]" 
                placeholder="Last Name"
                value={inputs.lastName}
                onChange={handleChangeInput}
                name="lastName"
                />
            </div>
            )}
          { isLogin ? null: ( <div className="my-3 flex justify-between text-sm">
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-full" 
                placeholder="Email"
                value={inputs.email}
                onChange={handleChangeInput}
                name="email"
                />
            </div>
            )}
            <div className="my-3 flex justify-between text-sm">
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-full" 
                placeholder="Username"
                value={inputs.username}
                onChange={handleChangeInput}
                name="username"
                />
            </div>
            <div className="my-3 flex justify-between text-sm">
            <input 
                type="password" 
                className="border rounded p-2 py-3 w-full" 
                placeholder="Password"
                value={inputs.password}
                onChange={handleChangeInput}
                name="password"
                />
            </div>
           { isLogin ? null: (<div className="my-3 flex justify-between text-sm">
            <input 
                type="text" 
                className="border rounded p-2 py-3 w-full" 
                placeholder="Phone#"
                value={inputs.phoneNumber}
                onChange={handleChangeInput}
                name="phoneNumber"
                />
            </div>)}
        </div>
    )
}