//合并默认参数和用户参数

const logUser = (userOptions) => {
  const DEFAULTS = {
    name: "Guest",
    age: 0,
    date: new Date().getDate(),
  };
  userOptions = Object.assign(DEFAULTS, userOptions);
  console.log(userOptions);
};

logUser({ name: "Tom" });
logUser({ age: 18, date: 30 });
logUser();
