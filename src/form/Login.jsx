const Login = () => {
  const loginAction = (e) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={loginAction}>
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="pass" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
