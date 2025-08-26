export function Signup() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
      <div className="p-4 border rounded pb-4">
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <div className="mt-4 flex justify-center">
      <button>Sign up</button>
      </div>
    </div>
    </div>
    </div>
  );
}
