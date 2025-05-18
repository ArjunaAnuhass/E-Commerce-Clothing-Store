import CommonForm from "@/components/common/common.comp.form";
import { registerFormControls } from "@/config/config.index";
import { registerUserAction } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner"



const initialState = {
    userName: '',
    email: '',
    password: ''
}


function AuthRegister() {

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onSubmit(event) {
        event.preventDefault(); //when user click the register button after filling the form this page refreshing from this function.
        dispatch(registerUserAction(formData)).then((data) => {
            if(data?.payload?.success) {
                toast.success(data.payload.message)
                navigate("/auth/login");
            }
            else{
                toast.error(data.payload.message)
            }
        })
    }

    return ( 
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
                <p className="mt-2">Already have an account
                    <Link className="font-medium text-primary hover:underline ml-2" to='/auth/login'>Login</Link>
                </p>
            </div>
            <CommonForm
                formControls={registerFormControls}
                buttonText={'Sign up'}
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        </div>
     );
}

export default AuthRegister;