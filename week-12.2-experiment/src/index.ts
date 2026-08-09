interface User{
  id: string,
  name: string, 
  age: number,
  email: string,
  password: string
};

type updateProps = Pick<User, 'name' | 'age' | 'email'>;

function sumOfAge(user1: User, user2: User){
  return user1.age + user2.age;
}
