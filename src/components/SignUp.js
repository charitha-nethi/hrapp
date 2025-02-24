const SignUp = () => {
    return (
      <div className="p-5 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input type="text" placeholder="Full Name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
        <button className="bg-green-500 text-white p-2 w-full">Sign Up</button>
      </div>
    );
  };
  
  export default SignUp;
  