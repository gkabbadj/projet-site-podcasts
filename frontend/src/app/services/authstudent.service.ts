export class AuthStudentService{
  isAuthStudent = false;
  signInStudent() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuthStudent = true;
            console.log('ok');
            resolve(true);
          }, 5
        );
      }
    );
  }

  signOutStudent() {
    this.isAuthStudent = false;
  }
}
