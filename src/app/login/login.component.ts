import { Component, OnInit} from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService) {

  }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(`In onSubmit in login and form data is`, this.form.value);

    const email = this.form.value.email;
    const password = this.form.value.password;

    console.log(`In onSubmit and email is ${email} and password is ${password}`);

    // signInWithEmailAndPassword(this.auth, this.form.value.email, this.form.value.password)
    this.authService.login(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`User successfully logged in. User is`, user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error logging in. Error code:${errorCode}, Error message:${errorMessage}`);
      });
  }
}
