import { useState } from "react";

interface IUsePassword {
  showConfirmPassword: boolean;
  showPassword: boolean;
  handleClickShowConfirmPassword: () => void;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const usePassword = (): IUsePassword => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return {
    showConfirmPassword,
    showPassword,
    handleClickShowConfirmPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};
