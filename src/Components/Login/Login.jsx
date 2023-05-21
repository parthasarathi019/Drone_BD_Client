
//eslint-disable-next-line
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';
// import useTitle from '../hooks/useTitle';


const Login = () => {
    const [error_Message, set_error_Message] = useState('')
    const [success, set_success] = useState("")
    const email_REF = useRef();
    const { User_Login , Google_Login ,Github_Login , Forget_Password} = useContext(AuthContext)
    const navigate = useNavigate()///////////////////////////////////////////////////////// 333

    const location = useLocation()/////////////////////////////////////////////////////// 2
    const from = location.state?.from?.pathname || '/';
    console.log(location);////////////////////////////////////// 2
    useTitle('Login')


    const Handle_Submit = (event) => {
        event.preventDefault();
        const Full_Form = event.target
        const email = Full_Form.email.value
        const password = Full_Form.password.value
        console.log(email, password);
        set_success("")
        set_error_Message("")

        User_Login(email, password)
            .then((userCredential) => {
                // Signed in 
                const Login_User = userCredential.user;
                console.log(Login_User);
                set_success("successfully logged in")
                // Navigate(from , {replace:true})
                // ...
                navigate(from, { replace: true })//////////////////////////////////// 55
                Swal.fire({
                    title: 'success',
                    text: 'Cofee data added successfully!',
                    icon: 'success',
                    confirmButtonText: '🥰K',
                  })
            })
            .catch((error) => {
                //eslint-disable-next-line
                const errorCode = error.code;
                const errorMessage = error.message;
                set_error_Message(errorMessage)
            });
        // Full_Form.reset();
    }
    
    const Login_With_Google = () => {
        Google_Login()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            Swal.fire({
                title: 'success',
                text: 'You successfully Logged in!',
                icon: 'success',
                confirmButtonText: '🥰K',
              })
            navigate(from, { replace: true });
        })
        .catch(err => set_error_Message(err.message));
      };
      
      const Login_With_Github = () => {
        Github_Login()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            Swal.fire({
                title: 'success',
                text: 'You successfully Logged in!',
                icon: 'success',
                confirmButtonText: '🥰K',
              })
            navigate(from, { replace: true });
        })
        .catch(err => set_error_Message(err.message));
      };


      const Password_Forget = () => {
        const reset_email = email_REF.current.value
        if (!reset_email) {
            alert("Email field is empty!!")
            return;
        }

        Forget_Password(reset_email)
        .then(() => {
          alert("Password reset email sent!")
          // ..
        })
        .catch((error) => {
            //eslint-disable-next-line
          const errorCode = error.code;
          const errorMessage = error.message;
          set_error_Message(errorMessage)
          // ..
        });
      }

    return (
        <section className='px-1 md:px-16 pt-2 md:pt-6 bg-[#f3f3f3] pb-5'>
            <div>
                <div className='w-[60%] mx-auto'>
                    <form onSubmit={Handle_Submit} className='bg-white' action="">
                        <p className='text-center text-[#403f3f] font-[1000] text-[.911em] pt-6 md:pt-10 pb-1 md:pb-7 md:text-[2em]'>Login your account</p>
                        <p className='pt-3'><hr className=' w-[92%] border-[.1px] border-[#e7e7e7] mx-auto' /></p>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Email address</p>
                            <p className='pt-1 md:pt-2'><input ref={email_REF}  name='email' id="email" type='email' required="required" placeholder='Enter your Email address' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>
                        <div className='w-[80%] mx-auto pt-3'>
                            <p className='md:text-[.94em] text-[.85em] font-semibold'>Password</p>
                            <p className='pt-1 md:pt-2'><input name='password' id="password" type='text'  placeholder='Enter your Password' className=" bg-[#f3f3f3] w-full py-2 md:py-4 pl-1 md:pl-2 text-[.65em] md:text-[.85em]" /></p>
                        </div>


                        <div className='w-[80%] mx-auto pt-3 md:pb-2 pb-1'>
                            <p className='pt-1 md:pt-2'><input type="submit" value="Login" className=" bg-slate-500 cursor-grab w-full py-2 md:py-[9px] pl-1 md:pl-2 text-[.65em] font-bold text-yellow-50 md:text-[1.3em]" /></p>
                            <button onClick={Password_Forget} className=' md:text-[.85em] hover:text-blue-500 pt-1 text-[.55em] link'>Forget Password</button>
                        </div>

                        <div className='flex flex-col md:flex-row w-[80%] mx-auto md:mx-auto md:w-auto gap-x-3 justify-center'>
                            <div className='border-[1.4px] border-blue-500 flex justify-center py-1 md:py-2  md:px-2 rounded-[5px] mt-2'>
                                <div className='flex items-center gap-x-2 mx-[2px] md:mx-0'><svg fill="blue" className='md:w-[20px] w-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg> <button onClick={Login_With_Google} className='text-[.3em] font-[700] md:font-normal md:text-[.9em] text-blue-500'>Login With Google</button> </div>
                            </div>
                            <div className='border-[1.4px] border-black flex justify-center py-1 md:py-2  md:px-2 rounded-[5px] mt-2'>
                                <div className='flex items-center gap-x-2 mx-[2px] md:mx-0'><svg className='md:w-[20px] w-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg> <button onClick={Login_With_Github} className='text-[.3em] font-[700] md:font-normal md:text-[.9em]'>Login With Github</button> </div>
                            </div>
                        </div>

                        <p className='text-center md:text-[1em] text-[.55em]'>Dont’t Have An Account ? <Link className='text-[1.1em] font-bold text-red-500' to="/Register">Register</Link></p>
                        <p className='text-center'></p>

                        <p className='text-center font-bold text-[1.5em] text-red-500'>{error_Message}</p>
                        <p className='text-center font-bold text-[1.5em] text-green-400'>{success}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
//react particles
//