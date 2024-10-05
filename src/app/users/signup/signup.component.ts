import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
// import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(`Form is `, this.form);

    const email = this.form.value.email;
    const password = this.form.value.password;

    console.log(
      `In onSubmit and email is ${email} and password is ${password}`
    );

    this.authService
      .signUp(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`User successfully created: ${user}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(
          `Error signing up. Error code:${errorCode}, Error message:${errorMessage}`
        );
      });
  }
}
