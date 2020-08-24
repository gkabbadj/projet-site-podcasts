export class AuthTeacherService{
  isAuthTeacher = false;
  signInTeacher() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuthTeacher = true;
            console.log(this.isAuthTeacher);
            resolve(true);
          }, 5
        );
      }
    );
  }

  signOutTeacher() {
    this.isAuthTeacher = false;
  }
}
