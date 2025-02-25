const SignUp = () => {
  return (
    <div className="content">
      <h2 className="heading">Sign Up</h2>
      <input type="text" placeholder="Full Name" className="border p-2 w-full mb-4" />
      <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
      <button className="bg-green-500 text-white p-2 w-full">Sign Up</button>
    </div>
  );
};

export default SignUp;