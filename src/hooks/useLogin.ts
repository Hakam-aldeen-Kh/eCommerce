import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUI } from "@store/auth/authSlice";
import { useEffect } from "react";
import { loginSchema, loginTypes } from "@validations/loginSchema";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<loginTypes>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (error) {
      Toast.fire({
        icon: "error",
        title: error.toString(),
      });
    }
    return () => {
      dispatch(resetUI());
    };
  }, [error, dispatch]);

 

  const submitForm: SubmitHandler<loginTypes> = (data) => {
    const { email, password } = data;
    if (searchParams.get("message")) {
      setSearchParams("");
    }
    dispatch(actAuthLogin({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  return {searchParams, handleSubmit, submitForm,register,loading,formErrors,accessToken}
};

export default useLogin;
