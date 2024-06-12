import Login from './Login';

class CustomLogin extends Login {
  handleSubmit = () => {
    alert(this.state.inputValue);
  };

  render() {
    return (
      <div>
        <h4>Custom Login</h4>
        {super.render()}
      </div>
    );
  }
}

export default CustomLogin;
