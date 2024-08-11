import { Eye, EyeOff } from "lucide-react";
import React from "react";

import { Input } from "~/components/ui/input";

import { cn } from "~/lib/utils";

interface PasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  eyeClassName?: string;
}

const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  ({ className, eyeClassName, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          ref={ref}
          {...props}
          className={cn(className, "pr-10")}
        />
        <span
          className={cn(
            eyeClassName,
            "absolute right-0 top-2/4 -translate-y-2/4 pr-2",
          )}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </span>
      </div>
    );
  },
);
Password.displayName = "Password";

export { Password };
