import { useState } from "react";

export default function Login() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      phoneNumber,
      password,
      isCreatingAccount,
    });
  };

  return (
    <div className="size-full flex items-center justify-center relative overflow-hidden h-screen">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#FF6B00] rounded-full opacity-20 blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#FF8533] rounded-full opacity-15 blur-[100px] animate-[float_10s_ease-in-out_infinite_2s]" />
      </div>

      {/* Geometric accent lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[2px] h-[300px] bg-gradient-to-b from-[#FF6B00] to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[2px] bg-gradient-to-r from-[#FF6B00] to-transparent opacity-50" />
        <div className="absolute top-1/2 left-0 w-[150px] h-[2px] bg-[#FF6B00] opacity-30 rotate-45 origin-left" />
      </div>

      {/* Main login container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Decorative corner accent */}
        <div className="absolute -top-8 -left-8 w-24 h-24 border-l-2 border-t-2 border-[#FF6B00] opacity-40" />

        <div className="bg-[#1A1A1A] border border-[rgba(255,107,0,0.2)] rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,107,0,0.05)] to-transparent pointer-events-none" />

          <div className="relative">
            {/* Logo/Title area */}
              <div className="mb-5 text-center">
                {/* App Icon */}
                <img
                  src="/wavvy-icon.png"
                  alt="Wavvy"
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl shadow-lg"
                />

                {/* App Name */}
                <h1 className="text-3xl mb-2" style={{ fontWeight: 600 }}>
                  {isCreatingAccount ? "Create Account" : "Welcome to Wavvy"}
                </h1>

                <p className="text-[#888888]">
                  {isCreatingAccount
                    ? "Join us and get started today"
                    : "Sign in to start chatting"}
                </p>
              </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone Number Input */}
              <div className="relative group">
                <label
                  htmlFor="phone"
                  className="block text-sm mb-2 text-[#CCCCCC]"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-[#FF6B00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+91 9923xxxxxx"
                    className="w-full pl-12 pr-4 py-3 bg-[#0A0A0A] border border-[rgba(255,107,0,0.2)] rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[rgba(255,107,0,0.2)] transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-[#FF6B00] opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative group">
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 text-[#CCCCCC]"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="w-5 h-5 text-[#FF6B00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 bg-[#0A0A0A] border border-[rgba(255,107,0,0.2)] rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[rgba(255,107,0,0.2)] transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#888888] hover:text-[#FF6B00] transition-colors duration-200"
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                  <div className="absolute inset-0 rounded-lg bg-[#FF6B00] opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Forgot Password (only show on login) */}
              {!isCreatingAccount && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-[#FF6B00] hover:text-[#FF8533] transition-colors duration-200"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#FF6B00] text-black rounded-lg relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]"
                style={{ fontWeight: 700 }}
              >
                <span className="relative z-10">
                  {isCreatingAccount ? "Create Account" : "Sign In"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8533] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[rgba(255,107,0,0.2)]" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#1A1A1A] text-[#888888]">OR</span>
                </div>
              </div>

              {/* Create Account / Sign In Toggle */}
              <div className="text-center">
                <p className="text-[#888888] mb-2">
                  {isCreatingAccount
                    ? "Already have an account?"
                    : "Don't have an account?"}
                </p>
                <button
                  type="button"
                  onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                  className="text-[#FF6B00] hover:text-[#FF8533] transition-colors duration-200 relative group inline-block"
                  style={{ fontWeight: 600 }}
                >
                  {isCreatingAccount ? "Sign In" : "Create New Account"}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Decorative corner accent bottom right */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 border-r-2 border-b-2 border-[#FF6B00] opacity-40" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FF6B00] rounded-full opacity-60 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#FF8533] rounded-full opacity-40 animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-[#FF6B00] rounded-full opacity-50 animate-[float_7s_ease-in-out_infinite_3s]" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </div>
  );
}
