import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        // binding this to each of the methods
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangeBirthday = this.onChangeBirthday.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            "email": '',
            "password": '',
            "firstName": '',
            "lastName": '',
            "address": '',
            "birthday": '',
            "phone": ''
        };
    }

    onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        });
      }

    onChangePassword(e) {
    this.setState({
        password: e.target.value,
    });
    }

    onChangeFirstName(e) {
    this.setState({
        firstName: e.target.value,
    });
    }

    onChangeLastName(e) {
    this.setState({
        lastName: e.target.value,
    });
    }

    onChangeAddress(e) {
    this.setState({
        address: e.target.value,
    });
    }

    onChangeBirthday(e) {
    this.setState({
        birthday: e.target.value,
    });
    }

    onChangePhone(e) {
    this.setState({
        phone: e.target.value,
    });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            birthday: this.state.birthday,
            phone: this.state.phone
        };
        console.log(user);
        axios.post('http://localhost:5000/register', user)
        .then(res => console.log(res.data));

        this.setState({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            birthday: '',
            phone: ''
        })
    };

    render () {
        return (
            <div>
                <h3>Register</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" required className="form-control" value={this.state.email} onChange={this.onChangeEmail}/>
                        <label>Password:</label>
                        <input type="text" required className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
                        <label>First Name:</label>
                        <input type="text" required className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName}/>
                        <label>Last Name:</label>
                        <input type="text" required className="form-control" value={this.state.lastName} onChange={this.onChangeLastName}/>
                        <label>Address:</label>
                        <input type="text" required className="form-control" value={this.state.address} onChange={this.onChangeAddress}/>
                        <label>Birthday:</label>
                        <input type="text" required className="form-control" value={this.state.birthday} onChange={this.onChangeBirthday}/>
                        <label>Phone:</label>
                        <input type="text" required className="form-control" value={this.state.phone} onChange={this.onChangePhone}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}