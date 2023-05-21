//eslint-disable-next-line
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { updateProfile } from "firebase/auth";
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")

    const { Create_User} = useContext(AuthContext)
    const Handle_Submit = (event) => {
        event.preventDefault();
        set_success("")
        const Full_Form = event.target
        const name = Full_Form.name.value
        const Photo_URL = Full_Form.Photo_URL.value
        const email = Full_Form.email.value
        const password = Full_Form.password.value
        // console.log(name, Photo_URL, email, password);
        set_error_Message("")

        //VALIDATION
        if (!/(?=.*[A-Z])/.test(password)) {
            set_error_Message("Please at least set one uppercase later of your password")
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            set_error_Message("Please at least set one numerical number of your password")
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            set_error_Message("Please at least set one special case letter [?,=,*,!,@,#,$,&,] of your password")
            return;
        } else if (!/.{8}/.test(password)) {
            set_error_Message("Please Ensure the length of your password is 8.")
            return;
        }

        Create_User(email, password)
            .then((userCredential) => {
                // Signed In
                const user = userCredential.user;
                console.log(user);
                set_error_Message("")
                // event.target.reset()
                set_success("User has been created successfully")
                updateProfile(user, {
                    displayName: name,
                    photoURL: Photo_URL
                  })
                   
            })
            .catch((error) => {
                //eslint-disable-next-line
                const errorCode = error.code;
                const errorMessage = error.message;
                set_error_Message(errorMessage)
                // ..
            });


        Full_Form.reset();



    }

    return (
        <section className='px-1 md:px-16 pt-2 md:pt-6 bg-[#f3f3f3] pb-5'>
            <div>
                <div className='w-[60%] mx-auto'>
                    <form onSubmit={Handle_Submit} className='bg-white' action="">
                        <p className='text-center text-[#403f3f] font-[1000] text-[.911em] pt-6 md:pt-10 pb-1 md:pb-7 md:text-[2em]'>Register your account</p>
                        <p className='pt-3'><hr className=' w-[92%] border-[.1px] border-[#e7e7e7] mx-auto' /></p>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Your Name</p>
                            <p className='pt-1 md:pt-2'><input name='name' id="name" type='text' required="required" placeholder='Enter your name' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Photo URL</p>
                            <p className='pt-1 md:pt-2'><input name='Photo_URL' id="Photo_URL" type='text' required="required" placeholder='Enter your Photo URL' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Your Email</p>
                            <p className='pt-1 md:pt-2'><input name='email' id="email" type='email' required="required" placeholder='Enter your Email' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Your Passward</p>
                            <p className='pt-1 md:pt-2'><input name='password' id="password" type='password' required="required" placeholder='Enter your Passward' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>

                        <div className='w-[80%] mx-auto pt-3'>
                            <div className='flex gap-x-2 items-center'>
                                <input required="required" type="checkbox" name="" id="" />
                                <p><span className='md:text-[.84em] text-[.55em]'>Accept</span> <span className='md:text-[1em] text-[.65em] font-semibold'>Term & Conditions</span></p>
                            </div>
                        </div>

                        <div className='w-[80%] mx-auto pt-3 pb-2 '>
                            <p className='pt-1 md:pt-2'><input type="submit" value="register" className=" bg-slate-500 w-full cursor-grab py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em]" /></p>
                        </div>
                        <p className='text-center font-bold text-[1.5em] text-red-500'>{error_Message}</p>
                        <p className='text-center font-bold text-[1.5em] text-green-400'>{success}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;